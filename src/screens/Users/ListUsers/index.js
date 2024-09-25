import React, {useState} from "react";
import { useEffect } from "react";

import {deleteUser} from "../../../controller/user/deleteUser";

// Material UI
import Grid from "@material-ui/core/Grid";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Styles
import { useHistory } from "react-router";
import { ButtonPurple } from "../../../components/Buttons";
import { Padding, Row } from "../../../styles/style";
import { Delete } from "@material-ui/icons";
import color from "../../../styles/colors";

import Swal from "sweetalert2";
import styles from "../../../styles";
import image from "../../../assets/images/Atenção-img.png";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import api from '../../../services/api';

const ListUserScreen = (props) => {

  const history = useHistory();

  const [usersList, setUsers] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const deleteUsers = (e, id) => {

    e.stopPropagation()
    if (id) {


      return Swal.fire({
        title: "Excluir usuário?",
        text: "Essa ação é irreversível não pode ser desfeita",
        imageUrl: image,
        imageHeight: 250,
        showCancelButton: true,
        confirmButtonColor: styles.colors.colorsBaseProductNormal,
        cancelButtonColor: styles.colors.colorsBaseCloudNormal,
        confirmButtonText: 'Aceitar',
        reverseButtons: true,
        cancelButtonText: `<div style="color:black" >Cancelar</div>`
      }).then((result) => {
        if (result.isConfirmed) {
          deleteUser(id, history)
          setUsers(usersList.filter(user => user.id !== id))
        }
      })
    }
  }

  useEffect(() => {
    const callFunction = async () => {
        try {
          const result = await api.get('https://us-central1-br-ipti-visao.cloudfunctions.net/usersList');
          setUsers(result.data);
          console.log(result.data);
        } catch (error) {
          console.error('Error calling function:', error);
        } finally {
          setIsFetching(false);
        } 
    };
    callFunction();
  }, [])


  const usuarios = () => {

    return(
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: color.blueMedium}}>
            <TableRow>
              <TableCell align="left" sx={{ fontWeight: 'bold' }} >Nome</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }} >Email</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }} >Tipo de usuário</TableCell>
              <TableCell align="center"></TableCell>
                  
            </TableRow>
          </TableHead>
          <TableBody>
            {
            isFetching ? (
              <tr>
                  <TableCell><Skeleton height={20} /></TableCell>     
                  <TableCell><Skeleton height={20} /></TableCell>
                  <TableCell><Skeleton height={20} /></TableCell>
                  <TableCell><Skeleton height={20} /></TableCell>
              </tr>
            ) : (usersList.map((user) =>
              (
                <TableRow
                  key={user.uid}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">{user?.name}</TableCell>
                  <TableCell align="center">{user?.email}</TableCell>
                  <TableCell align="center">
                    {user?.role === 1 ? "Administrador" :
                    user?.role === 2 ? "Triador" :
                    user?.role === 3 ? "Médico" :
                    "Desconhecido"}
                  </TableCell>
                  <TableCell align="center">
                    <Delete style={{ cursor: "pointer" }} onClick={e => deleteUsers(e, user?.id)} />
                  </TableCell>

                </TableRow>
              )
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
    )

  };

  return (
    <>
      <Row id="space-between" style={{ width: "100%", justifyContent: "space-between" }}>
        <h1>Área de Usuários</h1>
      </Row>
      <Padding padding="8px" />
      <Grid
        container
        direction="row"
        style={{ marginBottom: "8px" }}
      >
        <Grid item md={3} sm={2}>
          <ButtonPurple
            className="t-button-primary"
            onClick={() => history.push(`/usuario/criar`)}
            title={"Criar novo usuário"}
          />
        </Grid>
        
      </Grid>
      <Padding padding="8px" />
      <Grid container direction="row" spacing={4}>
      {usuarios()}
      </Grid>
  
    </>
  );
}

export default ListUserScreen;