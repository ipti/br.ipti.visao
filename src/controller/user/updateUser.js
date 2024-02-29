import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../config/firebase";
import { addDoc } from "@firebase/firestore"
import { collection } from "@firebase/firestore"



const email = "admin@admin.com";
const senha = "p@s4ipti";

export const editUser = async () => {
   signInWithEmailAndPassword(auth,email, senha)
  .then((userCredential) => {
    const user = userCredential.user;

    const userData = {
      nome: user.displayName,
      email: user.email,
      uid: user.uid,
    };

    const ref = collection(firestore, "userData");
    
    addDoc(ref, userData)
    .then(() => {
      console.log("Dados do usuário armazenados com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao armazenar dados do usuário:", error);
    });
  })
  .catch((error) => {
    console.error("Erro ao autenticar:", error);
  });
};
