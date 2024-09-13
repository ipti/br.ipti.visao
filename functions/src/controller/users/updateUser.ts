import * as functions from 'firebase-functions';
import { auth, firestore } from "../../config/firebase";

const updateUserData = (cors: any) => functions.https.onRequest(async (req, res) => {
    return cors(req, res, async () => {
        try {
            const id = req.params['id']; // ID do documento no Firestore
            const { uid, email, name, role, password } = req.body;

            if (!id || !uid) {
                res.status(400).send({ message: "Os parâmetros 'id' e 'uid' são obrigatórios." });
                return;
            }

            const updatePromises: Promise<any>[] = [];

            if (email) {
                updatePromises.push(auth.updateUser(uid, { email }));
            }

            if (password) {
                // Atualizar a senha (importante: deve ser uma senha válida)
                updatePromises.push(auth.updateUser(uid, { password }));
            }

            const ref = firestore.collection("userData").doc(id);

            const doc = await ref.get();
            if (doc.exists) {
                updatePromises.push(ref.update({
                    ...(email ? { email } : {}),
                    ...(name ? { name } : {}),
                    ...(role ? { role } : {}),
                }));
            } else {
                updatePromises.push(ref.set({
                    ...(email ? { email } : {}),
                    ...(name ? { name } : {}),
                    ...(role ? { role } : {}),
                }));
            }

            await Promise.all(updatePromises);
            res.status(200).send({ message: "Dados do usuário atualizados com sucesso!" });

        } catch (err: any) {
            res.status(500).send(err.message);
            console.error("Erro ao atualizar dados do usuário:", err);
            throw err;
        }
    });
});

export { updateUserData };
