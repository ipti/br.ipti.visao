import React, { useContext, useEffect, useState } from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

import Select from "react-select";

import { BoxBig } from "../../components/Boxes";
import List from "../../components/List";

// Styles
import { Fab, useMediaQuery } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { PrivateRouterContext } from "../../context/PrivateRouter/context";
import fetchOneSchool from "../../controller/School/fetchOneSchool";
import fetchSchool from "../../controller/School/fetchSchools";
import { getIdSchool, idSchoolLocal } from "../../services/auth";
import styleBase from "../../styles";
import { Padding } from "../../styles/style";
import styles from "./styles";

const theme = createTheme({
  palette: {
    primary: {
      main: styleBase.colors.colorsBaseProductNormal,
    },
  },
});

const useStyles = makeStyles((theme) => styles);

const Consultation = ({ classroom, setIdSchool, idSchool }) => {
  const [school, setSchool] = useState([]);
  const [schoolOne, setSchoolOne] = useState();

  const { user } = useContext(PrivateRouterContext);
  const matches = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

  useEffect(() => {
    fetchSchool()
      .then((testDataList) => {
        setSchool(testDataList);
        if (testDataList[0]) {
          if (!getIdSchool()) {
            idSchoolLocal(testDataList[0].id);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setIdSchool, idSchool]);

  useEffect(() => {
    if (getIdSchool()) {
      fetchOneSchool(getIdSchool())
        .then((testDataList) => {
          setSchoolOne(testDataList);
        })
        .catch((err) => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getIdSchool()]);

  const studentsConsultation = () => {
    const registrationList = data ?? [];

    return registrationList.map((registration, index) => {

      console.log(registration);
      return (
        <BoxRegistration
          link={`${baseLink}/${registration?.id}`}
          key={index}
          name={registration?.object.name}
          sex={registration?.sex}
          id={registration?.id}
          points={registration?.points}
          triagem={
            registration.object.testCover ||
            registration.object.testManchaBranca ||
            registration.object.testMovimentoOcular
          }
          md={4}
          sm={4}
          unavailable={registration?.unavailable}
        />
      );
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <Grid container direction="row">
        <Grid className={classes.boxTitlePagination} item xs={12}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h1 className={`${classes.title} ${classes.floatLeft}`}>Encaminhados para consulta </h1>
            {/* <p style={{marginLeft: 'auto'}}> Será valido o último ano escolar para cada estagio</p> */}
          </div>

          <h2>{schoolOne?.object?.name}</h2>
          <div className={`${classes.spaceBetween}`}>
            <div style={{ width: matches ? "80%" : "50%" }}>
              <label>Escolha uma escola</label>
              <Padding />
              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder="Digite uma escola"
                options={school}
                value={idSchool}
                defaultValue={idSchool}
                onChange={(selectedOption) => {
                  setIdSchool(selectedOption.id);
                  idSchoolLocal(selectedOption.id);
                }}
                getOptionValue={(opt) => opt.id}
                getOptionLabel={(opt) => opt.object.name}
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={3}>
        <List items={studentsConsultation()}>
          <Grid item xs={12}>
            <Alert variant="outlined" severity="warning">
              Nenhuma turma cadastrada
            </Alert>
          </Grid>
        </List>
      </Grid>
      
    </div>
  );
};

export default Consultation;
