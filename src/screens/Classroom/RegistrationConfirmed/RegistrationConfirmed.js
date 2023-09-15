import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Components
import { ButtonPurple } from "../../../components/Buttons";

// Assets

// Styles
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router";
import styles from "../styles";
import TabsRegister from "./TabBar";
import { useContext } from "react";
import { FormRegistrationContext } from "../../../context/Classroom/FormOphthalmological/context";

const useStyles = makeStyles(styles);

const Home = props => {
  const classes = useStyles();


  const history = useHistory()

  const {oneRegistration} = useContext(FormRegistrationContext)

  // const getSex = () => {
  //   return Sexo.find(props => props.id === student?.sex)
  // }

  // const getColor_race = () => {
  //   return color.find(props => props.id === student?.color_race)
  // }

  // const getClassroom = () => {
  //   return classrooms?.find(props => props.id === student?.classroom_fk)
  // }

  // const initialValue = {
  //   name: student.name ?? "",
  //   sex: getSex(),
  //   birthday: student?.birthday,
  //   cpf: student?.cpf ?? "Sem CPF",
  //   color_race: getColor_race(),
  //   deficiency: student?.deficiency ? { name: "Sim", id: true } : { name: "Não", id: false },
  //   responsable_name: student?.responsable_name,
  //   responsable_cpf: student?.responsable_cpf,
  //   responsable_telephone: student?.responsable_telephone,
  //   address: student?.address,
  //   neighborhood: student?.neighborhood,
  //   complement: student?.complement,
  //   number: student?.number,
  //   cep: student?.cep,
  //   zone: student?.zone === 1 ? { id: 1, name: "Rural" } : { id: 2, name: "Urbana" },
  //   edcenso_uf: student.edcenso_uf ?? null,
  //   edcenso_city: student.edcenso_city ?? null,
  //   classroom_fk: classrooms ? getClassroom() : student.classroom_fk
  // }


  
  return (
    <>
      <ArrowBack onChange={() => { history.goBack() }} style={{ cursor: "pointer" }} />
      <Grid className={classes.boxTitlePagination} container direction="row">
        <h2>Dados do aluno</h2>
      </Grid>
      <Grid item style={{ width: "100%" }} md={3}>
          <ButtonPurple
            className="t-button-primary"
            type="button"
            title="Salvar"
          />
        </Grid>
        {oneRegistration ? <TabsRegister /> : null}
      
    </>
  );
};

export default Home;
