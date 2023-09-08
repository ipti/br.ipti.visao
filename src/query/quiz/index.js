import { useQuery } from "react-query";
import api from "../../services/api";
import { logout } from "../../services/auth";

const requestQuiz = async id => {
    return await api
      .get("/quizbyschool/" + id)
      .then(response => response.data)
      .catch(err => {
        if(err.response.status === 401){
          logout()
          window.location.reload()
        }
        throw err;
      });
  };

  export const useFetchRequestQuiz = ({ id }) => {
    return useQuery(["useRequestsQuiz", id], () => requestQuiz(id));
  };