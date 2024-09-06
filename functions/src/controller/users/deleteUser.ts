import { firestore, auth } from "../../config/firebase";
import * as functions from 'firebase-functions';

const deleteUserData = (cors: any) => functions.https.onRequest(async (req, res) => {
    return cors(req, res, async () => {
        try {
            const id = req.params['0']; 

            if (!id) {
                res.status(400).send({ message: "O parâmetro 'id' é obrigatório." });
                return;
            }

            const userDoc = await firestore.collection("userData").doc(id).get();
            if (!userDoc.exists) {
                res.status(404).send({ message: "Usuário não encontrado" });
                return;
            }

            const userData = userDoc.data();
            const uid = userData?.uid;

            if (uid) {
                await auth.deleteUser(uid);
            }

            await firestore.collection("userData").doc(id).delete();

            res.status(200).send({ message: "Usuário deletado com sucesso" });
        } catch (err: any) {
            console.error("Erro ao deletar Usuário:", err);
            res.status(500).send({ message: "Erro ao deletar usuário", error: err.message });
            throw err;
        }
    });
});

export { deleteUserData };
