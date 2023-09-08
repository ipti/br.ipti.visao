import { Checkbox, FormControlLabel, FormGroup, Grid, Radio, RadioGroup, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormOphthalmologicalContext } from "../../../../context/Classroom/FormOphthalmological/context";
import styles from "../../../../styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);


const FormOphthalmologicalPage = () => {
    const classes = useStyles();

    const { initialValues } = useContext(FormOphthalmologicalContext);

    return (
        <Formik initialValues={initialValues}>
            {({ errors, values, touched, handleChange, handleSubmit, setFieldValue }) => {
                console.log(values)
                return (
                    <Form onSubmit={handleSubmit}>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>Tem historia de febre nas últimas 24 horas:</p>
                            <RadioGroup
                                name="febre"
                                value={values.febre}
                                onChange={handleChange}
                            >
                                <FormControlLabel control={<Radio />} label="Sim" value={'true'}
                                    name="febre" />
                                <FormControlLabel control={<Radio />} label="Não" value={'false'}
                                    name="febre" />
                            </RadioGroup>
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>Tem história de convusão há menos de 15 dias:</p>
                            <RadioGroup
                                name="convucao"
                                value={values.convucao}
                                onChange={handleChange}
                            >
                                <FormControlLabel control={<Radio />} label="Sim" value={'true'}
                                    name="convucao" />
                                <FormControlLabel control={<Radio />} label="Não" value={'false'}
                                    name="convucao" />
                            </RadioGroup>
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>Tem alergia a colirios:</p>
                            <RadioGroup
                                name="alergiaColirio"
                                value={values.alergiaColirio}
                                onChange={handleChange}
                            >
                                <FormControlLabel control={<Radio />} label="Sim" value={'true'}
                                    name="alergiaColirio" />
                                <FormControlLabel control={<Radio />} label="Não" value={'false'}
                                    name="alergiaColirio" />
                            </RadioGroup>
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>Tem doenças no coração:</p>
                            <RadioGroup
                                name="doençasNoCoração"
                                value={values.doençasNoCoração}
                                onChange={handleChange}
                            >
                                <FormControlLabel control={<Radio />} label="Sim" value={'true'}
                                    name="doençasNoCoração" />
                                <FormControlLabel control={<Radio />} label="Não" value={'false'}
                                    name="doençasNoCoração" />
                            </RadioGroup>
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>DNP pupilometro</p>
                            <TextField className={classes.inputStudent} name="pupilometro" onChange={handleChange} variant="outlined" />
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>Refração estática olho direito</p>
                            <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                        </Grid>
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
                            <p className={classes.label}>Refração estática olho esquerdo</p>
                            <TextField className={classes.inputStudent} value={values.olhoEsquerdo} name="olhoEsquerdo" onChange={handleChange} variant="outlined" />
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>Acuidade visual corrigida olho esquerdo?</p>
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
                            <p className={classes.label}>Motilidade ocularo</p>
                            <TextField className={classes.inputStudent} name="name" onChange={handleChange} variant="outlined" />
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>Biomicroscopiao</p>
                            <TextField className={classes.inputStudent} name="name" onChange={handleChange} variant="outlined" />
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>Fundoscopia</p>
                            <TextField className={classes.inputStudent} name="name" onChange={handleChange} variant="outlined" />
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>Precisa de óculos</p>
                            <RadioGroup
                            // value={value}
                            // onChange={handleChange}
                            >
                                <FormControlLabel control={<Radio />} label="Sim" />
                                <FormControlLabel control={<Radio />} label="Não" />
                            </RadioGroup>
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>Óculos prescritos olho direito</p>
                            <TextField className={classes.inputStudent} name="name" onChange={handleChange} variant="outlined" />
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>Óculos prescritos olho esquerdo</p>
                            <TextField className={classes.inputStudent} name="name" onChange={handleChange} variant="outlined" />
                        </Grid>
                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>Observações dos óculos</p>
                            <TextField className={classes.inputStudent} name="name" onChange={handleChange} variant="outlined" />
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