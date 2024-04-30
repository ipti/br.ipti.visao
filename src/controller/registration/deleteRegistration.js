import { collection, deleteDoc, doc } from "@firebase/firestore";
import { firestore } from "../../config/firebase";



export const deleteRegistration = async (id) => {
    const itemRef = doc(collection(firestore, "student"), id);

    try {
        await deleteDoc(itemRef);
        window.location.reload()
        console.log("Item deleted successfully");
    } catch (err) {
        console.error("Error deleting item:", err);
        throw err;
    }
}
