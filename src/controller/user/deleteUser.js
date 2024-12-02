import api from '../../services/api';

export const deleteUser = async (id, history) => {
    try {
        await api.delete(`/userDelete/${id}`);
        history.push("/usuarios")
        console.log("Item deletado com sucesso");
    } catch (err) {
        console.error("Erro ao deletar item", err);
        throw err;
    }
}