import { useQuery } from "react-query";
import api from "../../services/api";
import { getIdSchool, logout } from "../../services/auth";

// Requests
const requestClassrooms = () => {
  let path = "/classroom";
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

const requestClassroom = id => {
  return api
    .get("/classroom/" + id, {
      params: {
        include: {
          student_pre_identification: true,
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

const requestRegistration = id => {
  return api
    .get("/student-pre-identification/" + id, {
      params: {
        include: {
          edcenso_city: true,
          edcenso_uf: true,
          edcenso_stage_vs_modality: true,
          classroom: true
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

const requestAnwser = id => {
  return api
    .get("/answer-pre-identification/" + id)
    .then(response => response.data)
    .catch(err => {
      if(err.response.status === 401){
        logout()
        window.location.reload()
      }
      throw err;
    });
};

export const requestSaveClassroom = data => {
  return api
    .post("/classroom", data)
    .then(response => response.data)
    .catch(err => {
      if(err.response.status === 401){
        logout()
        window.location.reload()
      }
      throw err;
    });
};

export const requestEditPreIdentification = (data, id) => {
  return api
    .put("/student-pre-identification/" + id, data)
    .then(response => response.data)
    .catch(err => {
      if(err.response.status === 401){
        logout()
        window.location.reload()
      }
      throw err;
    });
};

export const requestCreateStage = (data) => {
  return api
    .post("/stages-vacancy-pre-registration", data)
    .then(response => response.data)
    .catch(err => {
      if(err.response.status === 401){
        logout()
        window.location.reload()
      }
      throw err;
    });
};

export const requestUpdateRegistration = (data, id) => {
  if (data.student_fk) {
    return api
      .post("student-pre-identifyregistered/registration/" + id)
      .then(response => response.data)
      .catch(err => {
        if(err.response.status === 401){
          logout()
          window.location.reload()
        }
        throw err;
      });
  } else {
    return api
      .post("/student-pre-identify/registration/" + id, data)
      .then(response => response.data)
      .catch(err => {
        if(err.response.status === 401){
          logout()
          window.location.reload()
        }
        throw err;
      });
  }

};

export const requestUpdateClassroom = (data, id) => {
  return api
    .put("/classroom/" + id, data)
    .then(response => response.data)
    .catch(err => {
      if(err.response.status === 401){
        logout()
        window.location.reload()
      }
      throw err;
    });
};

const requestStagevsmodality = (year) => {
  let path = "/stages-vacancy-pre-registration";
  return api
    .get(path, {
      params: {
        include: {
          edcenso_stage_vs_modality: true,
          student_pre_identification: true
        },
        school_inep_id_fk: getIdSchool(),
        year: year
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

const requestStagevsmodalityOne = id => {
  let path = "/stages-vacancy-pre-registration/" + id;
  return api
    .get(path, {
      params: {
        include: {
          edcenso_stage_vs_modality: true,
          student_pre_identification: true
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

export const useFetchRequestClassrooms = () => {
  return useQuery(["useRequestClassrooms"], () => requestClassrooms());
};

export const useFetchRequestStagevsmodality = ({ year }) => {
  return useQuery(["useRequestStagevsmodality", year], () => requestStagevsmodality(year));
};

export const useFetchRequestStagevsmodalityOne = ({ id }) => {
  return useQuery(["useRequestStagevsmodalityOne", id], () => requestStagevsmodalityOne(id));
};

export const useFetchRequestClassroom = ({ id }) => {
  return useQuery(["useRequestClassroom", id], () => requestClassroom(id));
};

export const useFetchRequestRegistration = ({ id }) => {
  return useQuery(["useRequestRegistration", id], () => requestRegistration(id));
};

export const useFetchRequestAnwser = ({ id }) => {
  return useQuery(["useRequestAnwser", id], () => requestAnwser(id));
};