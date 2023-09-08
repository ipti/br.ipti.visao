import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


// Components
import { BoxStatus } from "../../components/Boxes";
import { ButtonPurple } from "../../components/Buttons";
import Loading from "../../components/Loading/CircularLoadingButtomActions";
import { TitleWithLine } from "../../components/Titles";

// Assets
import IconHouse from "../../assets/images/house-icon.png";
import IconMale from "../../assets/images/male-icon.png";
import IconStudent from "../../assets/images/student-male-icon.png";

// Styles
import { FormControl, FormLabel, TextField } from "@material-ui/core";
import { useState } from "react";
import Select from "react-select";
import { useFetchRequestSchoolRegistration } from "../../query/registration";
import styles from "../Classroom/styles";
import stylesRegistration from "./styles"
import { useFetchRequestQuiz } from "../../query/quiz";

const useStyles = makeStyles(styles);

const useStylesRegistration = makeStyles(stylesRegistration)

const customStyles = {
  control: base => ({
    ...base,
    height: "60px",
    minHeight: "60px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  }),
  menu: base => ({
    ...base,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  })
};

const map1 = new Map();

const Home = props => {
  const classes = useStyles();

  const classesRegistration = useStylesRegistration();
  const arrayquiz = [];
  const {
    registration,
    handleSubmit,
  } = props;
  const student = registration ?? [];

  const [idClassroom, setIdClassroom] = useState()

  const { data } = useFetchRequestSchoolRegistration({
    id: student.school_inep_id_fk
  });

  const { data: anwsers } = useFetchRequestQuiz({ id: student ? student.school_inep_id_fk : null })

  if (!data) return null

  const updateAnwsers = (anwser) => {
    map1.set(anwser.question_id, anwser)
  };


  const nullableField = "-------------";

  const studentName = student?.name;
  const color_race = student?.color_race === 0 ? 'Branca' : student?.color_race === 2 ? 'Preta' : student?.color_race === 3 ? 'Parda' : student?.color_race === 4 ? 'Amarela' : student?.color_race === 5 ? 'Indígena' : 'Não especificado';
  const deficiency = student?.deficiency ? 'sim' : 'não';

  const studentBirthday = student?.birthday
  // ? format(studentDate, "dd/MM/yyyy")
  // : "";
  const status = student?.newStudent;

  const city = student?.city ?? nullableField;
  const state = student?.state ?? nullableField;


  const responsableName = student?.responsable_name ?? nullableField;
  const responsableCpf = student?.school_identification.student_documents_and_address[0].cpf ?? nullableField;
  const last_event = student.school_identification.event_pre_registration.length - 1;

  const body = {
    name: studentName,
    birthday: studentBirthday,
    deficiency: student?.deficiency,
    color_race: student?.color_race,
    edcenso_city_fk: student?.edcenso_city_fk ?? null,
    edcenso_uf_fk: student?.edcenso_uf_fk ?? null,
    responsable_telephone: student?.responsable_telephone ?? null,
    responsable_name: student?.responsable_name ?? null,
    responsable_cpf: student?.responsable_cpf ?? null,
    student_identification: student?.id,
    sex: student?.sex,
    school_identification: student.school_identification.inep_id,
    event_pre_registration: parseInt(student.school_identification.event_pre_registration[last_event]),
    classroom: idClassroom,
    zone: student.school_identification.student_documents_and_address[0].residence_zone,
    answerPreIdentification: arrayquiz,
    hasQuiz: true
  }



  const gerarArray = e => {
    e.preventDefault()
    map1.forEach((item, index) => {
      arrayquiz.push(item)
    })
    handleSubmit(body)
  }



  return (
    <div style={{ height: '100%', padding: '10%', width: '100%' }}>
      <Grid className={classes.boxTitlePagination} container direction="row">
        <TitleWithLine title="Matrícula" />
      </Grid>
      <Grid container direction="row" spacing={3}>
        <Grid item md={5}>
          <img
            className={`${classes.floatLeft} ${classes.iconStudent}`}
            src={IconStudent}
            alt="Icone de aluno"
          />
          <div className={classes.floatLeft}>
            <p className={classes.label}>Aluno</p>
            {studentName}
          </div>
        </Grid>
        <Grid item md={3}>
          <p className={classes.label}>Nascimento</p>
          {studentBirthday}
        </Grid>
        <Grid item md={4}>
          <BoxStatus title={!status ? "Rematrícula" : "Novo Aluno"} />
        </Grid>
        <Grid item md={4}>
          <p className={classes.label}>Cor/Raça</p>
          {color_race}
        </Grid>
        <Grid item md={4}>
          <p className={classes.label}>Sexo</p>
          {student?.sex === 1 ? 'Maculino' : student?.sex === 2 ? 'Femenino' : ''}
        </Grid>
        <Grid item md={4}>
          <p className={classes.label}>Possui Deficiência</p>
          {deficiency}
        </Grid>
        <Grid item md={12}>
          <div className={classes.lineGrayClean}></div>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={3}>
        <Grid item md={5}>
          <img
            className={`${classes.floatLeft} ${classes.iconResponsable}`}
            src={IconMale}
            alt="Icone de Responsável"
          />
          <div className={classes.floatLeft}>
            <p className={classes.label}>Responsável</p>
            {responsableName}
          </div>
        </Grid>
        <Grid item md={4}>
          <p className={classes.label}>CPF</p>
          {responsableCpf}
        </Grid>
        <Grid item md={3}>
          <p className={classes.label}>Telefone</p>
          {student?.responsable_telephone}
        </Grid>
        <Grid item md={12}>
          <div className={classes.lineGrayClean}></div>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={3}>
        <Grid item md={5}>
          <img
            className={`${classes.floatLeft} ${classes.iconHouse}`}
            src={IconHouse}
            alt="Icone de Endereço"
          />
          <div className={classes.floatLeft}>
            <p className={classes.label}>Cidade</p>
            {city}
          </div>
        </Grid>
        <Grid item md={3}>
          <p className={classes.label}>Estado</p>
          {state}
        </Grid>
        <Grid item md={12}>
          <div className={classes.lineGrayClean}></div>
        </Grid>
      </Grid>
      <div>
        <form onSubmit={gerarArray}>
          <Grid className={`${classesRegistration.contentForm}`}>
            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              <FormControl
                component="fieldset"
                className={classesRegistration.formControl}
              >
                <FormLabel style={{ display: 'flex', flexDirection: 'row', justifyContent: "start" }}  >Turma *</FormLabel>
                <Select
                  styles={customStyles}
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Selecione a Turma"
                  value={props?.values?.classroom}
                  options={student.school_identification.classroom}
                  onChange={selectedOption => {
                    setIdClassroom(selectedOption.id)
                  }}
                  getOptionValue={opt => opt.name + ' - ' + opt.school_year}
                  getOptionLabel={opt => opt.name + ' - ' + opt.school_year}
                  required
                />
              </FormControl>
            </Grid>
            {anwsers?.map((item, index) => {
              return (
                <Grid
                  className={`${classesRegistration.contentMain}`}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  key={index}
                >
                  <Grid>
                    <Grid>
                      <h3>{item.name}</h3>
                      {/* <p>{data.school_year}</p> */}
                    </Grid>
                  </Grid>
                  {item.questions.map((question, index) => {
                    return (
                      <Grid key={index} item xs={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                        <FormControl
                          component="fieldset"
                          className={classesRegistration.formControl}
                        >
                          <FormLabel>{question.description}</FormLabel>
                          {question.options.length === 0 ? <TextField
                            name="name"
                            variant="outlined"
                            onBlur={event => updateAnwsers({
                              quiz_id: item.id,
                              question_id: question.id,
                              option_id: null,
                              seq: 1,
                              value: event.target.value,
                            })}
                            required
                            className={classesRegistration.textField}
                            autoComplete="off"
                          /> : <>
                            <Select
                              styles={customStyles}
                              className="basic-single"
                              classNamePrefix="select"
                              placeholder="Buscar..."
                              required
                              options={question.options}
                              getOptionValue={opt => opt.id}
                              getOptionLabel={opt => opt.description}
                              onChange={event => updateAnwsers({
                                quiz_id: item.id,
                                question_id: question.id,
                                option_id: event.id,
                                seq: 1,
                                value: event.answer
                              })}

                            />
                          </>}
                        </FormControl>
                      </Grid>
                    )
                  })}
                </Grid>
              )
            })}
          </Grid>
          <Grid
            className={classes.boxButtons}
            container
            direction="row"
            spacing={3}
          >
            {!props?.loadingIcon ? (
              <>
                <Grid item md={3}>
                  <ButtonPurple
                    className="t-button-primary"
                    type="submit"
                    title="Confirmar"
                  />
                </Grid>
              </>
            ) : (
              <Grid item md={3}>
                <Loading />
              </Grid>
            )}
          </Grid>

        </form>
      </div>
    </div>
  );
};

export default Home;
