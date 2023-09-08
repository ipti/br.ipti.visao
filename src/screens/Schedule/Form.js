import DateFnsUtils from "@date-io/date-fns";
import {
  FormControl,
  FormLabel
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles
} from "@material-ui/core/styles";
import {
  KeyboardDatePicker, MuiPickersUtilsProvider
} from "@material-ui/pickers";
import brLocale from "date-fns/locale/pt-BR";
import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { ButtonPurple } from "../../components/Buttons";
import Loading from "../../components/Loading/CircularLoadingButtomActions";
import styles from "./styles";

const useStyles = makeStyles(theme => styles);

const Create = props => {
  const classes = useStyles();
  const {
    initialValues,
    handleSubmit,
    validationSchema,
    isEdit,
    loadingIcon,
  } = props;


  return (
    <>
      <Grid container direction="row">
        <Grid
          className={classes.boxTitlePagination}
          item
          md={12}
          sm={12}
          xs={12}
        >
          <h1 className={`${classes.title} ${classes.floatLeft}`}>
            {`Cronograma - ${isEdit ? "Editar" : "Adicionar"}`}
          </h1>

        </Grid>
      </Grid>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
        enableReinitialize
      >
        {props => {


          return (
            <Form>
              <MuiPickersUtilsProvider locale={brLocale} utils={DateFnsUtils}>
                <Grid
                  className={classes.marginButtom}
                  container
                  direction="column"
                >
                  <Grid item md={4} sm={4}>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormLabel>Ano de Referência*</FormLabel>
                      <KeyboardDatePicker
                        disableToolbar
                        name="year"
                         value={props.values.year}
                        inputVariant="outlined"
                        format="yyyy"
                        views={["year"]}
                        margin="normal"
                        required
                        onChange={value => {
                            props.setFieldValue("year", value ? value : null)

                        }
                        }
                        // openTo="year"
                        // KeyboardButtonProps={{
                        //   "aria-label": "Alterar data"
                        // }}
                      />
                      <div className={classes.formFieldError}>
                        {props.errors.year}
                      </div>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid
                  className={classes.marginButtom}
                  container
                  direction="row"
                  spacing={2}
                >
                  <Grid item md={4} sm={4}>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormLabel>Data Início*</FormLabel>
                      <KeyboardDatePicker
                        disableToolbar
                        name="start_date"
                        value={props.values.start_date}
                        inputVariant="outlined"
                        format="dd/MM/yyyy"
                        margin="normal"
                        required
                        onChange={value =>
                          props.setFieldValue("start_date", value)
                        }
                        KeyboardButtonProps={{
                          "aria-label": "Alterar data"
                        }}
                      />
                      <div className={classes.formFieldError}>
                        {props.errors.start_date}
                      </div>
                    </FormControl>
                  </Grid>
                  <Grid item md={4} sm={4}>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormLabel>Data Fim*</FormLabel>
                      <KeyboardDatePicker
                        disableToolbar
                        name="end_date"
                        value={props.values.end_date}
                        inputVariant="outlined"
                        format="dd/MM/yyyy"
                        margin="normal"
                        required
                        onChange={value =>
                          props.setFieldValue("end_date", value)
                        }
                        KeyboardButtonProps={{
                          "aria-label": "Alterar data"
                        }}
                      />
                      <div className={classes.formFieldError}>
                        {props.errors.end_date}
                      </div>
                    </FormControl>
                  </Grid>
                </Grid>

                {/* <Grid item md={12} sm={12}>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    className={`${classes.marginButtom}`}
                  >
                    <Grid item md={6} sm={6}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <FormLabel>Projetos</FormLabel>
                        <FormControlLabel
                          label="Criar em todas as projetos"
                          control={<Checkbox value={allSchool} onChange={e => setAllSchool(e.target.checked)} />}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid> */}
                <Grid
                  className={`${classes.marginButtom}`}
                  container
                  direction="row"
                >
                  <Grid item md={2} sm={2}>
                    {!loadingIcon ? (
                      <ButtonPurple
                        className="t-button-primary"
                        onClick={props.handleSubmit}
                        type="submit"
                        title={isEdit ? "Editar" : "Salvar"}
                      />
                    ) : (
                      <Loading />
                    )}
                  </Grid>
                </Grid>
              </MuiPickersUtilsProvider>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

Create.propTypes = {
  year: PropTypes.string
};

export default Create;
