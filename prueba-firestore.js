(() => {
  if (!window.db) {
    console.error("Prueba Firestore: window.db no está disponible; no se ejecutó la consulta.");
    return;
  }

  console.info("Prueba Firestore: window.db está disponible. Consultando \"reciclaje\"...");

  window.db.collection("reciclaje").get()
    .then((snapshot) => {
      console.info(`Prueba Firestore: lectura correcta; ${snapshot.size} documentos encontrados en "reciclaje".`);
    })
    .catch((error) => {
      console.error(`Prueba Firestore: la lectura falló (código: ${error.code || "sin código"}). Error completo:`, error);
    });
})();
