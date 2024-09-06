import { firestore } from "../../config/firebase";
import * as functions from 'firebase-functions';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { collection } from "@firebase/firestore";
import { addDoc } from "@firebase/firestore";

const createUserData = (cors: any) => functions.https.onRequest(async (req, res) => {

    const auth = getAuth();
    return cors(req, res, async () => {
        try {
               await createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
                .then((userCredential) => {
                const user = userCredential.user;
            
                const userData = {
                    name: req.body.name,
                    role: req.body.role,
                    email: user.email,
                    uid: user.uid,
                };
            
                const ref = collection(firestore, "userData");
                addDoc(ref, userData);
            
                })
                .catch((error) => {
                // Handle errors
                console.error("Error creating user:", error.message);
                });
            const userData = await firestore.collection("userData").doc(id).get();
            if (!userData.exists) {
                throw new Error("Usuário não encontrado");
            }
        
            // await firestore.collection("userData").doc(id).delete();
            // res.json({ message: "Usuário deletado com sucesso" });
            // return "Usuário deletado com sucesso";
        } catch (err) {
            console.error("Erro ao deletar Usuário:", err);
            throw err;
        }
    });
});

export { createUserData };
