import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import styles from "../../../styles";
import { Column, Padding } from "../../../styles/style";


import { TextField } from "@mui/material";
import { Form, Formik } from "formik";

import { ButtonPurple } from "../../../components/Buttons";
import SelectUi from "../../../ui/Select";
import { createUser } from "../../../controller/user/createUser";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles(styles);

const CreateUserScreen = () => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div>
      <ArrowBack onClick={() => { history.goBack() }} style={{ cursor: "pointer" }} />
      <h1>Criar usuário</h1>
      <Padding />
      <Formik initialValues={{ name: "", email: "", password: "", role: "" }} onSubmit={(values) => createUser(values)}>
        {({ values, handleChange, setFieldValue }) => {
          return (
            <Form>
              <Grid item style={{ width: "100%" }} md={3}>
                <ButtonPurple
                  className="t-button-primary"
                  title="Criar"
                  type="submit"
                />
              </Grid>
              <Grid container>
                <Grid item md={6}>
                  <p className={classes.label}>Nome</p>
                  <Column>
                    <TextField
                      value={values.name}
                      label="Nome"
                      name="name"
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Column>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={6}>
                  <p className={classes.label}>Email</p>
                  <Column>
                    <TextField
                      value={values.email}
                      label="Email"
                      name="email"
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Column>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={6}>
                  <p className={classes.label}>Tipo de Usuário</p>
                  <Column>
                    <SelectUi options={[{name: "Admin", id: 1}, {name: "Triador", id: 2}, {name: "Médico", id: 3}]} handleChange={(values) => setFieldValue("role", values.id)} name={"role"} value={values.role} getOptionLabel={props => props.name} getOptionValue={props => props.id} label={"Tipo de usuário"}/>
                  </Column>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={6}>
                  <p className={classes.label}>Senha</p>
                  <Column>
                    <TextField
                      value={values.password}
                      name="password"
                      onChange={handleChange}
                      type="password"
                      placeholder="Senha"
                      style={{ width: "100%" }}
                    />
                  </Column>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateUserScreen;
