import * as functions from 'firebase-functions';
import { fetchSchoolsData, SchoolData } from '../school/fetchSchool';
import { fetchClassroomData, ClassroomData } from '../classroom/fetchClassroom';
import { fetchStudentData, StudentData } from '../student/fetchStudent';
import { firestore } from '../../config/firebase';
interface Report {
  school: string;
  countClassroom: number;
  countRegister: number;
  countRegisterTriados: number;
  countQuestianarioPais: number;
  countForwardedConsultation: number;
  countConsultationCompleted: number;
  countReceitaOculosCompleted: number;
  countEntregaOculosCompleted: number;
}

const generateRowReport = async (school: SchoolData, classroom: ClassroomData[], student: StudentData[]): Promise<Report> => {

  const totalClassroom = await firestore.collection("classroom")
    .where("school_fk", "==", school.id).get();

  const totalAlunos = await firestore.collection("student")
    .where("school_fk", "==", school.id).count().get();

  const totalTriagens = await firestore.collection("student")
    .where("school_fk", "==", school.id)
    .get();

  const triagensFiltered = totalTriagens.docs.filter(doc =>
    (doc.data().acuidadeTriagemDireito !== "" &&
    doc.data().acuidadeTriagemEsquerdo !== "" &&
    doc.data().testCover!== "" &&
    doc.data().testManchaBranca!==""&& 
    doc.data().testMovimentoOcular!=="")||
    doc.data().triagemCompleted == true
  );

  // const quemNumFoi =  totalTriagens.docs.filter(doc => {
  //   return !triagensFiltered.some(triagem => {
  //     return triagem.id === doc.id; 
  //   })
  // });

  const totalAlunosEscola = await firestore.collection("student")
    .where("school_fk", "==", school.id)
    .get();

  const totalQuestianarioPais = totalAlunosEscola.docs.filter(doc =>
    doc.data().horasAtividadeAoArLivre !== "" &&
    doc.data().horasUsoAparelhosEletronicos !== ""||
    doc.data().questionarioPaisCompleted == true
  );

  const totalConsultationCompleted = await firestore.collection("student")
    .where("school_fk", "==", school.id)
    .where("consultaCompleted", "==", true)
    .count().get();

  const totalReceitaOculosCompleted = await firestore.collection("student")
    .where("school_fk", "==", school.id)
    .where("receitaOculosCompleted", "==", true)
    .count().get();

  const totalEntregaOculosCompleted = await firestore.collection("student")
    .where("school_fk", "==", school.id)
    .where("entregaOculosCompleted", "==", true)
    .count().get();

  const totalForwardedConsultation = totalAlunosEscola.docs.filter(doc => {
    return  doc.data().points >= 5;
  });

  const report: Report = {
    school: school.object.name,
    countClassroom: totalClassroom.docs.length,
    countRegister: totalAlunos.data().count,
    countRegisterTriados: triagensFiltered.length,
    countQuestianarioPais: totalQuestianarioPais.length,
    //quemNumFoi: quemNumFoi,

    countForwardedConsultation: totalForwardedConsultation.length,
    countConsultationCompleted: totalConsultationCompleted.data().count,
    countReceitaOculosCompleted: totalReceitaOculosCompleted.data().count,
    countEntregaOculosCompleted: totalEntregaOculosCompleted.data().count,
  } as unknown as Report;

  return report;
}

export const generateReport = (cors: any) => functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
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
});
