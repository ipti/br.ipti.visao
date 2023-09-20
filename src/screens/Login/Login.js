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
import TagImage from "../../assets/images/taglogin.svg"

import styles from "./styles";
import handleLogin from "../../controller/login/auth";

import { useHistory } from "react-router";

const useStyles = makeStyles(styles);

const Login = props => {
  const classes = useStyles();
  const history = useHistory()

  return (
    <Grid className={classes.root}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={classes.topBar} style={{ backgroundColor: "#667DF4" }} />
        <div className={classes.topBar} style={{ backgroundColor: "#F45A5A" }} />
        <div className={classes.topBar} style={{ backgroundColor: "#66D654" }} />
        <div className={classes.topBar} style={{ backgroundColor: "#EADA48" }} />
      </div>
      <img className={classes.margin} src={TagImage} alt=""></img>
      <Grid className={classes.divLogin} >
        {/* <div className={classes.marginMobile20} /> */}
        <Grid>
          <Grid>
            <p className={classes.titleLogin}>Matricula Online </p>
            <p className={classes.subTitleLogin}>Entre com as suas credenciais </p>
          </Grid>
        </Grid>
        {/* <div className={classes.marginMobile} /> */}
        <Formik
          initialValues={props.initialValues}
          onSubmit={(values) => {handleLogin(values.email, values.password, history)}}
          validationSchema={props.validationSchema}
          validateOnChange={false}
        >
          {props => {
            return (
              <Form className={classes.divInpus}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                // className={classes.containerMain}
                >
                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      onChange={props.handleChange}
                      variant="outlined"
                      placeholder="Email"
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
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  className={classes.containerMain}
                >
                  <Grid item xs={12}>
                    <TextField
                      name="password"
                      onChange={props.handleChange}
                      variant="outlined"
                      type="password"
                      placeholder="Senha"
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
                  </Grid>
                </Grid>
                {/* {
                  !isValid ? <Grid
                    className={`${classes.boxError} ${classes.textCenter}`}
                    item
                    md={12}
                    sm={12}
                  >
                    <div>
                      {!isValid ? "Usuário ou senha inválido" : ""}
                    </div>
                  </Grid> : null
                } */}
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
    </Grid>

  );
};


export default Login;
