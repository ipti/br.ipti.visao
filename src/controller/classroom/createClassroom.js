import { firestore } from "../../config/firebase"
import { collection } from "@firebase/firestore"
import { addDoc } from "@firebase/firestore"


const handleSubmitClassroom = (body, history) => {
    const ref = collection(firestore, "classroom");

    let data =  body

    try {
        addDoc(ref, data)
        history.push("/turmas")
    } catch (err) {
        console.log(err)
    }
}

export default handleSubmitClassroom