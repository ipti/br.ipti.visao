import React, { useContext } from "react";

// Material UI
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, MenuItem, Radio, RadioGroup, Select, TextField } from "@material-ui/core";

import { makeStyles, withStyles } from "@material-ui/core/styles";

// Components
import { ButtonPurple } from "../../components/Buttons";

// Third party
import { Form, Formik } from "formik";
import * as Yup from "yup";

// Styles
import styleBase from "../../styles";
import styles from "./styles";
import { RegistrationContext } from "../../containers/Registration/Context/context";

const useStyles = makeStyles(styles);

const PurpleRadio = withStyles({
  root: {
    "&$checked": {
      color: styleBase.colors.colorsBaseProductNormal
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);


const StepThree = props => {
  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório!").min(10, 'minimo de 10 caracteres'),
    color_race: Yup.number().required("Campo obrigatório!"),
    deficiency: Yup.boolean().required("Campo obrigatório!"),
  });

  const {setIsOfLegalAge, isOfLegalAge} = useContext(RegistrationContext)
 
  const initialValues = {
    name: props?.values?.name ?? '',
    color_race: props?.values?.color_race ?? '',
    deficiency: props?.values?.deficiency ?? "",
  };


  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={values => props.next(4 , values)}
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
                    error={errorList.color_race}
                  >
                    <FormLabel>Cor/Raça *</FormLabel>
                    <Select
                      variant="outlined"
                      name="color_race"
                      value={values.color_race}
                      className={classes.textField}
                      onChange={handleChange}
                    >
                      <MenuItem value={0}>Não Declarada</MenuItem>
                      <MenuItem value={1}>Branca</MenuItem>
                      <MenuItem value={2}>Preta</MenuItem>
                      <MenuItem value={3}>Parda</MenuItem>
                      <MenuItem value={4}>Amarela</MenuItem>
                      <MenuItem value={5}>Indígena</MenuItem>
                    </Select>
                    <FormHelperText>{errorList.color_race}</FormHelperText>
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
                    error={errorList.sex}
                  >
                    <FormLabel component="legend">Você tem 18 anos ou mais? *</FormLabel>
                    <RadioGroup
                      value={isOfLegalAge}
                      name="is_of_legal_age"
                      onChange={e => setIsOfLegalAge(e.target.value)}
                      row
                    >
                      <FormControlLabel
                        value={'2'}
                        name="is_of_legal_age"
                        control={<PurpleRadio />}
                        label="Sim, tenho 18 anos ou mais"
                      />
                      <FormControlLabel
                        value={'1'}
                        name="is_of_legal_age"
                        control={<PurpleRadio />}
                        label="Não, ainda não completei 18 anos"
                      />
                    </RadioGroup>
                    <FormHelperText>{errorList.sex}</FormHelperText>
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

export default StepThree;
