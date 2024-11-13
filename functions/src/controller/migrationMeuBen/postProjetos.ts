import * as functions from "firebase-functions";
import axios from "axios";
import { fetchStudentData } from '../student/fetchStudent';

interface StudentData {
  name: string;
  birthday: string;
  cpf: string;
  sex: number | undefined;
  color_race: number | undefined;
  deficiency: boolean | undefined;
  zone: number | undefined;
}

interface BodyMigrationData {
  project: number | undefined;
  name: string | undefined;
  year: number | undefined;
  registration: StudentData[];
}

export function converterData(data: string) {
  // Divide a string pelo separador "/"
  const partes = data.split('/');

  // As partes serão: partes[0] = dia, partes[1] = mês, partes[2] = ano
  const dia = partes[0];
  const mes = partes[1];
  const ano = partes[2];

  // Reorganiza no formato YYYY-MM-DD
  const dataFormatada = `${ano}-${mes}-${dia}`;
  return dataFormatada;
}

const getStudentData = async (id: string, student: StudentData) => {
  // pegar os dados do estudante no banco de dados caso classroom_fk seja igual ao id
  const students = await fetchStudentData();
  const studentData = students.filter(student => student.object.classroom_fk === id);


  const studentMigrationData = studentData.map((student) => {
    return {
      name: student.object.name,
      birthday: converterData(student.object.birthday),
      cpf: (student.object.cpf).replace(/[^a-zA-Z0-9]/g, ''),
      sex: parseInt(student.object.sex) ?? undefined,
      color_race: parseInt(student.object.colorRace) ?? undefined,
      deficiency: student.object.deficiency ?? false,
      zone: parseInt(student.object.zone) ?? undefined,
    }
  });
  return studentMigrationData;
};


export const postProjetos = (cors: any) =>
  functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
      try {
        const url = `https://br-ipti-beneficiarios.azurewebsites.net/aviste-bff?token=${process.env.TOKEN}`;

        const studentData = await getStudentData(request.body.id, request.body.student);

        const body: BodyMigrationData = {
          project: request.body.project,
          name: request.body.name,
          year: request.body.year,
          registration: studentData,
        };

        let res = await axios.post(url, body).catch((error) => {
          console.error("Erro ao enviar MIGRATION:", error);
        })

        response.send(res.data);
      } catch (error) {
        console.error("Erro ao enviar dados:", error.message);
        response.status(500).send("Erro ao enviar dados.");
      }
    });
  });
