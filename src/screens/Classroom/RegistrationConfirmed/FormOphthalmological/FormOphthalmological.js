import { TextareaAutosize } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { Checkbox, FormGroup } from "@mui/material";
import { Padding } from "../../../../styles/style";
import { ButtonPurple } from "../../../../components/Buttons";

import React, { useContext } from "react";
import styles from "../../../../styles";
import { Column } from "../../../../styles/style";
import { PrivateRouterContext } from "../../../../context/PrivateRouter/context";

const useStyles = makeStyles(styles);

const FormOphthalmologicalPage = ({ values, handleChange }) => {
  const classes = useStyles();
  const { isAdmin, isTriador } = useContext(PrivateRouterContext);

  return (
    <>
      <Padding />

      <h2>Triagem Oftalmológica</h2>

      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>
          Acuidade visual olho direito (sem óculos) ?
        </p>
        <RadioGroup
          value={values.acuidadeTriagemDireito}
          name="acuidadeTriagemDireito"
          onChange={handleChange}
        >
          <FormControlLabel
            control={<Radio />}
            value={"1"}
            label="20/200"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"2"}
            label="20/100"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"3"}
            label="20/80"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"4"}
            label="20/70"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"5"}
            label="20/60"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"6"}
            label="20/50"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"7"}
            label="20/40"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"8"}
            label="20/30"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"9"}
            label="20/25"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"10"}
            label="20/20"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"nenhum"}
            label="Nenhuma das opções"
          />
        </RadioGroup>
      </Grid>
      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>
          Acuidade visual olho esquerdo (sem óculos) ?
        </p>
        <RadioGroup
          value={values.acuidadeTriagemEsquerdo}
          name="acuidadeTriagemEsquerdo"
          onChange={handleChange}
        >
          <FormControlLabel
            control={<Radio />}
            value={"1"}
            label="20/200"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"2"}
            label="20/100"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"3"}
            label="20/80"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"4"}
            label="20/70"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"5"}
            label="20/60"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"6"}
            label="20/50"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"7"}
            label="20/40"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"8"}
            label="20/30"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"9"}
            label="20/25"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"10"}
            label="20/20"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"nenhum"}
            label="Nenhuma das opções"
          />
        </RadioGroup>
      </Grid>

      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>Teste de Cover para longe</p>
        <RadioGroup
          value={values.testCover}
          onChange={handleChange}
          name="testCover"
        >
          <Column>
            <FormControlLabel
              control={<Radio />}
              value={"1"}
              label="Alterado"
              disabled={!isAdmin && !isTriador}
            />
            <FormControlLabel
              control={<Radio />}
              value={"2"}
              label="Não Alterado"
              disabled={!isAdmin && !isTriador}
            />
          </Column>
        </RadioGroup>
      </Grid>
      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>Teste de movimento binocular</p>
        <RadioGroup
          value={values.testMovimentoOcular}
          onChange={handleChange}
          name="testMovimentoOcular"
        >
          <FormControlLabel
            control={<Radio />}
            value={"1"}
            label="Alterado"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"2"}
            label="Não Alterado"
            disabled={!isAdmin && !isTriador}
          />
        </RadioGroup>
      </Grid>
      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>Teste mancha branca na pupila</p>
        <RadioGroup
          value={values.testManchaBranca}
          name="testManchaBranca"
          onChange={handleChange}
        >
          <FormControlLabel
            control={<Radio />}
            value={"1"}
            label="Alterado"
            disabled={!isAdmin && !isTriador}
          />
          <FormControlLabel
            control={<Radio />}
            value={"2"}
            label="Não Alterado"
            disabled={!isAdmin && !isTriador}
          />
        </RadioGroup>
      </Grid>
      <Grid container>
        <Grid item style={{ width: "100%" }} md={6}>
          <p className={classes.label}>Observações</p>
          <TextareaAutosize
            className={classes.inputStudent}
            style={{ width: "100%", height: "128px", resize: "vertical" }}
            name="observation"
            onChange={handleChange}
            value={values.observation}
            variant="outlined"
            disabled={!isAdmin && !isTriador}
          />
        </Grid>
      </Grid>

      <Padding />
      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>Considerar formulário como concluído?</p>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="triagemCompleted"
                defaultChecked={values.triagemCompleted}
                onChange={handleChange}
                value={values.triagemCompleted}
                disabled={!isAdmin && !isTriador}
              />
            }
            label="Considerar triagem como concluída"
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

export default FormOphthalmologicalPage;
