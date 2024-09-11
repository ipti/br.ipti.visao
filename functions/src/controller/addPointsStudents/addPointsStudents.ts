import * as functions from 'firebase-functions';
import { fetchStudentData } from '../student/fetchStudent';
import { firestore } from "../../config/firebase";
export interface StudentData {
    id: string;
    object: any;
  }



const points = (oneRegistration: StudentData) => {
    var count = 0;

    if (oneRegistration) {
        if (oneRegistration.object.filhoOculos === "1") {
            count++;
        }
        if ((oneRegistration.object.filhossintomas.dificuldadeQuadro && oneRegistration.object.filhossintomas.olhoTortoMomentos) ||
            (oneRegistration.object.filhossintomas.dificuldadeLivro && oneRegistration.object.filhossintomas.olhoTortoMomentos) ||
            (oneRegistration.object.filhossintomas.dificuldadeQuadro && oneRegistration.object.filhossintomas.rostoApertaOlhos) ||
            (oneRegistration.object.filhossintomas.dificuldadeLivro && oneRegistration.object.filhossintomas.rostoApertaOlhos) ||
            oneRegistration.object.filhossintomas.olhoTortoConstante ||
            (oneRegistration.object.filhossintomas.olhoTortoMomentos && oneRegistration.object.filhossintomas.rostoApertaOlhos) ||
            oneRegistration.object.filhossintomas.tremorOlhos ||
            oneRegistration.object.filhossintomas.manchaBrancaPupila) {
            count++;
        }
        if (
            oneRegistration.object.doencasNosOlhos.olhoPreguicoso ||
            oneRegistration.object.doencasNosOlhos.olhoTorto ||
            oneRegistration.object.doencasNosOlhos.catarataInfancia ||
            oneRegistration.object.doencasNosOlhos.glaucomaCongenito ||
            oneRegistration.object.doencasNosOlhos.tumorOlhos ||
            oneRegistration.object.doencasNosOlhos.ceratoconeTransplante ||
            oneRegistration.object.doencasNosOlhos.palpebraCaida
        ) {
            count++;
        }
        if (
            oneRegistration.object.doencasFamiliares.miopiaAmbosPais ||
            oneRegistration.object.doencasFamiliares.miopiaUmPai ||
            oneRegistration.object.doencasFamiliares.hipermetropiaAstigmatismo ||
            oneRegistration.object.doencasFamiliares.estrabismo ||
            oneRegistration.object.doencasFamiliares.catarataGlaucoma ||
            oneRegistration.object.doencasFamiliares.olhoPreguicoso ||
            oneRegistration.object.doencasFamiliares.tumorOlho
        ) {
            count++;
        }
        if (
            oneRegistration.object.doencas?.prematuridade ||
            oneRegistration.object.doencas?.sindromeDown ||
            oneRegistration.object.doencas?.paralisiaTumorCerebral ||
            oneRegistration.object.doencas?.outrasSindromesGeneticas ||
            oneRegistration.object.doencas?.diabetes ||
            oneRegistration.object.doencas?.artriteArtrose ||
            oneRegistration.object.doencas?.alergiasCorticoides
        ) {
            count++;
        }
        if (
            oneRegistration.object.horasUsoAparelhosEletronicos === 4 ||
            oneRegistration.object.horasUsoAparelhosEletronicos === 5
        ) {
            count++;
        }
        if (oneRegistration.object.horasAtividadesAoArLivre === 1 || oneRegistration.object.horasAtividadesAoArLivre === 2) {
            count++;
        }
        if (oneRegistration.object.testCover === "1") {
            count++;
        }
        if (oneRegistration.object.testMovimentoOcular === "1") {
            count++;
        }
        if (oneRegistration.object.testManchaBranca === "1") {
            count++;
        }
        if (
            oneRegistration.object.acuidadeTriagemEsquerdo === "1" ||
            oneRegistration.object.acuidadeTriagemEsquerdo === "2" ||
            oneRegistration.object.acuidadeTriagemEsquerdo === "3" ||
            oneRegistration.object.acuidadeTriagemEsquerdo === "4" ||
            oneRegistration.object.acuidadeTriagemEsquerdo === "5" ||
            oneRegistration.object.acuidadeTriagemEsquerdo === "6" ||
            oneRegistration.object.acuidadeTriagemEsquerdo === "7"
        ) {
            count = count + 5;
        }
        if (
            oneRegistration.object.acuidadeTriagemEsquerdo === "8"
        ) {
            count = count + 2;
        }
        if (
            oneRegistration.object.acuidadeTriagemEsquerdo === "nenhum"
        ) {
            count = count + 2;
        }
        if (
            oneRegistration.object.acuidadeTriagemDireito === "1" ||
            oneRegistration.object.acuidadeTriagemDireito === "2" ||
            oneRegistration.object.acuidadeTriagemDireito === "3" ||
            oneRegistration.object.acuidadeTriagemDireito === "4" ||
            oneRegistration.object.acuidadeTriagemDireito === "5" ||
            oneRegistration.object.acuidadeTriagemDireito === "6" ||
            oneRegistration.object.acuidadeTriagemDireito === "7"
        ) {
            count = count + 5;
        }
        if (
            oneRegistration.object.acuidadeTriagemDireito === "8"
        ) {
            count = count + 2;
        }
        if (
            oneRegistration.object.acuidadeTriagemDireito === "nenhum"
        ) {
            count = count + 2;
        }
    }

    return count;
}


export const addPointsStudent = (cors: any) => functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
      try {
  
        const students = await fetchStudentData();


        const updatePromises = students.map(async (student: any) => {
            student.points = points(student);
    
            const studentRef = firestore.collection('students').doc(student.id);
            await studentRef.set(student, { merge: true });
          });
  
      
        res.status(200).send(await Promise.all(updatePromises));
  
      } catch (err: any) {
        res.status(500).send(err.message);
      }
    });
  });