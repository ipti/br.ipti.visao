import React from "react";

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
import { getYearClassRoom, yearClassroom } from "../../services/auth";
import styleBase from "../../styles";
import styles from "./styles";

const theme = createTheme({
  palette: {
    primary: {
      main: styleBase.colors.colorsBaseProductNormal
    }
  }
});

const useStyles = makeStyles(theme => styles);


const Classroom = ({classroom}) => {


  const matches = useMediaQuery('(max-width:600px)')

  const classes = useStyles();


  const currentYear = new Date().getFullYear();

  const numYears = 10;

  const yearArray = Array.from({ length: numYears }, (v, i) => ({
    year: currentYear - i,
    id: i
  }));

  const year_classrrom = [{ year: "Todos", id: 11 }, ...yearArray];

  const stage = () => {
    return classroom?.map((item, index) => {
      console.log(item)
      return (
        <Grid key={index} item md={4} sm={3} xs={12}>
          {item ? <BoxBig
            link={`turmas/${item.id}`}
            title={item.object.name}
            addCursor={true}
            textRight=""
          >
            {/* <BoxDiscriptionClassroom
              title={`Ano: ${item?.school_year}`}
              pre_registration={item?.student_pre_identification}
              registrationConfirmed={`${item?.student_pre_identification.length}`}
            /> */}
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
              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder="Digite o ano"
                options={year_classrrom}
                defaultValue={getYearClassRoom()}
                onChange={selectedOption => {
                  if (selectedOption.year === 'Todos') {
                    yearClassroom('');
                    window.location.reload()
                  } else {
                    yearClassroom(selectedOption.year)
                    window.location.reload()
                  }
                }}
                getOptionValue={opt => opt.year}
                getOptionLabel={opt => opt.year}
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
      <Link to="/turma/adicionar" className={`${classes.addStage}`}>
        <ThemeProvider theme={theme}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </ThemeProvider>
      </Link>
    </div>
  );
};

export default Classroom;
