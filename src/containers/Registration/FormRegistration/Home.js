import React, { useState } from "react";

import TagImage from "../../../assets/images/taglogin.svg"
import BackButton from "../../../assets/images/backIcon.svg"

// Redux

// Components
import Alert from "../../../components/Alert/CustomizedSnackbars";
import Loading from "../../../components/Loading/CircularLoadingRegistration";
import Wait from "../../../screens/Registration/Wait";
import Wizard from "../../../screens/Registration/Wizard";

// Material UI
import Grid from "@material-ui/core/Grid";
import { Controller } from "../../../controller/registration";
import RegistrationContextProvider, { RegistrationContext } from "../Context/context";
import { useContext } from "react";

import styles from "../../../screens/Registration/styles";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
const useStyles = makeStyles(styles);

const Home = props => {
  const history = useHistory()
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [dataValues, setDataValues] = useState({});
  const { schools, quiz } = useContext(RegistrationContext);
  const { requestSaveRegistrationMutation } = Controller()
  const [isActive, setIsActive] = useState(true);


  const onSubmit = () => {

    const parseBool = value =>
      ['true', 'false'].includes(value) ? value === true : null
      requestSaveRegistrationMutation.mutate(
        {
          ...dataValues, sex: parseInt(dataValues.sex),
          zone: parseInt(dataValues.zone),
          birthday: dataValues.birthday,
          deficiency: parseBool(dataValues.deficiency),
          cpf: dataValues.cpf ? dataValues.cpf.replace(/\D/g, '') : null,
          responsable_cpf: dataValues.responsable_cpf ? dataValues.responsable_cpf.replace(/\D/g, '') : "",
          responsable_telephone: dataValues.responsable_telephone.replace(/\D/g, ''),
          father_name: dataValues.father_name === "" ? null : dataValues.father_name,
          mother_name: dataValues.mother_name === "" ? null : dataValues.mother_name,
          event_pre_registration: parseInt(dataValues.event_pre_registration),
        }
      )
      // setLoad(false)
    
  };


  const next = (step, values) => {

    let data = Object.assign(dataValues, values);

    setDataValues(data);
    setStep(step)
  };


  const backStep = () => {
    if (step > 0) {
      if (step === 6 && (quiz.length === 0)) {
        setStep(step - 2)
      } else {
        setStep(step - 1)
      }
    } if (step === 0 && isActive) {
      history.push("/register")
    }
    if (!isActive) {
      setIsActive(true)
    }
  }

  const nextStep = () => {
    if (step <= 6) {
      setStep(step + 1)
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  const alert = () => {
    return (
      <Alert
        open={open}
        handleClose={handleClose}
        status="0"
        message="Matrícula não encontrada!."
      />
    );
  };

  const handleStudent = isStudent => {
    if (!isStudent) {
      next(4);
    } else {
      next(3);
    }
  };

  const wizard = () => {

    return (
      <RegistrationContextProvider>
        <div style={{ display: "flex", flexDirection: "column" }} className={classes.backgroundForm}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={classes.topBar} style={{ backgroundColor: "#667DF4" }} />
            <div className={classes.topBar} style={{ backgroundColor: "#F45A5A" }} />
            <div className={classes.topBar} style={{ backgroundColor: "#66D654" }} />
            <div className={classes.topBar} style={{ backgroundColor: "#EADA48" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}><img className={classes.backButton} onClick={backStep} src={BackButton} alt=""></img><img className={classes.imgTag} src={TagImage} alt=""></img></div>
          <Grid
            container
            style={{ height: "100%" }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item lg={4} md={5} xs={10}>
              {isActive ? (
                <Wizard
                  schools={schools}
                  next={next}
                  step={step}
                  handleStudent={handleStudent}
                  loadingButtom={props.loading}
                  setIsActive={setIsActive}
                  handleSubmit={onSubmit}
                  backStep={backStep}
                  nextStep={nextStep}
                  values={dataValues}
                  onSubmit={onSubmit}
                />
              ) : (
                <Wait setIsActive={setIsActive} />
              )}
            </Grid>
          </Grid>

        </div>
      </RegistrationContextProvider>

    );
  };

  return (
    <>
      {props.loading && step === 0 ? (
        <Loading />
      ) : (
        <>
          {wizard()}
          {alert()}
        </>
      )}
    </>
  );
};


export default Home;
