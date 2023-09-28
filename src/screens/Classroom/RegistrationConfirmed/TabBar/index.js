
import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import FormPerson from '../FormPerson';
import FormTriagemParents from '../FormTriagemParents';
import FormOphthalmologicalPage from '../FormOphthalmological/FormOphthalmological';

export default function TabsRegister({ values, handleChange }) {
  return (
    <div className="card">
      <TabView>
        <TabPanel pt={{
          inkbar: {style: {backgroundColor: "black"}},
          header: {style: {border: "transparent"}}
        }} header="Aluno">
          <FormPerson values={values} handleChange={handleChange} />
        </TabPanel>
        <TabPanel header="Triagem Pais">
          < FormTriagemParents values={values} handleChange={handleChange} />
        </TabPanel>
        <TabPanel header="Triagem">
          <FormOphthalmologicalPage values={values} handleChange={handleChange} />
        </TabPanel>
        {/* <TabPanel header="Header III">
                <FormConsulta values={values} handleChange={handleChange} />
                </TabPanel> */}
      </TabView>
    </div>
  )
}
