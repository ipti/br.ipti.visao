import React from "react";
import ReactModal from "react-modal";
import styles from "./style";
import { Grid, makeStyles } from "@material-ui/core";
import BoxStudents from "../Boxes/BoxStudents";
import { useMediaQuery } from "@mui/material";

const useStyles = makeStyles(styles);

const ModalExistStudent = ({ openModal, setOpen, student, school }) => {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)')

    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.8)",
        },
        content: {
            padding: "15x",
            top: "50%",
            left: "50%",
            right: "auto",
            borderRadius: 5,
            bottom: "auto",
            marginRight: "-35%",
            transform: "translate(-50%, -50%)",
            color: "#000",
            background: "#fff",
            overflowX: "hidden",
            width: matches ? '90%' : '50%'
        },
    }

    const close = () => {
        setOpen(false)
    }

    return (
        <ReactModal style={customStyles} isOpen={openModal} onRequestClose={close}>
            {student.length !== 0 ?
                <Grid
                    className={`${classes.contentMain}`}
                    container
                    direction="column"
                    alignItems="center">
                    <h3 style={{fontFamily: 'Poppins SemiBold', fontSize: 17}}>Já temos um cadastro com esse CPF</h3>
                    {student.map((student, i) => {
                        return (
                            <BoxStudents key={i} student={student} student_identification={school.student_identification} />
                        )
                    })}
                </Grid> : null}
        </ReactModal>
    )
}

export default ModalExistStudent;