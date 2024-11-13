import React, { useState, useRef } from "react";
import { Dialog } from "primereact/dialog";
import { Grid } from "@material-ui/core";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { ProgressBar } from "primereact/progressbar"; 
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import api from "../../services/api";

const validationSchema = Yup.object({
  selectedProject: Yup.string().required("Selecione um projeto."),
  turmaName: Yup.string().required("Digite o nome da turma."),
  year: Yup.date().required("Selecione o ano da turma."),
});

const handleSubmit = async (values, setVisible, toast, setIsSubmitting) => {
  setIsSubmitting(true); // Exibe o ProgressBar
  try {
    const response = await api.post("/postProjetosMigration", {
      id_turma: values.id,
      project: values.selectedProject.id,
      name: values.turmaName,
      year: values.year.getFullYear(),
    });

    console.log("Resposta do backend:", response.data);
    setVisible(false);
    toast.current.show({
      severity: "success",
      summary: "Sucesso",
      detail: "A turma foi migrada com sucesso!",
      life: 3000,
    });
  } catch (error) {
    console.error("Erro ao enviar dados:", error);
    toast.current.show({
      severity: "error",
      summary: "Erro",
      detail: "Falha ao migrar a turma.",
      life: 3000,
    });
  } finally {
    setIsSubmitting(false); // Oculta o ProgressBar
  }
};

function MigrationDialog({ visible, setVisible, projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [date, setDate] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useRef(null);
  const { id } = useParams();

  return (
    <>
      {/* Certifique-se de que o Toast está fora do Dialog */}
      <Toast ref={toast} />
      <Dialog
        id="dlg"
        header="Migração de turma para MeuBen"
        visible={visible}
        style={{ width: "30vw" }}
        onHide={() => setVisible(false)}
      >
        {isSubmitting && <ProgressBar mode="indeterminate" style={{ height: "6px" }} />}
        <Formik
          initialValues={{
            selectedProject: "",
            turmaName: "",
            year: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit({ ...values, id: id }, setVisible, toast,setIsSubmitting);
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
                disabled={isSubmitting} 
              />
            </Form>
          )}
        </Formik>
      </Dialog>
    </>
  );
}

export default MigrationDialog;