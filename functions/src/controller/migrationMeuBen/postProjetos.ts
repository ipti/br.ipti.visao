import * as functions from "firebase-functions";
//import * as cors from "cors";
import axios from "axios";

// corsMiddleware = cors({ origin: true });


export const postProjetos = (cors: any) => functions.https.onRequest((request, response) => {
    cors(request, response, async () => { //adicionado async do corsMiddleware
        try {
            const token = "UP4nqVhNNbnJjxKnnwv24QFl17f2WzVM";
            const url = `https://br-ipti-beneficiarios.azurewebsites.net/aviste-bff?token=${token}`;

            const body = request.body;

            // Requisição GET para a API usando Axios
            const result = await axios.post(url , body);
            const data = result.data;

            response.send(data);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            response.status(500).send("Erro ao buscar dados.");
        }
    });
});
