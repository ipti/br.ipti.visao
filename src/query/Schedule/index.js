import { useQuery } from "react-query";
import api from "../../services/api";
import { getIdSchool, logout } from "../../services/auth";



// Requests
const requestSchools = () => {
  let path = "/school-identification";

  return api
    .get(path)
    .then(response => response.data)
    .catch(err => {
      if(err.response.status === 401){
        logout()
        window.location.reload()
      }
      throw err;
    });
};

const requestScheculeOne = (id) => {
  let path = "/event-pre-registration" + id;
  return api
    .get(path)
    .then(response => response.data)
    .catch(err => {
      if(err.response.status === 401){
        logout()
        window.location.reload()
      }
      throw err;
    });
};

const requestStagevsmodality = () => {
  let path = "/edcenso-stage-vs-modality";
  return api
    .get(path)
    .then(response => response.data)
    .catch(err => {
      if(err.response.status === 401){
        logout()
        window.location.reload()
      }
      throw err;
    });
};

export const requestDeleteSchedule = id => {
  let path = "/event-pre-registration/" + id;
  return api
    .delete(path)
    .then(response => response.data)
    .catch(err => {
      if(err.response.status === 401){
        logout()
        window.location.reload()
      }
      throw err;
    });
};



// Requests
const requestSchecule = () => {
  let path = "/event-pre-registration";

  return api
    .get(path, {
      params: {
        school_inep_id_fk: getIdSchool(),
        include: {
          school_identification: true,
        }
      }
    })
    .then(response => response.data)
    .catch(err => {
      if(err.response.status === 401){
        logout()
        window.location.reload()
      }
      throw err;
    });
};

export const requestSaveEventPre = data => {
  return api
    .post("/event-pre-registration", data)
    .then(response => response.data)
    .catch(err => {
      if(err.response.status === 401){
        logout()
        window.location.reload()
      }
      throw err;
    });
};


export const useFetchRequestSchools = () => {
  return useQuery(["useRequestsSchoolsSchedule"], () => requestSchools());
};

export const useFetchRequestSchecule = () => {
  return useQuery(["useRequestsSchecule"], () => requestSchecule());
};

export const useFetchRequestScheculeOne = (id) => {
  return useQuery(["useRequestsScheculeOne", id], () => requestScheculeOne(id));
};

export const useFetchRequestStagevsmodality = () => {
  return useQuery(["useRequestStagevsmodalitys"], () => requestStagevsmodality());
};

