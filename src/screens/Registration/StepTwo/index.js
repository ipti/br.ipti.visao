import React, { useContext } from "react";

// Material UI
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@material-ui/core";

import { makeStyles, withStyles } from "@material-ui/core/styles";

// Components

// Third party
import { Form, Formik } from "formik";

import * as Yup from "yup";

// Styles
import { Checkbox, FormGroup } from "@mui/material";
import { ButtonPurple } from "../../../components/Buttons";
import { RegistrationContext } from "../../../context/Registration/context";
import styleBase from "../../../styles";
import styles from "../styles";

const useStyles = makeStyles(styles);

const PurpleRadio = withStyles({
  root: {
    "&$checked": {
      color: styleBase.colors.colorsBaseProductNormal,
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const StepTwo = () => {
  const classes = useStyles();

  const { onSubmit, dataValues } = useContext(RegistrationContext);

  const initialValues = {
    filhossintomas: {
      dificuldadeQuadro: dataValues?.filhossintomas?.dificuldadeQuadro ?? false,
      dificuldadeLivro: dataValues?.filhossintomas?.dificuldadeLivro ?? false,
      olhoTortoConstante:
        dataValues?.filhossintomas?.olhoTortoConstante ?? false,
      olhoTortoMomentos: dataValues?.filhossintomas?.olhoTortoMomentos ?? false,
      rostoApertaOlhos: dataValues?.filhossintomas?.rostoApertaOlhos ?? false,
      tremorOlhos: dataValues?.filhossintomas?.tremorOlhos ?? false,
      manchaBrancaPupila:
        dataValues?.filhossintomas?.manchaBrancaPupila ?? false,
      nenhumaOpcao: dataValues?.filhossintomas?.nenhumaOpcao ?? false,
    },
    filhoOculos: dataValues?.filhoOculos ?? "",
    doencasNosOlhos: {
      olhoPreguicoso: dataValues?.doencasNosOlhos?.olhoPreguicoso ?? false,
      olhoTorto: dataValues?.doencasNosOlhos?.olhoTorto ?? false,
      catarataInfancia: dataValues?.doencasNosOlhos?.catarataInfancia ?? false,
      glaucomaCongenito:
        dataValues?.doencasNosOlhos?.glaucomaCongenito ?? false,
      tumorOlhos: dataValues?.doencasNosOlhos?.tumorOlhos ?? false,
      ceratoconeTransplante:
        dataValues?.doencasNosOlhos?.ceratoconeTransplante ?? false,
      palpebraCaida: dataValues?.doencasNosOlhos?.palpebraCaida ?? false,
      nenhumaOpcao: dataValues?.doencasNosOlhos?.nenhumaOpcao ?? false,
    },
    doencas: {
      prematuridade: dataValues?.doencas?.prematuridade ?? false,
      sindromeDown: dataValues?.doencas?.sindromeDown ?? false,
      paralisiaTumorCerebral:
        dataValues?.doencas?.paralisiaTumorCerebral ?? false,
      outrasSindromesGeneticas:
        dataValues?.doencas?.outrasSindromesGeneticas ?? false,
      diabetes: dataValues?.doencas?.diabetes ?? false,
      artriteArtrose: dataValues?.doencas?.artriteArtrose ?? false,
      alergiasCorticoides: dataValues?.doencas?.alergiasCorticoides ?? false,
      nenhumaOpcao: dataValues?.doencas?.nenhumaOpcao ?? false,
    },
    doencasFamiliares: {
      miopiaAmbosPais: dataValues?.doencasFamiliares?.miopiaAmbosPais ?? false,
      miopiaUmPai: dataValues?.doencasFamiliares?.miopiaUmPai ?? false,
      hipermetropiaAstigmatismo:
        dataValues?.doencasFamiliares?.hipermetropiaAstigmatismo ?? false,
      estrabismo: dataValues?.doencasFamiliares?.estrabismo ?? false,
      catarataGlaucoma:
        dataValues?.doencasFamiliares?.catarataGlaucoma ?? false,
      olhoPreguicoso: dataValues?.doencasFamiliares?.olhoPreguicoso ?? false,
      tumorOlho: dataValues?.doencasFamiliares?.tumorOlho ?? false,
      nenhumaOpcao: dataValues?.doencasFamiliares?.nenhumaOpcao ?? false,
    },
    horasUsoAparelhosEletronicos:
      dataValues?.horasUsoAparelhosEletronicos ?? "",
    horasAtividadesAoArLivre: dataValues?.horasAtividadesAoArLivre ?? "",
  };

  const schema = Yup.object().shape({
    filhoOculos: Yup.string().required(),
    horasUsoAparelhosEletronicos: Yup.string().required(),
    horasAtividadesAoArLivre: Yup.string().required(),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={schema}
        validateOnChange={false}
        enableReinitialize
      >
        {({ errors, values, touched, handleChange, handleSubmit }) => {
          const errorList = {
            filhoOculos: touched.filhoOculos && errors.filhoOculos,
            horasUsoAparelhosEletronicos:
              touched.horasUsoAparelhosEletronicos &&
              errors.horasUsoAparelhosEletronicos,
            horasAtividadesAoArLivre:
              touched.horasAtividadesAoArLivre &&
              errors.horasAtividadesAoArLivre,
          };

          return (
            <Form onSubmit={handleSubmit}>
              <Grid item style={{ width: "100%" }} md={12}>
                <p className={classes.label}>
                  Seu filho tem algum sintoma na visão ou nos olhos?
                </p>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="filhossintomas.dificuldadeQuadro"
                        onChange={handleChange}
                        value={values.filhossintomas.dificuldadeQuadro}
                      />
                    }
                    label="Dificuldade para ver o quadro/lousa"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="filhossintomas.dificuldadeLivro"
                        onChange={handleChange}
                        value={values.filhossintomas.dificuldadeLivro}
                      />
                    }
                    label="Dificuldade para ler o livro/caderno"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="filhossintomas.olhoTortoConstante"
                        onChange={handleChange}
                        value={values.filhossintomas.olhoTortoConstante}
                      />
                    }
                    label="Olho torto constante"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="filhossintomas.olhoTortoMomentos"
                        onChange={handleChange}
                        value={values.filhossintomas.olhoTortoMomentos}
                      />
                    }
                    label="Olho torto em alguns momentos"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="filhossintomas.rostoApertaOlhos"
                        onChange={handleChange}
                        value={values.filhossintomas.rostoApertaOlhos}
                      />
                    }
                    label="Vira o rosto ou aperta os olhos para ver melhor"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="filhossintomas.tremorOlhos"
                        onChange={handleChange}
                        value={values.filhossintomas.tremorOlhos}
                      />
                    }
                    label="Tremor dos olhos involuntário (nistagmo)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="filhossintomas.manchaBrancaPupila"
                        onChange={handleChange}
                        value={values.filhossintomas.manchaBrancaPupila}
                      />
                    }
                    label="Mancha branca na pupila"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="filhossintomas.nenhumaOpcao"
                        onChange={handleChange}
                        value={values.filhossintomas.nenhumaOpcao}
                      />
                    }
                    label="Nenhuma das opções"
                  />
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
                    <FormLabel component="legend">
                      Seu filho já usa óculos? *
                    </FormLabel>
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
              {values.filhoOculos === "1" && (
                <p style={{ color: "red" }} className={classes.label}>
                  Lembrar de trazer última receita oftalmológica para a consulta
                </p>
              )}

              <Grid item style={{ width: "100%" }} md={12}>
                <p className={classes.label}>
                  Seu filho tem ou teve alguma dessas doenças nos olhos?
                </p>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="doencasNosOlhos.olhoPreguicoso"
                        onChange={handleChange}
                        value={values.doencasNosOlhos.olhoPreguicoso}
                      />
                    }
                    label="Olho preguiçoso (ambliopia) ou não enxerga bem com um dos olhos"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="doencasNosOlhos.olhoTorto"
                        onChange={handleChange}
                        value={values.doencasNosOlhos.olhoTorto}
                      />
                    }
                    label="Olho torto (estrabismo)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="doencasNosOlhos.catarataInfancia"
                        onChange={handleChange}
                        value={values.doencasNosOlhos.catarataInfancia}
                      />
                    }
                    label=" Catarata na infância"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="doencasNosOlhos.glaucomaCongenito"
                        onChange={handleChange}
                        value={values.doencasNosOlhos.glaucomaCongenito}
                      />
                    }
                    label=" Glaucoma congênito"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="doencasNosOlhos.tumorOlhos"
                        onChange={handleChange}
                        value={values.doencasNosOlhos.tumorOlhos}
                      />
                    }
                    label="Tumor nos olhos (RETINOBLASTOMA)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="doencasNosOlhos.ceratoconeTransplante"
                        onChange={handleChange}
                        value={values.doencasNosOlhos.ceratoconeTransplante}
                      />
                    }
                    label="Ceratocone ou transplante de córnea"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="doencasNosOlhos.palpebraCaida"
                        onChange={handleChange}
                        value={values.doencasNosOlhos.palpebraCaida}
                      />
                    }
                    label="Pálpebra caída (ptose pálpebral)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="doencasNosOlhos.nenhumaOpcao"
                        onChange={handleChange}
                        value={values.doencasNosOlhos.nenhumaOpcao}
                      />
                    }
                    label="Nenhuma das opções"
                  />
                </FormGroup>
              </Grid>
              <Grid item style={{ width: "100%" }} md={12}>
                <p className={classes.label}>
                  Seu filho tem ou teve alguma dessas doenças ?
                </p>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="doencasNosOlhos.prematuridade"
                        onChange={handleChange}
                        value={values.doencas.prematuridade}
                      />
                    }
                    label="Prematuridade (menos de 32 semanas - 7 meses)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="doencasNosOlhos.sindromeDown"
                        onChange={handleChange}
                        value={values.doencas.sindromeDown}
                      />
                    }
                    label="Síndrome de Down"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="doencasNosOlhos.paralisiaTumorCerebral"
                        onChange={handleChange}
                        value={values.doencas.paralisiaTumorCerebral}
                      />
                    }
                    label="Paralisia ou tumor cerebral"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="doencasNosOlhos.outrasSindromesGeneticas"
                        onChange={handleChange}
                        value={values.doencas.outrasSindromesGeneticas}
                      />
                    }
                    label="Outras síndromes genéticas"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="doencasNosOlhos.diabetes"
                        onChange={handleChange}
                        value={values.doencas.diabetes}
                      />
                    }
                    label="Diabetes"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="doencasNosOlhos.artriteArtrose"
                        onChange={handleChange}
                        value={values.doencas.artriteArtrose}
                      />
                    }
                    label="Artrite ou Artrose"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="doencasNosOlhos.alergiasCorticoides"
                        onChange={handleChange}
                        value={values.doencas.alergiasCorticoides}
                      />
                    }
                    label=" Alergias e uso prolongado de corticoides"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="doencasNosOlhos.nenhumaOpcao"
                        onChange={handleChange}
                        value={values.doencas.nenhumaOpcao}
                      />
                    }
                    label="Nenhuma das opções"
                  />
                </FormGroup>
              </Grid>
              <Grid item style={{ width: "100%" }} md={12}>
                <p className={classes.label}>
                  Vocês (pai, mãe, irmãos, avós ou tios de primeiro grau) têm ou
                  tiveram alguma dessas doenças?
                </p>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    name="doencasFamiliares.miopiaUmPai"
                    defaultChecked={values.doencasFamiliares.miopiaUmPai}
                    value={values.doencasFamiliares.miopiaUmPai}
                    label="Pai e mãe (os dois) com miopia acima de 3 graus"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    name="doencasFamiliares.miopiaAmbosPais"
                    defaultChecked={values.doencasFamiliares.miopiaAmbosPais}
                    value={values.doencasFamiliares.miopiaAmbosPais}
                    label="Pai ou mãe (um dos dois) com miopia acima de 5 graus"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    name="doencasFamiliares.hipermetropiaAstigmatismo"
                    defaultChecked={
                      values.doencasFamiliares.hipermetropiaAstigmatismo
                    }
                    value={values.doencasFamiliares.hipermetropiaAstigmatismo}
                    label="Alta hipermetropia ou alto astigmatismo"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    name="doencasFamiliares.estrabismo"
                    defaultChecked={values.doencasFamiliares.estrabismo}
                    value={values.doencasFamiliares.estrabismo}
                    label="Estrabismo (olho torto)"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    name="doencasFamiliares.catarataGlaucoma"
                    defaultChecked={values.doencasFamiliares.catarataGlaucoma}
                    value={values.doencasFamiliares.catarataGlaucoma}
                    label="Catarata na infância ou Glaucoma congênito"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    name="doencasFamiliares.olhoPreguicoso"
                    defaultChecked={values.doencasFamiliares.olhoPreguicoso}
                    value={values.doencasFamiliares.olhoPreguicoso}
                    label="Olho preguiçoso (ambliopia)"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    name="doencasFamiliares.tumorOlho"
                    defaultChecked={values.doencasFamiliares.tumorOlho}
                    value={values.doencasFamiliares.tumorOlho}
                    label="Tumor no olho (RETINOBLASTOMA)"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    name="doencasFamiliares.nenhumaOpcao}"
                    defaultChecked={values.doencasFamiliares.nenhumaOpcao}
                    value={values.doencasFamiliares.nenhumaOpcao}
                    label="Nenhuma das opções"
                  />
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
                    <FormLabel component="legend">
                      Quantas horas por dia seu filho usa aparelhos eletrônicos
                      (tablet, Computador, celular)? *
                    </FormLabel>
                    <RadioGroup
                      value={values.horasUsoAparelhosEletronicos}
                      name="horasUsoAparelhosEletronicos"
                      onChange={handleChange}
                      column
                    >
                      <FormControlLabel
                        value={"1"}
                        name="horasUsoAparelhosEletronicos"
                        control={<PurpleRadio />}
                        label="< 1 hora"
                      />
                      <FormControlLabel
                        value={"2"}
                        name="horasUsoAparelhosEletronicos"
                        control={<PurpleRadio />}
                        label="Entre 1 e 2 horas"
                      />
                      <FormControlLabel
                        value={"3"}
                        name="horasUsoAparelhosEletronicos"
                        control={<PurpleRadio />}
                        label="Entre 2 a 3 horas"
                      />
                      <FormControlLabel
                        value={"4"}
                        name="horasUsoAparelhosEletronicos"
                        control={<PurpleRadio />}
                        label="Entre 4 a 8 horas"
                      />
                      <FormControlLabel
                        value={"5"}
                        name="horasUsoAparelhosEletronicos"
                        control={<PurpleRadio />}
                        label="Acima de 8 horas por dia"
                      />
                    </RadioGroup>
                    <FormHelperText>
                      {errorList.horasUsoAparelhosEletronicos}
                    </FormHelperText>
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
                    <FormLabel component="legend">
                      Quantas horas por dia seu filho passa em atividades ao ar
                      livre, para diversão ou por esporte? *
                    </FormLabel>
                    <RadioGroup
                      value={values.horasAtividadesAoArLivre}
                      name="horasAtividadesAoArLivre"
                      onChange={handleChange}
                      column
                    >
                      <FormControlLabel
                        value={"1"}
                        name="horasAtividadesAoArLivre"
                        control={<PurpleRadio />}
                        label=" < meia hora"
                      />
                      <FormControlLabel
                        value={"2"}
                        name="horasAtividadesAoArLivre"
                        control={<PurpleRadio />}
                        label="Entre 30 min a 1 hora"
                      />
                      <FormControlLabel
                        value={"3"}
                        name="horasAtividadesAoArLivre"
                        control={<PurpleRadio />}
                        label="Entre 1 e 2 horas"
                      />
                      <FormControlLabel
                        value={"4"}
                        name="horasAtividadesAoArLivre"
                        control={<PurpleRadio />}
                        label=" Acima de 2 horas"
                      />
                    </RadioGroup>
                    <FormHelperText>
                      {errorList.horasAtividadesAoArLivre}
                    </FormHelperText>
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
    </>
  );
};

export default StepTwo;
