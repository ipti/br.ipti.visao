import { firestore } from "../../config/firebase";

interface SchoolData {
  id: string;
  object: any;
}

const fetchSchoolData = async (): Promise<SchoolData[]> => {
  const ref = await firestore.collection("school").get();
  try {
    return ref.docs.map((doc) => { return { id: doc.id, object: doc.data() } });
  } catch (err) {
    console.error("Erro ao buscar dados da escola:", err);
    throw err;
  }
};

export { fetchSchoolData };
