import * as functions from 'firebase-functions';
import { fetchSchoolsData, SchoolData } from '../school/fetchSchool';
import { fetchClassroomData, ClassroomData } from '../classroom/fetchClassroom';
import { fetchStudenByPoints, StudentData } from '../student/fetchStudent';

interface StudentReport {
    school_id: string | undefined;
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

const getStudent = (schools: SchoolData[], classrooms: ClassroomData[], student: StudentData): StudentReport | null => {

    const classroom = classrooms.find(classroom => classroom.id === student.object.classroom_fk);


    let school: SchoolData | undefined;
    if (classroom) {
        school = schools.find(school => school.id === classroom.object.school_fk);
    }

    const studentReport: StudentReport = {
        school_id: school?.id,
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
            const [schools, classrooms, students] = await Promise.all([fetchSchoolsData(), fetchClassroomData(), fetchStudenByPoints()]);

            const totalForwardedPromises = students.map((student: StudentData) => getStudent(schools, classrooms, student));

            res.status(200).send(totalForwardedPromises);
        } catch (err: any) {
            res.status(500).send(err.message);
        }
    });
});

