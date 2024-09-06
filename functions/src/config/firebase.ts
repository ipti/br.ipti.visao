import * as admin from 'firebase-admin';

const firebaseConfig = {
    apiKey: "AIzaSyBuF6QHafTHaeVKeEbmd7t5OHIQajAzb-k",
    authDomain: "br-ipti-visao.firebaseapp.com",
    projectId: "br-ipti-visao",
    storageBucket: "br-ipti-visao.appspot.com",
    messagingSenderId: "584971752908",
    appId: "1:584971752908:web:2a818e4eafb9419b933969",
    measurementId: "G-CX8LYD0FP4"
  };
  
// Inicializando o Firebase Admin SDK
admin.initializeApp(firebaseConfig);

// Obtenha Firestore e Auth do Firebase Admin SDK
const firestore = admin.firestore();
const auth = admin.auth();

export { auth, firestore };

