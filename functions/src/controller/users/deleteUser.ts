import { firestore } from "../../config/firebase";
import * as functions from 'firebase-functions';


const deleteUserData = (cors: any) => functions.https.onRequest(async (req, res) => {
    let id = req.params['0'];

    return cors(req, res, async () => {
        try {
            const userData = await firestore.collection("userData").doc(id).get();
            if (!userData.exists) {
                throw new Error("Usuário não encontrado");
            }
        
            await firestore.collection("userData").doc(id).delete();
            res.json({ message: "Usuário deletado com sucesso" });
            return "Usuário deletado com sucesso";
        } catch (err) {
            console.error("Erro ao deletar Usuário:", err);
            throw err;
        }
    });
});

export { deleteUserData };
