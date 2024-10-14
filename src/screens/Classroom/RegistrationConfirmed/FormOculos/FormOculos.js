import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, FormControlLabel, FormGroup, Grid, TextField } from "@mui/material";
import React, { useState, useEffect } from 'react';
import styles from "../../../../styles";
import { Column, Padding } from "../../../../styles/style";
import { ButtonPurple } from "../../../../components/Buttons";

import MaskDate from "../../../../components/Mask/maskdate";
const useStyles = makeStyles(styles);

const FormOculos = ({ values, handleChange }) => {
    const classes = useStyles();
   
    const [isEntregaCheckboxDisabled, setIsEntregaCheckboxDisabled] = useState(true);
    
    // Verifica se os campos de entrega estão preenchidos
    useEffect(() => {
        const entregaCamposPreenchidos = values.dataEntregaOculos && values.responsavelEntregaOculos;
        setIsEntregaCheckboxDisabled(!entregaCamposPreenchidos);
    }, [values.dataEntregaOculos, values.responsavelEntregaOculos, handleChange]); 

    return (
        <>
            <Padding padding="8px" />
            
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
                    value={values.entregaOculosCompleted}
                    disabled={isEntregaCheckboxDisabled} />}     
                    label="Óculos entregue" />
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
    )
}

export default FormOculos;