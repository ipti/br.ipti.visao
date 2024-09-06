import * as functions from 'firebase-functions';
import { auth, firestore } from "../../config/firebase";
import * as cors from 'cors';

const createUserData = functions.https.onRequest(async (req, res) => {
    const handleCors = cors({ origin: true });

    handleCors(req, res, async () => {
        try {
            // Criação do usuário com o Firebase Admin SDK
            const userRecord = await auth.createUser({
                email: req.body.email,
                password: req.body.password,
                displayName: req.body.name,
            });

            // Estrutura do documento a ser salvo no Firestore
            const userData = {
                name: req.body.name,
                role: req.body.role,
                email: userRecord.email,
                uid: userRecord.uid,
            };

            // Salvando os dados do usuário no Firestore
            await firestore.collection("userData").add(userData);

            // Enviar resposta de sucesso
            res.status(200).send({ message: "Usuário criado e dados salvos com sucesso!" });
        } catch (error : any) {
            console.error("Erro ao criar Usuário:", error);
            res.status(500).send({ message: "Erro ao criar usuário", error: error.message });
        }
    });
});

export { createUserData };
