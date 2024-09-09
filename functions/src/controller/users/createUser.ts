import * as functions from 'firebase-functions';
import { auth, firestore } from "../../config/firebase";

const createUserData = (cors: any) => functions.https.onRequest(async (req, res) => {
    return cors(req, res, async () => {
        try {

            await auth.createUser({
                email: req.body.email,
                password: req.body.password,
                displayName: req.body.name,
            })
            .then(user => {
                const userData = {
                    name: req.body.name,
                    role: req.body.role,
                    email: user.email,
                    uid: user.uid,
                };

                const ref = firestore.collection("userData");
                ref.add(userData);
                res.status(200).send({ message: "Usuário criado e dados salvos com sucesso!" });

            })
        } catch (err: any) {
            res.status(500).send(err.message);
            console.error("Erro ao criar Usuário:", err);
            throw err;
        }
    });
});

export { createUserData };

