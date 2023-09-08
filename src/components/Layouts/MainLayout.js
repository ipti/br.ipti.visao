import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./styles";
import { useState } from "react";
const useStyles = makeStyles(styles);

const Main = props => {
  const { children } = props;
  const classes = useStyles();
  const [isSidebar, setIsSidebar] = useState(false)

  return(
    <Grid container direction="column">
      <Grid container item md={12} className={classes.header}>
        <Header setIsSidebar={setIsSidebar} isSidebar={isSidebar}/>
      </Grid>
      <Grid container item md={12} className={classes.content}>
        <Grid item md={2}>
          <Sidebar isSidebar={isSidebar}/>
        </Grid>
        <Grid className={classes.contentMain} item md={10}>
          <div className={classes.boxContentMain}>{children}</div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
