import * as functions from 'firebase-functions';
import { fetchSchoolsData, SchoolData } from '../school/fetchSchool';
import { fetchClassroomData, ClassroomData } from '../classroom/fetchClassroom';
import { fetchStudentData, StudentData } from '../student/fecthStudent';
import { firestore } from '../../config/firebase';


//todo: importar studentData, pegar todos os students, pegar a classroom_fk, e a escola
// nome da escola, classroom, nome do aluno, dta nasc, sexo , turno
// se foi triado, se foi consultado, se foi recebido

interface StudentReport {
    school: string;
    classroom: string;
    student_name: string;
    birthday: string;
    sex: string;
    turno: string;
  }
  
const generateRowStudentsReport = async (school: SchoolData[], classroom: ClassroomData[], student: StudentData): Promise<StudentReport> => {
    
    // pegar nome da turma do aluno
    const studentClassroom = await firestore.collection("student")
        .where("classroom_fk", "==", classroom[0].id).get();
        
    // pegar nome da escola do aluno
    const studentSchool = await firestore.collection("classroom")
        .where("school_fk", "==", school[0].id).get();
    
    const studentsReport: StudentReport = { 
        //school: studentSchool.docs.map(doc => doc.data().name),
        //classroom: studentClassroom.docs.map(doc => doc.data().name),
        student_name: student.object.name,
        birthday: student.object.birthday,
        sex: student.object.sex,
        turno: student.object.turno,
    
    } as unknown as StudentReport;

    return studentsReport;
}

export const generateStudentsReport = (cors: any) => functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
      try {
  
        const schools = await fetchSchoolsData();
        const classroom = await fetchClassroomData();
        const student = await fetchStudentData();
  
        const completedReport = student.map((student: StudentData) => generateRowStudentsReport(schools, classroom, student));

        res.status(200).send(await Promise.all(completedReport));
  
      } catch (err: any) {
        res.status(500).send(err.message);
      }
    });
  });
  