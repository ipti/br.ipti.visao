import axios from 'axios';


export const deleteUser = async (id, history) => {
    try {
        await axios.delete(`http://127.0.0.1:5001/br-ipti-visao/us-central1/userDelete/${id}`);
        //await axios.delete(`https://us-central1-br-ipti-visao.cloudfunctions.net/userDelete/${id}`);
        history.push("/usuarios")
        console.log("Item deletado com sucesso");
    } catch (err) {
        console.error("Erro ao deletar item", err);
        throw err;
    }
}
