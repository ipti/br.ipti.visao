import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Grid } from "@material-ui/core";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";


const validationSchema = Yup.object({
  selectedProject: Yup.string().required("Selecione um projeto."),
  turmaName: Yup.string().required("Digite o nome da turma."),
  year: Yup.date().required("Selecione o ano da turma."),
});

const handleSubmit = async (values, setVisible) => {

  try {
    // Enviar para o Firebase Functions
    const response = await axios.post("https://us-central1-br-ipti-visao.cloudfunctions.net/postProjetosMigration", {
      id_turma: values.id,
      project: values.selectedProject.id,
      name: values.turmaName,
      year: values.year.getFullYear(),
      registration: [] // Array de estudantes, preencha se necessário
    });

    console.log("Resposta do backend:", response.data);
    setVisible(false); // Fechar o diálogo
  } catch (error) {
    console.error("Erro ao enviar dados:", error);
  }
};


function MigrationDialog({ visible, setVisible, projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [date, setDate] = useState(null);


  return (
    <Dialog
      id="dlg"
      header="Migração de turma para MeuBen"
      visible={visible}
      style={{ width: "30vw" }}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
    >
      <Formik
        initialValues={{
          selectedProject: "",
          turmaName: "",
          year: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Formulário enviado:", values);
          handleSubmit(values, setVisible);
          setVisible(false);
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <p className="mb-6">
              Selecione o projeto para qual deseja migrar a turma:
            </p>
            <Grid item md={12} sm={12}>
              <Field name="selectedProject">
                {({ field }) => (
                  <Dropdown
                    {...field}
                    value={field.value || selectedProject}
                    onChange={(e) => {
                      setFieldValue("selectedProject", e.value);
                      setSelectedProject(e.value);
                    }}
                    options={projects[0]?.project}
                    optionLabel="name"
                    placeholder="Selecione um projeto"
                    className="w-full"
                    style={{ width: "100%" }}
                  />
                )}
              </Field>
              {errors.selectedProject && touched.selectedProject && (
                <small className="p-error">{errors.selectedProject}</small>
              )}
            </Grid>
            
            <p className="mb-6">Digite o nome para a turma:</p>
            <Grid item md={12} sm={12}>
              <Field name="turmaName">
                {({ field }) => (
                  <InputText
                    {...field}
                    type="text"
                    style={{ width: "100%" }}
                    placeholder="Nome da turma"
                  />
                )}
              </Field>
              {errors.turmaName && touched.turmaName && (
                <small className="p-error">{errors.turmaName}</small>
              )}
            </Grid>

            <p className="mb-6">Selecione o ano da turma:</p>
            <Grid item md={12} sm={12}>
              <Field name="year">
                {({ field }) => (
                  <Calendar
                    {...field}
                    value={field.value || date}
                    onChange={(e) => {
                      setFieldValue("year", e.value);
                      setDate(e.value);
                    }}
                    view="year"
                    dateFormat="yy"
                    style={{ width: "100%" }}
                    placeholder="Selecione ano da turma"
                  />
                )}
              </Field>
              {errors.year && touched.year && (
                <small className="p-error">{errors.year}</small>
              )}
            </Grid>

            <Button
              type="submit"
              label="Enviar"
              className="t-button-primary"
              style={{ width: "100%", marginTop: "1rem" }}
            />
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}

export default MigrationDialog;
