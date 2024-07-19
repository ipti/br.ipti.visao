import * as functions from 'firebase-functions';
import { fetchSchoolsData, SchoolData } from '../school/fetchSchool';
import { fetchClassroomData, ClassroomData } from '../classroom/fetchClassroom';
import { fetchStudentData, StudentData} from '../student/fecthStudent';
import { firestore } from '../../config/firebase';
// import { collection, query, where } from "firebase/firestore";  


interface Report {
  school: string;
  countClassroom: number;
  countRegister: number;
  countRegisterTriados: number;
  countConsultation: number;
  countReceipt: number;
}

const generateRowReport = async (school: SchoolData, classroom: ClassroomData[], student: StudentData[]): Promise<Report> => {
  
  let countClassroom = 0; // let para variável que pode ser alterada
  
  // let countRegisterTriados = 0; // Triados em relação a alunos triados em ambos os olhos
  let countTriagemPais = 0; // Triagem em relação a pais que fizeram triagem
  let countConsultation = 0; // Consulta em relação a alunos que fizeram 

  //const studentRef = collection (db, "student");


  const totalAlunos = await firestore.collection("student").where("school_fk", "==", school.id).count().get();


  
  const totalTriagens = await firestore.collection("student").where("school_fk", "==", school.id).where("acuidadeTriagemDireito", "!=", "").where("acuidadeTriagemEsquerdo", "!=", "").count().get();
  
 

  classroom.forEach((classroom) => {
    /*
    const coll = collection(db, "cities");
    const q = query(coll, where("state", "==", "CA"));
    const snapshot = await getCountFromServer(q);
    console.log('count: ', snapshot.data().count);
    */

      if (school.id === classroom.object.school_fk) {
        countClassroom++;
        student.forEach((student) => {
          if (student.object.classroom_fk === classroom.id) {
            //countRegister++;
  
            if (
              student.object.acuidadeTriagemDireito &&
              student.object.acuidadeTriagemEsquerdo
            ) {
              // countRegisterTriados++;
            }
  
            if(
              student.object.filhoOculos == true &&
              student.object.horasAtividadeAoArLivre != null &&
              student.object.horasUsoAparelhosEletronicos != null 
            ){
              countTriagemPais++;
            }

            if(
              student.object.crmMedico != null &&
              student.object.dataConsulta != null
            ){
              countConsultation++;
            }
  
          }
        });
      }
      
    }
  );

  const report: Report = {
    school: school.object.name, 
    countClassroom: countClassroom,
    countRegister: totalAlunos.data().count,
    countRegisterTriados: totalTriagens.data().count,
    countTriagemPais: countTriagemPais,
    countConsultation: countConsultation,
    countReceipt: 0,
  
  } as Report;

  return report;
}

export const generateReport = functions.https.onRequest(async (req, res) => {
  try {
    
    const schools = await fetchSchoolsData();
    const classrooms = await fetchClassroomData();
    const student = await fetchStudentData();

    const completedReport = schools.map((school: SchoolData) => generateRowReport(school, classrooms, student));
    
    res.status(200).send(await Promise.all(completedReport));

  } catch (err: any) {
    res.status(500).send(err.message);
  }
});
