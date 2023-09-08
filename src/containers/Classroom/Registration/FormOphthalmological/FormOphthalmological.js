import React from "react";
import FormOphthalmologicaltProvider from "../../../../context/Classroom/FormOphthalmological/context";
import FormOphthalmologicalPage from "../../../../screens/Classroom/RegistrationConfirmed/FormOphthalmological/FormOphthalmological";

const FormOphthalmological = () => {
    return (
        <FormOphthalmologicaltProvider>
            <FormOphthalmologicalPage />
        </FormOphthalmologicaltProvider>
    )
}

export default FormOphthalmological;