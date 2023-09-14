import { collection, getDocs } from "@firebase/firestore"
import { firestore } from "../../config/firebase"

const fetchRegistration = async () => {
    const ref = collection(firestore, "student");

    try {
        const querySnapshot = await getDocs(ref);
        const testDataList = [];

        querySnapshot.forEach((doc) => {

            const data = {
                id: doc.id,
                object: doc.data()
            }

            testDataList.push(data)
        })

        return testDataList
    } catch (err) {
        console.error("Erro ao buscar dados:", err)
        throw err
    }
}


export default fetchRegistration;
