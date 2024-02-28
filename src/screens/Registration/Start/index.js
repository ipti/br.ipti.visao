import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Form, Formik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import logo from "../../../assets/images/logo.svg";
import { ButtonPurple } from "../../../components/Buttons";
import { RegistrationContext } from "../../../context/Registration/context";
import { Column, Padding, Row } from "../../../styles/style";
import styles from "./styles";


const useStyles = makeStyles(styles);

const Termo = () => {
  const classes = useStyles();
  const { next } = useContext(RegistrationContext);
  const matches = useMediaQuery("(max-width:600px)");

  const validationSchema = Yup.object().shape({
    check: Yup.boolean().test(
      "is-true",
      "Você precisa aceitar!",
      (value) => value === true
    ),
  });

  return (
    <div className="row align-items--center">
      {/* <div className={classes.divImage}>
                        <img className={classes.imgTagna} src={Tagna} alt="" />
                    </div> */}
      <div className={classes.formTermo}>
        <Column>
          <div>
            <Column id="center">
              <Padding padding="8px" />
              <Row id="center">
                <img
                  style={{
                    width: matches ? "100px" : "128px",
                    padding: "8px 16px",
                  }}
                  alt=""
                  src={logo}
                />
              </Row>
            </Column>
            <h1 className={classes.textTitle}>Bem-vindo, pais!</h1>
            <Padding padding={"8px"} />
            <p className={classes.textPar}>
              A triagem consiste de algumas perguntas que podem ajudar a
              identificar risco à sua visão, seguidas de um teste de acuidade
              visual.
            </p>
            <Padding />
            <Formik
              initialValues={{ check: false }}
              validationSchema={validationSchema}
              onSubmit={() => next(1, {})}
            >
              {({ values, handleChange, errors, touched }) => {
                return (
                  <Form>
                    <Row id="center">
                      <Checkbox
                        value={values}
                        name="check"
                        onChange={handleChange}
                      />
                      <Column id="center">
                        <p style={{color: errors.check && touched.check ? "red" : ""}} className={classes.textPar}>
                          Li e aceito participar
                        </p>
                      </Column>
                    </Row>
                    {errors.check && touched.check && (
                      <Row id="center">
                        <p className={classes.textPar} style={{ color: "red" }}>{errors.check}</p>
                      </Row>
                    )}
                    <Row id="center">
                      <div className={classes.boxRegister}>
                        <ButtonPurple
                          type="submit"
                          title="Continuar"
                          className="t-button-primary"
                        />
                      </div>
                    </Row>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Column>
      </div>
    </div>
  );
};

export default Termo;
