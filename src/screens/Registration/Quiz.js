import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material";
import React, { useContext } from "react";
import Select from "react-select";
import { RegistrationContext } from "../../containers/Registration/Context/context";
import styles from "./styles";

import { FormControl, FormLabel, TextField } from "@material-ui/core";
import { ButtonPurple } from "../../components/Buttons";

const useStyles = makeStyles(styles);

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


const map1 = new Map();


const Quiz = props => {

    const arrayquiz = [];
    const classes = useStyles();
    const { quiz } = useContext(RegistrationContext)

    const updateAnwsers = (anwser) => {
        map1.set(anwser.question_id, anwser)
    };

    const nextPag = e => {
        
        e.preventDefault();

        map1.forEach((item, index) => {
            arrayquiz.push(item)
        })

        props.next(6, { answerPreIdentification: arrayquiz, hasQuiz: true })
    }

    return (
        <form onSubmit={nextPag}>
            <Grid className={`${classes.contentForm}`}>
                {quiz?.map((item, index) => {
                    return (
                        <Grid
                            className={`${classes.contentMain}`}
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            key={index}
                        >
                            <Grid>
                                <Grid>
                                    <h3>{item.name}</h3>
                                </Grid>
                            </Grid>
                            {item.questions.map((question, index) => {
                                return (
                                    <Grid key={index} item xs={12}>
                                        <FormControl
                                            component="fieldset"
                                            className={classes.formControl}
                                        >
                                            <FormLabel>{question.description}</FormLabel>
                                            {question.options.length === 0 ? <TextField
                                                name="name"
                                                variant="outlined"
                                                onBlur={event => updateAnwsers({
                                                    quiz_id: item.id,
                                                    question_id: question.id,
                                                    option_id: null,
                                                    seq: 1,
                                                    value: event.target.value,
                                                })}
                                                required
                                                className={classes.textField}
                                                autoComplete="off"
                                            /> : <>
                                                <Select
                                                    styles={customStyles}
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    placeholder="Buscar..."
                                                    required
                                                    options={question.options}
                                                    getOptionValue={opt => opt.id}
                                                    getOptionLabel={opt => opt.description}
                                                    onChange={event => updateAnwsers({
                                                        quiz_id: item.id,
                                                        question_id: question.id,
                                                        option_id: event.id,
                                                        seq: 1,
                                                        value: event.answer
                                                    })}

                                                />
                                            </>}
                                        </FormControl>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    )
                })}
                <Grid
                    className={`${classes.marginTop} ${classes.marginButtom}`}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={6}>
                        <ButtonPurple
                            type="submit"
                            title="Finalizar"
                            className="t-button-primary"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default Quiz;