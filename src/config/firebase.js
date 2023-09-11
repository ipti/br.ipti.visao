// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuF6QHafTHaeVKeEbmd7t5OHIQajAzb-k",
  authDomain: "br-ipti-visao.firebaseapp.com",
  projectId: "br-ipti-visao",
  storageBucket: "br-ipti-visao.appspot.com",
  messagingSenderId: "584971752908",
  appId: "1:584971752908:web:2a818e4eafb9419b933969",
  measurementId: "G-CX8LYD0FP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)