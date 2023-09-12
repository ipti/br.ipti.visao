import React, { useContext } from "react";

// Material UI
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Radio, RadioGroup, TextField } from "@material-ui/core";

import { makeStyles, withStyles } from "@material-ui/core/styles";

// Components

// Third party
import { Form, Formik } from "formik";
import * as Yup from "yup";

// Styles
import { RegistrationContext } from "../../../context/Registration/context";
import styleBase from "../../../styles";
import styles from "../styles";
import { ButtonPurple } from "../../../components/Buttons";

const useStyles = makeStyles(styles);

const PurpleRadio = withStyles({
  root: {
    "&$checked": {
      color: styleBase.colors.colorsBaseProductNormal
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);


const StepOne = () => {
  const classes = useStyles();

  const { next,dataValues } = useContext(RegistrationContext);


  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório!").min(10, 'minimo de 10 caracteres'),
    color_race: Yup.number().required("Campo obrigatório!"),
    deficiency: Yup.boolean().required("Campo obrigatório!"),
  });

 
  const initialValues = {
    name: dataValues?.name ?? '',
    color_race: dataValues?.color_race ?? '',
    deficiency:dataValues?.deficiency ?? "",
  };


  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={values => next(4 , values)}
        validationSchema={validationSchema}
        validateOnChange={false}
        enableReinitialize
      >
        {({ errors, values, touched, handleChange, handleSubmit }) => {

          const errorList = {
            name: touched.name && errors.name,
            color_race: touched.color_race && errors.color_race,
            deficiency: touched.deficiency && errors.deficiency
          };

          return (
            <Form>
              <Grid
                className={`${classes.marginTop} ${classes.contentMain}`}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                    error={errorList.name}
                  >
                    <FormLabel>Nome Completo *</FormLabel>
                    <TextField
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      variant="outlined"
                      className={classes.textField}
                      error={!!errorList.name}
                      autoComplete="off"
                    />
                    <FormHelperText>{errorList.name}</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid
                className={`${classes.contentMain}`}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                    error={errorList.deficiency}
                  >
                    <FormLabel component="legend">Possui Deficiência? *</FormLabel>
                    <RadioGroup
                      value={values.deficiency}
                      name="deficiency"
                      onChange={handleChange}
                      row
                    >
                      <FormControlLabel
                        value={'true'}
                        name="deficiency"
                        control={<PurpleRadio />}
                        label="Sim"
                      />
                      <FormControlLabel
                        value={'false'}
                        name="deficiency"
                        control={<PurpleRadio />}
                        label="não"
                      />
                    </RadioGroup>
                    <FormHelperText>{errorList.deficiency}</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid
                className={`${classes.marginTop} ${classes.marginButtom}`}
                justifyContent="center"
                alignItems="center"
                container
                direction="row"
              >
                <Grid item xs={6}>
                  <ButtonPurple
                    onClick={handleSubmit}
                    type="submit"
                    title="Continuar"
                    className="t-button-primary"
                  />
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default StepOne;
