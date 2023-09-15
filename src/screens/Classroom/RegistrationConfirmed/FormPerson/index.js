import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Form, Formik } from "formik";
import React from "react";

import { Grid } from "@material-ui/core";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useRef, useState } from "react";
import MaskCpf from "../../../../components/Mask/maskcpf";
import styles from "../../../../styles";

import { useContext } from "react";
import { FormRegistrationContext } from "../../../../context/Classroom/FormOphthalmological/context";
import styleBase from "../../../../styles";
import { Column } from "../../../../styles/style";


const useStyles = makeStyles(styles);

const PurpleRadio = withStyles({
    root: {
        "&$checked": {
            color: styleBase.colors.colorsBaseProductNormal
        }
    },
    checked: {}
})(props => <Radio color="default" {...props} />);

const FormPerson = () => {
    const classes = useStyles();

    const [edit, ] = useState(true)

    const inputRef = useRef(null);

    const { oneRegistration } = useContext(FormRegistrationContext)

    const initialValue = {
        name: oneRegistration ? oneRegistration.object.name : "",
        cpf: oneRegistration ? oneRegistration.object.cpf : "",
        sex: oneRegistration ? oneRegistration.object.sex : "",
        birthday: oneRegistration ? oneRegistration.object.birthday : ""
    }


    return (
        <>
            <Formik
                initialValues={initialValue}
                onSubmit={values => {
                    // handleEditPreRegistration(student.id, values); setEdit(!edit) 
                }}>
                {({ errors, values, touched, handleChange, handleSubmit, setFieldValue }) => {
                    return (
                        <Form onSubmit={handleSubmit}>
                            <h2> Dados básicos </h2>
                            <Grid container>
                                <Column>
                                    <p className={classes.label}>Name</p>
                                    <TextField
                                        className={classes.inputStudent}
                                        value={values.name}
                                        name="name" onChange={handleChange} variant="outlined" disabled={edit} />
                                </Column>
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
                                        // error={errorList.sex}
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
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item style={{ width: "100%" }} md={12}>
                                    <p className={classes.label}>Data de Nascimento</p>
                                    <TextField className={classes.inputStudent} name="birthday" onChange={handleChange}
                                        value={values.birthday}
                                        variant="outlined" disabled={edit} />
                                </Grid>
                                <Grid item style={{ width: "100%" }} md={12}>
                                    <p className={classes.label}>CPF</p>
                                    <TextField className={classes.inputStudent} InputProps={{
                                        inputComponent: MaskCpf,
                                        value: values.cpf,
                                        inputRef: inputRef,
                                        onChange: handleChange,
                                    }} name="cpf" onChange={handleChange}
                                        value={values.cpf}
                                        variant="outlined" disabled={edit} />
                                </Grid>
                            </Grid>

                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}

export default FormPerson;