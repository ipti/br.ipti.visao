import React, {useState} from "react";
//import { useEffect } from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";

// Third party

// Components
import { useParams } from "react-router-dom";
import { BoxUsers } from "../../../components/Boxes/BoxUsers";
import List from "../../../components/List";

// Styles
import { useHistory } from "react-router";
import { ButtonPurple } from "../../../components/Buttons";
import { Padding, Row } from "../../../styles/style";

import api from '../../../services/api';


const ListUserScreen = (props) => {

  const history = useHistory();

  const { data, user } = props;

  const { id } = useParams();

  const [usersList, setUsers] = useState([])

  // useEffect(() => {
  //   const callFunction = async () => {
  //       try {
  //         const result = await api.get('https://us-central1-br-ipti-visao.cloudfunctions.net/usersList');
  //         setUsers(result.data);
  //       } catch (error) {
  //         console.error('Error calling function:', error);
  //       } 
  //   };
  //     callFunction();
  // }, [])




  const usuarios = () => {

    //const usersList = data ?? [];

    return usersList.map((user, index) => {

      console.log(user)

      return (
        <BoxUsers
          key={index}
          name={user.name}
          id={user.id}
        />
      );
      

    });

  };

  return (
    <>
      <Row id="space-between" style={{ width: "100%", justifyContent: "space-between" }}>
        <h1>Área de Usuários</h1>
      </Row>
      <Padding padding="16px" />
      <Grid
        // className={classes.marginButtom}
        container
        direction="row"
        style={{ marginBottom: "16px" }}
      >
        <Grid item md={3} sm={2}>
          <ButtonPurple
            className="t-button-primary"
            onClick={() => history.push(`/usuario/criar`)}
            title={"Criar novo usuário"}
          />
        </Grid>

        
      </Grid>
      <Grid container direction="row" spacing={4}>
        <List items={usuarios()}>
          <Grid item xs={12}>
            <Alert variant="outlined" severity="warning">
              Usuários não encontrados
            </Alert>
          </Grid>
        </List>
      </Grid>
    </>
  );
}

export default ListUserScreen;