import api from '../../services/api';

export const deleteItem = async (id, history) => {
    try {
        await api.delete(`/classroomDelete/${id}`);
        history.push("/turmas")
        console.log("Item deletado com sucesso");
    } catch (err) {
        console.error("Erro ao deletar item", err);
        throw err;
    }
}

