import { useQuery } from "react-query";
import api from "../../services/api";
import { logout } from "../../services/auth";

const requestClassroom = id => {
  let path = "/classroom";
  return api
    .get(path + id, {
      params: {
        include: {
          student_pre_identification: true
        },
      }
    })
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
};

export const requestCreateClassroom = data => {
  return api
    .post("/classroom", data)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
};

export const requestDeletePreRegistration = id => {
  return api
    .delete("/student-pre-identification/" + id)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
};

export const requestUpdatePreRegistration = (id, body) => {
  return api
    .put("/student-pre-identification/" + id, body)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
};



export const useFetchRequestClassroom = ({ id }) => {
  return useQuery(["useRequestsClassroom"], () => requestClassroom(id));
};
