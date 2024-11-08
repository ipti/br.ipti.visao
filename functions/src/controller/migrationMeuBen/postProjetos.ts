import * as functions from "firebase-functions";
import axios from "axios";

export const postProjetos = (cors: any) => functions.https.onRequest((request, response) => {
    cors(request, response, async () => { //adicionado async do corsMiddleware
        try {
            const url = `https://br-ipti-beneficiarios.azurewebsites.net/aviste-bff?token=${process.env.TOKEN}`;

            const body = request.body;

            // Requisição GET para a API usando Axios
            const result = await axios.post(url , body);
            const data = result.data;

            response.send(data);
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            response.status(500).send("Erro ao enviar dados.");
        }
    });
});
