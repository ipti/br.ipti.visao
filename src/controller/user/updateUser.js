import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../config/firebase";
import { addDoc } from "@firebase/firestore"
import { collection } from "@firebase/firestore"

const email = "lupa@lupa.com";
const senha = "lupa2024";

export const editUser = async () => {
   signInWithEmailAndPassword(auth,email, senha)
  .then((userCredential) => {
    const user = userCredential.user;

    const userData = {
      name: "lupa",
      role: 1,
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
