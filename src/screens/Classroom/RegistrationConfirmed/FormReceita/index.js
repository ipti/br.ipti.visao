import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, FormControlLabel, FormGroup, Grid, TextField } from "@mui/material";
import React from "react";
import styles from "../../../../styles";
import { Column, Padding } from "../../../../styles/style";
import { ButtonPurple } from "../../../../components/Buttons";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { FormRegistrationContext } from "../../../../context/Classroom/FormOphthalmological/context";
import MaskDate from "../../../../components/Mask/maskdate";


const useStyles = makeStyles(styles);

//TODO: criar campo para informar se a criança recebeu um oculos, talvez campo de confirmação

const FormReceita = ({ values, handleChange }) => {
    const classes = useStyles();
    const history = useHistory()
    // const { initialValues } = useContext(FormOphthalmologicalContext);
    const { handleUpdate } = useContext(FormRegistrationContext)

    const { id, idRegistration } = useParams()

    const handleSaveAndNavigate = async () => {
        try {
            await handleUpdate(values);
            await new Promise(resolve => setTimeout(resolve, 2000));
            await history.push(`/turmas/${id}/matricula/${idRegistration}/receita`);
        } catch (error) {
            console.error("Erro ao salvar:", error);
        }
    };

    return (
        <>
            <Padding padding="8px" />
            <Grid item style={{ width: "100%" }} md={3}>

                <ButtonPurple
                    className="t-button-primary"
                    title="Gerar receita"
                    onClick={handleSaveAndNavigate}
                    type="button"
                />
            </Grid>
            <Padding padding="16px" />
            <h2>
                Receita de óculos
            </h2>
            <h3>
                Olho direito
            </h3>
            <Grid container spacing={2} md={12}>
                <Grid item style={{ width: "100%" }} md={4}>
                    <p className={classes.label}>Esférico</p>
                    <Column>
                        <TextField className={classes.inputStudent} name="receitaEsfericoOlhoDireito" value={values.receitaEsfericoOlhoDireito} onChange={handleChange} variant="outlined" />
                    </Column>
                </Grid>
                <Grid item style={{ width: "100%" }} md={4}>
                    <p className={classes.label}>Cilíndrico</p>
                    <Column>
                        <TextField className={classes.inputStudent} name="receitaCilindricoOlhoDireito" value={values.receitaCilindricoOlhoDireito} onChange={handleChange} variant="outlined" />
                    </Column>
                </Grid>
                <Grid item style={{ width: "100%" }} md={4}>
                    <p className={classes.label}>Eixo</p>
                    <Column>
                        <TextField className={classes.inputStudent} name="receitaEixoOlhoDireito" value={values.receitaEixoOlhoDireito} onChange={handleChange} variant="outlined" />
                    </Column>
                </Grid>
            </Grid>
            <Grid container spacing={2} md={12}>
                <Grid item style={{ width: "100%" }} md={4}>
                    <p className={classes.label}>DP</p>
                    <Column>
                        <TextField className={classes.inputStudent} name="receitaDpOlhoDireito" value={values.receitaDpOlhoDireito} onChange={handleChange} variant="outlined" />
                    </Column>
                </Grid>

            </Grid>
            <h3>
                Olho esquerdo
            </h3>
            <Grid container spacing={2} md={12}>
                <Grid item style={{ width: "100%" }} md={4}>
                    <p className={classes.label}>Esférico</p>
                    <Column>
                        <TextField className={classes.inputStudent} name="receitaEsfericoOlhoEsquerdo" value={values.receitaEsfericoOlhoEsquerdo} onChange={handleChange} variant="outlined" />
                    </Column>
                </Grid>

                <Grid item style={{ width: "100%" }} md={4}>
                    <p className={classes.label}>Cilíndrico</p>
                    <Column>
                        <TextField className={classes.inputStudent} name="receitaCilindricoOlhoEsquerdo" value={values.receitaCilindricoOlhoEsquerdo} onChange={handleChange} variant="outlined" />
                    </Column>
                </Grid>

                <Grid item style={{ width: "100%" }} md={4}>
                    <p className={classes.label}>Eixo</p>
                    <Column>
                        <TextField className={classes.inputStudent} name="receitaEixoOlhoEsquerdo" value={values.receitaEixoOlhoEsquerdo} onChange={handleChange} variant="outlined" />
                    </Column>
                </Grid>
            </Grid>
            <Grid container spacing={2} md={12}>
                <Grid item style={{ width: "100%" }} md={4}>
                    <p className={classes.label}>DP</p>
                    <Column>
                        <TextField className={classes.inputStudent} name="receitaDpOlhoEsquerdo" value={values.receitaDpOlhoEsquerdo} onChange={handleChange} variant="outlined" />
                    </Column>
                </Grid>
            </Grid>
            
            <Padding padding="8px" />
            <Grid item style={{ width: "100%" }} md={12}>
                <p className={classes.label}>Marcar receita como concluída</p>
                <FormGroup>
                    <FormControlLabel control={<Checkbox 
                    name="entregaOculosCompleted" 
                    defaultChecked={values.entregaOculosCompleted} 
                    onChange={handleChange} 
                    value={values.entregaOculosCompleted} />}     
                    label="Receita concluída" />
                </FormGroup>
            </Grid>
            <Padding padding="16px" />

            <h2>
                Entrega de óculos
            </h2>
            <Grid container spacing={2} md={12}>
                <Grid item style={{ width: "100%" }} md={4}>
                    <p className={classes.label}>Data de entrega</p>
                    <Column>
                        <TextField className={classes.inputStudent} name="dataEntregaOculos" onChange={handleChange}
                            InputProps={{
                                inputComponent: MaskDate,
                                value: values.dataEntregaOculos,
                                onChange: handleChange
                            }}
                            value={values.dataEntregaOculos}
                            variant="outlined" />
                    </Column>
                </Grid>
                <Grid item style={{ width: "100%" }} md={4}>
                    <p className={classes.label}>Responsável</p>
                    <Column>
                        <TextField className={classes.inputStudent} 
                            name="responsavelEntregaOculos" 
                            value={values.responsavelEntregaOculos} 
                            onChange={handleChange} 
                            variant="outlined" />
                    </Column>
                </Grid>
            </Grid>
            <Padding />
            <Grid item style={{ width: "100%" }} md={12}>
                <p className={classes.label}>Marcar óculos como entregue</p>
                <FormGroup>
                    <FormControlLabel control={<Checkbox 
                    name="entregaOculosCompleted" 
                    defaultChecked={values.entregaOculosCompleted} 
                    onChange={handleChange} 
                    value={values.entregaOculosCompleted} />}     
                    label="Óculos entregue" />
                </FormGroup>
            </Grid>

        </>
    )
}

export default FormReceita;