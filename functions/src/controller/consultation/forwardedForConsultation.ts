import * as functions from 'firebase-functions';
import { fetchSchoolsData, SchoolData } from '../school/fetchSchool';
import { fetchClassroomData, ClassroomData } from '../classroom/fetchClassroom';
import { fetchStudentData, StudentData } from '../student/fetchStudent';

interface StudentReport {
    school: string | undefined;
    classroom_id: string | undefined;
    classroom: string | undefined;
    student_name: string;
    student_id: string;
    birthday: string;
    points: number;
}

//todo: fazer offset limit para firebase

// buscar alunos por escola e com pontos > 5

const getStudent = async (schools: SchoolData[], classrooms: ClassroomData[], student: StudentData): Promise<StudentReport | null> => {

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
        classroom_id: classroom?.id,
        classroom: classroom?.object.name,
        student_id: student.id,
        student_name: student.object.name, 
        birthday: student.object.birthday,
        points: student.object.points,
    };

    return studentReport;
};

export const forConsultation = (cors: any) => functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        try {
            
            const [schools, classrooms, students] = await Promise.all([fetchSchoolsData(), fetchClassroomData(), fetchStudentData()]);

            // Gerar relatórios apenas para estudantes com pontos > 5
            const totalForwardedPromises = students.map((student: StudentData) =>
                getStudent(schools, classrooms, student)
            );

            const totalForwarded = await Promise.all(totalForwardedPromises);
            const filteredTotalForwarded = totalForwarded.filter(report => report !== null);


            res.status(200).send(filteredTotalForwarded);
        } catch (err: any) {
            res.status(500).send(err.message);
        }
    });
});

