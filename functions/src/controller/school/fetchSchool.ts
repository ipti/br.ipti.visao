import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../../config/firebase";

interface SchoolData {
  id: string;
  object: any;
}

const fetchSchoolData = async (): Promise<SchoolData[]> => {
  const ref = collection(firestore, "school");
  try {
    const querySnapshot = await getDocs(ref);
    const schoolData: SchoolData[] = [];
    querySnapshot.forEach((doc) => {
      schoolData.push({ id: doc.id, object: doc.data() });
    });
    return schoolData;
  } catch (err) {
    console.error("Erro ao buscar dados da escola:", err);
    throw err;
  }
};

export { fetchSchoolData };
