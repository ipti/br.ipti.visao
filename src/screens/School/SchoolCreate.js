import { makeStyles } from "@material-ui/core/styles";
import { FormControl, FormLabel, Grid, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { ButtonPurple } from "../../components/Buttons";
import styles from "./styles";
import handleSubmitSchool from "../../controller/School/createSchool";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(styles);



const SchoolCreateScreen = () => {

    const history = useHistory()


    const initialValue = {
        name: ""
    }

    const classes = useStyles();
    return (
        <div>
            <Grid container direction="row">
                <Grid
                    item
                    md={12}
                    sm={12}
                    xs={12}
                >
                    <h1>
                        {`Adicionar Escola`}
                    </h1>
                </Grid>
            </Grid>
            <Formik initialValues={initialValue} onSubmit={(values) => handleSubmitSchool(values, history)}>
                {({ errors, values, touched, handleChange, handleSubmit, setFieldValue }) => {
                    return (

                        <Form>
                            <Grid item md={12} sm={12}>
                                <Grid
                                    container
                                    direction="row"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    <Grid item md={12} sm={12}>
                                        <FormControl
                                            component="fieldset"
                                            className={classes.formControl}
                                        >
                                            <FormLabel>Nome*</FormLabel>
                                            <TextField
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                id="outlined-size-small"
                                                variant="outlined"
                                                required
                                            // className={classes.textField}
                                            />
                                            {/* <div className={classes.formFieldError}>
                                        {props.errors.name}
                                    </div> */}
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                //   className={classes.marginButtom}
                                container
                                direction="row"
                                style={{ marginTop: '30px' }}
                            >
                                <Grid item md={2} sm={2}>
                                    <ButtonPurple
                                        // onClick={props.handleSubmit}
                                        className="t-button-primary"
                                        type="submit"
                                        title={"Salvar"}
                                    />
                                </Grid>
                            </Grid>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default SchoolCreateScreen;