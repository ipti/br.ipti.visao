// import * as admin from "firebase-admin";
// import { generateReport } from "./controller/report/fetchReport";

// admin.initializeApp();

// export const generalReport = generateReport;


// import * as admin from "firebase-admin";
// import { generateReport } from "./controller/report/fetchReport";
import * as functions from "firebase-functions";
import * as cors from "cors"
import { generateReport } from "./controller/report/fetchReport";


// admin.initializeApp();

const corsOptions = {
    origin: '*', // Substitua pelo seu frontend
    methods: ['GET', 'POST'], // Adicione outros métodos se necessário
    allowedHeaders: ['Content-Type', 'Authorization'], // Adicione outros cabeçalhos se necessário
};
  
  const corsMiddleware = cors(corsOptions);

export const generalReport = generateReport;

export const helloWorld = functions.https.onRequest((request, response) => {
    corsMiddleware(request, response, () => {
      response.send("Hello from Firebase!");
    });
  });

// utilizando minha função do firebase

// export const generalReport = functions.https.onRequest(async (req, res) => {


// }