import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styles from "./styles";
import { Column, Row } from "../../styles/style";
import { useMediaQuery } from "@mui/material";

const useStyles = makeStyles(styles);

const SignUp = () => {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)')

    return (
        <div className="row align-items--center">
            <div className={classes.contentLeft}>
                <div className={`row ${classes.box}`} >
                    <div className={classes.divBlue} />
                    {/* <div className={classes.divImage}>
                        <img className={classes.imgTagna} src={Tagna} alt="" />
                    </div> */}
                    <div
                        className={classes.formSignUp}
                    >
                        <Column>
                            <div className={classes.textTitle}>
                                <Column id="center">
                                    <Row id="center">
                                        <img style={{ width: matches ? "200px" : "256px", padding: "8px 16px" }} alt="" src={logo} />
                                    </Row>
                                </Column>
                                <h1 className={classes.textTitle}>
                                    Bem-vindo, pais!
                                </h1>
                                <div className={classes.boxRegister}>
                                    <div>
                                        <Link className={classes.linkRegister} to="/matricula">
                                            Iniciar Matrícula
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${classes.resetPassword} ${classes.textCenter}`}
                                style={{marginTop: "50px"}}
                            >
                                <Link to="/login" className={`${classes.buttonLogin}`}>
                                    Faça o seu Login
                                    <Link to="/login" className={classes.link} >
                                        clique aqui
                                    </Link>
                                </Link>
                            </div>
                        </Column>
                    </div>
                    {/* <div
                        className={`${classes.resetPassword} ${classes.textCenter}`}
                        >
                        <div className={`${classes.buttonLogin}`}>
                        Faça o seu Login
                        <Link className={classes.link} to="/login">
                        clique aqui
                        </Link>
                        </div> 
                    </div> */}
                </div>
            </div>
        </div>

    )
}

export default SignUp;