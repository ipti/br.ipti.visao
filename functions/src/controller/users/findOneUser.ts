import { firestore } from "../../config/firebase";
import { UserData } from "./fetchUsers";
import * as functions from 'firebase-functions';

// buscar um usuário pelo id

const findOneUser = async (id: string): Promise<any> => {
    try {
        const refUser = await firestore.collection("userData").where("uid", "==", id).get();

        const userData: UserData[] = refUser.docs.map((doc) => ({
            id: doc.id,
            object: doc.data()
          }));

          if (userData.length === 0) {
            throw new Error("Usuário não encontrado");}

          return {name: userData[0].object.name, email: userData[0].object.email, role: userData[0].object.role}
          ;

      
    } catch (err) {
      console.error("Erro ao buscar dados dos usuários:", err);
      throw err;
    }
};

const oneUser = (cors: any) => functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
      try {
        const user = await findOneUser("VLAJEnH6gnRojAbq7YKZD8TH2f03");
        
        res.status(200).send(user);
  
      } catch (err: any) {
        res.status(500).send(err.message);
      }
    });
  });

  export { oneUser };
  