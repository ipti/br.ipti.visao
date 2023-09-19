import swal from "sweetalert";
import { firestore } from "../../config/firebase";
import { doc, updateDoc } from "@firebase/firestore";

const updateStudent = async (studentId, updatedData) => {
  const studentRef = doc(firestore, "student", studentId);



  try {
    await updateDoc(studentRef, updatedData);
    console.log("Documento atualizado com sucesso!");
    swal("Alteração Salva");
  } catch (err) {
    console.error("Erro ao atualizar o documento:", err);
  }
};

export default updateStudent;
