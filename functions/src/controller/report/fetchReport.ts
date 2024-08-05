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
  countConsultation: number;
  countReceipt: number;
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
    doc.data().acuidadeTriagemDireito !== undefined &&
    doc.data().acuidadeTriagemDireito !== "" &&
    doc.data().acuidadeTriagemEsquerdo !== undefined &&
    doc.data().acuidadeTriagemEsquerdo !== ""
  );

  const totalTriagemPais = await firestore.collection("student")
    .where("school_fk", "==", school.id)
    .get();

  const triagemPaisFiltered = totalTriagemPais.docs.filter(doc =>
    //doc.data().horasAtividadeAoArLivre !== undefined &&
    doc.data().horasAtividadeAoArLivre !== "" &&
    //doc.data().horasUsoAparelhosEletronicos !== undefined &&
    doc.data().horasUsoAparelhosEletronicos !== ""
  );

  const totalConsultation = await firestore.collection("student")
    .where("school_fk", "==", school.id)
    .orderBy("crmMedico")
    .orderBy("dataConsulta")
    .startAt("")  // Iniciar a consulta em um valor não vazio
    .endAt("\uf8ff")  // Terminar a consulta em um valor unicode alto para incluir todos os valores não vazios
    .get()
    .then((querySnapshot) => {
      let filteredDocs = querySnapshot.docs.filter(doc => {
        const data = doc.data();
        return data.crmMedico !== "" && data.dataConsulta !== "";
      });
      return filteredDocs.length;
    });

  const totalReceipt = await firestore.collection("student")
    .where("school_fk", "==", school.id)
    .orderBy("receitaCilindricoOlhoEsquerdo")
    .orderBy("receitaCilindricoOlhoDireito")
    .startAt("") 
    .endAt("\uf8ff") 
    .get()
    .then((querySnapshot) => {
      let filteredDocs = querySnapshot.docs.filter(doc => {
        const data = doc.data();
        return data.receitaCilindricoOlhoEsquerdo !== "" && data.receitaCilindricoOlhoDireito !== "";
      });
      return filteredDocs.length;
    });

  const report: Report = {
    school: school.object.name,
    countClassroom: totalClassroom.docs.length,
    countRegister: totalAlunos.data().count,
    countRegisterTriados: triagensFiltered.length,
    countTriagemPais: triagemPaisFiltered.length,
    countConsultation: totalConsultation,
    countReceipt: totalReceipt,
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
