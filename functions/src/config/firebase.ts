
// The Firebase Admin SDK to access Firestore.

import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp();

const firestore = getFirestore();

export { firestore };