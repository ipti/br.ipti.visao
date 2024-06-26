import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import React from "react";
import styles from "../../../../styles";
import { Column } from "../../../../styles/style";

const useStyles = makeStyles(styles);

const FormOphthalmologicalPage = ({ values, handleChange }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>
          Acuidade visual olho direito (sem óculos) ?
        </p>
        <RadioGroup
          value={values.acuidadeTriagemDireito}
          name="acuidadeTriagemDireito"
          onChange={handleChange}
        >
          <FormControlLabel control={<Radio />} value={"1"} label="20/200" />
          <FormControlLabel control={<Radio />} value={"2"} label="20/100" />
          <FormControlLabel control={<Radio />} value={"3"} label="20/80" />
          <FormControlLabel control={<Radio />} value={"4"} label="20/70" />
          <FormControlLabel control={<Radio />} value={"5"} label="20/60" />
          <FormControlLabel control={<Radio />} value={"6"} label="20/50" />
          <FormControlLabel control={<Radio />} value={"7"} label="20/40" />
          <FormControlLabel control={<Radio />} value={"8"} label="20/30" />
          <FormControlLabel control={<Radio />} value={"9"} label="20/25" />
          <FormControlLabel control={<Radio />} value={"10"} label="20/20" />
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
          <FormControlLabel control={<Radio />} value={"1"} label="20/200" />
          <FormControlLabel control={<Radio />} value={"2"} label="20/100" />
          <FormControlLabel control={<Radio />} value={"3"} label="20/80" />
          <FormControlLabel control={<Radio />} value={"4"} label="20/70" />
          <FormControlLabel control={<Radio />} value={"5"} label="20/60" />
          <FormControlLabel control={<Radio />} value={"6"} label="20/50" />
          <FormControlLabel control={<Radio />} value={"7"} label="20/40" />
          <FormControlLabel control={<Radio />} value={"8"} label="20/30" />
          <FormControlLabel control={<Radio />} value={"9"} label="20/25" />
          <FormControlLabel control={<Radio />} value={"10"} label="20/20" />
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
            />
            <FormControlLabel
              control={<Radio />}
              value={"2"}
              label="Não Alterado"
            />
          </Column>
        </RadioGroup>
      </Grid>
      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>NTeste de movimento binocular</p>
        <RadioGroup
          value={values.testMovimentoOcular}
          onChange={handleChange}
          name="testMovimentoOcular"
        >
          <FormControlLabel control={<Radio />} value={"1"} label="Alterado" />
          <FormControlLabel
            control={<Radio />}
            value={"2"}
            label="Não Alterado"
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
          <FormControlLabel control={<Radio />} value={"1"} label="Alterado" />
          <FormControlLabel
            control={<Radio />}
            value={"2"}
            label="Não Alterado"
          />
        </RadioGroup>
      </Grid>
      <Grid item style={{ width: "100%" }} md={12}>
        <p className={classes.label}>Observação</p>
        <TextField
          className={classes.inputStudent}
          name="observation"
          onChange={handleChange}
          value={values.observation}
          variant="outlined"
        />
      </Grid>
    </>
  );
};

export default FormOphthalmologicalPage;
