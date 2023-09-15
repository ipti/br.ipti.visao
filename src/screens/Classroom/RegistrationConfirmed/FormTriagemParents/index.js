import React, { useContext } from "react";

// Material UI
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Radio, RadioGroup } from "@material-ui/core";

import { makeStyles, withStyles } from "@material-ui/core/styles";

// Components

// Third party
import { Form, Formik } from "formik";



// Styles
import { Checkbox, FormGroup } from "@mui/material";
import styles from "../../../../styles";

import { FormRegistrationContext } from "../../../../context/Classroom/FormOphthalmological/context";
import styleBase from "../../../../styles";
import { Padding } from "../../../../styles/style";

const useStyles = makeStyles(styles);

const PurpleRadio = withStyles({
    root: {
        "&$checked": {
            color: styleBase.colors.colorsBaseProductNormal
        }
    },
    checked: {}
})(props => <Radio color="default" {...props} />);




const FormTriagemParents = () => {
    const classes = useStyles();

    const { oneRegistration} = useContext(FormRegistrationContext);
    

    const initialValues = {
        filhossintomas: {
            dificuldadeQuadro: oneRegistration?.object.filhossintomas?.dificuldadeQuadro ?? false,
            dificuldadeLivro: oneRegistration?.object.filhossintomas?.dificuldadeLivro ?? false,
            olhoTortoConstante: oneRegistration?.object.filhossintomas?.olhoTortoConstante ?? false,
            olhoTortoMomentos: oneRegistration?.object.filhossintomas?.olhoTortoMomentos ?? false,
            rostoApertaOlhos: oneRegistration?.object.filhossintomas?.rostoApertaOlhos ?? false,
            tremorOlhos: oneRegistration?.object.filhossintomas?.tremorOlhos ?? false,
            manchaBrancaPupila: oneRegistration?.object.filhossintomas?.manchaBrancaPupila ?? false,
            nenhumaOpcao: oneRegistration?.object.filhossintomas?.nenhumaOpcao ?? false,
        },
        filhoOculos: oneRegistration?.object.filhoOculos ?? '',
        doencasNosOlhos: {
            olhoPreguicoso: oneRegistration?.object.doencasNosOlhos?.olhoPreguicoso ?? false,
            olhoTorto: oneRegistration?.object.doencasNosOlhos?.olhoTorto ?? false,
            catarataInfancia: oneRegistration?.object.doencasNosOlhos?.catarataInfancia ?? false,
            glaucomaCongenito: oneRegistration?.object.doencasNosOlhos?.glaucomaCongenito ?? false,
            tumorOlhos: oneRegistration?.object.doencasNosOlhos?.tumorOlhos ?? false,
            ceratoconeTransplante: oneRegistration?.object.doencasNosOlhos?.ceratoconeTransplante ?? false,
            palpebraCaida: oneRegistration?.object.doencasNosOlhos?.palpebraCaida ?? false,
            nenhumaOpcao: oneRegistration?.object.doencasNosOlhos?.nenhumaOpcao ?? false,
        },
        doencas: {
            prematuridade: oneRegistration?.object.doencas?.prematuridade ?? false,
            sindromeDown: oneRegistration?.object.doencas?.sindromeDown ?? false,
            paralisiaTumorCerebral: oneRegistration?.object.doencas?.paralisiaTumorCerebral ?? false,
            outrasSindromesGeneticas: oneRegistration?.object.doencas?.outrasSindromesGeneticas ?? false,
            diabetes: oneRegistration?.object.doencas?.diabetes ?? false,
            artriteArtrose: oneRegistration?.object.doencas?.artriteArtrose ?? false,
            alergiasCorticoides: oneRegistration?.object.doencas?.alergiasCorticoides ?? false,
            nenhumaOpcao: oneRegistration?.object.doencas?.nenhumaOpcao ?? false,
        },
        doencasFamiliares: {
            miopiaAmbosPais: oneRegistration?.object.doencasFamiliares?.miopiaAmbosPais ?? false,
            miopiaUmPai: oneRegistration?.object.doencasFamiliares?.miopiaUmPai ?? false,
            hipermetropiaAstigmatismo: oneRegistration?.object.doencasFamiliares?.hipermetropiaAstigmatismo ?? false,
            estrabismo: oneRegistration?.object.doencasFamiliares?.estrabismo ?? false,
            catarataGlaucoma: oneRegistration?.object.doencasFamiliares?.catarataGlaucoma ?? false,
            olhoPreguicoso: oneRegistration?.object.doencasFamiliares?.olhoPreguicoso ?? false,
            tumorOlho: oneRegistration?.object.doencasFamiliares?.tumorOlho ?? false,
            nenhumaOpcao: oneRegistration?.object.doencasFamiliares?.nenhumaOpcao ?? false,
        },
        horasUsoAparelhosEletronicos: oneRegistration?.object.horasUsoAparelhosEletronicos ?? "",
        horasAtividadesAoArLivre: oneRegistration?.object.horasAtividadesAoArLivre ?? "",
    };


    return (
        <>
            <Formik
                initialValues={initialValues}
                // onSubmit={values => onSubmit(values)}
                // validationSchema={validationSchema}
                validateOnChange={false}
                enableReinitialize
            >
                {({ errors, values, touched, handleChange, handleSubmit }) => {


                    const errorList = {
                        name: touched.name && errors.name,
                        color_race: touched.color_race && errors.color_race,
                        deficiency: touched.deficiency && errors.deficiency
                    };

                    return (
                        <Form>
                            <Grid item style={{ width: "100%" }} md={12}>
                                <p className={classes.label}>Seu filho tem algum sintoma na visão ou nos olhos?</p>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox name="filhossintomas.dificuldadeQuadro" onChange={handleChange} value={values.filhossintomas.dificuldadeQuadro} />} label="Dificuldade para ver o quadro/lousa" />
                                    <FormControlLabel control={<Checkbox name="filhossintomas.dificuldadeLivro" onChange={handleChange} value={values.filhossintomas.dificuldadeLivro} />} label="Dificuldade para ler o livro/caderno" />
                                    <FormControlLabel control={<Checkbox name="filhossintomas.olhoTortoConstante" onChange={handleChange} value={values.filhossintomas.olhoTortoConstante} />} label="Olho torto constante" />
                                    <FormControlLabel control={<Checkbox name="filhossintomas.olhoTortoMomentos" onChange={handleChange} value={values.filhossintomas.olhoTortoMomentos} />} label="Olho torto em alguns momentos" />
                                    <FormControlLabel control={<Checkbox name="filhossintomas.rostoApertaOlhos" onChange={handleChange} value={values.filhossintomas.rostoApertaOlhos} />} label="Vira o rosto ou aperta os olhos para ver melhor" />
                                    <FormControlLabel control={<Checkbox name="filhossintomas.tremorOlhos" onChange={handleChange} value={values.filhossintomas.tremorOlhos} />} label="Tremor dos olhos involuntário (nistagmo)" />
                                    <FormControlLabel control={<Checkbox name="filhossintomas.manchaBrancaPupila" onChange={handleChange} value={values.filhossintomas.manchaBrancaPupila} />} label="Mancha branca na pupila" />
                                    <FormControlLabel control={<Checkbox name="filhossintomas.nenhumaOpcao" onChange={handleChange} value={values.filhossintomas.nenhumaOpcao} />} label="Nenhuma das opções" />
                                </FormGroup>
                            </Grid>
                            <Padding padding="16px"/>
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
                                        error={errorList.filhoOculos}
                                    >
                                        <FormLabel component="legend">Seu filho já usa óculos? *</FormLabel>
                                        <RadioGroup
                                            value={values.filhoOculos}
                                            name="filhoOculos"
                                            onChange={handleChange}
                                            row
                                        >
                                            <FormControlLabel
                                                value={true}
                                                name="filhoOculos"
                                                control={<PurpleRadio />}
                                                label="Sim"
                                            />
                                            <FormControlLabel
                                                value={false}
                                                name="filhoOculos"
                                                control={<PurpleRadio />}
                                                label="Não"
                                            />
                                        </RadioGroup>
                                        <FormHelperText>{errorList.filhoOculos}</FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={12}>
                                <p className={classes.label}>Seu filho tem ou teve alguma dessas doenças nos olhos?</p>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.olhoPreguicoso" onChange={handleChange} value={values.doencasNosOlhos.olhoPreguicoso} />} label="Olho preguiçoso (ambliopia) ou não enxerga bem com um dos olhos" />
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.olhoTorto" onChange={handleChange} value={values.doencasNosOlhos.olhoTorto} />} label="Olho torto (estrabismo)" />
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.catarataInfancia" onChange={handleChange} value={values.doencasNosOlhos.catarataInfancia} />} label=" Catarata na infância" />
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.glaucomaCongenito" onChange={handleChange} value={values.doencasNosOlhos.glaucomaCongenito} />} label=" Glaucoma congênito" />
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.tumorOlhos" onChange={handleChange} value={values.doencasNosOlhos.tumorOlhos} />} label="Tumor nos olhos (RETINOBLASTOMA)" />
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.ceratoconeTransplante" onChange={handleChange} value={values.doencasNosOlhos.ceratoconeTransplante} />} label="Ceratocone ou transplante de córnea" />
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.palpebraCaida" onChange={handleChange} value={values.doencasNosOlhos.palpebraCaida} />} label="Pálpebra caída (ptose pálpebral)" />
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.nenhumaOpcao" onChange={handleChange} value={values.doencasNosOlhos.nenhumaOpcao} />} label="Nenhuma das opções" />
                                </FormGroup>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={12}>
                                <p className={classes.label}>Seu filho tem ou teve alguma dessas doenças ?</p>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.prematuridade" onChange={handleChange} value={values.doencas.prematuridade} />} label="Prematuridade (menos de 32 semanas - 7 meses)" />
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.sindromeDown" onChange={handleChange} value={values.doencas.sindromeDown} />} label="Síndrome de Down" />
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.paralisiaTumorCerebral" onChange={handleChange} value={values.doencas.paralisiaTumorCerebral} />} label="Paralisia ou tumor cerebral" />
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.outrasSindromesGeneticas" onChange={handleChange} value={values.doencas.outrasSindromesGeneticas} />} label="Outras síndromes genéticas" />
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.diabetes" onChange={handleChange} value={values.doencas.diabetes} />} label="Diabetes" />
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.artriteArtrose" onChange={handleChange} value={values.doencas.artriteArtrose} />} label="Artrite ou Artrose" />
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.alergiasCorticoides" onChange={handleChange} value={values.doencas.alergiasCorticoides} />} label=" Alergias ou uso prolongado de corticoides" />
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.nenhumaOpcao" onChange={handleChange} value={values.doencas.nenhumaOpcao} />} label="Nenhuma das opções" />
                                </FormGroup>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={12}>
                                <p className={classes.label}>Vocês (pai ou mãe ou irmos), avós ou tios de primeiro grau tem ou tiveram algumas dessas doenças? ?</p>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Pai e mãe (os dois) com miopia acima de 3 graus" />
                                    <FormControlLabel control={<Checkbox />} label="Pai ou mãe (um dos dois) com miopia acima de 5 graus" />
                                    <FormControlLabel control={<Checkbox />} label="Alta hipermetropia ou alto astigmatismo" />
                                    <FormControlLabel control={<Checkbox />} label="Estrabismo (olho torto)" />
                                    <FormControlLabel control={<Checkbox />} label="Catarata na infância ou Glaucoma congênito" />
                                    <FormControlLabel control={<Checkbox />} label="Olho preguiçoso (ambliopia)" />
                                    <FormControlLabel control={<Checkbox />} label="Tumor no olho (RETINOBLASTOMA)" />
                                    <FormControlLabel control={<Checkbox />} label="Nenhuma das opções" />
                                </FormGroup>
                            </Grid>
                            <Padding />
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
                                        error={errorList.horasUsoAparelhosEletronicos}
                                    >
                                        <FormLabel component="legend">Quantas horas por dia seu filho usa aparelhos eletrônicos (tablet,
                                            Computador, celular)? *</FormLabel>
                                        <RadioGroup
                                            value={values.horasUsoAparelhosEletronicos.toString()}
                                            name="horasUsoAparelhosEletronicos"
                                            onChange={handleChange}
                                            row
                                        >
                                            <FormControlLabel
                                                value={'1'}
                                                name="horasUsoAparelhosEletronicos"
                                                control={<PurpleRadio />}
                                                label="< 1 hora"
                                            />
                                            <FormControlLabel
                                                value={'2'}
                                                name="horasUsoAparelhosEletronicos"
                                                control={<PurpleRadio />}
                                                label="Entre 1 e 2 horas"
                                            />
                                            <FormControlLabel
                                                value={'3'}
                                                name="horasUsoAparelhosEletronicos"
                                                control={<PurpleRadio />}
                                                label="Entre 2 a 3 horas"
                                            />
                                            <FormControlLabel
                                                value={'4'}
                                                name="horasUsoAparelhosEletronicos"
                                                control={<PurpleRadio />}
                                                label="Entre 4 a 8 horas"
                                            />
                                            <FormControlLabel
                                                value={'5'}
                                                name="horasUsoAparelhosEletronicos"
                                                control={<PurpleRadio />}
                                                label="Acima de 8 horas por dia"
                                            />
                                        </RadioGroup>
                                        <FormHelperText>{errorList.sex}</FormHelperText>
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
                                        error={errorList.horasAtividadesAoArLivre}
                                    >
                                        <FormLabel component="legend">Quantas horas por dia seu filho passa em atividades ao ar livre, recreativas ou por Esporte? *</FormLabel>
                                        <RadioGroup
                                            value={values.horasAtividadesAoArLivre.toString()}
                                            name="horasAtividadesAoArLivre"
                                            onChange={handleChange}
                                            row
                                        >
                                            <FormControlLabel
                                                value={'1'}
                                                name="horasAtividadesAoArLivre"
                                                control={<PurpleRadio />}
                                                label=" < meia hora"
                                            />
                                            <FormControlLabel
                                                value={'2'}
                                                name="horasAtividadesAoArLivre"
                                                control={<PurpleRadio />}
                                                label="Entre 30 min a 1 hora"
                                            />
                                            <FormControlLabel
                                                value={'3'}
                                                name="horasAtividadesAoArLivre"
                                                control={<PurpleRadio />}
                                                label="Entre 1 e 2 horas"
                                            />
                                            <FormControlLabel
                                                value={'4'}
                                                name="horasAtividadesAoArLivre"
                                                control={<PurpleRadio />}
                                                label=" Acima de 2 horas"
                                            />
                                        </RadioGroup>
                                        <FormHelperText>{errorList.sex}</FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default FormTriagemParents;
