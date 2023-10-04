import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import styles from "../../../../styles";
import { Column, Padding } from "../../../../styles/style";

const useStyles = makeStyles(styles);


const FormReceita = () => {
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
            {({ handleChange, handleSubmit }) => {
                return (
                    <Form onSubmit={handleSubmit}>
                        <Padding padding="16px" />
                        <h2>
                            Receita de óculos
                        </h2>
                        <h3>
                            Olho direito
                        </h3>
                        <Grid container spacing={2} md={12}>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Esférico</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Cilíndrico</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Eixo</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} md={12}>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>DP</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>

                        </Grid>
                        <h3>
                            Olho esquerdo
                        </h3>
                        <Grid container spacing={2} md={12}>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Esférico</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>

                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Cilíndrico</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>

                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Eixo</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} md={12}>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>DP</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                        </Grid>
                        <Padding padding="16px" />

                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormReceita;