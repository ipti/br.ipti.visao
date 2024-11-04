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

import * as Yup from "yup";

const useStyles = makeStyles(styles);

const Home = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { oneRegistration, handleUpdate, initialValues, points, activeIndex } =
    useContext(FormRegistrationContext);

  const validationSchemaPerson = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    sex: Yup.string().required("Campo obrigatório"),
    colorRace: Yup.string().required("Campo obrigatório"),
    birthday: Yup.string().required("Campo obrigatório"),
    cpf: Yup.string().required("Campo obrigatório"),
    zone: Yup.string().required("Campo obrigatório"),
  });

  const validationSchemaQuestionario = Yup.object().shape({
    filhoOculos: Yup.string().required("Campo obrigatório"),
    horasUsoAparelhosEletronicos: Yup.string().required("Campo obrigatório"),
    horasAtividadesAoArLivre: Yup.string().required("Campo obrigatório"),
  });

  const validationSchemaTriagem = Yup.object().shape({
    acuidadeTriagemDireito: Yup.string().required("Campo obrigatório"),
    acuidadeTriagemEsquerdo: Yup.string().required("Campo obrigatório"),
    testCover: Yup.string().required("Campo obrigatório"),
    testMovimentoOcular: Yup.string().required("Campo obrigatório"),
    testManchaBranca: Yup.string().required("Campo obrigatório"),
  });

  const validationSchemaConsulta = Yup.object().shape({
    nomeMedico: Yup.string().required("Campo obrigatório"),
    crmMedico: Yup.string().required("Campo obrigatório"),
    dataConsulta: Yup.string().required("Campo obrigatório"),
    jaRealizouConsultaAntes: Yup.string().required("Campo obrigatório"),
    refracaoEsfericoOlhoDireito: Yup.string().required("Campo obrigatório"),
    refracaoCilindricoOlhoDireito: Yup.string().required("Campo obrigatório"),
    refracaoEixoOlhoDireito: Yup.string().required("Campo obrigatório"),
    refracaoEquivalenteEsfericoOlhoDireito:
      Yup.string().required("Campo obrigatório"),
    refracaoDpOlhoDireito: Yup.string().required("Campo obrigatório"),
    refracaoEsfericoOlhoEsquerdo: Yup.string().required("Campo obrigatório"),
    refracaoCilindricoOlhoEsquerdo: Yup.string().required("Campo obrigatório"),
    refracaoEixoOlhoEsquerdo: Yup.string().required("Campo obrigatório"),
    refracaoEquivalenteEsfericoOlhoEsquerdo:
      Yup.string().required("Campo obrigatório"),
    refracaoDpOlhoEsquerdo: Yup.string().required("Campo obrigatório"),
    //anamnese: Yup.string().required("Campo obrigatório"),
    refracaoEstaticaEsfericoOlhoDireito:
      Yup.string().required("Campo obrigatório"),
    refracaoEstaticaCilindricoOlhoDireito:
      Yup.string().required("Campo obrigatório"),
    refracaoEstaticaEixoOlhoDireito: Yup.string().required("Campo obrigatório"),
    refracaoEstaticaAcuidadeVisualOlhoDireito:
      Yup.string().required("Campo obrigatório"),
    refracaoEstaticaEsfericoOlhoEsquerdo:
      Yup.string().required("Campo obrigatório"),
    refracaoEstaticaCilindricoOlhoEsquerdo:
      Yup.string().required("Campo obrigatório"),
    refracaoEstaticaEixoOlhoEsquerdo:
      Yup.string().required("Campo obrigatório"),
    refracaoEstaticaAcuidadeVisualOlhoEsquerdo:
      Yup.string().required("Campo obrigatório"),
    biomicroscopiaOd: Yup.string().required("Campo obrigatório"),
    biomicroscopiaOs: Yup.string().required("Campo obrigatório"),
    fundoscopiaOd: Yup.string().required("Campo obrigatório"),
    fundoscopiaOs: Yup.string().required("Campo obrigatório"),
    motilidadeOcular: Yup.string().required("Campo obrigatório"),
    diagnostico: Yup.string().required("Campo obrigatório"),
    conduta: Yup.string().required("Campo obrigatório"),
    precisaOculos: Yup.string().required("Campo obrigatório"),
    proximaConsulta: Yup.string().required("Campo obrigatório"),
  });

  const validationSchemaReceita = Yup.object().shape({
    receitaEsfericoOlhoDireito: Yup.string().required("Campo obrigatório"),
    receitaCilindricoOlhoDireito: Yup.string().required("Campo obrigatório"),
    receitaEixoOlhoDireito: Yup.string().required("Campo obrigatório"),
    receitaEsfericoOlhoEsquerdo: Yup.string().required("Campo obrigatório"),
    receitaCilindricoOlhoEsquerdo: Yup.string().required("Campo obrigatório"),
    receitaEixoOlhoEsquerdo: Yup.string().required("Campo obrigatório"),
  });

  const validationSchemaOculos = Yup.object().shape({
    dataEntregaOculos: Yup.string().required("Campo obrigatório"),
    responsavelEntregaOculos: Yup.string().required("Campo obrigatório"),
  });

  const validationSchemas = {
    0: validationSchemaPerson,
    1: validationSchemaQuestionario,
    2: validationSchemaTriagem,
    3: validationSchemaConsulta,
    4: validationSchemaReceita,
    5: validationSchemaOculos,
  };

  return (
    <>
      <ArrowBack
        onClick={() => {
          history.goBack();
        }}
        style={{ cursor: "pointer" }}
      />
      <Grid className={classes.boxTitlePagination} container direction="row">
        <h2>Dados do aluno</h2>
      </Grid>
      <h1 style={{ margin: 0, padding: 0 }}>Pontos somados: {points()}</h1>
      <Padding />
      <div
        className={classes.priority}
        style={{
          background:
            points() < 5
              ? stylesBase.colors.green
              : points() >= 5 && points() < 9
              ? stylesBase.colors.yellow
              : points() >= 10
              ? stylesBase.colors.red
              : "",
        }}
      >
        <h4 style={{ padding: "8px", margin: "0" }}>
          {points() < 5
            ? "Prioridade minima"
            : points() >= 5 && points() < 9
            ? "Prioridade média"
            : points() >= 10
            ? "Prioridade máxima"
            : ""}
        </h4>
      </div>
      <Padding padding="16px" />
      {oneRegistration ? (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemas[activeIndex]}
          validateOnChange={true}
          onSubmit={(values) => {
            handleUpdate(values);
          }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            setFieldValue,
            errors,
            touched,
          }) => {
            console.log("values", errors);
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

                <TabsRegister
                  setFieldValue={setFieldValue}
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  touched={touched}
                />
              </Form>
            );
          }}
        </Formik>
      ) : (
        <Column id="center">
          <Row id="center">
            <CircularProgress />
          </Row>
        </Column>
      )}
    </>
  );
};

export default Home;
