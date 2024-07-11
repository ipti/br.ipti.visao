import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../../config/firebase";


interface ClassroomData {
  id: string;
  object: any;
}

const fetchClassroomData = async (): Promise<ClassroomData[]> => {
  const refClassroom = collection(firestore, "classroom");
  try {
    const querySnapshotClassroom = await getDocs(refClassroom);
    const classroomData: ClassroomData[] = [];
    querySnapshotClassroom.forEach((doc) => {
      classroomData.push({ id: doc.id, object: doc.data() });
    });
    return classroomData;
  } catch (err) {
    console.error("Erro ao buscar dados da sala de aula:", err);
    throw err;
  }
};

export { fetchClassroomData };
