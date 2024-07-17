import { firestore } from "../../config/firebase";

export interface School {
  name: string;
}
export interface SchoolData {
  id: string;
  object: School;
}

const fetchSchoolsData = async (): Promise<SchoolData[]> => {
  const ref = await firestore.collection("school").get();
  try {
    return ref.docs.map((doc) => {
      return {
        id: doc.id, object: doc.data() as School
      }
    });
  } catch (err) {
    console.error("Erro ao buscar dados da escola:", err);
    throw err;
  }
};

export { fetchSchoolsData };
