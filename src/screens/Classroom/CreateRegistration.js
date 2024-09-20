import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, Radio, RadioGroup, TextField } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react"
import * as Yup from "yup";
import MaskCpf from "../../components/Mask/maskcpf";
import Select from "react-select";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

import styleBase from "../../styles";
import styles from "../../screens/Registration/styles";
import MaskDate from "../../components/Mask/maskdate";
import { ButtonPurple } from "../../components/Buttons";
import { getIdSchool } from "../../services/auth";
import handleSubmitStudent from "../../controller/registration/createRegistration";

const useStyles = makeStyles(styles);

const PurpleRadio = withStyles({
    root: {
        "&$checked": {
            color: styleBase.colors.colorsBaseProductNormal
        }
    },
    checked: {}
})(props => <Radio color="default" {...props} />);

const customStyles = {
    control: base => ({
        ...base,

        height: "60px",
        minHeight: "60px",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        display: 'flex', flexDirection: 'row', justifyContent: "start"
    }),
    menu: base => ({
        ...base,
        width: '100%',
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    })
};

const CreateRegistrationState = () => {

    const { id } = useParams();



    const turno = [
        {
            id: 1,
            name: "Manhã"
        },
        {
            id: 2,
            name: "Tarde"
        },
        {
            id: 3,
            name: "Noite"
        },
        {
            id: 4,
            name: "Integral"
        },
    ]

    const colorRace = [
        {
            id: 1,
            name: "Não declarado"
        },
        {
            id: 2,
            name: "Branca"
        },
        {
            id: 3,
            name: "Preta"
        },
        {
            id: 4,
            name: "Parda"
        },
    ]


    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Campo obrigatório!").min(10, 'minimo de 10 caracteres'),
        birthday: Yup.string().required("Campo obrigatório!"),
        sex: Yup.string().required("Campo obrigatório!"),
        cpf: Yup.string().required("Campo obrigatório!"),
        colorRace: Yup.string().required("Campo obrigatório!"),
        zone: Yup.string().required("Campo obrigatório!"),
        school_fk: Yup.string().required("Campo obrigatório!"),
        classroom_fk: Yup.string().required("Campo obrigatório!"),
        turno: Yup.string().required("Campo obrigatório!"),
        filhoOculos: Yup.string().required(),
        horasUsoAparelhosEletronicos: Yup.string().required(),
        horasAtividadesAoArLivre: Yup.string().required(),
    });


    const initialValues = {
        name: '',
        birthday: '',
        sex: "",
        cpf: "",
        colorRace: "",
        zone: "",
        school_fk: getIdSchool(),
        classroom_fk: id,
        turno: "",
        permission: true,
        filhossintomas: {
            dificuldadeQuadro: false,
            dificuldadeLivro: false,
            olhoTortoConstante: false,
            olhoTortoMomentos: false,
            rostoApertaOlhos: false,
            tremorOlhos: false,
            manchaBrancaPupila: false,
            nenhumaOpcao: false,
        },
        filhoOculos: '',
        doencasNosOlhos: {
            olhoPreguicoso: false,
            olhoTorto: false,
            catarataInfancia: false,
            glaucomaCongenito: false,
            tumorOlhos: false,
            ceratoconeTransplante: false,
            palpebraCaida: false,
            nenhumaOpcao: false,
        },
        doencas: {
            prematuridade: false,
            sindromeDown: false,
            paralisiaTumorCerebral: false,
            outrasSindromesGeneticas: false,
            diabetes: false,
            artriteArtrose: false,
            alergiasCorticoides: false,
            nenhumaOpcao: false,
        },
        doencasFamiliares: {
            miopiaAmbosPais: false,
            miopiaUmPai: false,
            hipermetropiaAstigmatismo: false,
            estrabismo: false,
            catarataGlaucoma: false,
            olhoPreguicoso: false,
            tumorOlho: false,
            nenhumaOpcao: false,
        },
        horasUsoAparelhosEletronicos: "",
        horasAtividadesAoArLivre: "",
    };

    return {
        turno, colorRace, validationSchema, initialValues, id
    }
}

