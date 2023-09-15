import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

// Components
import { BoxBig } from "../../components/Boxes";
import AddIcon from "@material-ui/icons/Add";
import List from "../../components/List";

// Styles
import styles from "./styles";
import { Fab, ThemeProvider, createTheme } from "@mui/material";
import styleBase from "../../styles";

const useStyles = makeStyles(styles);



const theme = createTheme({
  palette: {
    primary: {
      main: styleBase.colors.colorsBaseProductNormal
    }
  }
});

const Home = ({ data }) => {
  const history = useHistory()
  const classes = useStyles();
  const schools = () => {
    const schoolList = data ?? [];


    return schoolList.map((school, index) => (
      <Grid key={index} className={classes.box} item md={4} sm={3} xs={12}>
        <BoxBig textRight="Ativa">
          <p title={school.object.name} className={classes.name}>
            {school.object.name}
          </p>
          {/* <span title={school.city} className={classes.city}>
            {school.city}
          </span> */}
        </BoxBig>
      </Grid>
    ));
  };

  return (
    <>
      <Grid container direction="row">
        <Grid className={classes.boxTitlePagination} item xs={12}>
          <h1 className={`${classes.title} ${classes.floatLeft}`}>Escolas</h1>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={8}>
        <List items={schools()}>
          <Grid item xs={12}>
            <Alert variant="outlined" severity="warning">
              Nenhum escola cadastrada
            </Alert>
          </Grid>
        </List>
      </Grid>
      <div onClick={() => history.push("/criar/escolas")} className={`${classes.addStage}`}>
        <ThemeProvider theme={theme}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Home;
