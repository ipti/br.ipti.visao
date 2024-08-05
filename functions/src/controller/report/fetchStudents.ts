import * as functions from 'firebase-functions';
import { fetchSchoolsData, SchoolData } from '../school/fetchSchool';
import { fetchClassroomData, ClassroomData } from '../classroom/fetchClassroom';
import { fetchStudentData, StudentData } from '../student/fecthStudent';

interface StudentReport {
    school: string;
    classroom: string;
    student_name: string;
    birthday: string;
    sex: string;
    turno: string;
    acompanhamento: string[];
    doencas: string[];
    doencasFamiliares: string[];
    doencasNosOlhos: string[];
    filhossintomas: string[];
    observacoesSpotVision: string[];
  }
  
const generateRowStudentsReport = async (schools: SchoolData[], classrooms: ClassroomData[], student: StudentData): Promise<StudentReport> => {

    const classroom = classrooms.find(classroom => classroom.id === student.object.classroom_fk);

    let school: SchoolData | undefined;
    if (classroom) {
      school = schools.find(school => school.id === classroom.object.school_fk);
    }
    
    const studentsReport: StudentReport = { 
        school: school?.object.name,
        classroom: classroom?.object.name,
        student_name: student.object.name,
        birthday: student.object.birthday,
        sex: student.object.sex,
        turno: student.object.turno,
        horasAtividadesAoArLivre: student.object.horasAtividadesAoArLivre,
        horasUsoAparelhosEletronicos: student.object.horasUsoAparelhosEletronicos,
        acompanhamento: student.object.acompanhamento,
        doencas: student.object.doencas,
        doencasFamiliares: student.object.doencasFamiliares,
        doencasNosOlhos: student.object.doencasNosOlhos,
        filhossintomas: student.object.filhossintomas,
        observacoesSpotVision: student.object.observacoesSpotVision,
       
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
  