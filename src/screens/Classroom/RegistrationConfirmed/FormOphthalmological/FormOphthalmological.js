import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, FormControlLabel, FormGroup, Grid, Radio, RadioGroup } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import styles from "../../../../styles";

const useStyles = makeStyles(styles);


const FormOphthalmologicalPage = () => {
    const classes = useStyles();

    // const { initialValues } = useContext(FormOphthalmologicalContext);

    const initialValues = {
        febre: "",
        convucao: "",
        alergiaColirio: "",
        doençasNoCoração: "",
        pupilometro: "",
        olhoDireito: "",
        olhoEsquerdo: ""
    }

    return (
        <Formik initialValues={initialValues}>
            {({ errors, values, touched, handleChange, handleSubmit, setFieldValue }) => {
                return (
                    <Form onSubmit={handleSubmit}>
                       
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>Acuidade visual corrigida olho direito?</p>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="20/200" />
                                <FormControlLabel control={<Checkbox />} label="20/100" />
                                <FormControlLabel control={<Checkbox />} label="20/80" />
                                <FormControlLabel control={<Checkbox />} label="20/70" />
                                <FormControlLabel control={<Checkbox />} label="20/60" />
                                <FormControlLabel control={<Checkbox />} label="20/50" />
                                <FormControlLabel control={<Checkbox />} label="20/40" />
                                <FormControlLabel control={<Checkbox />} label="20/30" />
                                <FormControlLabel control={<Checkbox />} label="20/25" />
                                <FormControlLabel control={<Checkbox />} label="20/20" />
                                <FormControlLabel control={<Checkbox />} label="Nenhuma das opções" />
                            </FormGroup>
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>No teste de cover</p>
                            <RadioGroup
                            // value={value}
                            // onChange={handleChange}
                            >
                                <FormControlLabel control={<Radio />} label="Sim" />
                                <FormControlLabel control={<Radio />} label="Não" />
                            </RadioGroup>
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>No teste do movimento ocular</p>
                            <RadioGroup
                            // value={value}
                            // onChange={handleChange}
                            >
                                <FormControlLabel control={<Radio />} label="Sim" />
                                <FormControlLabel control={<Radio />} label="Não" />
                            </RadioGroup>
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>No teste da mancha branca</p>
                            <RadioGroup
                            // value={value}
                            // onChange={handleChange}
                            >
                                <FormControlLabel control={<Radio />} label="Sim" />
                                <FormControlLabel control={<Radio />} label="Não" />
                            </RadioGroup>
                        </Grid>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormOphthalmologicalPage;