import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading/CircularLoading";
import { Controller } from "../../../controller/classroom";
import { RegistrationConfirmed } from "../../../screens/Classroom";
import { StageRegistrationState } from "../context/statesRegistration";
import { ControllerUpdatePreRegistration } from "../../../controller/classroom/EditPreRegistraton";
import api from "../../../services/api";
import { StageState } from "../context/states";

const Registration = props => {

  const [state, setState] = useState([]);
  const [loadStates, setLoadStatesF] = useState(true)

  const { classrooms } = StageState()

  const { requestUpdateRegistrationMutation, requestUpdatePreIdentificationMutation } = Controller();

  const { requestEditPreRegistrationMutation } = ControllerUpdatePreRegistration()

  const { id, idRegistration } = useParams()

  const { registration, answer } = StageRegistrationState()

  const handleSubmit = value => {
    requestUpdateRegistrationMutation.mutate({ data: value, id: idRegistration })
  };

  const handleRefusePreIdentification = () => {
    requestUpdatePreIdentificationMutation.mutate({ data: { student_pre_identification_status: 3, }, id: idRegistration })
  }

  const handleEditPreRegistration = (id, data) => {
    const body = {
      ...data,
      sex: data.sex.id,
      color_race: data.color_race.id,
      deficiency: data.deficiency.id,
      zone: data.zone.id,
      edcenso_city: data.edcenso_city?.id ? data.edcenso_city.id : data.edcenso_city,
      edcenso_uf: data.edcenso_uf?.id ? data.edcenso_uf.id : data.edcenso_uf,
      cep: data.cep ? data.cep.replace(/\D/g, '') : null,
      cpf: data.cpf ? data.cpf.replace(/\D/g, '') : "",
      responsable_telephone: data.responsable_telephone ? data.responsable_telephone.replace(/\D/g, '') : "",
      responsable_cpf: data.responsable_cpf ? data.responsable_cpf.replace(/\D/g, '') : "",
      classroom_fk: data.classroom_fk.id
    }

    requestEditPreRegistrationMutation.mutate({ id: id, data: body })
  }

  useEffect(() => {
    if (loadStates) {
      (async () => {
        const res = await api.get("/student-pre-identify/edcenso-uf", {
          params: {
            include: {
              edcenso_city: true
            }
          }
        })
        setState(res.data)
        // setLoadStates(false)
      })();
    }
  },)

  return (
    <>
      {!registration ? (
        <Loading />
      ) : (
        <>
          <RegistrationConfirmed
            registration={registration}
            answer={answer}
            classroom={id}
            handleRefusePreIdentification={handleRefusePreIdentification}
            handleSubmit={handleSubmit}
            state={state}
            loadingIcon={props.loading}
            handleEditPreRegistration={handleEditPreRegistration}
            classrooms={classrooms}
          />
        </>
      )}
    </>
  );
};

export default Registration;
