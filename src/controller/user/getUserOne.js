import { firestore } from "../../config/firebase";
import { collection, getDocs } from "@firebase/firestore";

const fetchOneUser = async (id) => {
  if (id) {
    const ref = collection(firestore, "userData");

    
    try {
        const querySnapshot = await getDocs(ref);
        const testDataList = [];

        querySnapshot.forEach((doc) => {

            const data = {
                 ...doc.data()
            }

            testDataList.push(data)
        })
      return testDataList.find(props => props.uid === id);
    } catch (err) {
      console.error("Erro ao buscar dados:", err);
      throw err;
    }
  }
};

export default fetchOneUser;
