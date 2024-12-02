import { firestore } from "../../config/firebase";

export interface StudentData {
  id: string;
  object: any;
}

const fetchStudentData = async (): Promise<StudentData[]> => {
  const refStudent = await firestore.collection("student").get();
  try {
    const querySnapshotStudent =  refStudent.docs;
    const studentData: StudentData[] = [];
    querySnapshotStudent.forEach((doc) => {
      studentData.push({ id: doc.id, object: doc.data() });
    });
    return studentData;
  } catch (err) {
    console.error("Erro ao buscar dados dos estudantes:", err);
    throw err;
  }
};

const fetchStudenByPoints = async (): Promise<StudentData[]> => {
  const refStudent = await firestore.collection("student").where("points", ">", 5).get();
  try {

    const studentData: StudentData[] = refStudent.docs.map((doc) => {
      return { id: doc.id, object: doc.data() };
    });

    return studentData;
  } catch (err) {
    console.error("Erro ao buscar dados dos estudantes:", err);
    throw err;
  }
};


export { fetchStudentData, fetchStudenByPoints};

