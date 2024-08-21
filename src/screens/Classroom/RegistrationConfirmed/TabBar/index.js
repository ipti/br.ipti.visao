
import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import FormPerson from '../FormPerson';
import FormQuestionnaireParents from '../FormuQuestionnaireParents';
import FormOphthalmologicalPage from '../FormOphthalmological/FormOphthalmological';
import FormConsulta from '../FormConsulta';
import FormReceita from '../FormReceita';

export default function TabsRegister({ values, handleChange }) {
  return (
    <div className="card">
      <TabView>
        <TabPanel pt={{
          inkbar: { style: { backgroundColor: "black" } },
          header: { style: { border: "transparent" } }
        }} header="Aluno">
          <FormPerson values={values} handleChange={handleChange} />
        </TabPanel>
        <TabPanel header="Questinário com os Pais">
          < FormQuestionnaireParents values={values} handleChange={handleChange} />
        </TabPanel>
        <TabPanel header="Triagem">
          <FormOphthalmologicalPage values={values} handleChange={handleChange} />
        </TabPanel>
        <TabPanel header="Consulta">
          <FormConsulta values={values} handleChange={handleChange} />
        </TabPanel>
        <TabPanel header="Receita">
          <FormReceita values={values} handleChange={handleChange} />
        </TabPanel>
      </TabView>
    </div>
  )
}
