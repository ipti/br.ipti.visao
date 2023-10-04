import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, FormControlLabel, FormGroup, Grid, Radio, RadioGroup, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import styles from "../../../../styles";
import { Column, Padding } from "../../../../styles/style";
import MaskDate from "../../../../components/Mask/maskdate";

const useStyles = makeStyles(styles);


const FormConsulta = () => {
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
                        <Grid container spacing={2}>
                            <Grid item style={{ width: "100%" }} md={6}>
                                <p className={classes.label}>Nome do médico</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="name" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={6}>
                                <p className={classes.label}>CRM</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="name" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item style={{ width: "100%" }} md={6}>
                                <p className={classes.label}>Data de Consulta </p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="birthday" onChange={handleChange}
                                        InputProps={{
                                            inputComponent: MaskDate,
                                            value: values.birthday,
                                            onChange: handleChange
                                        }}
                                        value={values.birthday}
                                        variant="outlined" />
                                </Column>
                            </Grid>
                        </Grid>
                        <Padding padding="16px" />
                        <h2>
                            Escaneamento Visual pelo Spot Vision
                        </h2>
                        <h3>
                            Olho direito
                        </h3>
                        <Grid container spacing={2} md={12}>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração Esférico</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração cilíndrico</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração eixo</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} md={12}>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração equivalente esférico</p>
                                <Column>

                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração DP</p>
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
                                <p className={classes.label}>Refração Esférico</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>

                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração cilíndrico</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>

                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração eixo olho</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} md={12}>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração equivalente esférico</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração DP</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                        </Grid>
                        <Padding padding="16px" />

                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>Marque as Observações encontradas no Spot Vision</p>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Miopia OD" />
                                <FormControlLabel control={<Checkbox />} label="Miopia OE " />
                                <FormControlLabel control={<Checkbox />} label="Astigmatismo OD" />
                                <FormControlLabel control={<Checkbox />} label="Astigmatismo OE" />
                                <FormControlLabel control={<Checkbox />} label="Hipermetropia OD" />
                                <FormControlLabel control={<Checkbox />} label="Hipermetropia OE " />
                                <FormControlLabel control={<Checkbox />} label="Estrabismo OD" />
                                <FormControlLabel control={<Checkbox />} label=" Estrabismo OE" />
                                <FormControlLabel control={<Checkbox />} label="Anisometropia" />
                                <FormControlLabel control={<Checkbox />} label="Anisocoria" />
                            </FormGroup>
                        </Grid>
                        <Padding padding="16px" />
                        <Grid item style={{ width: "100%" }} md={6}>
                            <p className={classes.label}>Anamnese</p>
                            <Column>
                                <TextField className={classes.inputStudent} value={values.olhoEsquerdo} name="olhoEsquerdo" onChange={handleChange} variant="outlined" />
                            </Column>
                        </Grid>
                        <Padding padding="16px" />
                        <h2>Refração Estática</h2>
                        <h3>Olho direito</h3>
                        <Grid container spacing={2} md={12}>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração estático Esférico</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração estático cilíndrico</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração estático eixo</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} md={12}>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração estático acuidade visual</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                        </Grid>
                        <h3>Olho esquerdo</h3>
                        <Grid container spacing={2} md={12}>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração estático Esférico</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração estático cilíndrico</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração estático eixo</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} md={12}>
                            <Grid item style={{ width: "100%" }} md={4}>
                                <p className={classes.label}>Refração estático acuidade visual</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="olhoDireito" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                        </Grid>
                        <Padding padding="16px" />

                        <h2>Biomicroscopiao</h2>
                        <Grid container spacing={2} md={12}>
                            <Grid item style={{ width: "100%" }} md={6}>
                                <p className={classes.label}>Olho direito</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="name" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={6}>
                                <p className={classes.label}>Olho esquerdo</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="name" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                        </Grid>
                        <Padding padding="16px" />


                        <h2>Fundoscopia</h2>
                        <Grid container spacing={2} md={12}>
                            <Grid item style={{ width: "100%" }} md={6}>
                                <p className={classes.label}>Olho direito</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="name" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={6}>
                                <p className={classes.label}>Olho esquerdo</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="name" onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                        </Grid>
                        <Padding padding="16px" />
                        <Grid item style={{ width: "100%" }} md={6}>
                            <p className={classes.label}>Motilidade ocularo</p>
                            <Column>
                                <TextField className={classes.inputStudent} name="name" onChange={handleChange} variant="outlined" />
                            </Column>
                        </Grid>
                        <Padding padding="16px" />

                        <Grid item style={{ width: "100%" }} md={6}>
                            <p className={classes.label}>Diagnóstico</p>
                            <Column>
                                <TextField className={classes.inputStudent} name="name" onChange={handleChange} variant="outlined" />
                            </Column>
                        </Grid>
                        <Padding padding="16px" />

                        <Grid item style={{ width: "100%" }} md={6}>
                            <p className={classes.label}>Conduta</p>
                            <Column>
                                <TextField className={classes.inputStudent} name="name" onChange={handleChange} variant="outlined" />
                            </Column>
                        </Grid>
                        <Padding padding="16px" />

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
                        <Padding padding="16px" />

                        <Grid item style={{ width: "100%" }} md={12}>
                            <p className={classes.label}>Acuidade visual corrigida olho esquerdo?</p>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Ambliopia" />
                                <FormControlLabel control={<Checkbox />} label="Retinoblastoma " />
                                <FormControlLabel control={<Checkbox />} label="Catarata Congênita" />
                                <FormControlLabel control={<Checkbox />} label="Obstrução de Vias Lacrimais" />
                                <FormControlLabel control={<Checkbox />} label="Estrabismo" />
                                <FormControlLabel control={<Checkbox />} label="Glaucoma congênito" />
                                <FormControlLabel control={<Checkbox />} label="Uveítes" />
                                <FormControlLabel control={<Checkbox />} label="Nistagmo" />
                                <FormControlLabel control={<Checkbox />} label="Miopia progressiva" />
                                <FormControlLabel control={<Checkbox />} label="Ectasias de córnea " />
                                <FormControlLabel control={<Checkbox />} label="Alergias/Conjuntivites/Calázio" />
                                <FormControlLabel control={<Checkbox />} label="Baixa visão Central" />
                            </FormGroup>
                        </Grid>
                        <Padding padding="16px" />

                        <Grid item style={{ width: "100%" }} md={6}>
                            <p className={classes.label}>Indicação para próxima consulta (em meses)</p>
                            <Column>
                                <TextField className={classes.inputStudent} name="name" onChange={handleChange} variant="outlined" />
                            </Column>
                        </Grid>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormConsulta;