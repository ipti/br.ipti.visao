import DateFnsUtils from "@date-io/date-fns";
import {
  FormControl,
  FormLabel
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles
} from "@material-ui/core/styles";
import {
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import brLocale from "date-fns/locale/pt-BR";
import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { ButtonPurple } from "../../components/Buttons";
import handleSubmitClassroom from "../../controller/classroom/createClassroom";
import styles from "./styles";
import { getIdSchool } from "../../services/auth";
import { ArrowBack } from "@material-ui/icons";


const useStyles = makeStyles(theme => styles);



const Create = () => {
  const classes = useStyles();

  const history = useHistory()


  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .nullable()
      .required("Campo obrigatório!"),
  });

  const initialValue = {
    name: "",
    year: 2023,
    school_fk: getIdSchool()
  }

  return (
    <>
      <ArrowBack onClick={() => { history.goBack() }} style={{ cursor: "pointer" }} />
      <Grid container direction="row">

        <Grid
          className={classes.boxTitlePagination}
          item
          md={12}
          sm={12}
          xs={12}
        >
          <h1 className={`${classes.title} ${classes.floatLeft}`}>
            {`Adicionar Turma`}
          </h1>

        </Grid>
      </Grid>
      <Formik
        initialValues={initialValue}
        onSubmit={(values) => handleSubmitClassroom(values, history)}
        validateOnChange={false}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({ errors, values, touched, handleChange, handleSubmit, setFieldValue }) => {
          return (
            <Form>
              <MuiPickersUtilsProvider locale={brLocale} utils={DateFnsUtils}>
                <Grid item md={12} sm={12}>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item md={5} sm={5}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <FormLabel>Nome*</FormLabel>
                        <TextField
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          id="outlined-size-small"
                          variant="outlined"
                          required
                          className={classes.textField}
                        />
                        <div className={classes.formFieldError}>
                          {errors.name}
                        </div>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  className={classes.marginButtom}
                  container
                  direction="row"
                  style={{ marginTop: '30px' }}
                >
                  <Grid item md={2} sm={2}>
                    <ButtonPurple
                      className="t-button-primary"
                      type="submit"
                      title={"Salvar"}
                    />
                  </Grid>
                </Grid>
              </MuiPickersUtilsProvider>
            </Form >
          );
        }}
      </Formik >
    </>
  );
};

Create.propTypes = {
  year: PropTypes.string
};

export default Create;
