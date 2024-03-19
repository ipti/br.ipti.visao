import React, { useContext, useEffect, useState } from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

import Select from "react-select";

import { BoxBig } from "../../components/Boxes";
import List from "../../components/List";

// Styles
import { Fab, useMediaQuery } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { PrivateRouterContext } from "../../context/PrivateRouter/context";
import fetchSchool from "../../controller/School/fetchSchools";
import { idSchoolLocal } from "../../services/auth";
import styleBase from "../../styles";
import { Padding } from "../../styles/style";
import styles from "./styles";

const theme = createTheme({
  palette: {
    primary: {
      main: styleBase.colors.colorsBaseProductNormal
    }
  }
});

const useStyles = makeStyles(theme => styles);


const Classroom = ({ classroom, setIdSchool, idSchool }) => {
  const [school, setSchool] = useState([])

  const {user} = useContext(PrivateRouterContext)


  const matches = useMediaQuery('(max-width:600px)')


  const classes = useStyles();

  useEffect(() => {
    fetchSchool()
      .then((testDataList) => {
        setSchool(testDataList)
        if (testDataList[0]) {
          setIdSchool(testDataList[0].id)
          idSchoolLocal(testDataList[0].id)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }, [setIdSchool])



  const stage = () => {
    return classroom?.map((item, index) => {
      return (
        <Grid key={index} item md={4} sm={3} xs={12}>
          {item ? <BoxBig
            link={`turmas/${item.id}`}
            title={item.object.name}
            addCursor={true}
            textRight="Turma"
          >
            <p title={item.object.name} className={classes.name}>
              {item.object.name}
            </p>
          </BoxBig>
            : null}
        </Grid>
      );
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <Grid container direction="row">
        <Grid className={classes.boxTitlePagination} item xs={12}>
          <div style={{ display: 'flex', flexDirection: "row" }}>
            <h1 className={`${classes.title} ${classes.floatLeft}`}>Turmas </h1>
            {/* <p style={{marginLeft: 'auto'}}> Será valido o último ano escolar para cada estagio</p> */}
          </div>
         
          <div className={`${classes.spaceBetween}`}>
            <div style={{ width: matches ? "80%" : '50%' }}>
              <label>Escolha uma escola</label>
              <Padding />
              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder="Digite uma escola"
                options={school}
                defaultValue={idSchool}
                onChange={selectedOption => {
                  setIdSchool(selectedOption.id)
                  idSchoolLocal(selectedOption.id)
                }}
                getOptionValue={opt => opt.id}
                getOptionLabel={opt => opt.object.name}
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={3}>
        <List items={stage()}>
          <Grid item xs={12}>
            <Alert variant="outlined" severity="warning">
              Nenhuma turma cadastrada
            </Alert>
          </Grid>
        </List>
      </Grid>
      {user?.role === 1 ?    <Link to="/turma/adicionar" className={`${classes.addStage}`}>
        <ThemeProvider theme={theme}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </ThemeProvider>
      </Link> : null}
    
    </div>
  );
};

export default Classroom;
