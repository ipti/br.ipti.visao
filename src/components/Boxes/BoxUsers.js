import { makeStyles } from "@material-ui/core/styles";

import React from "react";
import { useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { Clear } from "@material-ui/icons";
import Swal from "sweetalert2";
import image from "../../assets/images/Atenção-img.png";
import styled from "../../styles";
import styles from "./styles";
import { deleteRegistration } from "../../controller/registration/deleteRegistration";

const useStyles = makeStyles(styles);

const BoxUsers = props => {
  const { name, md, sm, xs, id } = props;

  const classes = useStyles();

  const deleteUser = (e, id) => {
    e.stopPropagation()
    if (id) {

      return Swal.fire({
        title: "Excluir usuário?",
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
          deleteRegistration(id) //Todo: fazer o delete de usuario
        }
      })
    }
  }

  return (
    <Grid item md={md ? md : 4} sm={sm ? sm : 4} xs={xs ? xs : 12}>
      <Grid className={`${classes.boxStudentConfirmation}`}>
        <div className={`${classes.floatLeft}`}>
          <span className={classes.subtitleStudent}>Usuário - colocar o tipo do usuário</span>
          <Clear onClick={e => deleteUser(e, id)} style={{ cursor: 'pointer' }} /> 
        {/* //Todo: fazer o delete de usuario */}
        </div>
        <div className={classes.iconStudent}>
        
          <div title={name} style={{ margin: "auto 10px" }} className={`${classes.title}`}>
            {name}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default BoxUsers;
