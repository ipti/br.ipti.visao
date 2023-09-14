import { firestore } from "../../config/firebase";
import { collection, getDocs } from "@firebase/firestore"


const fetchOneRegistration = async (id) => {
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

        return testDataList.find(props => props.id === id)
    } catch (err) {
        console.error("Erro ao buscar dados:", err)
        throw err
    }
}


export default fetchOneRegistration;
