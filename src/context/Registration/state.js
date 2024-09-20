import { useState } from "react";
import { useHistory } from "react-router";
import handleSubmitStudent from "../../controller/registration/createRegistration";


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
    handleSubmitStudent({
      ...dataValues, sex: parseInt(dataValues.sex), zone: parseInt(dataValues.zone),
      birthday: dataValues.birthday,
      filhoOculos: parseBool(dataValues.filhoOculos),
      cpf: dataValues.cpf ? dataValues.cpf.replace(/\D/g, '') : null,
      horasUsoAparelhosEletronicos: parseInt(dataValues.horasUsoAparelhosEletronicos),
      horasAtividadesAoArLivre: parseInt(dataValues.horasAtividadesAoArLivre)
    }, history, "/")

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