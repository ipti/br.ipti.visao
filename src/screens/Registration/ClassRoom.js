import { FormControl, FormLabel } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext } from "react";
import Select from "react-select";
import homeImg from "../../assets/images/Pessoas.png";
import { ButtonPurple } from "../../components/Buttons";
import { RegistrationContext } from "../../containers/Registration/Context/context";
import styles from "./styles";
import { useState } from "react";

const useStyles = makeStyles(styles);

const customStyles = {
    control: base => ({
      ...base,
      height: "60px",
      minHeight: "60px",
      fontFamily: "Roboto, Helvetica, Arial, sans-serif"
    }),
    menu: base => ({
      ...base,
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    })
  };
const Classroom = props => {
    const classes = useStyles();
    const [isValid, setIsValid] = useState(false)
    const { school, idClassRoom, setIdClassroom } = useContext(RegistrationContext);

    if(!school) return null

    const onButton = () => {
        props.next('2', {
            classroom: idClassRoom
        })
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
                        Escolha a turma <br /> e clique no botão
                        abaixo
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <FormControl
                        component="fieldset"
                        className={classes.formControl}
                    >
                        <FormLabel style={{display: 'flex', flexDirection: 'row',justifyContent: "start"}}  >Turma *</FormLabel>
                        <Select
                            styles={customStyles}
                            className="basic-single"
                            classNamePrefix="select"
                            placeholder="Selecione a Turma"
                            value={props?.values?.classroom}
                            options={school.classroom}
                            onChange={selectedOption => {
                                 setIdClassroom(selectedOption.id)
                                 setIsValid(true)
                            }}
                            getOptionValue={opt => opt.name + ' - ' + opt.school_year}
                            getOptionLabel={opt => opt.name + ' - ' + opt.school_year}
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid
                className={`${classes.marginTop} ${classes.marginButtom}`}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={6}>
                    <ButtonPurple
                        type="button"
                        className="t-button-primary"
                        onClick={onButton}
                        title="Continuar"
                        disabled={!isValid}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default Classroom;