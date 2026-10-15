
const firebaseConfig = {
  apiKey: "AIzaSyCDmS3-YOrpfCstU3ZxEH8jOdDCz_3ndY0",
  authDomain: "ecorecanje-web.firebaseapp.com",
  projectId: "ecorecanje-web",
  storageBucket: "ecorecanje-web.firebasestorage.app",
  messagingSenderId: "428820522291",
  appId: "1:428820522291:web:9dc127f8bd0715e4beca46",
  measurementId: "G-50040CY3LJ"
};

firebase.initializeApp(firebaseConfig);

// Mantener una sola referencia compartida a Firestore para toda la app
if (!window.db) {
  window.db = firebase.firestore();
}

window.firebaseApp = firebase.app();

console.log("ECORECANJE: Firebase inicializado");
