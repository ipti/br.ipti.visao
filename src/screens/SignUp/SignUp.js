import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { Column, Padding, Row } from "../../styles/style";
import styles from "./styles";

const useStyles = makeStyles(styles);

const SignUp = () => {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)')

    return (
        <div className="row align-items--center">
            <div className={classes.contentLeft}>
                <div className={`row ${classes.box}`} >
                    <div className={classes.divBlue} />
                    <div className={classes.divLupas} />
                    {/* <div className={classes.divImage}>
                        <img className={classes.imgTagna} src={Tagna} alt="" />
                    </div> */}
                    <div className={classes.formSignUp}>
                        <Column>
                            <div className={classes.textTitle}>

                                <Column id="center">
                                    <Padding padding="8px" />
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
                                            Iniciar Triagem
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${classes.resetPassword} ${classes.textCenter}`}
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
                </div>
            </div>
        </div>

    )
}

export default SignUp;