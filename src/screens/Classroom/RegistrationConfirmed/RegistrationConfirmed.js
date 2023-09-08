import React, { useState } from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Components
import { ButtonLinePurple, ButtonPurple, ButtonWhite } from "../../../components/Buttons";
import Loading from "../../../components/Loading/CircularLoadingButtomActions";

// Assets

// Styles
import { TextField } from "@material-ui/core";
import { ArrowBack, Edit } from "@material-ui/icons";
import { useHistory } from "react-router";
import { Column, Row } from "../../../styles/style";
import styles from "../styles";
import { Form, Formik } from "formik";
import SelectUi from "../../../ui/Select";
import { useRef } from "react";
import MaskCep from "../../../components/Mask/maskcep";
import MaskPhone from "../../../components/Mask/maskphone";
import MaskCpf from "../../../components/Mask/maskcpf";

const useStyles = makeStyles(styles);

const Home = props => {
  const classes = useStyles();

  const inputRef = useRef(null);

  const [citys, setCitys] = useState([])


  const [edit, setEdit] = useState(true)

  const {
    registration,
    handleSubmit,
    handleEditPreRegistration,
    answer,
    state,
    classrooms
  } = props;
  const student = registration ?? [];

  const history = useHistory()



  const body = !student.student_fk ? {
    classroom: student?.classroom_fk,
    year: student?.classroom.school_year
  } : { student_fk: student.student_fk, classroom: student?.classroom_fk };

  const Sexo = [
    {
      name: "Masculino",
      id: 1
    },
    {
      name: "Feminino",
      id: 2
    }
  ]

  const color = [
    { id: 0, name: 'Não Declarada' },
    { id: 1, name: 'Branca' },
    { id: 2, name: 'Preta' },
    { id: 3, name: 'Parda' },
    { id: 4, name: 'Amarela' },
    { id: 5, name: 'Indígena' }
  ];


  const getSex = () => {
    return Sexo.find(props => props.id === student?.sex)
  }

  const getColor_race = () => {
    return color.find(props => props.id === student?.color_race)
  }

  const getClassroom = () => {
    return classrooms?.find(props => props.id === student?.classroom_fk)
  }

  const initialValue = {
    name: student.name ?? "",
    sex: getSex(),
    birthday: student?.birthday,
    cpf: student?.cpf ?? "Sem CPF",
    color_race: getColor_race(),
    deficiency: student?.deficiency ? { name: "Sim", id: true } : { name: "Não", id: false },
    responsable_name: student?.responsable_name,
    responsable_cpf: student?.responsable_cpf,
    responsable_telephone: student?.responsable_telephone,
    address: student?.address,
    neighborhood: student?.neighborhood,
    complement: student?.complement,
    number: student?.number,
    cep: student?.cep,
    zone: student?.zone === 1 ? { id: 1, name: "Rural" } : { id: 2, name: "Urbana" },
    edcenso_uf: student.edcenso_uf ?? null,
    edcenso_city: student.edcenso_city ?? null,
    classroom_fk: classrooms ? getClassroom() : student.classroom_fk
  }


  const handleStatesCity = (selectedOption, setFieldValue) => {
    setFieldValue("edcenso_city", selectedOption.id
    )
    setFieldValue("edcenso_uf", selectedOption.edcenso_uf_fk
    )
  }
  return (
    <>
      <ArrowBack onChange={() => { history.goBack() }} style={{ cursor: "pointer" }} />
      <h1>{student && student.classroom.name}</h1>
      <Grid className={classes.boxTitlePagination} container direction="row">
        <h2>Matrículas</h2>
      </Grid>
      {edit ? <>
        {!student?.unavailable ? <Grid item style={{ width: "100%" }} md={3}>
          <ButtonPurple
            className="t-button-primary"
            onClick={() => handleSubmit(body)}
            type="button"
            title="Confirmar Matricula"
          />
        </Grid> : <Grid item style={{ width: "100%" }} md={3}>
          <ButtonLinePurple
            type="button"
            disabled
            title="Já Matriculado"
          />
        </Grid>}
      </> : null}
      {!student?.unavailable ? <Column>
        <Row id="end"><Edit style={{ cursor: "pointer" }} onClick={() => setEdit(!edit)} /></Row>
      </Column> : null}
      {classrooms && student ? <Formik initialValues={initialValue} onSubmit={values => { handleEditPreRegistration(student.id, values); setEdit(!edit) }}>
        {({ errors, values, touched, handleChange, handleSubmit, setFieldValue }) => {
          return (
            <Form onSubmit={handleSubmit}>
              {!edit ? <Row id="start" style={{ width: "40%" }}>
                <ButtonPurple
                  className="t-button-primary"
                  type="submit"
                  title="Salvar"
                />
                <ButtonWhite
                  className="t-button-primary"
                  style={{ backgroundColor: "#94a8be" }}
                  type="button"
                  onClick={() => setEdit(!edit)}
                  title="Canelar"
                />
              </Row>
                : null}
              <h2> Dados básicos </h2>
              <Grid container direction="row" spacing={2}>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>Name</p>
                  <TextField className={classes.inputStudent} value={values.name} name="name" onChange={handleChange} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>Sexo</p>
                  <SelectUi
                    getOptionValue={opt => opt.id}
                    getOptionLabel={opt => opt.name}
                    className={classes.inputStudent}
                    name="sex"
                    onChange={handleChange}
                    options={Sexo}
                    value={values?.sex}
                    variant="outlined"
                    disabled={edit} />
                </Grid>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>Data de Nascimento</p>
                  <TextField className={classes.inputStudent} name="birthday" onChange={handleChange} value={values.birthday} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>Cor/Raça</p>
                  <SelectUi
                    className={classes.inputStudent}
                    getOptionValue={opt => opt.id}
                    getOptionLabel={opt => opt.name}
                    name="color_race" options={color}
                    onChange={handleChange}
                    value={values.color_race}
                    variant="outlined"
                    disabled={edit} />
                </Grid>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>CPF</p>
                  <TextField className={classes.inputStudent} InputProps={{
                    inputComponent: MaskCpf,
                    value: values.cpf,
                    inputRef: inputRef,
                    onChange: handleChange,
                  }} name="cpf" onChange={handleChange} value={values.cpf} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>Possui Deficiência</p>
                  <SelectUi
                    getOptionValue={opt => opt.id}
                    getOptionLabel={opt => opt.name}
                    className={classes.inputStudent}
                    name="deficiency"
                    options={[{ name: "Sim", id: true }, { name: "Não", id: false }]}
                    onChange={handleChange}
                    value={values.deficiency}
                    variant="outlined"
                    disabled={edit} />
                </Grid>
              </Grid>
              <h2> Dados do Responsável </h2>
              <Grid container direction="row" spacing={2}>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>Responsável</p>
                  <TextField className={classes.inputStudent} name="responsable_name" value={values.responsable_name} onChange={handleChange} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>CPF</p>
                  <TextField className={classes.inputStudent}
                    InputProps={{
                      inputComponent: MaskCpf,
                      value: values.responsable_cpf,
                      inputRef: inputRef,
                      onChange: handleChange,
                    }}
                    name="responsable_cpf" value={values.responsable_cpf} onChange={handleChange} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>Telefone</p>
                  <TextField className={classes.inputStudent} InputProps={{
                    inputComponent: MaskPhone,
                    value: values.responsable_telephone,
                    inputRef: inputRef,
                    onChange: handleChange,
                  }} name="responsable_telephone" value={values.responsable_telephone} onChange={handleChange} variant="outlined" disabled={edit} />
                </Grid>
              </Grid>
              <h2> Endereço </h2>
              <Grid container direction="row" spacing={3}>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>Endereço</p>
                  <TextField className={classes.inputStudent} name="address" value={values.address} onChange={handleChange} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>Bairro</p>
                  <TextField className={classes.inputStudent} name="neighborhood" value={values.neighborhood} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>Número</p>
                  <TextField className={classes.inputStudent} value={values.number} name="number" variant="outlined" onChange={handleChange} disabled={edit} />
                </Grid>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>Complemento</p>
                  <TextField className={classes.inputStudent} name="complement" variant="outlined" disabled={edit} />
                </Grid>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>CEP</p>
                  <TextField className={classes.inputStudent}
                    InputProps={{
                      inputComponent: MaskCep,
                      value: values.complement,
                      inputRef: inputRef,
                      onChange: handleChange,
                    }}
                    value={values.cep} name="cep" onChange={handleChange} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>Estado</p>
                  <SelectUi className={classes.inputStudent} options={state} getOptionValue={opt => opt.id} getOptionLabel={opt => opt.name} value={values.edcenso_uf} name="edcenso_uf" handleChange={selectedOption => {
                    setCitys(selectedOption.edcenso_city)
                  }} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>Cidade</p>
                  <SelectUi className={classes.inputStudent} value={values.edcenso_city} options={citys} getOptionValue={opt => opt.id} getOptionLabel={opt => opt.name} name="edcenso_city" handleChange={selectedOption => {
                    handleStatesCity(selectedOption, setFieldValue)
                  }} variant="outlined" disabled={edit} />
                </Grid>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>Local de Moradia</p>
                  <SelectUi
                    getOptionValue={opt => opt.id}
                    getOptionLabel={opt => opt.name}
                    className={classes.inputStudent}
                    options={[{ id: 1, name: "Rural" }, { id: 2, name: "Urbana" }]}
                    value={values.zone}
                    onChange={handleChange}
                    variant="outlined"
                    disabled={edit} />
                </Grid>
                <Grid item style={{ width: "100%" }} md={12}>
                  <div className={classes.lineGrayClean}></div>
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={3}>
                <Grid item style={{ width: "100%" }} md={6}>
                  <p className={classes.label}>Turma</p>
                  <SelectUi options={classrooms} disabled={true} getOptionValue={opt => opt.id} value={values.classroom_fk}
                    getOptionLabel={opt => opt.name} className={classes.inputStudent} variant="outlined" />
                </Grid>
              </Grid>

              {answer ? <> {answer.length > 0 ? <>
                <Grid container direction="row" spacing={3}>
                  <Grid item style={{ width: "100%" }} md={12}>
                    <div className={classes.lineGrayClean}></div>
                  </Grid>
                  <Grid item style={{ width: "100%" }} md={5}>
                    <div className={classes.floatLeft}>
                      <h2> Formulário </h2>
                    </div>
                  </Grid>
                  {answer.map((item, index) => {
                    return (
                      <Grid item style={{ width: "100%" }} md={12} key={index}>
                        <p className={classes.label}>{item.description}</p>
                        <TextField className={classes.inputStudent} value={item.value} variant="outlined" disabled={edit} />
                      </Grid>
                    )
                  })}

                </Grid>
              </>
                : null} </> : null}
            </Form>
          )
        }}
      </Formik> : null}
      <Grid
        className={classes.boxButtons}
        container
        direction="row"
        spacing={3}
      >
        {!props?.loadingIcon ? (
          <>

            {/* <Grid item style={{width: "100%"}} md={3}>
              <ButtonLinePurple
              onChange={() => handleRefusePreIdentification(false)}
              type="button"
              title="Recusar"
              />
            </Grid> */}
          </>
        ) : (
          <Grid item style={{ width: "100%" }} md={3}>
            <Loading />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Home;
