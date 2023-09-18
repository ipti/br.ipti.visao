import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Components
import { ButtonPurple } from "../../../components/Buttons";

// Styles
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router";
import styles from "../styles";
import TabsRegister from "./TabBar";
import { useContext } from "react";
import { FormRegistrationContext } from "../../../context/Classroom/FormOphthalmological/context";
import { Column, Padding, Row } from "../../../styles/style";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(styles);

const Home = props => {
  const classes = useStyles();

  const history = useHistory()

  const { oneRegistration } = useContext(FormRegistrationContext)

  return (
    <>
      <ArrowBack onChange={() => { history.goBack() }} style={{ cursor: "pointer" }} />
      <Grid className={classes.boxTitlePagination} container direction="row">
        <h2>Dados do aluno</h2>
      </Grid>
      <Grid item style={{ width: "100%" }} md={3}>
        <ButtonPurple
          className="t-button-primary"
          type="button"
          title="Salvar"
        />
      </Grid>
      <Padding padding="16px" />
      {oneRegistration ? <TabsRegister /> :
        <Column id="center">
          <Row id="center">
            <CircularProgress />
          </Row>
        </Column>
      }

    </>
  );
};

export default Home;
