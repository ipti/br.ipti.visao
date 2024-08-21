import { firestore } from "../../config/firebase"
import { collection } from "@firebase/firestore"
import { addDoc } from "@firebase/firestore"


const handleSubmitStudent = (body, history, path) => {
    const ref = collection(firestore, "student");

    let data = {...body, questionarioPaisCompleted:true}

    try {
        addDoc(ref, data)
        history.push(path)
    } catch (err) {
        console.log(err)
    }
}

export default handleSubmitStudent