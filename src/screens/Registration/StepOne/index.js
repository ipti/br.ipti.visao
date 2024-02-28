import React, { useContext, useState } from "react";

// Material UI
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Radio, RadioGroup, TextField } from "@material-ui/core";

import { makeStyles, withStyles } from "@material-ui/core/styles";

// Components

// Third party
import { Form, Formik } from "formik";
import * as Yup from "yup";

import Select from "react-select";


// Styles
import { RegistrationContext } from "../../../context/Registration/context";
import styleBase from "../../../styles";
import styles from "../styles";
import { ButtonPurple } from "../../../components/Buttons";
import MaskDate from "../../../components/Mask/maskdate";
import MaskCpf from "../../../components/Mask/maskcpf";
import { useEffect } from "react";
import fetchSchool from "../../../controller/School/fetchSchools";
import fetchClassroom from "../../../controller/classroom/fetchClassroom";

const useStyles = makeStyles(styles);

const PurpleRadio = withStyles({
  root: {
    "&$checked": {
      color: styleBase.colors.colorsBaseProductNormal
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);


const customStyles = {
  control: base => ({
    ...base,

    height: "60px",
    minHeight: "60px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    display: 'flex', flexDirection: 'row', justifyContent: "start"
  }),
  menu: base => ({
    ...base,
    width: '100%',
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  })
};


const StepOne = () => {
  const classes = useStyles();
  const [id, setId] = useState()
  const [school, setSchool] = useState([]);

  const turno = [
    {
      id: 1,
      name: "Manhã"
    },
    {
      id: 2,
      name: "Turma"
    },
    {
      id: 3,
      name: "Noite"
    },
    {
      id: 4,
      name: "Integral"
    },
  ]


  const { next, dataValues } = useContext(RegistrationContext);

  useEffect(() => {
    fetchSchool()
      .then((testDataList) => {
        setSchool(testDataList)
      })
      .catch((err) => {
        // Trate erros, se ocorrerem
        console.error(err)
      })
  }, [])

  const [classroom, setClassroom] = useState([]);

  useEffect(() => {
    fetchClassroom()
      .then((testDataList) => {
        if (id) {
          const classroomSchool = testDataList.filter(props => props.object.school_fk === id)
          setClassroom(classroomSchool)
        }
      })
      .catch((err) => {
        // Trate erros, se ocorrerem
        console.error(err)
      })
  }, [id])


  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório!").min(10, 'minimo de 10 caracteres'),
    birthday: Yup.string().required("Campo obrigatório!"),
    sex: Yup.string().required("Campo obrigatório!"),
    cpf: Yup.string().required("Campo obrigatório!"),
    school_fk: Yup.string().required("Campo obrigatório!"),
    classroom_fk: Yup.string().required("Campo obrigatório!"),
    turno: Yup.string().required("Campo obrigatório!"),
  });


  const initialValues = {
    name: dataValues?.name ?? '',
    birthday: dataValues?.birthday ?? '',
    sex: dataValues?.sex ?? "",
    cpf: dataValues?.cpf ?? "",
    school_fk: dataValues?.school_fk ?? "",
    classroom_fk: dataValues?.classroom_fk ?? "",
    turno: dataValues?.turno,
    permission: true
  };


  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={values => next(2, values)}
        validationSchema={validationSchema}
        validateOnChange={false}
        enableReinitialize
      >
        {({ errors, values, touched, handleChange, handleSubmit,setFieldValue }) => {

          const errorList = {
            name: touched.name && errors.name,
            birthday: touched.birthday && errors.birthday,
            sex: touched.sex && errors.sex,
            cpf: touched.cpf && errors.cpf,
            school_fk: touched.school && errors.school,
            classroom_fk: touched.classroom && errors.classroom,
            turno: touched.turno && errors.turno
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
                    error={!!errorList.birthday}
                  >
                    <FormLabel>Nascimento *</FormLabel>
                    <TextField
                      name="birthday"
                      variant="outlined"
                      className={classes.textField}
                      InputProps={{
                        inputComponent: MaskDate,
                        value: values.birthday,
                        onChange: handleChange
                      }}
                      error={!!errorList.birthday}
                    />
                    <FormHelperText>{errorList.birthday}</FormHelperText>
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
                    <FormLabel component="legend">Sexo *</FormLabel>
                    <RadioGroup
                      value={values.sex}
                      name="sex"
                      onChange={handleChange}
                      row
                    >
                      <FormControlLabel
                        value={'2'}
                        name="sex"
                        control={<PurpleRadio />}
                        label="Feminino"
                      />
                      <FormControlLabel
                        value={'1'}
                        name="sex"
                        control={<PurpleRadio />}
                        label="Masculino"
                      />
                    </RadioGroup>
                    <FormHelperText>{errorList.sex}</FormHelperText>
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
                    error={errorList.cpf}
                  >
                    <FormLabel>Nº do CPF *</FormLabel>
                    <TextField
                      name="cpf"
                      variant="outlined"
                      InputProps={{
                        inputComponent: MaskCpf,
                        value: values.cpf,
                        onChange: handleChange
                      }}
                      className={classes.textField}
                      error={errorList.cpf}
                      autoComplete="off"
                    />
                    <FormHelperText>{errorList.cpf}</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                  error={errorList.school_fk}
                >
                  <FormLabel style={{ display: 'flex', flexDirection: 'row', justifyContent: "start", marginBottom: "24px" }} >Escola *</FormLabel>
                  <Select
                    styles={customStyles}
                    className="basic-single"
                    classNamePrefix="select"
                    placeholder="Digite o nome da Escola"
                    options={school}
                    isLoading={!school}
                    onChange={selectedOption => {
                      setId(selectedOption.id)
                      setFieldValue("school_fk", selectedOption.id)
                    }}
                    getOptionValue={opt => opt.id}
                    getOptionLabel={opt => opt.object.name}
                  />
                </FormControl>
                <FormHelperText>{errorList.school_fk}</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                  error={errorList.classroom_fk}
                >
                  <FormLabel style={{ display: 'flex', flexDirection: 'row', justifyContent: "start", marginBottom: "24px" }} >Turma *</FormLabel>
                  <Select
                    styles={customStyles}
                    className="basic-single"
                    classNamePrefix="select"
                    placeholder="Digite o nome da Turma"
                    options={classroom}
                    isLoading={!classroom}
                    onChange={selectedOption => {
                      setFieldValue("classroom_fk", selectedOption.id)
                    }}
                    getOptionValue={opt => opt.id}
                    getOptionLabel={opt => opt.object.name}
                  />
                </FormControl>
                  <FormHelperText>{errorList.classroom_fk}</FormHelperText>
              </Grid>

              <Grid item xs={12}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                  error={errorList.turno}
                >
                  <FormLabel style={{ display: 'flex', flexDirection: 'row', justifyContent: "start", marginBottom: "24px" }} >Turno *</FormLabel>
                  <Select
                    styles={customStyles}
                    className="basic-single"
                    classNamePrefix="select"
                    placeholder="Digite o nome da Turno"
                    options={turno}
                    isLoading={!turno}
                    onChange={selectedOption => {
                      setFieldValue("turno", selectedOption.id)
                    }}
                    getOptionValue={opt => opt.inep_id}
                    getOptionLabel={opt => opt.name}
                  />
                </FormControl>
                <FormHelperText>{errorList.turno}</FormHelperText>
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
