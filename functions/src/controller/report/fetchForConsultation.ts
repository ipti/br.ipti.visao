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

    const classroom = classrooms.find(classroom => classroom.id === student.object.classroom_fk);

    let school: SchoolData | undefined;
    if (classroom) {
        school = schools.find(school => school.id === classroom.object.school_fk);
    }
    if (student.object.points < 5) {
        return null;
    }

    const studentReport: StudentReport = {
        school: school?.object.name,
        classroom: classroom?.object.name,
        student_name: student.object.name, 
        points: student.object.points,
    };

    return studentReport;
};

export const generateForConsultationReport = (cors: any) => functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        try {
            
            const [schools, classrooms, students] = await Promise.all([fetchSchoolsData(), fetchClassroomData(), fetchStudentData()]);

            // Gerar relatórios apenas para estudantes com pontos > 5
            const completedReportPromises = students.map((student: StudentData) =>
                generateRowReport(schools, classrooms, student)
            );

            const completedReport = await Promise.all(completedReportPromises);
            const filteredReport = completedReport.filter(report => report !== null);

            // Ordenar primeiro pelo nome da escola e depois pelo nome da turma
            const sortedReport = filteredReport.sort((a, b) => {
                if (!a || !b) return 0; 
            
                if (!a.school || !b.school) return 0;
                if (a.school < b.school) return -1;
                if (a.school > b.school) return 1;
                
                if (!a.classroom || !b.classroom) return 0; 
                if (a.classroom < b.classroom) return -1;
                if (a.classroom > b.classroom) return 1;
            
                return 0; 
            });

            res.status(200).send(sortedReport);
        } catch (err: any) {
            res.status(500).send(err.message);
        }
    });
});

