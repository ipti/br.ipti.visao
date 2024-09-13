import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../../config/firebase";


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