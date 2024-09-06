// import * as admin from "firebase-admin";
// import { generateReport } from "./controller/report/fetchReport";

// admin.initializeApp();

// export const generalReport = generateReport;


// import * as admin from "firebase-admin";
// import { generateReport } from "./controller/report/fetchReport";
import * as functions from "firebase-functions";
import * as cors from "cors"
import { generateReport } from "./controller/report/fetchReport";
import { generateStudentsReport } from "./controller/report/fetchStudents";
import { deleteClassroom } from "./controller/classroom/deleteClassroom";

import { listUsers } from "./controller/users/listUsers";
import { deleteUserData } from "./controller/users/deleteUser";
// import { createUserData } from "./controller/users/createUser";
// import { fetchUsersData } from "./controller/users/fetchUsers";

// admin.initializeApp();

const corsOptions = {
  origin: true, // Substitua pelo seu frontend
};

const corsMiddleware = cors(corsOptions);

export const generalReport = generateReport(corsMiddleware);
export const studentsReport = generateStudentsReport(corsMiddleware);
export const classroomDelete = deleteClassroom(corsMiddleware);
export const usersList = listUsers(corsMiddleware);
export const userDelete = deleteUserData(corsMiddleware);
// export const userCreate = createUserData(corsMiddleware);

export const helloWorld = functions.https.onRequest((request, response) => {
  corsMiddleware(request, response, () => {
    response.send("Hello from Firebase!");
  });
});

// utilizando minha função do firebase
// export const generalReport = functions.https.onRequest(async (req, res) => {

// }