
import { makeStyles } from "@material-ui/core/styles";

import React from "react";
import { useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { Clear } from "@material-ui/icons";
import Swal from "sweetalert2";
import image from "../../assets/images/Atenção-img.png";
import IconActive from "../../assets/images/activeRegistration.svg";
import IconNotActive from "../../assets/images/notactiveRegistration.svg";
import IconClasMedia from "../../assets/images/iconClasMedia.svg"
import styled from "../../styles";
import styles from "./styles";

const useStyles = makeStyles(styles);

const BoxRegistration = props => {
  const { name, link, md, sm, xs, student_fk, id, points } = props;



  const classes = useStyles();
  const history = useHistory();

  const toLink = (e) => {

    history.push(link)


  }

  const deletePreRegistration = (e, id) => {
    e.stopPropagation()
    if (id) {


      return Swal.fire({
        title: "Excluir pré matricula?",
        text: "Essa ação é irreversível não pode ser desfeita",
        imageUrl: image,
        imageHeight: 250,
        showCancelButton: true,
        confirmButtonColor: styled.colors.colorsBaseProductNormal,
        cancelButtonColor: styled.colors.colorsBaseCloudNormal,
        confirmButtonText: 'Aceitar',
        reverseButtons: true,
        cancelButtonText: `<div style="color:black" >Cancelar</div>`
      }).then((result) => {
        if (result.isConfirmed) {
          // requestDeletePreRegistrationMutation.mutate(id)
        }
      })
    }
  }

  return (
    <Grid item md={md ? md : 4} sm={sm ? sm : 4} xs={xs ? xs : 12}>
      <Grid onClick={toLink} className={`${classes.boxStudentConfirmation}`}>
        <div className={`${classes.floatLeft} ${classes.nameStudent}`}>
          <span className={classes.subtitleStudent}>Aluno - {student_fk ? "Rematricula" : "Matricula"}</span>
          <Clear onClick={e => deletePreRegistration(e, id)} style={{ cursor: 'pointer' }} />
        </div>
        <div className={classes.iconStudent}>
          <img src={points < 5 ? IconActive : (points >= 5 && points < 9) ? IconClasMedia : points >= 10 ? IconNotActive : ""} alt="Icone de aluno" />
          <div title={name} style={{ margin: "auto 10px" }} className={`${classes.title}`}>
            {name}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default BoxRegistration;
