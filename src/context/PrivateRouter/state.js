import { useEffect, useState } from "react";
import fetchOneUser from "../../controller/user/getUserOne";
import { getIdUser } from "../../services/auth";

export const PrivateRouterState = () => {
  const [user, setuser] = useState();
  useEffect(() => {
    fetchOneUser(getIdUser())
      .then((testDataList) => {
        console.log(testDataList)
        setuser(testDataList);
      })
      .catch((err) => {
        // Trate erros, se ocorrerem
        console.error(err);
      });
  }, []);
  return { user };
};
