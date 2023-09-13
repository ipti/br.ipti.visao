import { firestore } from "../../config/firebase"
import { collection } from "@firebase/firestore"
import { addDoc } from "@firebase/firestore"


const handleSubmitStudent = (body, history) => {
    const ref = collection(firestore, "student");

    let data = body

    try {
        addDoc(ref, data)
        history.push("/")
    } catch (err) {
        console.log(err)
    }
}

export default handleSubmitStudent