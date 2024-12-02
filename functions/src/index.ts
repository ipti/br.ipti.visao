import * as functions from "firebase-functions";
import * as cors from "cors";

import { generateReport } from "./controller/report/fetchReport";
import { generateStudentsReport } from "./controller/report/fetchStudents";
import { generateForConsultationReport } from "./controller/report/fetchForConsultation";

import { deleteClassroom } from "./controller/classroom/deleteClassroom";

import { forConsultation } from "./controller/consultation/forwardedForConsultation";

import { listUsers } from "./controller/users/listUsers";
import { deleteUserData } from "./controller/users/deleteUser";
import { createUserData } from "./controller/users/createUser";
import { updateUserData } from "./controller/users/updateUser";
import { oneUser } from "./controller/users/findOneUser";

import { addPointsStudent } from "./controller/addPointsStudents/addPointsStudents";

import { getProjetos } from "./controller/migrationMeuBen/getProjetos";
import { postProjetos } from "./controller/migrationMeuBen/postProjetos";



const corsOptions = {
  origin: true, // Substitua pelo seu frontend
};

const corsMiddleware = cors(corsOptions);

export const generalReport = generateReport(corsMiddleware);
export const studentsReport = generateStudentsReport(corsMiddleware);
export const consultationReport = generateForConsultationReport(corsMiddleware);

export const classroomDelete = deleteClassroom(corsMiddleware);

export const fowardedForConsultation = forConsultation(corsMiddleware);

export const usersList = listUsers(corsMiddleware);
export const userDelete = deleteUserData(corsMiddleware);
export const userCreate = createUserData(corsMiddleware);
export const userUpdate = updateUserData(corsMiddleware);
export const findOneUser = oneUser(corsMiddleware);

export const addPointsStud = addPointsStudent(corsMiddleware);

export const getProjetosMigration = getProjetos(corsMiddleware);
export const postProjetosMigration = postProjetos(corsMiddleware);



export const helloWorld = functions.https.onRequest((request, response) => {
  corsMiddleware(request, response, () => {
    response.send("Hello from Firebase!");
  });
});

