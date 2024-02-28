import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Components
import { ButtonPurple } from "../../../components/Buttons";

import stylesBase from "../../../styles";

// Styles
import { CircularProgress } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { Form, Formik } from "formik";
import { useContext } from "react";
import { useHistory } from "react-router";
import { FormRegistrationContext } from "../../../context/Classroom/FormOphthalmological/context";
import { Column, Padding, Row } from "../../../styles/style";
import styles from "../styles";
import TabsRegister from "./TabBar";

const useStyles = makeStyles(styles);

const Home = props => {
  const classes = useStyles();

  const history = useHistory()

  const { oneRegistration, handleUpdate, initialValues, points } = useContext(FormRegistrationContext)
console.log(oneRegistration)
  return (
    <>
      <ArrowBack onClick={() => { history.goBack() }} style={{ cursor: "pointer" }} />
      <Grid className={classes.boxTitlePagination} container direction="row">
        <h2>Dados do aluno</h2>
      </Grid>
      <h1 style={{ margin: 0, padding: 0 }}>Pontos somados: {points()}</h1>
      <Padding />
      <div className={classes.priority} style={{
        background: points() < 5 ? stylesBase.colors.green : (points() >= 5 && points() < 9) ? stylesBase.colors.yellow : points() >= 10 ? stylesBase.colors.red : ""
      }}>
        <h4 style={{ padding: "8px", margin: "0" }}>{
          points() < 5 ? "Prioridade minima" : (points() >= 5 && points() < 9) ? "Prioridade média" : points() >= 10 ? "Prioridade máxima" : ""
        }</h4>
      </div>
      <Padding padding="16px" />
      {oneRegistration ? <Formik
        initialValues={initialValues}
        onSubmit={values => {
          handleUpdate(values)
        }}>
        {({ values, handleChange, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Grid item style={{ width: "100%" }} md={3}>
                <ButtonPurple
                  className="t-button-primary"
                  title="Salvar"
                  type="submit"
                />
              </Grid>
              <Padding padding="16px" />
              <TabsRegister values={values} handleChange={handleChange} />
            </Form>
          )
        }}
      </Formik> :
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
