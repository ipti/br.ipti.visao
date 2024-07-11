import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuF6QHafTHaeVKeEbmd7t5OHIQajAzb-k",
  authDomain: "br-ipti-visao.firebaseapp.com",
  projectId: "br-ipti-visao",
  storageBucket: "br-ipti-visao",
  messagingSenderId: "584971752908",
  appId: "1:584971752908:web:2a818e4eafb9419b933969",
  measurementId: "G-CX8LYD0FP4"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
