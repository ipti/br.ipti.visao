import * as admin from "firebase-admin";
import { generateReport } from "./controller/report/fetchReport";

admin.initializeApp();

export const generalReport = generateReport;
