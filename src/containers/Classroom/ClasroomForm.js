import React from "react";
import * as Yup from "yup";
import Create from "../../screens/Classroom/Form";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import fetchRegistration from "../../controller/registration/fetchRegistration";
import fetchOneClassroom from "../../controller/classroom/fetchOneClassroom";

const Form = props => {



  const { id } = useParams()


  const validationSchema = Yup.object().shape({
    vacancies: Yup.number()
      .nullable()
      .required("Campo obrigatório!")
  });

  const [students, setStudents] = useState([])
  const [classroom, setClassroom] = useState([])

  useEffect(() => {
    fetchRegistration()
      .then((testDataList) => {
        const student = testDataList.filter(props => props.object.classroom_fk === id)
        setStudents(student)
      })
      .catch((err) => {
        // Trate erros, se ocorrerem
        console.error(err)
      })

      fetchOneClassroom(id)
        .then((testDataList) => {
          setClassroom(testDataList)
        })
        .catch((err) => {
          // Trate erros, se ocorrerem
          console.error(err)
        })
  }, [id])


  return (
    <>
      <>
        <Create
          //initialValues={initialValues}
          validationSchema={validationSchema}
          baseLink={`/turmas/${props.match.params.id}/matricula`}
          loadingIcon={props?.loading}
          data={students}
          classroom={classroom}
        />
      </>
    </>
  );
};


export default Form;
