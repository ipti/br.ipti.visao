import swal from "sweetalert";
import { firestore } from "../../config/firebase";
import { doc, updateDoc } from "@firebase/firestore";

const updateStudent = async (studentId, updatedData) => {
  const studentRef = doc(firestore, "student", studentId);


  const currentDate = new Date();

  currentDate.setHours(currentDate.getHours() - 3);

  // Extract the date part in ISO format (YYYY-MM-DD)
  const isoDate = currentDate.toISOString().split('T')[0];
  try {
    await updateDoc(studentRef, {...updatedData, dataTriagem: ((updatedData.testCover || updatedData.testManchaBranca || updatedData.testMovimentoOcular) && !updatedData.dataTriagem) ? isoDate : updatedData.dataTriagem});
    console.log("Documento atualizado com sucesso!");
    swal("Alteração Salva");
  } catch (err) {
    console.error("Erro ao atualizar o documento:", err);
  }
};

export default updateStudent;
