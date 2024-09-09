import * as functions from 'firebase-functions';
import { fetchSchoolsData, SchoolData } from '../school/fetchSchool';
import { fetchClassroomData, ClassroomData } from '../classroom/fetchClassroom';
import { fetchStudentData, StudentData } from '../student/fetchStudent';

interface StudentReport {
    school: string | undefined;
    classroom: string | undefined;
    student_name: string;
    points: number;
}

const generateRowReport = async (schools: SchoolData[], classrooms: ClassroomData[], student: StudentData): Promise<StudentReport | null> => {
    // Encontrar a sala de aula correspondente ao aluno
    const classroom = classrooms.find(classroom => classroom.id === student.object.classroom_fk);

    // Encontrar a escola correspondente à sala de aula
    let school: SchoolData | undefined;
    if (classroom) {
        school = schools.find(school => school.id === classroom.object.school_fk);
    }

    // Filtrar os estudantes que têm mais de 5 pontos
    if (student.object.points <= 5) {
        return null; // Se os pontos forem menores ou iguais a 5, não gera um relatório
    }

    // Criar o relatório do estudante
    const studentReport: StudentReport = {
        school: school?.object.name,
        classroom: classroom?.object.name,
        student_name: student.object.name, // Atribuindo o nome correto
        points: student.object.points,
    };

    return studentReport;
};

export const generateForConsultationReport = (cors: any) => functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        try {
            // Buscar dados das escolas, salas de aula e estudantes
            const schools = await fetchSchoolsData();
            const classrooms = await fetchClassroomData();
            const students = await fetchStudentData();

            // Gerar relatórios apenas para estudantes com pontos > 5
            const completedReportPromises = students.map((student: StudentData) =>
                generateRowReport(schools, classrooms, student)
            );

            // Aguardar a geração dos relatórios
            const completedReport = await Promise.all(completedReportPromises);

            // Filtrar relatórios nulos
            const filteredReport = completedReport.filter(report => report !== null);

            res.status(200).send(filteredReport);
        } catch (err: any) {
            res.status(500).send(err.message);
        }
    });
});
