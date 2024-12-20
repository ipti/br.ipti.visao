// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, firestore } from "../../config/firebase";
// import { collection } from "@firebase/firestore";
// import { addDoc } from "@firebase/firestore";
// import Swal from "sweetalert2";

import Swal from "sweetalert2";
import api from "../../services/api";

export const CreateUserRequest = async (body) => {
  return await api.post("/userCreate", body).then((data) => {
    Swal.fire({
      title: "Sucesso!",
      text: "Usuário criado com sucesso!",
      icon: "success",
      confirmButtonText: "Ok",
    });
  }).catch((error) => {
    console.error("Erro ao criar usuário", error);
    Swal.fire({
      title: "Erro!",
      text: "Erro",
      icon: "error",
      confirmButtonText: "Ok",
    });
    throw error;
  })
}

export async function createUser(data) {
  try {
    const userData = {
      name: data.name,
      role: data.role,
      email: data.email,
      password: data.password,
    };

    CreateUserRequest(userData)

    console.log("Usuário criado com sucesso");
  } catch (err) {
    console.error("Erro ao criar usuário", err);
    throw err;
  }
}
// ====================================================================================

// export function createUser(data) {
// Create the user with email and password
// createUserWithEmailAndPassword(auth, data.email, data.password)
//   .then((userCredential) => {
//     // User created successfully
//     const user = userCredential.user;

//     const userData = {
//       name: data.name,
//       role: data.role,
//       email: user.email,
//       uid: user.uid,
//     };

//     const ref = collection(firestore, "userData");
//     addDoc(ref, userData);
//     Swal.fire({
//       title: "Sucesso!",
//       text: "Usuário criado com sucesso!",
//       icon: "success",
//       confirmButtonText: "Ok",
//     });

//   })
//   .catch((error) => {
//     // Handle errors
//     console.error("Error creating user:", error.message);
//   });
