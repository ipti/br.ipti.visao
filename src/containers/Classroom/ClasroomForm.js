import React from "react";
import * as Yup from "yup";
import Create from "../../screens/Classroom/Form";

const Form = props => {





  const validationSchema = Yup.object().shape({
    vacancies: Yup.number()
      .nullable()
      .required("Campo obrigatório!")
  });



  return (
    <>
        <>
          <Create
            //initialValues={initialValues}
            validationSchema={validationSchema}
            baseLink={`/turmas/${props.match.params.id}/matricula`}
            loadingIcon={props?.loading}
            // data={classroom}
          />
        </>
    </>
  );
};


export default Form;
