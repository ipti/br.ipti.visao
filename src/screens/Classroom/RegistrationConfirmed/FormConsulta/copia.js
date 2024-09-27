import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, FormControlLabel, FormGroup, Grid, Radio, RadioGroup, TextField, TextareaAutosize } from "@mui/material";
import React from "react";
import MaskDate from "../../../../components/Mask/maskdate";
import styles from "../../../../styles";
import { Column, Padding } from "../../../../styles/style";
import { FormRegistrationContext } from "../../../context/Classroom/FormOphthalmological/context";

import * as Yup from "yup";
import { Form, Formik } from "formik";

const useStyles = makeStyles(styles);
const FormConsulta = ({ values, handleChange }) => {
    const classes = useStyles();

    const validationSchema = Yup.object().shape({
        nomeMedico: Yup.string().required("Campo obrigatório"),
        crmMedico: Yup.string().required("Campo obrigatório"),
        dataConsulta: Yup.string().required("Campo obrigatório"),
        jaRealizouConsultaAntes: Yup.string().required("Campo obrigatório"),
        refracaoEsfericoOlhoDireito: Yup.string().required("Campo obrigatório"),
        refracaoCilindricoOlhoDireito: Yup.string().required("Campo obrigatório"),
        refracaoEixoOlhoDireito: Yup.string().required("Campo obrigatório"),
        refracaoEquivalenteEsfericoOlhoDireito: Yup.string().required("Campo obrigatório"),
        refracaoDpOlhoDireito: Yup.string().required("Campo obrigatório"),
        refracaoEsfericoOlhoEsquerdo: Yup.string().required("Campo obrigatório"),
        refracaoCilindricoOlhoEsquerdo: Yup.string().required("Campo obrigatório"),
        refracaoEixoOlhoEsquerdo: Yup.string().required("Campo obrigatório"),
        refracaoEquivalenteEsfericoOlhoEsquerdo: Yup.string().required("Campo obrigatório"),
        refracaoDpOlhoEsquerdo: Yup.string().required("Campo obrigatório"),
        //anamnese: Yup.string().required("Campo obrigatório"),
        refracaoEstaticaEsfericoOlhoDireito: Yup.string().required("Campo obrigatório"),
        refracaoEstaticaCilindricoOlhoDireito: Yup.string().required("Campo obrigatório"),
        refracaoEstaticaEixoOlhoDireito: Yup.string().required("Campo obrigatório"),
        refracaoEstaticaAcuidadeVisualOlhoDireito: Yup.string().required("Campo obrigatório"),
        refracaoEstaticaEsfericoOlhoEsquerdo: Yup.string().required("Campo obrigatório"),
        refracaoEstaticaCilindricoOlhoEsquerdo: Yup.string().required("Campo obrigatório"),
        refracaoEstaticaEixoOlhoEsquerdo: Yup.string().required("Campo obrigatório"),
        refracaoEstaticaAcuidadeVisualOlhoEsquerdo: Yup.string().required("Campo obrigatório"),
        biomicroscopiaOd: Yup.string().required("Campo obrigatório"),
        biomicroscopiaOs: Yup.string().required("Campo obrigatório"),
        fundoscopiaOd: Yup.string().required("Campo obrigatório"),
        fundoscopiaOs: Yup.string().required("Campo obrigatório"),
        motilidadeOcular: Yup.string().required("Campo obrigatório"),
        diagnostico: Yup.string().required("Campo obrigatório"),
        conduta: Yup.string().required("Campo obrigatório"),
        precisaOculos: Yup.string().required("Campo obrigatório"),
        proximaConsulta: Yup.string().required("Campo obrigatório"),
    });

    const { oneRegistration, handleUpdate, initialValues } = useContext(FormRegistrationContext)
    //TODO: Adicionar validação, formik e yup

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    handleUpdate(values)
                }}
                validationSchema={validationSchema}
            >
                {({ values, handleChange, handleSubmit, setFieldValue }) => {

                    // const errorList = {
                    //     nomeMedico: touched.nomeMedico && errors.nomeMedico,
                    //     crmMedico: touched.crmMedico && errors.crmMedico,
                    //     dataConsulta: touched.dataConsulta && errors.dataConsulta,
                    //     jaRealizouConsultaAntes: touched.jaRealizouConsultaAntes && errors.jaRealizouConsultaAntes,
                    //     refracaoEsfericoOlhoDireito: touched.refracaoEsfericoOlhoDireito && errors.refracaoEsfericoOlhoDireito,
                    //     refracaoCilindricoOlhoDireito: touched.refracaoCilindricoOlhoDireito && errors.refracaoCilindricoOlhoDireito,
                    //     refracaoEixoOlhoDireito: touched.refracaoEixoOlhoDireito && errors.refracaoEixoOlhoDireito,
                    //     refracaoEquivalenteEsfericoOlhoDireito: touched.refracaoEquivalenteEsfericoOlhoDireito && errors.refracaoEquivalenteEsfericoOlhoDireito,
                    //     refracaoDpOlhoDireito: touched.refracaoDpOlhoDireito && errors.refracaoDpOlhoDireito,
                    //     refracaoEsfericoOlhoEsquerdo: touched.refracaoEsfericoOlhoEsquerdo && errors.refracaoEsfericoOlhoEsquerdo,
                    //     refracaoCilindricoOlhoEsquerdo: touched.refracaoCilindricoOlhoEsquerdo && errors.refracaoCilindricoOlhoEsquerdo,
                    //     refracaoEixoOlhoEsquerdo: touched.refracaoEixoOlhoEsquerdo && errors.refracaoEixoOlhoEsquerdo,
                    //     refracaoEquivalenteEsfericoOlhoEsquerdo: touched.refracaoEquivalenteEsfericoOlhoEsquerdo && errors.refracaoEquivalenteEsfericoOlhoEsquerdo,
                    //     refracaoDpOlhoEsquerdo: touched.refracaoDpOlhoEsquerdo && errors.refracaoDpOlhoEsquerdo,
                    //     //anamnese: touched.anamnese && errors.anamnese,
                    //     refracaoEstaticaEsfericoOlhoDireito: touched.refracaoEstaticaEsfericoOlhoDireito && errors.refracaoEstaticaEsfericoOlhoDireito,
                    //     refracaoEstaticaCilindricoOlhoDireito: touched.refracaoEstaticaCilindricoOlhoDireito && errors.refracaoEstaticaCilindricoOlhoDireito,
                    //     refracaoEstaticaEixoOlhoDireito: touched.refracaoEstaticaEixoOlhoDireito && errors.refracaoEstaticaEixoOlhoDireito,
                    //     refracaoEstaticaAcuidadeVisualOlhoDireito: touched.refracaoEstaticaAcuidadeVisualOlhoDireito && errors.refracaoEstaticaAcuidadeVisualOlhoDireito,
                    //     refracaoEstaticaEsfericoOlhoEsquerdo: touched.refracaoEstaticaEsfericoOlhoEsquerdo && errors.refracaoEstaticaEsfericoOlhoEsquerdo,
                    //     refracaoEstaticaCilindricoOlhoEsquerdo: touched.refracaoEstaticaCilindricoOlhoEsquerdo && errors.refracaoEstaticaCilindricoOlhoEsquerdo,
                    //     refracaoEstaticaEixoOlhoEsquerdo: touched.refracaoEstaticaEixoOlhoEsquerdo && errors.refracaoEstaticaEixoOlhoEsquerdo,
                    //     refracaoEstaticaAcuidadeVisualOlhoEsquerdo: touched.refracaoEstaticaAcuidadeVisualOlhoEsquerdo && errors.refracaoEstaticaAcuidadeVisualOlhoEsquerdo,
                    //     biomicroscopiaOd: touched.biomicroscopiaOd && errors.biomicroscopiaOd,
                    //     biomicroscopiaOs: touched.biomicroscopiaOs && errors.biomicroscopiaOs,
                    //     fundoscopiaOd: touched.fundoscopiaOd && errors.fundoscopiaOd,
                    //     fundoscopiaOs: touched.fundoscopiaOs && errors.fundoscopiaOs,
                    //     motilidadeOcular: touched.motilidadeOcular && errors.motilidadeOcular,
                    //     diagnostico: touched.diagnostico && errors.diagnostico,
                    //     conduta: touched.conduta && errors.conduta,
                    //     precisaOculos: touched.precisaOculos && errors.precisaOculos,
                    //     proximaConsulta: touched.proximaConsulta && errors.proximaConsulta,
                    // }

                    return (
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item style={{ width: "100%" }} md={6}>
                                    <p className={classes.label}>Nome do médico</p>
                                    <Column>
                                        <TextField
                                            className={classes.inputStudent}
                                            name="nomeMedico"
                                            value={values.nomeMedico}
                                            onChange={handleChange} 
                                            variant="outlined" />
                                    </Column>
                                </Grid>
                                <Grid item style={{ width: "100%" }} md={6}>
                                    <p className={classes.label}>CRM</p>
                                    <Column>
                                        <TextField
                                            className={classes.inputStudent}
                                            name="crmMedico"
                                            value={values.crmMedico}
                                            onChange={handleChange} variant="outlined" />
                                    </Column>
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid item style={{ width: "100%" }} md={6}>
                                    <p className={classes.label}>Data de Consulta </p>
                                    <Column>
                                        <TextField
                                            className={classes.inputStudent}
                                            name="dataConsulta"
                                            onChange={handleChange}
                                            InputProps={{
                                                inputComponent: MaskDate,
                                                value: values.dataConsulta,
                                                onChange: handleChange
                                            }}
                                            value={values.dataConsulta}
                                            variant="outlined" />
                                    </Column>
                                </Grid>
                            </Grid>

                            <Padding padding="16px" />
                            <h2> <strong> Histórico de Consulta</strong> </h2>

                            <Grid item style={{ width: "100%" }} md={12}>
                                <p className={classes.label}>Já realizou alguma consulta oftalmológica na vida?</p>
                                <RadioGroup
                                    value={values.jaRealizouConsultaAntes}
                                    name="jaRealizouConsultaAntes"
                                    onChange={handleChange}
                                >
                                    <FormControlLabel control={<Radio />} value={"Sim"} label="Sim" />
                                    <FormControlLabel control={<Radio />} value={"Não"} label="Não" />
                                </RadioGroup>
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
                                        <TextField
                                            className={classes.inputStudent}
                                            name="refracaoEsfericoOlhoDireito"
                                            value={values.refracaoEsfericoOlhoDireito}
                                            onChange={handleChange} variant="outlined" />
                                    </Column>
                                </Grid>
                                <Grid item style={{ width: "100%" }} md={4}>
                                    <p className={classes.label}>Refração cilíndrico</p>
                                    <Column>
                                        <TextField
                                            className={classes.inputStudent}
                                            name="refracaoCilindricoOlhoDireito"
                                            value={values.refracaoCilindricoOlhoDireito}
                                            onChange={handleChange}
                                            variant="outlined" />
                                    </Column>
                                </Grid>
                                <Grid item style={{ width: "100%" }} md={4}>
                                    <p className={classes.label}>Refração eixo</p>
                                    <Column>
                                        <TextField
                                            className={classes.inputStudent}
                                            name="refracaoEixoOlhoDireito"
                                            value={values.refracaoEixoOlhoDireito}
                                            onChange={handleChange}
                                            variant="outlined" />
                                    </Column>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} md={12}>
                                <Grid item style={{ width: "100%" }} md={4}>
                                    <p className={classes.label}>Refração equivalente esférico</p>
                                    <Column>

                                        <TextField
                                            className={classes.inputStudent}
                                            name="refracaoEquivalenteEsfericoOlhoDireito"
                                            value={values.refracaoEquivalenteEsfericoOlhoDireito}
                                            onChange={handleChange} variant="outlined" />
                                    </Column>
                                </Grid>
                                <Grid item style={{ width: "100%" }} md={4}>
                                    <p className={classes.label}>Refração DP</p>
                                    <Column>
                                        <TextField
                                            className={classes.inputStudent}
                                            name="refracaoDpOlhoDireito"
                                            value={values.refracaoDpOlhoDireito}
                                            onChange={handleChange}
                                            variant="outlined" />
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
                                        <TextField
                                            className={classes.inputStudent}
                                            name="refracaoEsfericoOlhoEsquerdo"
                                            value={values.refracaoEsfericoOlhoEsquerdo}
                                            onChange={handleChange}
                                            variant="outlined" />
                                    </Column>
                                </Grid>

                                <Grid item style={{ width: "100%" }} md={4}>
                                    <p className={classes.label}>Refração cilíndrico</p>
                                    <Column>
                                        <TextField
                                            className={classes.inputStudent}
                                            name="refracaoCilindricoOlhoEsquerdo"
                                            value={values.refracaoCilindricoOlhoEsquerdo}
                                            onChange={handleChange}
                                            variant="outlined" />
                                    </Column>
                                </Grid>

                                <Grid item style={{ width: "100%" }} md={4}>
                                    <p className={classes.label}>Refração eixo</p>
                                    <Column>
                                        <TextField
                                            className={classes.inputStudent}
                                            name="refracaoEixoOlhoEsquerdo"
                                            value={values.refracaoEixoOlhoEsquerdo}
                                            onChange={handleChange}
                                            variant="outlined" />
                                    </Column>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} md={12}>
                                <Grid item style={{ width: "100%" }} md={4}>
                                    <p className={classes.label}>Refração equivalente esférico</p>
                                    <Column>
                                        <TextField
                                            className={classes.inputStudent}
                                            name="refracaoEquivalenteEsfericoOlhoEsquerdo"
                                            value={values.refracaoEquivalenteEsfericoOlhoEsquerdo}
                                            onChange={handleChange}
                                            variant="outlined" />
                                    </Column>
                                </Grid>
                                <Grid item style={{ width: "100%" }} md={4}>
                                    <p className={classes.label}>Refração DP</p>
                                    <Column>
                                        <TextField
                                            className={classes.inputStudent}
                                            name="refracaoDpOlhoEsquerdo"
                                            value={values.refracaoDpOlhoEsquerdo}
                                            onChange={handleChange}
                                            variant="outlined" />
                                    </Column>
                                </Grid>
                            </Grid>
                            <Padding padding="16px" />
                            <Grid item style={{ width: "100%" }} md={12}>
                                <p className={classes.label}>Marque as Observações encontradas no Spot Vision</p>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox name="observacoesSpotVision.miopiaOd" defaultChecked={values.observacoesSpotVision?.miopiaOd} onChange={handleChange} value={values.observacoesSpotVision?.miopiaOd} />} label="Miopia OD" />
                                    <FormControlLabel control={<Checkbox name="observacoesSpotVision.miopiaOs" defaultChecked={values.observacoesSpotVision?.miopiaOs} onChange={handleChange} value={values.observacoesSpotVision?.miopiaOs} />} label="Miopia OE " />
                                    <FormControlLabel control={<Checkbox name="observacoesSpotVision.astigmatismoOd" defaultChecked={values.observacoesSpotVision?.astigmatismoOd} onChange={handleChange} value={values.observacoesSpotVision?.astigmatismoOd} />} label="Astigmatismo OD" />
                                    <FormControlLabel control={<Checkbox name="observacoesSpotVision.astigmatismoOs" defaultChecked={values.observacoesSpotVision?.astigmatismoOs} onChange={handleChange} value={values.observacoesSpotVision?.astigmatismoOs} />} label="Astigmatismo OE" />
                                    <FormControlLabel control={<Checkbox name="observacoesSpotVision.hipermetropiaOd" defaultChecked={values.observacoesSpotVision?.hipermetropiaOd} onChange={handleChange} value={values.observacoesSpotVision?.hipermetropiaOd} />} label="Hipermetropia OD" />
                                    <FormControlLabel control={<Checkbox name="observacoesSpotVision.hipermetropiaOs" defaultChecked={values.observacoesSpotVision.hipermetropiaOs} onChange={handleChange} value={values.observacoesSpotVision.hipermetropiaOs} />} label="Hipermetropia OE " />
                                    <FormControlLabel control={<Checkbox name="observacoesSpotVision.estrabismoOd" defaultChecked={values.observacoesSpotVision.estrabismoOd} onChange={handleChange} value={values.observacoesSpotVision?.estrabismoOd} />} label="Estrabismo OD" />
                                    <FormControlLabel control={<Checkbox name="observacoesSpotVision.estrabismoOs" defaultChecked={values.observacoesSpotVision?.estrabismoOs} onChange={handleChange} value={values.observacoesSpotVision?.estrabismoOs} />} label=" Estrabismo OE" />
                                    <FormControlLabel control={<Checkbox name="observacoesSpotVision.anisometropia" defaultChecked={values.observacoesSpotVision?.anisometropia} onChange={handleChange} value={values.observacoesSpotVision?.anisometropia} />} label="Anisometropia" />
                                    <FormControlLabel control={<Checkbox name="observacoesSpotVision.anisocoria" defaultChecked={values.observacoesSpotVision?.anisocoria} onChange={handleChange} value={values.observacoesSpotVision?.anisocoria} />} label="Anisocoria" />
                                </FormGroup>
                            </Grid>
                            <Padding padding="16px" />
                            <Grid item style={{ width: "100%" }} md={6}>
                                <p className={classes.label}>Anamnese</p>
                                <Column>
                                    <TextareaAutosize
                                        className={classes.inputStudent}
                                        style={{ width: "100%", height: "128px", resize: "vertical" }}
                                        name="anamnese"
                                        onChange={handleChange}
                                        value={values.anamnese}
                                        variant="outlined"
                                    />
                                </Column>
                            </Grid>
                            <Padding padding="16px" />
                            <h2>Refração Estática</h2>
                            <h3>Olho direito</h3>
                            <Grid container spacing={2} md={12}>
                                <Grid item style={{ width: "100%" }} md={4}>
                                    <p className={classes.label}>Refração estático Esférico</p>
                                    <Column>
                                        <TextField
                                            className={classes.inputStudent}
                                            name="refracaoEstaticaEsfericoOlhoDireito"
                                            value={values.refracaoEstaticaEsfericoOlhoDireito}
                                            onChange={handleChange}
                                            variant="outlined" />
                                    </Column>
                                </Grid>
                                <Grid item style={{ width: "100%" }} md={4}>
                                    <p className={classes.label}>Refração estático cilíndrico</p>
                                    <Column>
                                        <TextField
                                            className={classes.inputStudent}
                                            name="refracaoEstaticaCilindricoOlhoDireito"
                                            value={values.refracaoEstaticaCilindricoOlhoDireito}
                                            onChange={handleChange}
                                            variant="outlined" />
                                    </Column>
                                </Grid>
                                <Grid item style={{ width: "100%" }} md={4}>
                                    <p className={classes.label}>Refração estático eixo</p>
                                    <Column>
                                        <TextField
                                            className={classes.inputStudent}
                                            name="refracaoEstaticaEixoOlhoDireito"
                                            value={values.refracaoEstaticaEixoOlhoDireito}
                                            onChange={handleChange}
                                            variant="outlined" />
                                    </Column>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} md={12}>
                                <Grid item style={{ width: "100%" }} md={4}>
                                    <p className={classes.label}>Refração estático acuidade visual</p>
                                    <Column>
                                        <TextField className={classes.inputStudent}
                                            name="refracaoEstaticaAcuidadeVisualOlhoDireito"
                                            value={values.refracaoEstaticaAcuidadeVisualOlhoDireito}
                                            onChange={handleChange}
                                            variant="outlined" />
                                    </Column>
                                </Grid>
                            </Grid>
                            <h3>Olho esquerdo</h3>
                            <Grid container spacing={2} md={12}>
                                <Grid item style={{ width: "100%" }} md={4}>
                                    <p className={classes.label}>Refração estático Esférico</p>
                                    <Column>
                                        <TextField className={classes.inputStudent} name="refracaoEstaticaEsfericoOlhoEsquerdo" value={values.refracaoEstaticaEsfericoOlhoEsquerdo} onChange={handleChange} variant="outlined" />
                                    </Column>
                                </Grid>
                                <Grid item style={{ width: "100%" }} md={4}>
                                    <p className={classes.label}>Refração estático cilíndrico</p>
                                    <Column>
                                        <TextField className={classes.inputStudent} name="refracaoEstaticaCilindricoOlhoEsquerdo" value={values.refracaoEstaticaCilindricoOlhoEsquerdo} onChange={handleChange} variant="outlined" />
                                    </Column>
                                </Grid>
                                <Grid item style={{ width: "100%" }} md={4}>
                                    <p className={classes.label}>Refração estático eixo</p>
                                    <Column>
                                        <TextField className={classes.inputStudent} name="refracaoEstaticaEixoOlhoEsquerdo" value={values.refracaoEstaticaEixoOlhoEsquerdo} onChange={handleChange} variant="outlined" />
                                    </Column>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} md={12}>
                                <Grid item style={{ width: "100%" }} md={4}>
                                    <p className={classes.label}>Refração estático acuidade visual</p>
                                    <Column>
                                        <TextField className={classes.inputStudent} name="refracaoEstaticaAcuidadeVisualOlhoEsquerdo" value={values.refracaoEstaticaAcuidadeVisualOlhoEsquerdo} onChange={handleChange} variant="outlined" />
                                    </Column>
                                </Grid>
                            </Grid>
                            <Padding padding="16px" />

                            <h2>Biomicroscopia</h2>
                            <Grid container spacing={2} md={12}>
                                <Grid item style={{ width: "100%" }} md={6}>
                                    <p className={classes.label}>Olho direito</p>
                                    <Column>
                                        <TextField className={classes.inputStudent} name="biomicroscopiaOd" value={values.biomicroscopiaOd} onChange={handleChange} variant="outlined" />
                                    </Column>
                                </Grid>
                                <Grid item style={{ width: "100%" }} md={6}>
                                    <p className={classes.label}>Olho esquerdo</p>
                                    <Column>
                                        <TextField className={classes.inputStudent} name="biomicroscopiaOs" value={values.biomicroscopiaOs} onChange={handleChange} variant="outlined" />
                                    </Column>
                                </Grid>
                            </Grid>
                            <Padding padding="16px" />


                            <h2>Fundoscopia</h2>
                            <Grid container spacing={2} md={12}>
                                <Grid item style={{ width: "100%" }} md={6}>
                                    <p className={classes.label}>Olho direito</p>
                                    <Column>
                                        <TextField className={classes.inputStudent} name="fundoscopiaOd" value={values.fundoscopiaOd} onChange={handleChange} variant="outlined" />
                                    </Column>
                                </Grid>
                                <Grid item style={{ width: "100%" }} md={6}>
                                    <p className={classes.label}>Olho esquerdo</p>
                                    <Column>
                                        <TextField className={classes.inputStudent} name="fundoscopiaOs" value={values.fundoscopiaOs} onChange={handleChange} variant="outlined" />
                                    </Column>
                                </Grid>
                            </Grid>
                            <Padding padding="16px" />
                            <Grid item style={{ width: "100%" }} md={6}>
                                <p className={classes.label}>Motilidade ocular</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="motilidadeOcular" value={values.motilidadeOcular} onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                            <Padding padding="16px" />

                            <Grid item style={{ width: "100%" }} md={6}>
                                <p className={classes.label}>Diagnóstico</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="diagnostico" value={values.diagnostico} onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                            <Padding padding="16px" />

                            <Grid item style={{ width: "100%" }} md={6}>
                                <p className={classes.label}>Conduta</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="conduta" value={values.conduta} onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>
                            <Padding padding="16px" />

                            <Grid item style={{ width: "100%" }} md={12}>
                                <p className={classes.label}>Precisa de óculos</p>
                                <RadioGroup
                                    value={values.precisaOculos}
                                    name="precisaOculos"
                                    onChange={handleChange}
                                >
                                    <FormControlLabel control={<Radio />} value={"Sim"} label="Sim" />
                                    <FormControlLabel control={<Radio />} value={"Não"} label="Não" />
                                </RadioGroup>
                            </Grid>
                            <Padding padding="16px" />

                            <Grid item style={{ width: "100%" }} md={12}>
                                <p className={classes.label}>Marque justificativas para acompanhamento</p>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox name="acompanhamento.ambliopia" defaultChecked={values.acompanhamento?.ambliopia} onChange={handleChange} value={values.acompanhamento?.ambliopia} />} label="Ambliopia" />
                                    <FormControlLabel control={<Checkbox name="acompanhamento.retinoblastoma" defaultChecked={values.acompanhamento?.retinoblastoma} onChange={handleChange} value={values.acompanhamento?.retinoblastoma} />} label="Retinoblastoma " />
                                    <FormControlLabel control={<Checkbox name="acompanhamento.catarataCongenita" defaultChecked={values.acompanhamento?.catarataCongenita} onChange={handleChange} value={values.acompanhamento?.catarataCongenita} />} label="Catarata Congênita" />
                                    <FormControlLabel control={<Checkbox name="acompanhamento.obstrucaoViasLacrimais" defaultChecked={values.acompanhamento?.obstrucaoViasLacrimais} onChange={handleChange} value={values.acompanhamento?.obstrucaoViasLacrimais} />} label="Obstrução de Vias Lacrimais" />
                                    <FormControlLabel control={<Checkbox name="acompanhamento.estrabismo" defaultChecked={values.acompanhamento?.estrabismo} onChange={handleChange} value={values.acompanhamento?.estrabismo} />} label="Estrabismo" />
                                    <FormControlLabel control={<Checkbox name="acompanhamento.glaucomaCongenito" defaultChecked={values.acompanhamento?.glaucomaCongenito} onChange={handleChange} value={values.acompanhamento?.glaucomaCongenito} />} label="Glaucoma congênito" />
                                    <FormControlLabel control={<Checkbox name="acompanhamento.uveites" defaultChecked={values.acompanhamento?.uveites} onChange={handleChange} value={values.acompanhamento?.uveites} />} label="Uveítes" />
                                    <FormControlLabel control={<Checkbox name="acompanhamento.nistagmo" defaultChecked={values.acompanhamento?.nistagmo} onChange={handleChange} value={values.acompanhamento?.nistagmo} />} label="Nistagmo" />
                                    <FormControlLabel control={<Checkbox name="acompanhamento.miopiaProgressiva" defaultChecked={values.acompanhamento?.miopiaProgressiva} onChange={handleChange} value={values.acompanhamento?.miopiaProgressiva} />} label="Miopia progressiva" />
                                    <FormControlLabel control={<Checkbox name="acompanhamento.ectasiasCornea" defaultChecked={values.acompanhamento?.ectasiasCornea} onChange={handleChange} value={values.acompanhamento?.ectasiasCornea} />} label="Ectasias de córnea " />
                                    <FormControlLabel control={<Checkbox name="acompanhamento.alergiasConjuntivitesCalazio" defaultChecked={values.acompanhamento?.alergiasConjuntivitesCalazio} onChange={handleChange} value={values.acompanhamento?.alergiasConjuntivitesCalazio} />} label="Alergias/Conjuntivites/Calázio" />
                                    <FormControlLabel control={<Checkbox name="acompanhamento.baixaVisaoCentral" defaultChecked={values.acompanhamento?.baixaVisaoCentral} onChange={handleChange} value={values.acompanhamento?.baixaVisaoCentral} />} label="Baixa visão Central" />
                                </FormGroup>
                            </Grid>
                            <Padding padding="16px" />

                            <Grid item style={{ width: "100%" }} md={6}>
                                <p className={classes.label}>Indicação para próxima consulta (em meses)</p>
                                <Column>
                                    <TextField className={classes.inputStudent} name="proximaConsulta" value={values.proximaConsulta} onChange={handleChange} variant="outlined" />
                                </Column>
                            </Grid>

                            <Padding padding="8px" />

                            <Grid container>
                                <Grid item style={{ width: "100%" }} md={6}>
                                    <p className={classes.label}>Observações</p>
                                    <Column>
                                        <TextareaAutosize
                                            className={classes.inputStudent}
                                            style={{ width: "100%", height: "128px", resize: "vertical" }}
                                            name="observationConsulta"
                                            onChange={handleChange}
                                            value={values.observationConsulta}
                                            variant="outlined"
                                        />
                                    </Column>
                                </Grid>
                            </Grid>

                            <Padding padding="8px" />

                            <Grid item style={{ width: "100%" }} md={12}>
                                <p className={classes.label}>Considerar formulário como concluído?</p>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox
                                        name="consultaCompleted"
                                        defaultChecked={values.consultaCompleted}
                                        onChange={handleChange}
                                        value={values.consultaCompleted} />}
                                        label="Considerar consulta como concluída" />
                                </FormGroup>
                            </Grid>
                        </Form>
                    )
                }}

            </Formik>
        </>

    )
}

export default FormConsulta;