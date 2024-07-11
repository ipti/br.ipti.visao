import { fetchClassroomData } from '../classroom/fetchClassroom';


import * as functions from 'firebase-functions';
import { fetchSchoolData } from '../school/fetchSchool';
import { fetchStudentData } from '../student/fecthStudent';

interface Report {
  school: string;
  countClassroom: number;
  countRegister: number;
  countRegisterTriados: number;
}

export const generateReport = functions.https.onRequest(async (req, res) => {
  try {
    const report = await fetchReport();
    res.status(200).send(report);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

const fetchReport = async (): Promise<Report[]> => {
  try {
    const schools = await fetchSchoolData();
    const classrooms = await fetchClassroomData();
    const students = await fetchStudentData();

    const report: Report[] = [];

    schools.forEach((school) => {
      let countClassroom = 0;
      let countRegister = 0;
      let countRegisterTriados = 0;

      classrooms.forEach((classroom) => {
        if (school.id === classroom.object.school_fk) {
          countClassroom++;
          students.forEach((student) => {
            if (student.object.classroom_fk === classroom.id) {
              countRegister++;
              if (
                student.object.acuidadeTriagemDireito &&
                student.object.acuidadeTriagemEsquerdo
              ) {
                countRegisterTriados++;
              }
            }
          });
        }
      });

      report.push({
        school: school.object.name,
        countClassroom: countClassroom,
        countRegister: countRegister,
        countRegisterTriados: countRegisterTriados,
      });
    });

    return report;
  } catch (err) {
    console.error("Erro ao gerar o relatório:", err);
    throw err;
  }
};
