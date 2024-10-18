import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React from "react";
import MaskDate from "../../../../components/Mask/maskdate";
import styles from "../../../../styles";
import { Column, Padding } from "../../../../styles/style";
import { ButtonPurple } from "../../../../components/Buttons";

import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles(styles);
const FormConsulta = ({ values, handleChange, errors}) => {
  const classes = useStyles();
  const history = useHistory();
  //TODO: Adicionar validação, formik e yup
  const { id, idRegistration } = useParams();

  return (
    <>
      <Padding padding="8px" />
      <Grid item style={{ width: "100%" }} md={3}>
        <ButtonPurple
          className="t-button-primary"
          title="Gerar prontuário"
          onClick={() =>
            history.push(
              `/turmas/${id}/matricula/${idRegistration}/prontuarioMedico`
            )
          }
          type="button"
        />
      </Grid>

      <Grid container spacing={2}>
        <Grid item style={{ width: "100%" }} md={6}>
          <p className={classes.label}>Nome do médico</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="nomeMedico"
              value={values.nomeMedico}
              onChange={handleChange}
              error={errors.nomeMedico}
              variant="outlined"
            />
            {errors.nomeMedico && <FormHelperText>{errors.nomeMedico}</FormHelperText> }
          </Column>
        </Grid>
        <Grid item style={{ width: "100%" }} md={6}>
          <p className={classes.label}>CRM</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="crmMedico"
              value={values.crmMedico}
              onChange={handleChange}
              error={errors.crmMedico}
              variant="outlined"
            />
            {errors.crmMedico && <FormHelperText>{errors.crmMedico}</FormHelperText> }  
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
                onChange: handleChange,
                error: errors.dataConsulta,
              }}
              value={values.dataConsulta}
              variant="outlined"
            />
            {errors.dataConsulta && <FormHelperText>{errors.dataConsulta}</FormHelperText> }
          </Column>
        </Grid>
      </Grid>

      <Padding padding="16px" />
      <h2>
        {" "}
        <strong> Histórico de Consulta</strong>{" "}
      </h2>

      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>
          Já realizou alguma consulta oftalmológica na vida?
        </p>
        <RadioGroup
          value={values.jaRealizouConsultaAntes}
          name="jaRealizouConsultaAntes"
          onChange={handleChange}
            error={errors.jaRealizouConsultaAntes}
        >
          <FormControlLabel  error={errors.jaRealizouConsultaAntes} control={<Radio />} value={"Sim"} label="Sim" />
          <FormControlLabel  error={errors.jaRealizouConsultaAntes} control={<Radio />} value={"Não"} label="Não" />
        </RadioGroup>
        {errors.jaRealizouConsultaAntes && <FormHelperText>{errors.jaRealizouConsultaAntes}</FormHelperText> }
        
      </Grid>

      <Padding padding="16px" />
      <h2>Escaneamento Visual pelo Spot Vision</h2>
      <h3>Olho direito</h3>
      <Grid container spacing={2} md={12}>
        <Grid item style={{ width: "100%" }} md={4}>
          <p className={classes.label}>Refração Esférico</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="refracaoEsfericoOlhoDireito"
              value={values.refracaoEsfericoOlhoDireito}
              onChange={handleChange}
              error={errors.refracaoEsfericoOlhoDireito}
              variant="outlined"
            />
            {errors.refracaoEsfericoOlhoDireito && <FormHelperText>{errors.refracaoEsfericoOlhoDireito}</FormHelperText> }
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
              error={errors.refracaoCilindricoOlhoDireito}
              variant="outlined"
            />
            {errors.refracaoCilindricoOlhoDireito && <FormHelperText>{errors.refracaoCilindricoOlhoDireito}</FormHelperText> }
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
              error={errors.refracaoEixoOlhoDireito}
              variant="outlined"
            />
            {errors.refracaoEixoOlhoDireito && <FormHelperText>{errors.refracaoEixoOlhoDireito}</FormHelperText> }
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
              onChange={handleChange}
              error={errors.refracaoEquivalenteEsfericoOlhoDireito}
              variant="outlined"
            />
            {errors.refracaoEquivalenteEsfericoOlhoDireito && <FormHelperText>{errors.refracaoEquivalenteEsfericoOlhoDireito}</FormHelperText> }
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
              error={errors.refracaoDpOlhoDireito}
              variant="outlined"
            />
            {errors.refracaoDpOlhoDireito && <FormHelperText>{errors.refracaoDpOlhoDireito}</FormHelperText> }
          </Column>
        </Grid>
      </Grid>
      <h3>Olho esquerdo</h3>
      <Grid container spacing={2} md={12}>
        <Grid item style={{ width: "100%" }} md={4}>
          <p className={classes.label}>Refração Esférico</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="refracaoEsfericoOlhoEsquerdo"
              value={values.refracaoEsfericoOlhoEsquerdo}
              onChange={handleChange}
              error={errors.refracaoEsfericoOlhoEsquerdo}
              variant="outlined"
            />
            {errors.refracaoEsfericoOlhoEsquerdo && <FormHelperText>{errors.refracaoEsfericoOlhoEsquerdo}</FormHelperText> }
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
              error={errors.refracaoCilindricoOlhoEsquerdo}
              variant="outlined"
            />
            {errors.refracaoCilindricoOlhoEsquerdo && <FormHelperText>{errors.refracaoCilindricoOlhoEsquerdo}</FormHelperText> }
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
              error={errors.refracaoEixoOlhoEsquerdo}
              variant="outlined"
            />
            {errors.refracaoEixoOlhoEsquerdo && <FormHelperText>{errors.refracaoEixoOlhoEsquerdo}</FormHelperText> }
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
              error={errors.refracaoEquivalenteEsfericoOlhoEsquerdo}
              variant="outlined"
            />
            {errors.refracaoEquivalenteEsfericoOlhoEsquerdo && <FormHelperText>{errors.refracaoEquivalenteEsfericoOlhoEsquerdo}</FormHelperText> }
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
              error={errors.refracaoDpOlhoEsquerdo}
              variant="outlined"
            />
            {errors.refracaoDpOlhoEsquerdo && <FormHelperText>{errors.refracaoDpOlhoEsquerdo}</FormHelperText> }
          </Column>
        </Grid>
      </Grid>
      <Padding padding="16px" />
      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>
          Marque as Observações encontradas no Spot Vision
        </p>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="observacoesSpotVision.miopiaOd"
                defaultChecked={values.observacoesSpotVision?.miopiaOd}
                onChange={handleChange}
                value={values.observacoesSpotVision?.miopiaOd}
              />
            }
            label="Miopia OD"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="observacoesSpotVision.miopiaOs"
                defaultChecked={values.observacoesSpotVision?.miopiaOs}
                onChange={handleChange}
                value={values.observacoesSpotVision?.miopiaOs}
              />
            }
            label="Miopia OE "
          />
          <FormControlLabel
            control={
              <Checkbox
                name="observacoesSpotVision.astigmatismoOd"
                defaultChecked={values.observacoesSpotVision?.astigmatismoOd}
                onChange={handleChange}
                value={values.observacoesSpotVision?.astigmatismoOd}
              />
            }
            label="Astigmatismo OD"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="observacoesSpotVision.astigmatismoOs"
                defaultChecked={values.observacoesSpotVision?.astigmatismoOs}
                onChange={handleChange}
                value={values.observacoesSpotVision?.astigmatismoOs}
              />
            }
            label="Astigmatismo OE"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="observacoesSpotVision.hipermetropiaOd"
                defaultChecked={values.observacoesSpotVision?.hipermetropiaOd}
                onChange={handleChange}
                value={values.observacoesSpotVision?.hipermetropiaOd}
              />
            }
            label="Hipermetropia OD"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="observacoesSpotVision.hipermetropiaOs"
                defaultChecked={values.observacoesSpotVision.hipermetropiaOs}
                onChange={handleChange}
                value={values.observacoesSpotVision.hipermetropiaOs}
              />
            }
            label="Hipermetropia OE "
          />
          <FormControlLabel
            control={
              <Checkbox
                name="observacoesSpotVision.estrabismoOd"
                defaultChecked={values.observacoesSpotVision.estrabismoOd}
                onChange={handleChange}
                value={values.observacoesSpotVision?.estrabismoOd}
              />
            }
            label="Estrabismo OD"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="observacoesSpotVision.estrabismoOs"
                defaultChecked={values.observacoesSpotVision?.estrabismoOs}
                onChange={handleChange}
                value={values.observacoesSpotVision?.estrabismoOs}
              />
            }
            label=" Estrabismo OE"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="observacoesSpotVision.anisometropia"
                defaultChecked={values.observacoesSpotVision?.anisometropia}
                onChange={handleChange}
                value={values.observacoesSpotVision?.anisometropia}
              />
            }
            label="Anisometropia"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="observacoesSpotVision.anisocoria"
                defaultChecked={values.observacoesSpotVision?.anisocoria}
                onChange={handleChange}
                value={values.observacoesSpotVision?.anisocoria}
              />
            }
            label="Anisocoria"
          />
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
          <p className={classes.label}>Refração Estático Esférico</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="refracaoEstaticaEsfericoOlhoDireito"
              value={values.refracaoEstaticaEsfericoOlhoDireito}
              onChange={handleChange}
              error={errors.refracaoEstaticaEsfericoOlhoDireito}
              variant="outlined"
            />
            {errors.refracaoEstaticaEsfericoOlhoDireito && <FormHelperText>{errors.refracaoEstaticaEsfericoOlhoDireito}</FormHelperText> }
          </Column>
        </Grid>
        <Grid item style={{ width: "100%" }} md={4}>
          <p className={classes.label}>Refração Estático Cilíndrico</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="refracaoEstaticaCilindricoOlhoDireito"
              value={values.refracaoEstaticaCilindricoOlhoDireito}
              onChange={handleChange}
              error={errors.refracaoEstaticaCilindricoOlhoDireito}
              variant="outlined"
            />
            {errors.refracaoEstaticaCilindricoOlhoDireito && <FormHelperText>{errors.refracaoEstaticaCilindricoOlhoDireito}</FormHelperText> }
          </Column>
        </Grid>
        <Grid item style={{ width: "100%" }} md={4}>
          <p className={classes.label}>Refração Estático Eixo</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="refracaoEstaticaEixoOlhoDireito"
              value={values.refracaoEstaticaEixoOlhoDireito}
              onChange={handleChange}
              error={errors.refracaoEstaticaEixoOlhoDireito}
              variant="outlined"
            />
            {errors.refracaoEstaticaEixoOlhoDireito && <FormHelperText>{errors.refracaoEstaticaEixoOlhoDireito}</FormHelperText> }
          </Column>
        </Grid>
      </Grid>
      <Grid container spacing={2} md={12}>
        <Grid item style={{ width: "100%" }} md={4}>
          <p className={classes.label}>Refração Estático Acuidade Visual</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="refracaoEstaticaAcuidadeVisualOlhoDireito"
              value={values.refracaoEstaticaAcuidadeVisualOlhoDireito}
              onChange={handleChange}
              error={errors.refracaoEstaticaAcuidadeVisualOlhoDireito}
              variant="outlined"
            />
            {errors.refracaoEstaticaAcuidadeVisualOlhoDireito && <FormHelperText>{errors.refracaoEstaticaAcuidadeVisualOlhoDireito}</FormHelperText> }
          </Column>
        </Grid>
      </Grid>
      <h3>Olho esquerdo</h3>
      <Grid container spacing={2} md={12}>
        <Grid item style={{ width: "100%" }} md={4}>
          <p className={classes.label}>Refração estático Esférico</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="refracaoEstaticaEsfericoOlhoEsquerdo"
              value={values.refracaoEstaticaEsfericoOlhoEsquerdo}
              onChange={handleChange}
              error={errors.refracaoEstaticaEsfericoOlhoEsquerdo}
              variant="outlined"
            />
            {errors.refracaoEstaticaEsfericoOlhoEsquerdo && <FormHelperText>{errors.refracaoEstaticaEsfericoOlhoEsquerdo}</FormHelperText> }
          </Column>
        </Grid>
        <Grid item style={{ width: "100%" }} md={4}>
          <p className={classes.label}>Refração estático cilíndrico</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="refracaoEstaticaCilindricoOlhoEsquerdo"
              value={values.refracaoEstaticaCilindricoOlhoEsquerdo}
              onChange={handleChange}
              error={errors.refracaoEstaticaCilindricoOlhoEsquerdo}
              variant="outlined"
            />
            {errors.refracaoEstaticaCilindricoOlhoEsquerdo && <FormHelperText>{errors.refracaoEstaticaCilindricoOlhoEsquerdo}</FormHelperText> }
          </Column>
        </Grid>
        <Grid item style={{ width: "100%" }} md={4}>
          <p className={classes.label}>Refração estático eixo</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="refracaoEstaticaEixoOlhoEsquerdo"
              value={values.refracaoEstaticaEixoOlhoEsquerdo}
              onChange={handleChange}
              error={errors.refracaoEstaticaEixoOlhoEsquerdo}
              variant="outlined"
            />
            {errors.refracaoEstaticaEixoOlhoEsquerdo && <FormHelperText>{errors.refracaoEstaticaEixoOlhoEsquerdo}</FormHelperText> }
          </Column>
        </Grid>
      </Grid>
      <Grid container spacing={2} md={12}>
        <Grid item style={{ width: "100%" }} md={4}>
          <p className={classes.label}>Refração estático acuidade visual</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="refracaoEstaticaAcuidadeVisualOlhoEsquerdo"
              value={values.refracaoEstaticaAcuidadeVisualOlhoEsquerdo}
              onChange={handleChange}
              error={errors.refracaoEstaticaAcuidadeVisualOlhoEsquerdo}
              variant="outlined"
            />
            {errors.refracaoEstaticaAcuidadeVisualOlhoEsquerdo && <FormHelperText>{errors.refracaoEstaticaAcuidadeVisualOlhoEsquerdo}</FormHelperText> }
          </Column>
        </Grid>
      </Grid>
      <Padding padding="16px" />

      <h2>Biomicroscopia</h2>
      <Grid container spacing={2} md={12}>
        <Grid item style={{ width: "100%" }} md={6}>
          <p className={classes.label}>Olho direito</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="biomicroscopiaOd"
              value={values.biomicroscopiaOd}
              onChange={handleChange}
              error={errors.biomicroscopiaOd}
              variant="outlined"
            />
            {errors.biomicroscopiaOd && <FormHelperText>{errors.biomicroscopiaOd}</FormHelperText> }
          </Column>
        </Grid>
        <Grid item style={{ width: "100%" }} md={6}>
          <p className={classes.label}>Olho esquerdo</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="biomicroscopiaOs"
              value={values.biomicroscopiaOs}
              onChange={handleChange}
              error={errors.biomicroscopiaOs}
              variant="outlined"
            />
            {errors.biomicroscopiaOs && <FormHelperText>{errors.biomicroscopiaOs}</FormHelperText> }
          </Column>
        </Grid>
      </Grid>
      <Padding padding="16px" />

      <h2>Fundoscopia</h2>
      <Grid container spacing={2} md={12}>
        <Grid item style={{ width: "100%" }} md={6}>
          <p className={classes.label}>Olho direito</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="fundoscopiaOd"
              value={values.fundoscopiaOd}
              onChange={handleChange}
              error={errors.fundoscopiaOd}
              variant="outlined"
            />
            {errors.fundoscopiaOd && <FormHelperText>{errors.fundoscopiaOd}</FormHelperText> }
          </Column>
        </Grid>
        <Grid item style={{ width: "100%" }} md={6}>
          <p className={classes.label}>Olho esquerdo</p>
          <Column>
            <TextField
              className={classes.inputStudent}
              name="fundoscopiaOs"
              value={values.fundoscopiaOs}
              onChange={handleChange}
              error={errors.fundoscopiaOs}
              variant="outlined"
            />
            {errors.fundoscopiaOs && <FormHelperText>{errors.fundoscopiaOs}</FormHelperText> }
          </Column>
        </Grid>
      </Grid>
      <Padding padding="16px" />
      <Grid item style={{ width: "100%" }} md={6}>
        <p className={classes.label}>Motilidade ocular</p>
        <Column>
          <TextField
            className={classes.inputStudent}
            name="motilidadeOcular"
            value={values.motilidadeOcular}
            onChange={handleChange}
            error={errors.motilidadeOcular}
            variant="outlined"
          />
          {errors.motilidadeOcular && <FormHelperText>{errors.motilidadeOcular}</FormHelperText> }
        </Column>
      </Grid>
      <Padding padding="16px" />

      <Grid item style={{ width: "100%" }} md={6}>
        <p className={classes.label}>Diagnóstico</p>
        <Column>
          <TextField
            className={classes.inputStudent}
            name="diagnostico"
            value={values.diagnostico}
            onChange={handleChange}
            error={errors.diagnostico}
            variant="outlined"
          />
          {errors.diagnostico && <FormHelperText>{errors.diagnostico}</FormHelperText> }
        </Column>
      </Grid>
      <Padding padding="16px" />

      <Grid item style={{ width: "100%" }} md={6}>
        <p className={classes.label}>Conduta</p>
        <Column>
          <TextField
            className={classes.inputStudent}
            name="conduta"
            value={values.conduta}
            onChange={handleChange}
            error={errors.conduta}
            variant="outlined"
          />
          {errors.conduta && <FormHelperText>{errors.conduta}</FormHelperText> }
        </Column>
      </Grid>
      <Padding padding="16px" />

      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>Precisa de óculos</p>
        <RadioGroup
          value={values.precisaOculos}
          name="precisaOculos"
          onChange={handleChange}
          error={errors.precisaOculos}
        >
          <FormControlLabel  error={errors.precisaOculos} control={<Radio />} value={"Sim"} label="Sim" />
          <FormControlLabel  error={errors.precisaOculos} control={<Radio />} value={"Não"} label="Não" />
        </RadioGroup>
        {errors.precisaOculos && <FormHelperText>{errors.precisaOculos}</FormHelperText> }
      </Grid>
      <Padding padding="16px" />

      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>
          Marque justificativas para acompanhamento
        </p>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="acompanhamento.ambliopia"
                defaultChecked={values.acompanhamento?.ambliopia}
                onChange={handleChange}
                value={values.acompanhamento?.ambliopia}
              />
            }
            label="Ambliopia"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="acompanhamento.retinoblastoma"
                defaultChecked={values.acompanhamento?.retinoblastoma}
                onChange={handleChange}
                value={values.acompanhamento?.retinoblastoma}
              />
            }
            label="Retinoblastoma "
          />
          <FormControlLabel
            control={
              <Checkbox
                name="acompanhamento.catarataCongenita"
                defaultChecked={values.acompanhamento?.catarataCongenita}
                onChange={handleChange}
                value={values.acompanhamento?.catarataCongenita}
              />
            }
            label="Catarata Congênita"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="acompanhamento.obstrucaoViasLacrimais"
                defaultChecked={values.acompanhamento?.obstrucaoViasLacrimais}
                onChange={handleChange}
                value={values.acompanhamento?.obstrucaoViasLacrimais}
              />
            }
            label="Obstrução de Vias Lacrimais"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="acompanhamento.estrabismo"
                defaultChecked={values.acompanhamento?.estrabismo}
                onChange={handleChange}
                value={values.acompanhamento?.estrabismo}
              />
            }
            label="Estrabismo"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="acompanhamento.glaucomaCongenito"
                defaultChecked={values.acompanhamento?.glaucomaCongenito}
                onChange={handleChange}
                value={values.acompanhamento?.glaucomaCongenito}
              />
            }
            label="Glaucoma congênito"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="acompanhamento.uveites"
                defaultChecked={values.acompanhamento?.uveites}
                onChange={handleChange}
                value={values.acompanhamento?.uveites}
              />
            }
            label="Uveítes"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="acompanhamento.nistagmo"
                defaultChecked={values.acompanhamento?.nistagmo}
                onChange={handleChange}
                value={values.acompanhamento?.nistagmo}
              />
            }
            label="Nistagmo"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="acompanhamento.miopiaProgressiva"
                defaultChecked={values.acompanhamento?.miopiaProgressiva}
                onChange={handleChange}
                value={values.acompanhamento?.miopiaProgressiva}
              />
            }
            label="Miopia progressiva"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="acompanhamento.ectasiasCornea"
                defaultChecked={values.acompanhamento?.ectasiasCornea}
                onChange={handleChange}
                value={values.acompanhamento?.ectasiasCornea}
              />
            }
            label="Ectasias de córnea "
          />
          <FormControlLabel
            control={
              <Checkbox
                name="acompanhamento.alergiasConjuntivitesCalazio"
                defaultChecked={
                  values.acompanhamento?.alergiasConjuntivitesCalazio
                }
                onChange={handleChange}
                value={values.acompanhamento?.alergiasConjuntivitesCalazio}
              />
            }
            label="Alergias/Conjuntivites/Calázio"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="acompanhamento.baixaVisaoCentral"
                defaultChecked={values.acompanhamento?.baixaVisaoCentral}
                onChange={handleChange}
                value={values.acompanhamento?.baixaVisaoCentral}
              />
            }
            label="Baixa visão Central"
          />
        </FormGroup>
      </Grid>
      <Padding padding="16px" />

      <Grid item style={{ width: "100%" }} md={6}>
        <p className={classes.label}>
          Indicação para próxima consulta (em meses)
        </p>
        <Column>
          <TextField
            className={classes.inputStudent}
            name="proximaConsulta"
            value={values.proximaConsulta}
            onChange={handleChange}
            error={errors.proximaConsulta}
            variant="outlined"
          />
            {errors.proximaConsulta && <FormHelperText>{errors.proximaConsulta}</FormHelperText> }
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
          <FormControlLabel
            control={
              <Checkbox
                name="consultaCompleted"
                defaultChecked={values.consultaCompleted}
                onChange={handleChange}
                value={values.consultaCompleted}
              />
            }
            label="Considerar consulta como concluída"
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

export default FormConsulta;
