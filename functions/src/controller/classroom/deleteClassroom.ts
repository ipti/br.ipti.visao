import { Firestore } from "firebase-admin/firestore";

//TODO:: Criar delete no functions, e lembrar de deletar a turma e também os alunos da turma, ou seja, todos os studenst com a classroom_fk que esta sendo apagado

const deleteClassroom = async (firestore: Firestore, id: string) => {
    try {
        const refClassroom = await firestore.collection("classroom").doc(id).get();
        if (!refClassroom.exists) {
        throw new Error("Turma não encontrada");
        }
        await firestore.collection("classroom").doc(id).delete();
        
        const refStudents = await firestore.collection("student").where("classroom_fk", "==", id).get();
        refStudents.forEach(async (doc) => {
            await firestore.collection("student").doc(doc.id).delete();
        });
        
        return "Turma deletada com sucesso";
    } catch (err) {
        console.error("Erro ao deletar turma:", err);
        throw err;
    }
    }

export { deleteClassroom };
