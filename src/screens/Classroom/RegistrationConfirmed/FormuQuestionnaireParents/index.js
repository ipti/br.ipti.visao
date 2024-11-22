import React, { useContext } from "react";

import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { Checkbox, FormGroup } from "@mui/material";
import styles from "../../../../styles";

import styleBase from "../../../../styles";
import { Padding } from "../../../../styles/style";
import { ButtonPurple } from "../../../../components/Buttons";
import { PrivateRouterContext } from "../../../../context/PrivateRouter/context";

const useStyles = makeStyles(styles);

const PurpleRadio = withStyles({
  root: {
    "&$checked": {
      color: styleBase.colors.colorsBaseProductNormal,
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const FormQuestionnaireParents = ({ values, handleChange }) => {
  const classes = useStyles();
  const { isAdmin } = useContext(PrivateRouterContext);

  return (
    <>
      <Padding padding="8px" />

      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>
          Seu filho tem algum sintoma na visão ou nos olhos?
        </p>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="filhossintomas.dificuldadeQuadro"
                defaultChecked={values.filhossintomas.dificuldadeQuadro}
                onChange={handleChange}
                disabled={!isAdmin}
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
                defaultChecked={values.filhossintomas.dificuldadeLivro}
                disabled={!isAdmin}
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
                defaultChecked={values.filhossintomas.olhoTortoConstante}
                disabled={!isAdmin}
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
                defaultChecked={values.filhossintomas.olhoTortoMomentos}
                disabled={!isAdmin}
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
                defaultChecked={values.filhossintomas.rostoApertaOlhos}
                disabled={!isAdmin}
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
                defaultChecked={values.filhossintomas.tremorOlhos}
                disabled={!isAdmin}
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
                defaultChecked={values.filhossintomas.manchaBrancaPupila}
                disabled={!isAdmin}
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
                defaultChecked={values.filhossintomas.nenhumaOpcao}
                disabled={!isAdmin}
                value={values.filhossintomas.nenhumaOpcao}
              />
            }
            label="Nenhuma das opções"
          />
        </FormGroup>
      </Grid>
      <Padding padding="8px" />
      <Grid
        className={`${classes.contentMain}`}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <FormControl component="fieldset" className={classes.formControl}>
            <p className={classes.label}>Seu filho já usa óculos? *</p>
            <RadioGroup
              value={values.filhoOculos}
              name="filhoOculos"
              onChange={handleChange}
            >
              <FormControlLabel
                value={"1"}
                name="filhoOculos"
                control={<PurpleRadio />}
                label="Sim"
                disabled={!isAdmin}
              />
              <FormControlLabel
                value={"0"}
                name="filhoOculos"
                control={<PurpleRadio />}
                label="Não"
                disabled={!isAdmin}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      {values.filhoOculos === "1" && (
        <p style={{ color: "red" }} className={classes.label}>
          Lembrar de trazer última receita oftalmológica para a consulta
        </p>
      )}

      <Grid item style={{ width: "100%" }} md={12}>
        <p sclassName={classes.label}>
          Seu filho tem ou teve alguma dessas doenças nos olhos?
        </p>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="doencasNosOlhos.olhoPreguicoso"
                onChange={handleChange}
                defaultChecked={values.doencasNosOlhos.olhoPreguicoso}
                value={values.doencasNosOlhos.olhoPreguicoso}
                disabled={!isAdmin}
              />
            }
            label="Olho preguiçoso (ambliopia) ou não enxerga bem com um dos olhos"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencasNosOlhos.olhoTorto"
                onChange={handleChange}
                defaultChecked={values.doencasNosOlhos.olhoTorto}
                value={values.doencasNosOlhos.olhoTorto}
                disabled={!isAdmin}
              />
            }
            label="Olho torto (estrabismo)"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencasNosOlhos.catarataInfancia"
                onChange={handleChange}
                defaultChecked={values.doencasNosOlhos.catarataInfancia}
                value={values.doencasNosOlhos.catarataInfancia}
                disabled={!isAdmin}
              />
            }
            label=" Catarata na infância"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencasNosOlhos.glaucomaCongenito"
                onChange={handleChange}
                defaultChecked={values.doencasNosOlhos.glaucomaCongenito}
                value={values.doencasNosOlhos.glaucomaCongenito}
                disabled={!isAdmin}
              />
            }
            label=" Glaucoma congênito"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencasNosOlhos.tumorOlhos"
                onChange={handleChange}
                defaultChecked={values.doencasNosOlhos.tumorOlhos}
                value={values.doencasNosOlhos.tumorOlhos}
                disabled={!isAdmin}
              />
            }
            label="Tumor nos olhos (RETINOBLASTOMA)"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencasNosOlhos.ceratoconeTransplante"
                onChange={handleChange}
                defaultChecked={values.doencasNosOlhos.ceratoconeTransplante}
                value={values.doencasNosOlhos.ceratoconeTransplante}
                disabled={!isAdmin}
              />
            }
            label="Ceratocone ou transplante de córnea"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencasNosOlhos.palpebraCaida"
                onChange={handleChange}
                defaultChecked={values.doencasNosOlhos.palpebraCaida}
                value={values.doencasNosOlhos.palpebraCaida}
                disabled={!isAdmin}
              />
            }
            label="Pálpebra caída (ptose pálpebral)"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencasNosOlhos.nenhumaOpcao"
                onChange={handleChange}
                defaultChecked={values.doencasNosOlhos.nenhumaOpcao}
                value={values.doencasNosOlhos.nenhumaOpcao}
                disabled={!isAdmin}
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
                name="doencas.prematuridade"
                onChange={handleChange}
                defaultChecked={values.doencas.prematuridade}
                value={values.doencas.prematuridade}
                disabled={!isAdmin}
              />
            }
            label="Prematuridade (menos de 32 semanas - 7 meses)"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencas.sindromeDown"
                onChange={handleChange}
                defaultChecked={values.doencas.sindromeDown}
                value={values.doencas.sindromeDown}
                disabled={!isAdmin}
              />
            }
            label="Síndrome de Down"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencas.paralisiaTumorCerebral"
                onChange={handleChange}
                defaultChecked={values.doencas.paralisiaTumorCerebral}
                value={values.doencas.paralisiaTumorCerebral}
                disabled={!isAdmin}
              />
            }
            label="Paralisia ou tumor cerebral"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencas.outrasSindromesGeneticas"
                onChange={handleChange}
                defaultChecked={values.doencas.outrasSindromesGeneticas}
                value={values.doencas.outrasSindromesGeneticas}
                disabled={!isAdmin}
              />
            }
            label="Outras síndromes genéticas"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencas.diabetes"
                onChange={handleChange}
                defaultChecked={values.doencas.diabetes}
                value={values.doencas.diabetes}
                disabled={!isAdmin}
              />
            }
            label="Diabetes"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencas.artriteArtrose"
                onChange={handleChange}
                defaultChecked={values.doencas.artriteArtrose}
                value={values.doencas.artriteArtrose}
                disabled={!isAdmin}
              />
            }
            label="Artrite ou Artrose"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencas.alergiasCorticoides"
                onChange={handleChange}
                defaultChecked={values.doencas.alergiasCorticoides}
                value={values.doencas.alergiasCorticoides}
                disabled={!isAdmin}
              />
            }
            label=" Alergias ou uso prolongado de corticoides"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencas.nenhumaOpcao"
                onChange={handleChange}
                defaultChecked={values.doencas.nenhumaOpcao}
                value={values.doencas.nenhumaOpcao}
                disabled={!isAdmin}
              />
            }
            label="Nenhuma das opções"
          />
        </FormGroup>
      </Grid>
      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>
          Vocês (pai ou mãe ou irmãos), avós ou tios de primeiro grau tem ou
          tiveram algumas dessas doenças? ?
        </p>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="doencasFamiliares.miopiaUmPai"
                onChange={handleChange}
                checked={values.doencasFamiliares.miopiaUmPai}
                value={values.doencasFamiliares.miopiaUmPai}
                disabled={!isAdmin}
              />
            }
            label="Pai e mãe (os dois) com miopia acima de 3 graus"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencasFamiliares.miopiaAmbosPais"
                onChange={handleChange}
                checked={values.doencasFamiliares.miopiaAmbosPais}
                value={values.doencasFamiliares.miopiaAmbosPais}
                disabled={!isAdmin}
              />
            }
            label="Pai ou mãe (um dos dois) com miopia acima de 5 graus"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencasFamiliares.hipermetropiaAstigmatismo"
                onChange={handleChange}
                checked={values.doencasFamiliares.hipermetropiaAstigmatismo}
                value={values.doencasFamiliares.hipermetropiaAstigmatismo}
                disabled={!isAdmin}
              />
            }
            label="Alta hipermetropia ou alto astigmatismo"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencasFamiliares.estrabismo"
                onChange={handleChange}
                checked={values.doencasFamiliares.estrabismo}
                value={values.doencasFamiliares.estrabismo}
                disabled={!isAdmin}
              />
            }
            label="Estrabismo (olho torto)"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencasFamiliares.catarataGlaucoma"
                onChange={handleChange}
                checked={values.doencasFamiliares.catarataGlaucoma}
                value={values.doencasFamiliares.catarataGlaucoma}
                disabled={!isAdmin}
              />
            }
            label="Catarata na infância ou Glaucoma congênito"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencasFamiliares.olhoPreguicoso"
                onChange={handleChange}
                checked={values.doencasFamiliares.olhoPreguicoso}
                value={values.doencasFamiliares.olhoPreguicoso}
                disabled={!isAdmin}
              />
            }
            label="Olho preguiçoso (ambliopia)"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencasFamiliares.tumorOlho"
                onChange={handleChange}
                checked={values.doencasFamiliares.tumorOlho}
                value={values.doencasFamiliares.tumorOlho}
                disabled={!isAdmin}
              />
            }
            label="Tumor no olho (RETINOBLASTOMA)"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="doencasFamiliares.nenhumaOpcao"
                onChange={handleChange}
                checked={values.doencasFamiliares.nenhumaOpcao}
                value={values.doencasFamiliares.nenhumaOpcao}
                disabled={!isAdmin}
              />
            }
            label="Nenhuma das opções"
          />
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
          <FormControl component="fieldset" className={classes.formControl}>
            <p className={classes.label}>
              Quantas horas por dia seu filho usa aparelhos eletrônicos (tablet,
              Computador, celular)? *
            </p>
            <RadioGroup
              value={values.horasUsoAparelhosEletronicos.toString()}
              name="horasUsoAparelhosEletronicos"
              onChange={handleChange}
              disabled={!isAdmin}
              column
            >
              <FormControlLabel
                value={"1"}
                name="horasUsoAparelhosEletronicos"
                control={<PurpleRadio />}
                label="< 1 hora"
                disabled={!isAdmin}
              />
              <FormControlLabel
                value={"2"}
                name="horasUsoAparelhosEletronicos"
                control={<PurpleRadio />}
                label="Entre 1 e 2 horas"
                disabled={!isAdmin}
              />
              <FormControlLabel
                value={"3"}
                name="horasUsoAparelhosEletronicos"
                control={<PurpleRadio />}
                label="Entre 2 a 3 horas"
                disabled={!isAdmin}
              />
              <FormControlLabel
                value={"4"}
                name="horasUsoAparelhosEletronicos"
                control={<PurpleRadio />}
                label="Entre 4 a 8 horas"
                disabled={!isAdmin}
              />
              <FormControlLabel
                value={"5"}
                name="horasUsoAparelhosEletronicos"
                control={<PurpleRadio />}
                label="Acima de 8 horas por dia"
                disabled={!isAdmin}
              />
            </RadioGroup>
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
          <FormControl component="fieldset" className={classes.formControl}>
            <p className={classes.label}>
              Quantas horas por dia seu filho passa em atividades ao ar livre,
              recreativas ou por Esporte? *
            </p>
            <RadioGroup
              value={values.horasAtividadesAoArLivre.toString()}
              name="horasAtividadesAoArLivre"
              onChange={handleChange}
              column
              disabled={!isAdmin}
            >
              <FormControlLabel
                value={"1"}
                name="horasAtividadesAoArLivre"
                control={<PurpleRadio />}
                label=" < meia hora"
                disabled={!isAdmin}
              />
              <FormControlLabel
                value={"2"}
                name="horasAtividadesAoArLivre"
                control={<PurpleRadio />}
                label="Entre 30 min a 1 hora"
                disabled={!isAdmin}
              />
              <FormControlLabel
                value={"3"}
                name="horasAtividadesAoArLivre"
                control={<PurpleRadio />}
                label="Entre 1 e 2 horas"
                disabled={!isAdmin}
              />
              <FormControlLabel
                value={"4"}
                name="horasAtividadesAoArLivre"
                control={<PurpleRadio />}
                label=" Acima de 2 horas"
                disabled={!isAdmin}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>Termo de participação e autorização:</p>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="permission"
                defaultChecked={values.permission}
                onChange={handleChange}
                value={values.permission}
                disabled={!isAdmin}
              />
            }
            label="Termo de participação e autorização aceito pelo responsável"
          />
        </FormGroup>
      </Grid>
      <Padding />
      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>Considerar formulário como concluído?</p>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="questionarioPaisCompleted"
                defaultChecked={values.questionarioPaisCompleted}
                onChange={handleChange}
                value={values.questionarioPaisCompleted}
                disabled={!isAdmin}
              />
            }
            label="Questionário dos pais concluído"
          />
        </FormGroup>
      </Grid>
      <Padding padding="16px" />
      <Grid item style={{ width: "100%" }} md={3}>
        <ButtonPurple
          className="t-button-primary"
          title="Salvar"
          type="submit"
        />
      </Grid>
      <Padding padding="16px" />
    </>
  );
};

export default FormQuestionnaireParents;
