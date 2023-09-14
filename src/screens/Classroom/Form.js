import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";

// Third party

// Components
import { BoxRegistration } from "../../components/Boxes";
import List from "../../components/List";

// Styles
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router";
import { Padding } from "../../styles/style";

const Create = props => {

  const history = useHistory()

  const {
    data,
    baseLink,
  } = props;


  const registrations = () => {
    const registrationList = data ?? [];


    return registrationList.map((registration, index) => {
      return (
        <BoxRegistration
          link={`${baseLink}/${registration?.id}`}
          key={index}
          name={registration?.object.name}
          sex={registration?.sex}
          id={registration?.id}
          md={4}
          sm={4}
          unavailable={registration?.unavailable}
        />
      );
    });
  };

  return (
    <>
      <ArrowBack onClick={() => { history.goBack() }} style={{ cursor: "pointer" }} />
        <h1>{data && data.name}</h1>
        <h2>Alunos</h2>
        <Padding padding="16px"/>
      <Grid container direction="row" spacing={4}>
        <List items={registrations()}>
          <Grid item xs={12}>
            <Alert variant="outlined" severity="warning">
              A turma não possui matrículas
            </Alert>
          </Grid>
        </List>
      </Grid>
    </>
  );
};

export default Create;
