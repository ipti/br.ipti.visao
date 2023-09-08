import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";
import Tagna from "../../assets/images/tagná-img.png";
import styles from "./styles";
import { useFetchRequestSchoolList } from "../../query/registration";

const useStyles = makeStyles(styles);

const SignUp = () => {
    const { data } = useFetchRequestSchoolList();
    const classes = useStyles();
    return (
        <div className="row align-items--center">
            <div className={classes.contentLeft}>
                <div className={`row ${classes.box}`} >
                    <div className={classes.divBlue} />
                    <div className={classes.divImage}>
                        <img className={classes.imgTagna} src={Tagna} alt="" />
                    </div>
                    <div
                        className={classes.formSignUp}
                    >
                        <div className={classes.textTitle}>
                            <div>
                                Bem-Vindo
                            </div>
                            <div>
                                ao Matrícula Online
                            </div>

                            <div className={classes.boxRegister}>
                                <div>
                                    <Link className={classes.linkRegister} to="/matricula">
                                        Iniciar Matrícula
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${classes.resetPassword} ${classes.textCenter}`}
                    >
                        <div className={`${classes.buttonLogin}`}>
                            Faça o seu Login
                            <Link className={classes.link} to="/login">
                                clique aqui
                            </Link>
                        </div> 
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignUp;