import { collection, deleteDoc, doc } from "@firebase/firestore";
import { firestore } from "../../config/firebase";



export const deleteItem = async (id, history) => {
    // const itemRef = doc(collection(firestore, "classroom"), id);

    try {
        // await deleteDoc(itemRef);

        //TODO: chamar API para deletar a turma
        

        history.push("/turmas")
        console.log("Item deleted successfully");
    } catch (err) {
        console.error("Error deleting item:", err);
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
