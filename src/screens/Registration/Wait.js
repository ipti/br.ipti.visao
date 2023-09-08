import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import homeImg from "../../assets/images/Caderno.png";
import { ButtonPurple } from "../../components/Buttons";
import styles from "./styles";

const useStyles = makeStyles(styles);

const Wait = props => {
  const classes = useStyles();

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
          <img className={classes.imageRegistration} src={homeImg} alt="Ilustração" />
        </Grid>
        <Grid item xs={12}>
          <h1>Matrícula Online</h1>
          <p>Não estamos em período de matrícula. <br /> Consulte o calenário</p>
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
            onClick={()=> props.setIsActive(true)}
            className="t-button-primary"
            title="Voltar"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Wait;
