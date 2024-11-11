import * as functions from "firebase-functions";
import axios from "axios";
import { fetchStudentData } from '../student/fetchStudent';

interface StudentData {
  name: string;
  birthday: string;
  cpf: string;
  sex: number;
  color_race: number | undefined;
  deficiency: boolean | undefined;
  zone: string | undefined;
}

interface BodyMigrationData {
    id: string;
    project: number | undefined;
    name: string | undefined;
    year: number | undefined;
    registration: StudentData[];
  }

const getStudentData = async (id: string, student:StudentData) => {
     // pegar os dados do estudante no banco de dados caso classroom_fk seja igual ao id
    const students = await fetchStudentData();
    const studentData = students.filter(student => student.object.classroom_fk === id);

    const studentMigrationData = studentData.map((student) => {
        return {
            name: student.object.name,
            birthday: student.object.birthday,
            cpf: student.object.cpf,
            sex: student.object.sex,
            color_race: student.object.colorRace,
            deficiency: student.object.deficiency,
            zone: student.object.zone,
        }});
        return studentMigrationData;
    };


export const postProjetos = (cors: any) =>
  functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
      try {
        const url = `https://br-ipti-beneficiarios.azurewebsites.net/aviste-bff?token=${process.env.TOKEN}`;

        const studentData = await getStudentData(request.body.id, request.body.student);

        const body: BodyMigrationData = 
        {   
            id: request.body.id,
            project: request.body.project,
            name: request.body.name,
            year: request.body.year,
            registration: studentData,
        }; // Recebendo o body enviado do frontend

        console.log("Body recebido:", body);
        
        // Requisição POST para a API usando Axios
        const result = await axios.post(url, body);
        const data = result.data;

        response.send(data); // Envia a resposta da API externa de volta para o frontend
      } catch (error) {
        console.error("Erro ao enviar dados:", error);
        response.status(500).send("Erro ao enviar dados.");
      }
    });
  });
