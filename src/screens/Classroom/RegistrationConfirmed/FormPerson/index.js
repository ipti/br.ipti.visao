import { makeStyles, withStyles } from "@material-ui/core/styles";
import React from "react";

import { Grid } from "@material-ui/core";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useRef } from "react";
import MaskCpf from "../../../../components/Mask/maskcpf";
import styles from "../../../../styles";

import styleBase from "../../../../styles";
import { Column, Padding } from "../../../../styles/style";
import MaskDate from "../../../../components/Mask/maskdate";

const useStyles = makeStyles(styles);

const PurpleRadio = withStyles({
  root: {
    "&$checked": {
      color: styleBase.colors.colorsBaseProductNormal,
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const FormPerson = ({ values, handleChange }) => {
  const classes = useStyles();

  const inputRef = useRef(null);

  return (
    <>
      <h2> Dados básicos </h2>
      <Grid container>
        <Grid item md={6}>
          <p className={classes.label}>Name</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              value={values.name}
              name="name"
              onChange={handleChange}
              variant="outlined"
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
              />
              <FormControlLabel
                value={"1"}
                name="sex"
                control={<PurpleRadio />}
                label="Masculino"
              />
            </RadioGroup>
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
            />
          </Column>
        </Grid>
      </Grid>
    </>
  );
};

export default FormPerson;
