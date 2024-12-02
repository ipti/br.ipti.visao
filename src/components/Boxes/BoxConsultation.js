
import { makeStyles } from "@material-ui/core/styles";

import React from "react";
import { useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import IconActive from "../../assets/images/activeRegistration.svg";
import IconNotActive from "../../assets/images/notactiveRegistration.svg";
import IconClasMedia from "../../assets/images/iconClasMedia.svg"

import styles from "./styles";


const useStyles = makeStyles(styles);

const BoxConsultation = props => {
  const { name, link, md, sm, xs, turma, points, birthday } = props;

  const classes = useStyles();
  const history = useHistory();

  const toLink = (e) => {
    history.push(link)
  }


  return (
    <Grid item md={md ? md : 4} sm={sm ? sm : 4} xs={xs ? xs : 12}>
      <Grid onClick={toLink} className={`${classes.boxStudentConfirmation}`}>
        <div className={`${classes.floatLeft} ${classes.nameStudent}`}>
          <span className={classes.subtitleStudent}>Aluno - {turma}</span>
        </div>
        <div className={classes.iconStudent}>
          <img src={points < 5 ? IconActive : (points >= 5 && points < 9) ? IconClasMedia : points >= 10 ? IconNotActive : ""} alt="Icone de aluno" />
          <div title={name} style={{ margin: "auto 10px" }} className={`${classes.title}`}>
            {name}
          </div>
          <p birthday={birthday} > Nascimento: {birthday} </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default BoxConsultation;
