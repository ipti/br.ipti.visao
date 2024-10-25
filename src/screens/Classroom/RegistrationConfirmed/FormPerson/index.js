import { makeStyles, withStyles } from "@material-ui/core/styles";
import React, { useContext } from "react";

import { Grid } from "@material-ui/core";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Select from "react-select";
import { useRef } from "react";
import MaskCpf from "../../../../components/Mask/maskcpf";
import styles from "../../../../styles";

import styleBase from "../../../../styles";
import { Column, Padding } from "../../../../styles/style";
import MaskDate from "../../../../components/Mask/maskdate";
import { ButtonPurple } from "../../../../components/Buttons";
import { PrivateRouterContext } from "../../../../context/PrivateRouter/context";

//import color from "../../../../styles/colors";

const useStyles = makeStyles(styles);

const PurpleRadio = withStyles({
  root: {
    "&$checked": {
      color: styleBase.colors.colorsBaseProductNormal,
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const FormPesonState = () => {
  const colorRace = [
    {
      id: 0,
      name: "Não declarado",
    },
    {
      id: 1,
      name: "Branca",
    },
    {
      id: 2,
      name: "Preta",
    },
    {
      id: 3,
      name: "Parda",
    },
    {
      id: 4,
      name: "Amarela",
    },
    {
      id: 5,
      name: "Indígena",
    },
  ];

  return { colorRace };
};

const FormPerson = ({ values, handleChange, setFieldValue }) => {
  const classes = useStyles();
  const inputRef = useRef(null);

  const props = FormPesonState();

  const { isAdmin } = useContext(PrivateRouterContext);

  return (
    <>
      <h2> Dados básicos </h2>
      <Grid container>
        <Grid item md={6}>
          <p className={classes.label}>Nome</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              value={values.name}
              name="name"
              onChange={handleChange}
              variant="outlined"
              disabled={!isAdmin}
            />
          </Column>
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
          <Padding padding="8px" />
          <FormControl
            component="fieldset"
            className={classes.formControl}
            // error={errorList.sex}
          >
            <p className={classes.label}>Sexo *</p>
            <RadioGroup
              value={values.sex}
              name="sex"
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value={"2"}
                name="sex"
                control={<PurpleRadio />}
                label="Feminino"
                disabled={!isAdmin}
              />
              <FormControlLabel
                value={"1"}
                name="sex"
                control={<PurpleRadio />}
                label="Masculino"
                disabled={!isAdmin}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <FormControl
            component="fieldset"
            className={classes.formControl}
            style={{ width: "100%" }}
          >
            <p className={classes.label}>Cor de Raça *</p>
            <Select
              //styles={customStyles}
              className="basic-single"
              classNamePrefix="select"
              placeholder="Selecione Cor/Raça"
              value={props.colorRace.filter(
                (option) => option.id === values.colorRace
              )}
              options={props.colorRace}
              isLoading={props.isLoadingColorRace}
              onChange={(e) => {
                setFieldValue("colorRace", e.id);
              }}
              getOptionValue={(opt) => opt.id}
              getOptionLabel={(opt) => opt.name}
              isDisabled={!isAdmin}
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item style={{ width: "100%" }} md={6}>
          <p className={classes.label}>Data de Nascimento</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="birthday"
              onChange={handleChange}
              value={values.birthday}
              InputProps={{
                inputComponent: MaskDate,
                value: values.birthday,
                onChange: handleChange,
              }}
              variant="outlined"
              disabled={!isAdmin}
            />
          </Column>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item style={{ width: "100%" }} md={6}>
          <p className={classes.label}>CPF</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              InputProps={{
                inputComponent: MaskCpf,
                value: values.cpf,
                inputRef: inputRef,
                onChange: handleChange,
              }}
              name="cpf"
              onChange={handleChange}
              value={values.cpf}
              variant="outlined"
              disabled={!isAdmin}
            />
          </Column>
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
          <Padding padding="8px" />
          <FormControl
            component="fieldset"
            className={classes.formControl}
            // error={errorList.zone}
          >
            <p className={classes.label}>Zona *</p>
            <RadioGroup
              value={values.zone}
              name="zone"
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value={"1"}
                name="zone"
                control={<PurpleRadio />}
                label="Rural"
                disabled={!isAdmin}
              />
              <FormControlLabel
                value={"2"}
                name="zone"
                control={<PurpleRadio />}
                label="Urbana"
                disabled={!isAdmin}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Padding padding="16px" />
      <Grid item style={{ width: "100%" }} md={3}>
        <ButtonPurple
          className="t-button-primary"
          title="Salvar"
          type="submit"
        />
      </Grid>
      <Padding padding="16px" />
    </>
  );
};

export default FormPerson;
