import React, { useState } from "react";
import * as Yup from "yup";
import Alert from "../../components/Alert/CustomizedSnackbars";
import Loading from "../../components/Loading/CircularLoading";
import { Controller } from "../../controller/Schedule/index";
import { ScheduleForm } from "../../screens/Schedule";
import { getIdSchool } from "../../services/auth";
import { States } from "./states/ScheduleFormStatus";

const Form = props => {
  //const [loadingButtom, setLoadingButtom] = useState(false);
  const [allSchool, setAllSchool] = useState(false);
  const [open, setOpen] = useState(false);
  const { requestSaveEventPreMutation } = Controller()

  const { getIdSchools, initialValues, isLoading, schools} = States()

  
  const handleClose = () => {
    setOpen(false);
  };

  const alert = () => {
    let status = null;
    let message = null;

    if (props?.error) {
      status = 0;
      message = props.error;
    }

    if (props?.fetchSchedule?.status === "0") {
      status = props?.fetchSchedule.status;
      message = props?.fetchSchedule.message;
    }

    if (status !== null && message !== null) {
      return (
        <Alert
          open={open}
          handleClose={handleClose}
          status={status}
          message={message}
        />
      );
    }

    return <></>;
  };

  const handleSubmit = values => {
    let data = {
      start_date: values.start_date,
      end_date: values.end_date,
      school_identificationArray: allSchool ? getIdSchools : [getIdSchool()],
      year: parseInt(values.year.getFullYear()),
    };
    requestSaveEventPreMutation.mutate(data)
  };

  const validationSchema = Yup.object().shape({
    start_date: Yup.date()
      .nullable()
      .required("Campo obrigatório!"),
    end_date: Yup.date()
      .when("start_date", (start_date, schema) => {
        if (start_date !== null) {
          return schema.min(
            start_date,
            "A Data Final deve ser maior do que a data inicial"
          );
        }
      })
      .nullable()
      .required("Campo obrigatório!"),
    // year: Yup.number()
    //   .required("Campo obrigatório!")
  });

 

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ScheduleForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            schools={schools}
            handleSubmit={handleSubmit}
            setAllSchool={setAllSchool}
            allSchool={allSchool}
          />
          {alert()}
        </>
      )}
    </>
  );
};


export default Form;
