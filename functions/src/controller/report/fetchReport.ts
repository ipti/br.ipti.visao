import * as functions from 'firebase-functions';
import { fetchSchoolsData, SchoolData } from '../school/fetchSchool';
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

const generateRowReport = async (school: SchoolData): Promise<Report> => {

  const totalClassroomPromise = firestore.collection("classroom")
    .where("school_fk", "==", school.id)
    .get();

  const totalAlunosPromise = firestore.collection("student")
    .where("school_fk", "==", school.id)
    .count()
    .get();

  const totalAlunosEscolaPromise = firestore.collection("student")
    .where("school_fk", "==", school.id)
    .get();

  const totalConsultationCompletedPromise = firestore.collection("student")
    .where("school_fk", "==", school.id)
    .where("consultaCompleted", "==", true)
    .count().get();

  const totalEntregaOculosCompletedPromise = firestore.collection("student")
    .where("school_fk", "==", school.id)
    .where("entregaOculosCompleted", "==", true)
    .count().get();

  const [
    totalClassroom,
    totalAlunos,
    totalAlunosEscola,
    totalConsultationCompleted,
    totalEntregaOculosCompleted
  ] = await Promise.all([
    totalClassroomPromise,
    totalAlunosPromise,
    totalAlunosEscolaPromise,
    totalConsultationCompletedPromise,
    totalEntregaOculosCompletedPromise
  ]);


  let totalQuestianarioPais = 0;
  const isQuestianarioPaisCompleted = (doc: FirebaseFirestore.DocumentData) =>
    doc.data().horasAtividadeAoArLivre !== "" &&
    doc.data().horasUsoAparelhosEletronicos !== "" ||
    doc.data().questionarioPaisCompleted == true;

  let triagensFiltered = 0;
  const isTriagensFiltered = (doc: FirebaseFirestore.DocumentData) =>
    (doc.data().acuidadeTriagemDireito !== "" &&
      doc.data().acuidadeTriagemEsquerdo !== "" &&
      doc.data().testCover !== "" &&
      doc.data().testManchaBranca !== "" &&
      doc.data().testMovimentoOcular !== "") ||
    doc.data().triagemCompleted == true;

  let totalReceitaOculosCompleted = 0;
  const isReceitaOculosCompleted = (doc: FirebaseFirestore.DocumentData) =>
    doc.data().receitaEixoOlhoEsquerdo !== "" &&
    doc.data().receitaCilindricoOlhoDireito !== "" ||
    doc.data().receitaOculosCompleted == true;

  let totalForwardedConsultation = 0;
  const isForwardedConsultation = (doc: FirebaseFirestore.DocumentData) => doc.data().points >= 5;

  for (const doc of totalAlunosEscola.docs) {
    if (isQuestianarioPaisCompleted(doc)) {
      totalQuestianarioPais++;
    }

    if (isTriagensFiltered(doc)) {
      triagensFiltered++;
    }

    if (isReceitaOculosCompleted(doc)) {
      totalReceitaOculosCompleted++;
    }

    if (isForwardedConsultation(doc)) {
      totalForwardedConsultation++;
    }
  }

  const report: Report = {
    school: school.object.name,
    countClassroom: totalClassroom.docs.length,
    countRegister: totalAlunos.data().count,
    countRegisterTriados: triagensFiltered,
    countQuestianarioPais: totalQuestianarioPais,

    countForwardedConsultation: totalForwardedConsultation,
    countConsultationCompleted: totalConsultationCompleted.data().count,
    countReceitaOculosCompleted: totalReceitaOculosCompleted,
    countEntregaOculosCompleted: totalEntregaOculosCompleted.data().count,
  } as unknown as Report;

  return report;
}

export const generateReport = (cors: any) => functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {

      const schools = await fetchSchoolsData();

      const completedReport = schools.map((school: SchoolData) => generateRowReport(school));
      res.status(200).send(await Promise.all(completedReport));

    } catch (err: any) {
      res.status(500).send(err.message);
    }
  });
});
