
import json
import os
import threading
import time
from pathlib import Path

import serial
import firebase_admin
from firebase_admin import credentials, firestore
from flask import Flask, jsonify, send_from_directory

# ==========================================
# ECORECANJE - SERVIDOR PRINCIPAL
# ==========================================

PUERTO_ARDUINO = "COM4"
BAUDIOS = 9600
COLECCION = "reciclaje"
REINTENTO_SEGUNDOS = 3

CARPETA = Path(__file__).resolve().parent
app = Flask(__name__)

lock = threading.Lock()
db = None

estado = {
    "servidor": "activo",
    "conectado": False,
    "firebase_conectado": False,
    "puntos": 0,
    "evento": "Esperando residuos",
    "suma": 0,
    "actualizacion": None,
    "ultimo_error": None
}


# ==========================================
# CONEXION CON FIREBASE
# ==========================================

def iniciar_firebase():
    global db

    ruta = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")

    if not ruta:
        print(
            "Firebase pendiente: configura la variable "
            "GOOGLE_APPLICATION_CREDENTIALS."
        )
        return False

    if not Path(ruta).is_file():
        print("Firebase: no se encuentra el archivo de credenciales.")
        return False

    try:
        if not firebase_admin._apps:
            credencial = credentials.Certificate(ruta)
            firebase_admin.initialize_app(credencial)

        db = firestore.client()

        # Verificar conectividad con Firestore
        db.collection(COLECCION).limit(1).get()

        with lock:
            estado["firebase_conectado"] = True
            estado["ultimo_error"] = None

        print("Firebase y Firestore conectados correctamente.")
        return True

    except Exception as error:
        with lock:
            estado["firebase_conectado"] = False
            estado["ultimo_error"] = "No se pudo conectar con Firebase"

        print("Error al conectar con Firebase:", error)
        return False


# ==========================================
# PROCESAMIENTO DE EVENTOS
# ==========================================

def procesar_evento(dato):
    if not isinstance(dato, dict):
        print("Mensaje ignorado: formato no válido.")
        return

    # Mensaje de inicio del Arduino
    if dato.get("estado") == "ECORECANJE_LISTO":
        print("Arduino listo para reciclar.")
        return

    evento = dato.get("evento")

    if evento not in ("PLASTICO", "CARTON"):
        print("Evento desconocido; mensaje ignorado.")
        return

    try:
        suma = int(dato["suma"])
        puntos = int(dato["puntos"])
    except (KeyError, TypeError, ValueError):
        print("Evento incompleto o puntos inválidos.")
        return

    suma_correcta = 10 if evento == "PLASTICO" else 15

    if suma != suma_correcta or puntos < suma:
        print("Evento rechazado: valores no válidos.")
        return

    ahora = time.time()

    # Actualizar el estado local
    with lock:
        estado["evento"] = evento
        estado["suma"] = suma
        estado["puntos"] = puntos
        estado["actualizacion"] = ahora
        estado["ultimo_error"] = None

    print(
        f"RECICLAJE | {evento} | +{suma} puntos | "
        f"Total informado por Arduino: {puntos}"
    )

    # Guardar en Firestore si está conectado
    if db is None:
        print("Aviso: evento recibido, pero Firebase no está conectado.")
        return

    try:
        referencia = db.collection(COLECCION).document()

        referencia.set({
            "evento": evento,
            "suma": suma,
            "puntos": puntos,
            "origen": "ARDUINO",
            "fecha": firestore.SERVER_TIMESTAMP
        })

        print("Reciclaje guardado en Firestore.")

    except Exception as error:
        with lock:
            estado["ultimo_error"] = "No se pudo guardar el reciclaje"

        print("Error al guardar en Firestore:", error)


# ==========================================
# LECTURA DEL ARDUINO
# ==========================================

def leer_arduino():
    while True:
        try:
            print(f"Conectando con Arduino en {PUERTO_ARDUINO}...")

            with serial.Serial(
                port=PUERTO_ARDUINO,
                baudrate=BAUDIOS,
                timeout=1
            ) as puerto:

                # El UNO puede reiniciarse al abrir el puerto
                time.sleep(2)
                puerto.reset_input_buffer()

                with lock:
                    estado["conectado"] = True
                    estado["ultimo_error"] = None

                print("Arduino conectado correctamente.")

                while True:
                    linea = puerto.readline().decode(
                        "utf-8",
                        errors="ignore"
                    ).strip()

                    if not linea:
                        continue

                    print("Recibido:", linea)

                    try:
                        dato = json.loads(linea)
                    except json.JSONDecodeError:
                        print("Mensaje serial no JSON; ignorado.")
                        continue

                    procesar_evento(dato)

        except (serial.SerialException, OSError) as error:
            with lock:
                estado["conectado"] = False
                estado["ultimo_error"] = "Conexión con Arduino interrumpida"

            print("Arduino desconectado o puerto ocupado:", error)
            time.sleep(REINTENTO_SEGUNDOS)


# ==========================================
# API LOCAL
# ==========================================

@app.route("/")
def inicio():
    return send_from_directory(CARPETA, "index.html")


@app.route("/api/estado")
def obtener_estado():
    with lock:
        copia = dict(estado)

    return jsonify(copia)


@app.route("/api/salud")
def salud():
    with lock:
        return jsonify({
            "servidor": estado["servidor"],
            "arduino": estado["conectado"],
            "firebase": estado["firebase_conectado"],
            "ultimo_error": estado["ultimo_error"]
        })


@app.route("/<path:archivo>")
def archivos(archivo):
    return send_from_directory(CARPETA, archivo)


# ==========================================
# INICIO DEL SERVIDOR
# ==========================================

if __name__ == "__main__":
    print("=" * 45)
    print("       ECORECANJE - INICIANDO")
    print("=" * 45)

    iniciar_firebase()

    hilo = threading.Thread(
        target=leer_arduino,
        daemon=True
    )
    hilo.start()

    try:
        app.run(
            host="0.0.0.0",
            port=5000,
            debug=False,
            use_reloader=False
        )
    except KeyboardInterrupt:
        print("\nServidor ECORECANJE detenido.")
