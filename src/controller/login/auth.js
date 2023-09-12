import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { login } from "../../services/auth";

const handleLogin = async (email, password, history) => {


    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            login(user);
            history.push("/");
        })
        .catch((error) => {
            console.error("Erro ao autenticar o usuário:", error);
            alert(error)
        });
};

export default handleLogin;