import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import FinishImg from "../../assets/images/illustration-success.png";
import ButtonGreen from "../../components/Buttons/ButtonGreen";
import styles from "./styles";

const useStyles = makeStyles(styles);

const Finish = props => {
  const classes = useStyles();

  return (
    <>
      <Grid
        className={`${classes.contentStart} ${classes.contentBond}`}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <img src={FinishImg} alt="" />
        </Grid>
        <Grid item xs={12}>
          <p>
            Clique no botão,
            <br /> Para finalizar a matricula
          </p>
        </Grid>
      </Grid><div style={{ margin: 'auto', marginTop: '20px', width: '300px' }}>
        <ButtonGreen
          className="t-button-primary"
          type="button"
          onClick={() => props.onSubmit()}
          title="Finalizar"
        />
      </div>
      <Grid
        className={`${classes.contentStart} ${classes.contentBond}`}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid className={classes.boxNumberRegistration} item xs={10}>
          {props?.registration}
        </Grid>
      </Grid>
    </>
  );
};

export default Finish;
