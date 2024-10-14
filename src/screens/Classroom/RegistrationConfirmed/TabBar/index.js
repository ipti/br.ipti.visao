
import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import FormPerson from '../FormPerson';
import FormQuestionnaireParents from '../FormuQuestionnaireParents';
import FormOphthalmologicalPage from '../FormOphthalmological/FormOphthalmological';
import FormConsulta from '../FormConsulta';
import FormReceita from '../FormReceita';
import FormOculos from '../FormOculos/FormOculos';

import { useContext } from "react";
import { FormRegistrationContext } from '../../../../context/Classroom/FormOphthalmological/context';


export default function TabsRegister({ values, handleChange, setFieldValue}) {
  const { activeIndex, setActiveIndex } = useContext(FormRegistrationContext)

  return (
    <div className="card">
      <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
        <TabPanel pt={{
          inkbar: { style: { backgroundColor: "black" } },
          header: { style: { border: "transparent" } }
        }} header="Aluno">
          <FormPerson values={values} handleChange={handleChange} setFieldValue={setFieldValue} />
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
        <TabPanel  header="Entrega do Óculos">
          <FormOculos  values={values} handleChange={handleChange} />
        </TabPanel>
      </TabView>
    </div>
  )
}
