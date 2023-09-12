import { useEffect, useState } from "react";
import { useHistory } from "react-router";


export const RegistrationState = () => {
    const [school, setSchool] = useState();
    const [idClassRoom, setIdClassroom] = useState("")

    const history = useHistory()

    const [step, setStep] = useState(0);
    const [dataValues, setDataValues] = useState({});

    const next = (step, values) => {

        let data = Object.assign(dataValues, values);
    
        setDataValues(data);
        setStep(step)

      };
 
 
      const backStep = () => {
        if (step > 0) {
          if (step === 6) {
            setStep(step - 2)
          } else {
            setStep(step - 1)
          }
        } if (step === 0) {
          history.push("/register")
        }
      }
    
      const onSubmit = (values) => {

        let data = Object.assign(dataValues, values);
    
        setDataValues(data);
        const parseBool = value =>
          ['true', 'false'].includes(value) ? value === true : null
        //   requestSaveRegistrationMutation.mutate(
        //     {
        //       ...dataValues, sex: parseInt(dataValues.sex),
        //       zone: parseInt(dataValues.zone),
        //       birthday: dataValues.birthday,
        //       deficiency: parseBool(dataValues.deficiency),
        //       cpf: dataValues.cpf ? dataValues.cpf.replace(/\D/g, '') : null,
        //       responsable_cpf: dataValues.responsable_cpf ? dataValues.responsable_cpf.replace(/\D/g, '') : "",
        //       responsable_telephone: dataValues.responsable_telephone.replace(/\D/g, ''),
        //       father_name: dataValues.father_name === "" ? null : dataValues.father_name,
        //       mother_name: dataValues.mother_name === "" ? null : dataValues.mother_name,
        //       event_pre_registration: parseInt(dataValues.event_pre_registration),
        //     }
        //   )
        
      };


    return {
        school, 
        setSchool,
        idClassRoom, 
        setIdClassroom,
        next,
        step,
        backStep,
        onSubmit,
        dataValues
    }
}