const CreateRegistration = () => {
    const classes = useStyles();
    const history = useHistory()

    const props = CreateRegistrationState();
    return (
        <div>
            <h1>Criar aluno</h1>
            <Formik
                initialValues={props.initialValues}
                onSubmit={values => { handleSubmitStudent(values, history, `${"/turmas/" + props.id}`) }}
                validationSchema={props.validationSchema}
                validateOnChange={false}
                enableReinitialize
            >
                {({ errors, values, touched, handleChange, handleSubmit, setFieldValue }) => {

                    const errorList = {
                        name: touched.name && errors.name,
                        birthday: touched.birthday && errors.birthday,
                        sex: touched.sex && errors.sex,
                        cpf: touched.cpf && errors.cpf,
                        school_fk: touched.school && errors.school,
                        classroom_fk: touched.classroom && errors.classroom,
                        turno: touched.turno && errors.turno,
                        colorRace: touched.colorRace && errors.colorRace,
                        filhoOculos: touched.filhoOculos && errors.filhoOculos,
                        horasUsoAparelhosEletronicos: touched.horasUsoAparelhosEletronicos && errors.horasUsoAparelhosEletronicos,
                        horasAtividadesAoArLivre: touched.horasAtividadesAoArLivre && errors.horasAtividadesAoArLivre
                    };

                    return (
                        <Form>
                            <Grid
                                className={`${classes.marginTop} ${classes.contentMain}`}
                                container
                                direction="row"
                                justifyContent="start"
                                alignItems="center"
                            >
                                <Grid item xs={6}>
                                    <FormControl
                                        component="fieldset"
                                        className={classes.formControl}
                                        error={errorList.name}
                                    >
                                        <FormLabel>Nome Completo *</FormLabel>
                                        <TextField
                                            name="name"
                                            onChange={handleChange}
                                            value={values.name}
                                            variant="outlined"
                                            className={classes.textField}
                                            error={!!errorList.name}
                                            autoComplete="off"
                                        />
                                        <FormHelperText>{errorList.name}</FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid
                                className={`${classes.contentMain}`}
                                container
                                direction="row"
                                justifyContent="start"
                                alignItems="center"
                            >
                                <Grid item xs={6}>
                                    <FormControl
                                        component="fieldset"
                                        className={classes.formControl}
                                        error={!!errorList.birthday}
                                    >
                                        <FormLabel>Nascimento *</FormLabel>
                                        <TextField
                                            name="birthday"
                                            variant="outlined"
                                            className={classes.textField}
                                            InputProps={{
                                                inputComponent: MaskDate,
                                                value: values.birthday,
                                                onChange: handleChange
                                            }}
                                            error={!!errorList.birthday}
                                        />
                                        <FormHelperText>{errorList.birthday}</FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid
                                className={`${classes.contentMain}`}
                                container
                                direction="row"
                            >
                                <Grid item xs={6}>
                                    <FormControl
                                        component="fieldset"
                                        className={classes.formControl}
                                        error={errorList.sex}
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
                                        <FormHelperText>{errorList.sex}</FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>


                            <Grid item xs={6}>
                                <FormControl
                                    component="fieldset"
                                    className={classes.formControl}
                                    error={errorList.colorRace}
                                >
                                    <FormLabel
                                        style={{ display: 'flex', flexDirection: 'row', justifyContent: "start", marginBottom: "24px" }}
                                    >
                                        Cor/Raça *
                                    </FormLabel>
                                    <Select
                                        styles={customStyles}
                                        className="basic-single"
                                        classNamePrefix="select"
                                        placeholder="Selecione Cor/Raça"
                                        options={props.colorRace}
                                        isLoading={props.isLoadingColorRace}
                                        onChange={selectedOption => {
                                            setFieldValue("colorRace", selectedOption.id)
                                        }}
                                        getOptionValue={opt => opt.id}
                                        getOptionLabel={opt => opt.name}
                                    />
                                </FormControl>
                                <FormHelperText>{errorList.colorRace}</FormHelperText>
                            </Grid>


                            <Grid
                                className={`${classes.contentMain}`}
                                container
                                direction="row"
                                justifyContent="start"
                                alignItems="center"
                            >
                                <Grid item xs={6}>
                                    <FormControl
                                        component="fieldset"
                                        className={classes.formControl}
                                        error={errorList.cpf}
                                    >
                                        <FormLabel>Nº do CPF *</FormLabel>
                                        <TextField
                                            name="cpf"
                                            variant="outlined"
                                            InputProps={{
                                                inputComponent: MaskCpf,
                                                value: values.cpf,
                                                onChange: handleChange
                                            }}
                                            className={classes.textField}
                                            error={errorList.cpf}
                                            autoComplete="off"
                                        />
                                        <FormHelperText>{errorList.cpf}</FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl
                                    component="fieldset"
                                    className={classes.formControl}
                                    error={errorList.turno}
                                >
                                    <FormLabel style={{ display: 'flex', flexDirection: 'row', justifyContent: "start", marginBottom: "24px" }} >Turno *</FormLabel>
                                    <Select
                                        styles={customStyles}
                                        className="basic-single"
                                        classNamePrefix="select"
                                        placeholder="Digite o nome da Turno"
                                        options={props.turno}
                                        isLoading={props.turno}
                                        onChange={selectedOption => {
                                            setFieldValue("turno", selectedOption.id)
                                        }}
                                        getOptionValue={opt => opt.inep_id}
                                        getOptionLabel={opt => opt.name}
                                    />
                                </FormControl>
                                <FormHelperText>{errorList.turno}</FormHelperText>
                            </Grid>

                            <Grid
                                className={`${classes.contentMain}`}
                                container
                                direction="row"
                            >
                                <Grid item xs={6}>
                                    <FormControl
                                        component="fieldset"
                                        className={classes.formControl}
                                        error={errorList.zone}
                                    >
                                        <FormLabel component="legend">Zona *</FormLabel>
                                        <RadioGroup
                                            value={values.zone}
                                            name="zone"
                                            onChange={handleChange}
                                            row
                                        >
                                            <FormControlLabel
                                                value={'1'}
                                                name="zone"
                                                control={<PurpleRadio />}
                                                label="Rural"
                                            />
                                            <FormControlLabel
                                                value={'2'}
                                                name="zone"
                                                control={<PurpleRadio />}
                                                label="Urbana"
                                            />
                                        </RadioGroup>
                                        <FormHelperText>{errorList.zone}</FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>

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
                                                value={"1"}
                                                name="filhoOculos"
                                                control={<PurpleRadio />}
                                                label="Sim"
                                            />
                                            <FormControlLabel
                                                value={"0"}
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
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.alergiasCorticoides" onChange={handleChange} value={values.doencas.alergiasCorticoides} />} label=" Alergias e uso prolongado de corticoides" />
                                    <FormControlLabel control={<Checkbox name="doencasNosOlhos.nenhumaOpcao" onChange={handleChange} value={values.doencas.nenhumaOpcao} />} label="Nenhuma das opções" />
                                </FormGroup>
                            </Grid>
                            <Grid item style={{ width: "100%" }} md={12}>
                                <p className={classes.label}>Vocês (pai, mãe, irmãos, avós ou tios de primeiro grau) têm ou tiveram alguma dessas doenças?
                                </p>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} name="doencasFamiliares.miopiaUmPai" defaultChecked={values.doencasFamiliares.miopiaUmPai} value={values.doencasFamiliares.miopiaUmPai} label="Pai e mãe (os dois) com miopia acima de 3 graus" />
                                    <FormControlLabel control={<Checkbox />} name="doencasFamiliares.miopiaAmbosPais" defaultChecked={values.doencasFamiliares.miopiaAmbosPais} value={values.doencasFamiliares.miopiaAmbosPais} label="Pai ou mãe (um dos dois) com miopia acima de 5 graus" />
                                    <FormControlLabel control={<Checkbox />} name="doencasFamiliares.hipermetropiaAstigmatismo" defaultChecked={values.doencasFamiliares.hipermetropiaAstigmatismo} value={values.doencasFamiliares.hipermetropiaAstigmatismo} label="Alta hipermetropia ou alto astigmatismo" />
                                    <FormControlLabel control={<Checkbox />} name="doencasFamiliares.estrabismo" defaultChecked={values.doencasFamiliares.estrabismo} value={values.doencasFamiliares.estrabismo} label="Estrabismo (olho torto)" />
                                    <FormControlLabel control={<Checkbox />} name="doencasFamiliares.catarataGlaucoma" defaultChecked={values.doencasFamiliares.catarataGlaucoma} value={values.doencasFamiliares.catarataGlaucoma} label="Catarata na infância ou Glaucoma congênito" />
                                    <FormControlLabel control={<Checkbox />} name="doencasFamiliares.olhoPreguicoso" defaultChecked={values.doencasFamiliares.olhoPreguicoso} value={values.doencasFamiliares.olhoPreguicoso} label="Olho preguiçoso (ambliopia)" />
                                    <FormControlLabel control={<Checkbox />} name="doencasFamiliares.tumorOlho" defaultChecked={values.doencasFamiliares.tumorOlho} value={values.doencasFamiliares.tumorOlho} label="Tumor no olho (RETINOBLASTOMA)" />
                                    <FormControlLabel control={<Checkbox />} name="doencasFamiliares.nenhumaOpcao}" defaultChecked={values.doencasFamiliares.nenhumaOpcao} value={values.doencasFamiliares.nenhumaOpcao} label="Nenhuma das opções" />
                                </FormGroup>
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
                                        error={errorList.horasUsoAparelhosEletronicos}
                                    >
                                        <FormLabel component="legend">Quantas horas por dia seu filho usa aparelhos eletrônicos (tablet,
                                            Computador, celular)? *</FormLabel>
                                        <RadioGroup
                                            value={values.horasUsoAparelhosEletronicos}
                                            name="horasUsoAparelhosEletronicos"
                                            onChange={handleChange}
                                            column
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
                                        <FormHelperText>{errorList.horasUsoAparelhosEletronicos}</FormHelperText>
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
                                        <FormLabel component="legend">Quantas horas por dia seu filho passa em atividades ao ar livre, para diversão ou por esporte? *</FormLabel>
                                        <RadioGroup
                                            value={values.horasAtividadesAoArLivre}
                                            name="horasAtividadesAoArLivre"
                                            onChange={handleChange}
                                            column
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
                                        <FormHelperText>{errorList.horasAtividadesAoArLivre}</FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid
                                className={`${classes.marginTop} ${classes.marginButtom}`}
                                justifyContent="center"
                                alignItems="center"
                                container
                                direction="row"
                            >
                                <Grid item xs={6}>
                                    <ButtonPurple
                                        type="submit"
                                        title="Finalizar"
                                        className="t-button-primary"
                                    />
                                </Grid>
                            </Grid>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    )
}

export default CreateRegistration