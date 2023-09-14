import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchOneRegistration from "../../../controller/registration/fetchOneRegistration";
import { RegistrationConfirmed } from "../../../screens/Classroom";

const Registration = props => {


  
  const { idRegistration } = useParams()

  const [student, setStudent] = useState([])

  useEffect(() => {
    fetchOneRegistration(idRegistration)
      .then((testDataList) => {
        setStudent(testDataList)
        console.log(testDataList)
      })
      .catch((err) => {
        // Trate erros, se ocorrerem
        console.error(err)
      })
  }, [idRegistration])

  console.log(student)


  // const { registration, answer } = StageRegistrationState()

  const handleSubmit = value => {
    // requestUpdateRegistrationMutation.mutate({ data: value, id: idRegistration })
  };

  const handleRefusePreIdentification = () => {
    // requestUpdatePreIdentificationMutation.mutate({ data: { student_pre_identification_status: 3, }, id: idRegistration })
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

    // requestEditPreRegistrationMutation.mutate({ id: id, data: body })
  }

  return (
    <>
        <>
          <RegistrationConfirmed
            student={student}
          />
        </>
    </>
  );
};

export default Registration;
