import { firestore } from "../../config/firebase";
import * as functions from 'firebase-functions';


const deleteClassroom = (cors: any) => functions.https.onRequest(async (req, res) => {
    let id = req.params['0'];

    return cors(req, res, async () => {
        try {
            const classroom = await firestore.collection("classroom").doc(id).get();
            if (!classroom.exists) {
                throw new Error("Turma não encontrada");
            }
            
            const refStudents = await firestore.collection("student").where("classroom_fk", "==", id).get();
            refStudents.forEach(async (doc) => {
                await firestore.collection("student").doc(doc.id).delete();
            });
            
            await firestore.collection("classroom").doc(id).delete();
            res.json({ message: "Turma deletada com sucesso" });
            return "Turma deletada com sucesso";
        } catch (err) {
            console.error("Erro ao deletar turma:", err);
            throw err;
        }
    });
});

export { deleteClassroom };
