import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import LockOpen from "@material-ui/icons/LockOpen";
import PersonOutline from "@material-ui/icons/PersonOutline";
import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

import { ButtonPurple } from "../../components/Buttons";

import handleLogin from "../../controller/login/auth";
import styles from "./styles";

import { useHistory } from "react-router";
import { Padding, Row } from "../../styles/style";

import logo from "../../assets/images/logo.svg";


const useStyles = makeStyles(styles);

const Login = props => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className="row align-items--center">
      <div className={classes.contentLeft}>
        <div className={classes.divBlue} />
        <div className={classes.divLupas} />

        {/* <img className={classes.margin} src={TagImage} alt=""></img> */}
        <Grid className={classes.divLogin} >
          <Grid>
            <Grid>
              <Padding />
              <Row id="center">
                <img style={{ width: "256px", padding: "8px 16px" }} alt="" src={logo} />
              </Row>
              <h1 className={classes.textTitle}>
                Bem-Vindo (a)
              </h1>
            </Grid>
          </Grid>
          <Padding padding="16px" />
          <Formik
            initialValues={props.initialValues}
            onSubmit={(values) => { handleLogin(values.email, values.password, history) }}
            validationSchema={props.validationSchema}
            validateOnChange={false}
          >
            {props => {
              return (
                <Form className={classes.divInpus}>
                  <div>
                    <TextField
                      name="email"
                      onChange={props.handleChange}
                      variant="outlined"
                      placeholder="Email"
                      style={{ width: "100%" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonOutline className={classes.colorIcon} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <div className={classes.formFieldError}>
                      {props.errors.email}
                    </div>
                  </div>
                  <div>
                    <TextField
                      name="password"
                      onChange={props.handleChange}
                      variant="outlined"
                      type="password"
                      placeholder="Senha"
                      style={{ width: "100%" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockOpen className={classes.colorIcon} />
                          </InputAdornment>
                        ),
                        className: "t-field-text__input",
                      }}
                    />
                    <div className={classes.formFieldError}>
                      {props.errors.password}
                    </div>
                  </div>

                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    className={classes.containerMain}
                  >
                    <Grid item xs={12}>
                      <ButtonPurple
                        className={"t-button-primary"}
                        onClick={props.handleSubmit}
                        type="submit"
                        title="Entrar"
                      />
                    </Grid>
                  </Grid>
                  <Grid container direction="row">
                    <Grid
                      className={`${classes.resetPassword} ${classes.textCenter}`}
                      item
                      md={12}
                      sm={12}
                    >
                      Faça a sua matricula
                      <Link className={classes.link} to="/register">
                        clique aqui
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </Grid>
      </div>
    </div>

  );
};


export default Login;
