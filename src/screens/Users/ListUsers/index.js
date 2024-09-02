import React, {useState} from "react";
import { useEffect } from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Components
import { useParams } from "react-router-dom";
//import { BoxUsers } from "../../../components/Boxes/BoxUsers";
import List from "../../../components/List";

// Styles
import { useHistory } from "react-router";
import { ButtonPurple } from "../../../components/Buttons";
import { Padding, Row } from "../../../styles/style";
import color from "../../../styles/colors";

import api from '../../../services/api';

const ListUserScreen = (props) => {

  const history = useHistory();
  const { data } = props;

  const [usersList, setUsers] = useState([])

  useEffect(() => {
    const callFunction = async () => {
        try {
          //const result = await api.get('https://us-central1-br-ipti-visao.cloudfunctions.net/usersList');
          const result = await api.get('http://127.0.0.1:5001/br-ipti-visao/us-central1/usersList');
          setUsers(result.data);
          console.log(result.data);
          
        } catch (error) {
          console.error('Error calling function:', error);
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
                  
            </TableRow>
          </TableHead>
          <TableBody>
            {usersList.map((user) => (
              <TableRow
                key={user.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{user?.name}</TableCell>
                <TableCell align="center">{user?.email}</TableCell>
                <TableCell align="center">{user?.role}</TableCell>
                    
              </TableRow>
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