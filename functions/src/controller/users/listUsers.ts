import * as functions from 'firebase-functions';
import { fetchUsersData, UserData } from "./fetchUsers";

interface UserReport {
    email: string;
    nome: string;
    role: number;
}
  
const generateRowUsersList = async (user: UserData): Promise<UserReport> => {
    
    const userReport: UserReport = { 
        email: user.object.email,
        nome: user.object.nome,
        role: user.object.role,
    } as unknown as UserReport;

    return userReport;
}

export const listUsers = (cors: any) => functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
      try {
        const user = await fetchUsersData();
        
        const completedReport = user.map((user: UserData) => generateRowUsersList(user));
        res.status(200).send(await Promise.all(completedReport));
  
      } catch (err: any) {
        res.status(500).send(err.message);
      }
    });
  });
  