import React, { useState } from "react";


//Material-UI
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Select from "react-select";


import { ButtonPurple } from "../../components/Buttons";

//style
import styles from "./styles";

// Third party
import { Form, Formik } from "formik";
import * as Yup from "yup";

import Loading from "../../components/Loading/CircularLoadingButtomActions";
import api from "../../services/api";


import { useEffect } from "react";
import MaskedInput from "react-text-mask";
import styleBase from "../../styles";

const useStyles = makeStyles(styles);

const customStyles = {
  control: base => ({
    ...base,
    height: "60px",
    minHeight: "60px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  }),
  menu: base => ({
    ...base,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  })
};


const StepFive = props => {
  const [errorCep, setErrorCep] = useState(false);
  const classes = useStyles();
  const { loadingButtom } = props;
  const [state, setState] = useState([]);
  const [citys, setCitys] = useState([])
  const [loadStates, setLoadStates] = useState(true)

  const validationSchema = Yup.object().shape({
    cep: Yup.string().required("Campo obrigatório!"),
    address: Yup.string().required("Campo obrigatório!"),
    number: Yup.string().required("Campo obrigatório!"),
    neighborhood: Yup.string().required("Campo obrigatório!"),
    edcenso_uf: Yup.string().required("Campo obrigatório!"),
    edcenso_city: Yup.string().required("Campo obrigatório!"),
    zone: Yup.number().required("Campo obrigatório!"),
  });
  

  const TextMaskCep = props => {
    const { inputRef, ...others } = props;

    return (
      <MaskedInput
        {...others}
        ref={ref => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
        placeholderChar={"\u2000"}
        showMask
      />
    );
  };

  // useEffect(()=>{
  //   props.dispatch({type: "GET_ADDRESS", data: '49043130'})
  // },[])

  const initialValues = {
    cep: props?.values?.cep ?? "",
    address: props?.values?.address ?? "",
    number: props?.values?.number ?? "",
    complement: props?.values?.complement ?? "",
    neighborhood: props?.values?.neighborhood ?? "",
    edcenso_uf: props?.values?.edcenso_uf ?? "",
    edcenso_city: props?.values?.edcenso_city ?? "",
    zone: props?.values?.zone ?? ''
  };

  const checkCep = (e, setFieldValue) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json()).then(data => {
        if (data.erro) {
          setErrorCep(true);
        } else {
          setFieldValue("cep", cep)
          setFieldValue("neighborhood", data.bairro);
          setFieldValue("address", data.logradouro);
          setErrorCep(false);
        }
      })
  }

  const handleStatesCity = (selectedOption,setFieldValue) => {
    setFieldValue("edcenso_city", selectedOption.id)
    setFieldValue("edcenso_uf", selectedOption.edcenso_uf_fk)
  }


  useEffect(() => {
    if(loadStates){
      (async () => {
        const res = await api.get("/student-pre-identify/edcenso-uf", {
          params: {
            include: {
              edcenso_city: true
            }
          }
        })
        setState(res.data)
        setLoadStates(false)
      })();
    }
  },)
  const PurpleRadio = withStyles({
    root: {
      "&$checked": {
        color: styleBase.colors.colorsBaseProductNormal
      }
    },
    checked: {}
  })(props => <Radio color="default" {...props} />);

  

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={values => props.next(6, values)}
        validationSchema={validationSchema}
        validateOnChange={false}
        enableReinitialize
      >
        {({ errors, values, touched, handleChange, handleSubmit, setFieldValue }) => {
          const errorList = {
            cep: touched.cep && errors.cep,
            address: touched.address && errors.address,
            number: touched.number && errors.number,
            neighborhood: touched.neighborhood && errors.neighborhood,
            edcenso_uf: touched.edcenso_uf && errors.edcenso_uf,
            zone: touched.zone && errors.zone,
            edcenso_city: touched.edcenso_city && errors.edcenso_city
          };
          return (
            <Form>
              <Grid
                className={`${classes.contentMain} ${classes.marginTop}`}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                    error={errorList.cep}
                  >
                    <FormLabel>CEP *</FormLabel>
                    <TextField
                      name="cep"
                      InputProps={{
                        inputComponent: TextMaskCep,
                        value: values.cep,
                        onChange: handleChange
                      }}
                      onBlur={(e) => checkCep(e, setFieldValue)}
                      variant="outlined"
                      className={classes.textField}
                      error={errorList.cep || errorCep}
                    />
                    <FormHelperText>{errorList.cep}</FormHelperText>
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
                    error={errorList.address}
                  >
                    <FormLabel>Endereço *</FormLabel>
                    <TextField
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      variant="outlined"
                      className={classes.textField}
                      error={errorList.address}
                    />
                    <FormHelperText>{errorList.address}</FormHelperText>
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
                    error={errorList.number}
                  >
                    <FormLabel>Número *</FormLabel>
                    <TextField
                      name="number"
                      value={values.number}
                      onChange={handleChange}
                      variant="outlined"
                      className={classes.textField}
                      error={errorList.number}
                    />
                    <FormHelperText>{errorList.number}</FormHelperText>
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
                  >
                    <FormLabel>Complemento</FormLabel>
                    <TextField
                      name="complement"
                      value={values.complement}
                      onChange={handleChange}
                      variant="outlined"
                      className={classes.textField}
                    />
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
                    error={errorList.neighborhood}
                  >
                    <FormLabel>Bairro *</FormLabel>
                    <TextField
                      name="neighborhood"
                      value={values.neighborhood}
                      onChange={handleChange}
                      variant="outlined"
                      className={classes.textField}
                      error={errorList.neighborhood}
                    />
                    <FormHelperText>{errorList.neighborhood}</FormHelperText>
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
                    error={errorList.edcenso_uf}
                  >
                    <FormLabel>Estado *</FormLabel>

                    <Select
                      styles={customStyles}
                      name="edcenso_uf"
                      className="basic-single"
                      classNamePrefix="select"
                      placeholder="Selecione o Estado"
                      options={state}
                      onChange={selectedOption => {
                        setCitys(selectedOption.edcenso_city
                        )
                      }}
                      getOptionValue={opt => opt.name}
                      getOptionLabel={opt => opt.name}
                    />
                    <FormHelperText>{errorList.edcenso_uf}</FormHelperText>
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
                    error={errorList.edcenso_city}
                  >

                    <FormLabel>Cidade *</FormLabel>
                    <Select
                      styles={customStyles}
                      name="edcenso_city"
                      className="basic-single"
                      classNamePrefix="select"
                      placeholder="Selecione a Cidade"
                      options={citys}
                      onChange={selectedOption => {
                        handleStatesCity(selectedOption, setFieldValue)
                      }}
                      getOptionValue={opt => opt.name}
                      getOptionLabel={opt => opt.name}
                      error={errorList.city}
                    />
                    <FormHelperText>{errorList.city}</FormHelperText>
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
                  {!loadingButtom ? (
                    <ButtonPurple
                      onClick={props.handleSubmit}
                      className="t-button-primary"
                      type="submit"
                      title="Continuar"
                    />
                  ) : (
                    <Loading />
                  )}
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default StepFive;
