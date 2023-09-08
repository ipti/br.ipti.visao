import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import { useHistory } from "react-router";
const useStyles = makeStyles(styles);

const BoxStudents = ({ student, student_identification }) => {
    const classes = useStyles();

    const history = useHistory()

    const filterStudent = student_identification.filter(x => x.id === student.id);

    return (
        <Grid
            className={`${classes.boxStudent}`}
            container
            direction="row"
            justifyContent="space-between">
            <div>
                <h4>
                    Nome: {filterStudent[0].name}
                </h4>
                <h4>
                    Nascimento: {filterStudent[0].birthday}
                </h4>
            </div>
            <button onClick={() => history.push(`/matricula/${filterStudent[0].id}`)} className={`t-button-primary`}> Confirmar</button>
        </Grid>
    )
}

export default BoxStudents;