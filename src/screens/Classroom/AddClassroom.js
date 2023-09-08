import DateFnsUtils from "@date-io/date-fns";
import {
  Checkbox,
  FormControl, FormControlLabel,
  FormLabel
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles
} from "@material-ui/core/styles";
import {
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import brLocale from "date-fns/locale/pt-BR";
import dayjs from "dayjs";
import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import * as Yup from "yup";
import { ButtonPurple } from "../../components/Buttons";
import Loading from "../../components/Loading/CircularLoadingButtomActions";
import { CreateClassroomContext } from "../../containers/Classroom/context/contextAddClassroom";
import styles from "./styles";

const useStyles = makeStyles(theme => styles);



const Create = props => {
  const classes = useStyles();
  const {
    handleSubmit,
    isEdit,
    loadingIcon,
  } = props;


  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .nullable()
      .required("Campo obrigatório!"),
  });
  const { initialValue, setInitial_hour, setInitial_min, setFinal_hour, setFinal_min } = useContext(CreateClassroomContext)

  return (
    <>
      <Grid container direction="row">
        <Grid
          className={classes.boxTitlePagination}
          item
          md={12}
          sm={12}
          xs={12}
        >
          <h1 className={`${classes.title} ${classes.floatLeft}`}>
            {`Adicionar Turma`}
          </h1>

        </Grid>
      </Grid>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {props => {
          return (
            <Form>
              <MuiPickersUtilsProvider locale={brLocale} utils={DateFnsUtils}>
                <Grid item md={12} sm={12}>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item md={5} sm={5}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <FormLabel>Nome*</FormLabel>
                        <TextField
                          name="name"
                          value={props.values.name}
                          onChange={props.handleChange}
                          id="outlined-size-small"
                          variant="outlined"
                          required
                          className={classes.textField}
                        />
                        <div className={classes.formFieldError}>
                          {props.errors.name}
                        </div>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} sm={12}>
                  <Grid
                    container
                    direction="column"
                    //alignItems="center"
                    spacing={2}
                  >
                    <Grid item md={5} sm={5}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <FormLabel>Horário Inicial *</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            components={['MobileTimePicker', 'MobileTimePicker', 'MobileTimePicker']}
                            sx={{ minWidth: 210 }}
                          >
                            <MobileTimePicker
                              label={'"Hora", "Minutos"'}
                              views={['hours', 'minutes']}
                              defaultValue={dayjs('2022-04-17T07:00')}
                              onChange={e => { setInitial_hour(e.$H); setInitial_min(e.$M) }}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                        <div className={classes.formFieldError}>
                          {props.errors.year}
                        </div>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} sm={12}>
                  <Grid
                    container
                    direction="column"
                    //alignItems="center"
                    spacing={2}
                  >
                    <Grid item md={5} sm={5}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <FormLabel>Horário final *</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                          <DemoContainer
                            components={['MobileTimePicker', 'MobileTimePicker', 'MobileTimePicker']}
                            sx={{ minWidth: 210 }}
                          >
                            <MobileTimePicker
                              label={'"Hora", "Minutos"'}
                              views={['hours', 'minutes']}
                              defaultValue={dayjs('2022-04-17T12:00')}
                              onChange={e => { setFinal_hour(e.$H); setFinal_min(e.$m) }}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                        <div className={classes.formFieldError}>
                          {props.errors.year}
                        </div>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <FormLabel>Dias da Semana *</FormLabel>
                </Grid>
                <Grid
                  className={`${classes.marginTop}`}
                  container
                  direction="row"
                  spacing={0}
                >

                  <Grid container
                    direction="row" md={12} sm={12}>
                    <FormControlLabel
                      className={classes.marginZero}
                      control={
                        <Checkbox
                          checked={props.values.week_days_monday}
                          onChange={props.handleChange}
                        />}
                      name='week_days_monday'
                      labelPlacement="top"
                      label="S"
                    />
                    <FormControlLabel
                      className={classes.marginZero}
                      control={
                        <Checkbox
                          checked={props.values.week_days_tuesday}
                          onChange={props.handleChange}
                        />}
                      name='week_days_tuesday'
                      labelPlacement="top"
                      label="T"
                    />
                    <FormControlLabel
                      className={classes.marginZero}
                       control={
                        <Checkbox
                          checked={props.values.week_days_wednesday}
                          onChange={props.handleChange}
                        />}
                      name='week_days_wednesday'
                      labelPlacement="top"
                      label="Q"
                    />
                    <FormControlLabel
                      className={classes.marginZero}
                      control={
                        <Checkbox
                          checked={props.values.week_days_thursday}
                          onChange={props.handleChange}
                        />}
                      name='week_days_thursday'
                      labelPlacement="top"
                      label="Q"
                    />
                    <FormControlLabel
                      className={classes.marginZero}
                      control={
                        <Checkbox
                          checked={props.values.week_days_friday}
                          onChange={props.handleChange}
                        />}
                      name='week_days_friday'
                      labelPlacement="top"
                      label="S"
                    />
                    <FormControlLabel
                      className={classes.marginZero}
                      control={
                        <Checkbox
                          checked={props.values.week_days_saturday}
                          onChange={props.handleChange}
                        />}
                      name='week_days_saturday'
                      labelPlacement="top"
                      label="S"
                    />
                    <FormControlLabel
                      className={classes.marginZero}
                      control={
                        <Checkbox
                          checked={props.values.week_days_sunday}
                          onChange={props.handleChange}
                        />}
                      name='week_days_sunday'
                      labelPlacement="top"
                      label="D"
                    />
                  </Grid>
                </Grid>
                <Grid
                  className={classes.marginButtom}
                  container
                  direction="row"
                  style={{ marginTop: '30px' }}
                >
                  <Grid item md={2} sm={2}>
                    {!loadingIcon ? (
                      <ButtonPurple
                        onClick={props.handleSubmit}
                        className="t-button-primary"
                        type="submit"
                        title={isEdit ? "Editar" : "Salvar"}
                      />
                    ) : (
                      <Loading />
                    )}
                  </Grid>
                </Grid>
              </MuiPickersUtilsProvider>
            </Form >
          );
        }}
      </Formik >
    </>
  );
};

Create.propTypes = {
  year: PropTypes.string
};

export default Create;
