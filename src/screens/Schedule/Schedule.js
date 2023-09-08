import { format, parseISO } from "date-fns";
import React from "react";

// Material UI
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import Alert from "@material-ui/lab/Alert";

import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

// Third party
import { Link } from "react-router-dom";

// Components
import { BoxBig, BoxDiscriptionSchedule } from "../../components/Boxes";
import List from "../../components/List";

// Styles
import styleBase from "../../styles";
import styles from "./styles";

const useStyles = makeStyles(styles);

const theme = createTheme({
  palette: {
    primary: {
      main: styleBase.colors.colorsBaseProductNormal
    }
  }
});

const Schedule = ({ activePage, data, pagination, handlePage, deleteSchedule }) => {
  const classes = useStyles();

  const schedules = () => {
    const schedulesList = data ?? [];

    return schedulesList.map((schedule, index) => {
      let dataInternal = parseISO(schedule.start_date);
      let internalTransferDateStart = format(dataInternal, "dd/MM/yyyy");

      let dataInternalEnd = parseISO(schedule.end_date);
      let internalTransferDateEnd = format(dataInternalEnd, "dd/MM/yyyy");
      
    
      return (
        <Grid key={index} className={classes.box} item md={4} sm={3} xs={12}>
          <BoxBig
           // link={`cronograma/editar/${schedule.id}`}
            subtitle="Turma"
            addCursor={true}
            title="Cronograma"
            textRight={schedule.year}
            deleteSchedule={deleteSchedule}
            id={schedule.id}
          >
            <BoxDiscriptionSchedule
              title={`Novas Alunos - ${schedule.school_identification.name}`}
              color={styleBase.colors.colorsBaseProductNormal}
              textRight={schedule.year}
              subtitle={`${internalTransferDateStart} - ${internalTransferDateEnd}`}
            />
          </BoxBig>
        </Grid>
      );
    });
  };

  return (
    <div className={classes.contentSchedule}>
      <Grid container direction="row">
        <Grid className={classes.boxTitlePagination} item xs={12}>
          <h1 className={`${classes.title} ${classes.floatLeft}`}>
            Cronograma
          </h1>
          
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={4}>
        <List items={schedules()}>
          <Grid item xs={12}>
            <Alert variant="outlined" severity="warning">
              Nenhum cronograma cadastrado
            </Alert>
          </Grid>
        </List>
      </Grid>

      <Link to="/cronograma/adicionar" className={`${classes.addSchedule}`}>
        <ThemeProvider theme={theme}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </ThemeProvider>
      </Link>
    </div>
  );
};

export default Schedule;
