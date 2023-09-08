import React, { useContext, useRef } from "react";

// Material UI
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Radio, RadioGroup, TextField } from "@material-ui/core";

import { makeStyles, withStyles } from "@material-ui/core/styles";

// Components
import { ButtonPurple } from "../../components/Buttons";

// Third party
import { Form, Formik } from "formik";
import * as Yup from "yup";

// Styles
import { useState } from "react";
import MaskedInput from "react-text-mask";
import ModalExistStudent from "../../components/Modal/ModalExistStudent";
import { RegistrationContext } from "../../containers/Registration/Context/context";
import styleBase from "../../styles";
import styles from "./styles";
import MyInputComponent from "../../components/Mask/maskcpf";
import MaskDate from "../../components/Mask/maskdate";
import MaskPhone from "../../components/Mask/maskphone";

const useStyles = makeStyles(styles);

const PurpleRadio = withStyles({
  root: {
    "&$checked": {
      color: styleBase.colors.colorsBaseProductNormal
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const TextMaskCpf = (props) => {
  const inputRef = useRef(null);

  const handleInputClick = () => {
    if (inputRef.current) {
      const inputElement = inputRef.current.inputElement;
      if (inputElement) {
        inputElement.selectionStart = 0;
        inputElement.selectionEnd = 0;
        inputElement.focus();
      }
    }
  };

  return (
    <MaskedInput
      {...props}
      ref={(ref) => {
        inputRef.current = ref;
        if (props.inputRef) {
          props.inputRef(ref);
        }
      }}
      onClick={handleInputClick}
      placeholderChar={'\u2000'}
      guide
      keepCharPositions
      mask={[
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ]}
      showMask
    />
  );
};

const StepSix = props => {
  const inputRef = useRef(null);
  const classes = useStyles();
  const [student, setStudent] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const { school, quiz } = useContext(RegistrationContext)

  const validationSchema = Yup.object().shape({
    cpf: Yup.string().required("Campo obrigatório!"),
    birthday: Yup.string().required("Campo obrigatório!"),
    sex: Yup.number().required("Campo obrigatório!"),
    responsable_telephone: Yup.string().required("Campo obrigatório!"),
    zone: Yup.number().required("Campo obrigatório!"),
  });

  const initialValues = {
    cpf: props?.values?.cpf ?? "",
    sex: props?.values?.sex ?? '',
    birthday: props?.values?.birthday ?? '',
    responsable_telephone: props?.values?.responsable_telephone ?? "",
    zone: props?.values?.zone ?? ''
  };

  const Isverify = (e) => {
    var cpf = e.target.value.replace(/\D/g, '');
    var isValid = cpf ? school.student_documents_and_address.filter(x => (cpf === x.cpf) && (x.received_responsable_cpf === false)) : [];

    if (isValid.length !== 0) {
      setStudent(isValid);
      setOpenModal(true)
    }
  }


  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={values => quiz.length > 0 ? props.next(5, values) : props.next(6, values)}
        validationSchema={validationSchema}
        validateOnChange={false}
        enableReinitialize
      >
        {({ errors, values, touched, handleChange, handleSubmit }) => {

          const errorList = {
            cpf: touched.cpf && errors.cpf,
            birthday: touched.birthday && errors.birthday,
            sex: touched.sex && errors.sex,
            responsable_telephone: touched.responsable_telephone && errors.responsable_telephone,
            zone: touched.zone && errors.zone,
          };

          return (
            <Form>
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
                        inputComponent: MyInputComponent,
                        value: values.cpf,
                        onChange: handleChange
                      }}
                      // onBlur={(e) => Isverify(e)}
                      error={errorList.cpf}
                      className={classes.textField}
                      autoComplete="off"
                    />
                    <FormHelperText>{errorList.cpf}</FormHelperText>
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
                    error={errorList.responsable_telephone}
                  >
                    <FormLabel>Telefone *</FormLabel>
                    <TextField
                      name="responsable_telephone"
                      variant="outlined"
                      className={classes.textField}
                      InputProps={{
                        inputComponent: MaskPhone,
                        value: values.responsable_telephone,
                        onChange: handleChange
                      }}
                      error={errorList.responsable_telephone}
                    />
                    <FormHelperText>{errorList.responsable_telephone}</FormHelperText>
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
                    error={errorList.zone}
                  >
                    <FormLabel component="legend">Zona *</FormLabel>
                    <RadioGroup
                      value={values.zone}
                      name="zone"
                      onChange={handleChange}
                      row
                    >
                      <FormControlLabel
                        value="2"
                        control={<PurpleRadio />}
                        label="Urbana"
                      />
                      <FormControlLabel
                        value="1"
                        control={<PurpleRadio />}
                        label="Rural"
                      />
                    </RadioGroup>
                    <FormHelperText>{errorList.zone}</FormHelperText>
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
                    className="t-button-primary"
                    type="submit"
                    title={"Continuar"}
                  />
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
      <ModalExistStudent openModal={openModal} school={school} student={student} />
    </>
  );
};

export default StepSix;
