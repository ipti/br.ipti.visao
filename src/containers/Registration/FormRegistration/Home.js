import React from "react";

import BackButton from "../../../assets/images/backIcon.svg";
import TagImage from "../../../assets/images/taglogin.svg";

// Redux

// Components
import Loading from "../../../components/Loading/CircularLoadingRegistration";

// Material UI
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { RegistrationContext } from "../../../context/Registration/context";
import styles from "../../../screens/Registration/styles";
import Registration from "../../../screens/Registration";
const useStyles = makeStyles(styles);

const Home = props => {
  const classes = useStyles();

  const { backStep } = useContext(RegistrationContext)

  const wizard = () => {


    return (
      <div style={{ display: "flex", flexDirection: "column" }} className={classes.backgroundForm}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={classes.topBar} style={{ backgroundColor: "#667DF4" }} />
          <div className={classes.topBar} style={{ backgroundColor: "#F45A5A" }} />
          <div className={classes.topBar} style={{ backgroundColor: "#66D654" }} />
          <div className={classes.topBar} style={{ backgroundColor: "#EADA48" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}><img className={classes.backButton} onClick={backStep} src={BackButton} alt=""></img><img className={classes.imgTag} src={TagImage} alt=""></img></div>
        <Grid
          container
          style={{ height: "100%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={4} md={5} xs={10}>
            <Registration />
          </Grid>
        </Grid>

      </div>

    );
  };

  return (
    <>
      {props.loading ? (
        <Loading />
      ) : (
        <>
          {wizard()}
          {alert()}
        </>
      )}
    </>
  );
};


export default Home;
