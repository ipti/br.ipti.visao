// import { collection, deleteDoc, doc } from "@firebase/firestore";
// import { firestore } from "../../config/firebase";
import axios from 'axios';


export const deleteItem = async (id, history) => {
    try {
        await axios.delete(`https://us-central1-br-ipti-visao.cloudfunctions.net/classroomDelete/${id}`);
        history.push("/turmas")
        console.log("Item deletado com sucesso");
    } catch (err) {
        console.error("Erro ao deletar item", err);
        throw err;
    }
}

// export const deleteItem = async (id, history) => {
//     const itemRef = doc(collection(firestore, "classroom"), id);

//     try {
//         await deleteDoc(itemRef);
//         history.push("/turmas")
//         console.log("Item deleted successfully");
//     } catch (err) {
//         console.error("Error deleting item:", err);
//         throw err;
//     }
// }
