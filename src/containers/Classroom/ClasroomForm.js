import React from "react";
import * as Yup from "yup";
import Alert from "../../components/Alert/CustomizedSnackbars";
import Loading from "../../components/Loading/CircularLoading";
import Create from "../../screens/Classroom/Form";
import { StageFormState } from "./context/stateStageForm";

const Form = props => {


  const { classroom, isLoading, isError } = StageFormState()

  const alert = () => {

    if (isError) {
      return (
        <Alert
          open={props?.openAlert}
          // handleClose={handleClose}
          status={0}
          message={"Ocorreu um erro"}
        />
      );
    }
    return <></>;
  };


  const validationSchema = Yup.object().shape({
    vacancies: Yup.number()
      .nullable()
      .required("Campo obrigatório!")
  });



  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Create
            //initialValues={initialValues}
            validationSchema={validationSchema}
            baseLink={`/turmas/${props.match.params.id}/matricula`}
            loadingIcon={props?.loading}
            data={classroom}
          />
          {alert()}
        </>
      )}
    </>
  );
};


export default Form;
