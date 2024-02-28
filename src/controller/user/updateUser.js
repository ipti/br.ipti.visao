import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

// Configuração do Firebase

// Inicializa o Firebase

// Adiciona mais atributos ao objeto de autenticação
const email = "admin@admin.com";
const senha = "p@s4ipti";

export const editUser = () => {
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      // Se autenticado com sucesso, você pode adicionar mais atributos ao usuário
      const user = userCredential.user;
      // Por exemplo, você pode definir o nome do usuário
      user
        .updateProfile({
          role: "ADMIN",
        })
        .then(() => {
          // Atualização de perfil concluída com sucesso
          console.log("Perfil do usuário atualizado com sucesso!");
        })
        .catch((error) => {
          // Se houver algum erro ao atualizar o perfil
          console.error("Erro ao atualizar perfil:", error);
        });
    })
    .catch((error) => {
      // Se houver algum erro durante a autenticação
      console.error("Erro ao autenticar:", error);
    });
};
