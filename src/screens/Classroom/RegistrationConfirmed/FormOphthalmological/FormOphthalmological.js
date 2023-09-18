import { makeStyles } from "@material-ui/core/styles";
import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormRegistrationContext } from "../../../../context/Classroom/FormOphthalmological/context";
import styles from "../../../../styles";
import { Column } from "../../../../styles/style";

const useStyles = makeStyles(styles);


const FormOphthalmologicalPage = () => {
    const classes = useStyles();

    const { initialValues } = useContext(FormRegistrationContext);


    return (
        <Formik initialValues={initialValues}>
            {({ errors, values, touched, handleChange, handleSubmit, setFieldValue }) => {

                console.log(values)
                return (
                    <Form onSubmit={handleSubmit}>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>Acuidade visual corrigida?</p>
                            <RadioGroup
                                value={values.acuidadeTriagem}
                                name="acuidadeTriagem"
                                onChange={handleChange}
                            >
                                <FormControlLabel control={<Radio />} value={"20/200"} label="20/200" />
                                <FormControlLabel control={<Radio />} value={"20/100"} label="20/100" />
                                <FormControlLabel control={<Radio />} value={"20/80"} label="20/80" />
                                <FormControlLabel control={<Radio />} value={"20/70"} label="20/70" />
                                <FormControlLabel control={<Radio />} value={"20/60"} label="20/60" />
                                <FormControlLabel control={<Radio />} value={"20/50"} label="20/50" />
                                <FormControlLabel control={<Radio />} value={"20/40"} label="20/40" />
                                <FormControlLabel control={<Radio />} value={"20/30"} label="20/30" />
                                <FormControlLabel control={<Radio />} value={"20/25"} label="20/25" />
                                <FormControlLabel control={<Radio />} value={"20/20"} label="20/20" />
                                <FormControlLabel control={<Radio />} value={"nenhum"} label="Nenhuma das opções" />
                            </RadioGroup>
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>No teste de cover</p>
                            <RadioGroup
                                value={values.testCover}
                                onChange={handleChange}
                                name="testCover"
                            >
                                <Column>
                                    <FormControlLabel control={<Radio />} value={"1"} label="Sim" />
                                    <FormControlLabel control={<Radio />} value={"2"} label="Não" />
                                </Column>
                            </RadioGroup>
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>No teste do movimento ocular</p>
                            <RadioGroup
                                value={values.testMovimentoOcular}
                                onChange={handleChange}
                                name="testMovimentoOcular"
                            >
                                <FormControlLabel control={<Radio />} value={"1"} label="Sim" />
                                <FormControlLabel control={<Radio />} value={"2"} label="Não" />
                            </RadioGroup>
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>No teste da mancha branca</p>
                            <RadioGroup
                                value={values.testManchaBranca}
                                name="testManchaBranca"
                                onChange={handleChange}
                            >
                                <FormControlLabel control={<Radio />} value={"1"} label="Sim" />
                                <FormControlLabel control={<Radio />} value={"2"} label="Não" />
                            </RadioGroup>
                        </Grid>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormOphthalmologicalPage;