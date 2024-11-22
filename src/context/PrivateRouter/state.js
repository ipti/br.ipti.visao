import { useEffect, useState } from "react";
import fetchOneUser from "../../controller/user/getUserOne";
import { getIdUser } from "../../services/auth";

export const PrivateRouterState = () => {
  const [user, setuser] = useState();
  useEffect(() => {
    fetchOneUser(getIdUser())
      .then((testDataList) => {
        setuser(testDataList);
      })
      .catch((err) => {
        // Trate erros, se ocorrerem
        console.error(err);
      });
  }, []);

  const isAdmin = user?.role === 1;
  const isTriador = user?.role === 2;
  const isMedico = user?.role === 3;

  return { user, isAdmin, isTriador, isMedico };
};
