import { firestore } from "../../config/firebase";
import { collection, getDocs } from "@firebase/firestore"


const fetchOneClassroom = async (id) => {
    const ref = collection(firestore, "classroom");

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


export default fetchOneClassroom;
