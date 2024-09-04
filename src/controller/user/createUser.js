import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../config/firebase";
import { collection } from "@firebase/firestore";
import { addDoc } from "@firebase/firestore";
import Swal from "sweetalert2";

export function createUser(data) {
  // Create the user with email and password
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // User created successfully
      const user = userCredential.user;

      const userData = {
        name: data.name,
        role: data.role,
        email: user.email,
        uid: user.uid,
      };

      const ref = collection(firestore, "userData");
      addDoc(ref, userData);
      Swal.fire({
        title: "Sucesso!",
        text: "Usuário criado com sucesso!",
        icon: "success",
        confirmButtonText: "Ok",
      });

    })
    .catch((error) => {
      // Handle errors
      console.error("Error creating user:", error.message);
    });
}
