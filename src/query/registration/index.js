import { useQuery } from "react-query";
import api from "../../services/api";
import { logout } from "../../services/auth";


// Request student identification
const requestStudent = async id => {
  return await api
    .get("/student-pre-identify/studentidentification/" + id,
      {
        params: {
          include: {
            edcenso_uf: true,
            school_identification: { include: { student_documents_and_address: { where: { student_fk: id } }, classroom: { where: { school_year: 2023 } }, event_pre_registration: true } }
            // student_documents_and_address: true

          }
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

export const requestStudentOne = async id => {
  return await api
    .get("/student-pre-identify/studentidentification/" + id,
      {
        params: {
          include: {
            edcenso_city: true,
          }
        }
      })
    .then(response => response.data)
    .catch(err => {
      // if (err.response.status === 401) {
      //   logout()
      //   window.location.reload()
      // }
      throw err;
    });
};

// request stages classroom 
export const requestSchoolStages = async (id, year) => {
  return await api
    .get("/school-pre-registration/" + id,
      {
        params: {
          year: year
        }
      })
    .then(response => response.data === 401)
    .catch(err => {
      // if (err.response.status) {
      //   logout()
      //   window.location.reload()
      // }
      throw err;
    });
};



// registred pre identification
export const requestSaveRegistration = data => {
  return api
    .post("/student-pre-identification", data)
    .then(response => response.data)
    .catch(err => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
};


// request all school
const requestSchoolList = async () => {
  return await api
    .get("/student-pre-identify/school", {
      params: {
        include: {
          classroom: { where: { school_year: 2023 } },
          calendar_event: true,
          event_pre_registration: true,
          // student_documents_and_address: true,
          // student_identification: true
        }
      }
    })
    .then(response => response.data)
    .catch(err => {
      // if(err.response.status === 401){
      //   logout()
      //   window.location.reload()
      // }
      throw err;
    });
};

const requestSchool = async id => {
  return await api
    .get("/student-pre-identify/school/" + id, {
      params: {
        include: {
          classroom: true,
          calendar_event: true
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

// const requestSchoolToken = async id => {
//   return await api
//     .get("/school-identification/" + id, {
//       params: {
//         include: {
//           classroom: true,
//           calendar_event: true
//         }
//       }
//     })
//     .then(response => response.data)
//     .catch(err => {
//       throw err;
//     });
// };




export const useFetchRequestStudent = ({ id }) => {
  return useQuery(["useRequestsStudent", id], () => requestStudent(id));
};

export const useFetchRequestSchoolRegistration = ({ id }) => {
  return useQuery(["useRequestsSchoolRegistration", id], () => requestSchool(id));
};

export const useFetchRequestSchoolList = () => {
  return useQuery(["useRequestSchoolList"], () => requestSchoolList());
};


export const useFetchRequestSchoolStages = ({ id, year }) => {
  return useQuery(["useRequestSchoolStages", id, year], () => requestSchoolStages(id, year));
};

