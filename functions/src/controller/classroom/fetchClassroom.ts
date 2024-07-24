import { firestore } from "../../config/firebase";

// interface Classroom {
//   object: string;
// }
export interface ClassroomData {
  id: string;
  object: any;
}

const fetchClassroomData = async (): Promise<ClassroomData[]> => {
  const refClassroom = await firestore.collection("classroom").get();
  try {
    const querySnapshotClassroom = refClassroom.docs;
    const classroomData: ClassroomData[] = [];
    querySnapshotClassroom.forEach((doc:any) => {
      classroomData.push({ id: doc.id, object: doc.data() });
    });
    return classroomData;
  } catch (err) {
    console.error("Erro ao buscar dados da sala de aula:", err);
    throw err;
  }
};

export { fetchClassroomData };
