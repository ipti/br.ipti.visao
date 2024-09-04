import { firestore } from "../../config/firebase";

export interface UserData {
  id: string;
  object: any;
}

const fetchUsersData = async (): Promise<UserData[]> => {
    try {
      const refUser = await firestore.collection("userData").get();
      const userData: UserData[] = refUser.docs.map((doc) => ({
        id: doc.id,
        object: doc.data()
      }));
      return userData;
    } catch (err) {
      console.error("Erro ao buscar dados dos usuários:", err);
      throw err;
    }
};

export { fetchUsersData };

