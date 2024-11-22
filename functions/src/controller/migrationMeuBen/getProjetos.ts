import * as functions from "firebase-functions";
import axios from "axios";


export const getProjetos = (cors: any) => functions.https.onRequest((request, response) => {
    cors(request, response, async () => { 
        try {
            
            const url = `https://br-ipti-beneficiarios.azurewebsites.net/migration-bff/aviste?token=${process.env.TOKEN}`;

            // Requisição GET para a API usando Axios
            const result = await axios.get(url);
            const data = result.data;

            response.send(data);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            response.status(500).send("Erro ao buscar dados.");
        }
    });
});
