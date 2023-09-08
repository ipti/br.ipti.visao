import { FormControl, FormLabel } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useState } from "react";
import Select from "react-select";
import homeImg from "../../assets/images/Capelo.png";
import { ButtonPurple } from "../../components/Buttons";
import { RegistrationContext } from "../../containers/Registration/Context/context";
import styles from "./styles";
const useStyles = makeStyles(styles);

const customStyles = {
  control: base => ({
    ...base,

    height: "60px",
    minHeight: "60px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    display: 'flex', flexDirection: 'row', justifyContent: "start"
  }),
  menu: base => ({
    ...base,
    width: '100%',
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  })
};


const Start = props => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [isValid, setIsValid] = useState()
  const { setIdEvent, idEvent, setSchool, setYear, schools, school } = useContext(RegistrationContext);

  const datenow = Date.now();
  const date = new Date(datenow)

  const onButton = () => {
    if (startDate <= date.getTime() && date.getTime() <= (endDate + 87000000) && idEvent !== '') {
      props.setIsActive(true)
      props.next('1', { school_identification: school.inep_id, event_pre_registration: idEvent })
    } else {
      props.setIsActive(false)
    }
  }
  return (
    <>
      <Grid
        className={classes.contentStart}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <img className={classes.imageRegistration} src={homeImg} alt="" />
        </Grid>
        <Grid item xs={12}>
          <h1>Matrícula Online</h1>
          <p>
            Bem-vindo ao Matrícula online, para <br /> iniciar escolha o projeto e clique no botão
            abaixo
          </p>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            component="fieldset"
            className={classes.formControl}
          >
            <FormLabel style={{ display: 'flex', flexDirection: 'row', justifyContent: "start" }} >Projeto *</FormLabel>
            <Select
              styles={customStyles}
              className="basic-single"
              classNamePrefix="select"
              placeholder="Digite o nome da projeto"
              options={schools}
              isLoading={!schools}
              onChange={selectedOption => {
                setSchool(selectedOption)
                setIsValid(true)
                const last_event = selectedOption.event_pre_registration.length - 1;
                if (selectedOption.event_pre_registration[last_event]) {
                  setIdEvent(selectedOption.event_pre_registration[last_event].id)
                  setStartDate(new Date(selectedOption.event_pre_registration[last_event].start_date).getTime())
                  setEndDate(new Date(selectedOption.event_pre_registration[last_event].end_date).getTime())
                  setYear(new Date(selectedOption.event_pre_registration[last_event].end_date).getFullYear())
                } else {
                  props.setIsActive(false)
                }
              }}
              getOptionValue={opt => opt.inep_id}
              getOptionLabel={opt => opt.name}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        className={`${classes.marginTop} ${classes.marginButtom}`}
        justifyContent="center"
        alignItems="center"
        container
        direction="row"
      >
        <Grid item xs={6}>
          <ButtonPurple
            type="button"
            onClick={onButton}
            className="t-button-primary"
            title="Iniciar"
            disabled={!isValid}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Start;
