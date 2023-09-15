import { useEffect } from "react"
import fetchOneRegistration from "../../../controller/registration/fetchOneRegistration"
import { useState } from "react"
import { useParams } from "react-router-dom";


const FormRegistrationState = () => {  

    const { idRegistration } = useParams()

    const [oneRegistration, setOneRegistration] = useState()

    const initialValues = {
        febre: "",
        convucao: "",
        alergiaColirio: "",
        doençasNoCoração: "",
        pupilometro: "",
        olhoDireito: "",
        olhoEsquerdo: ""
    }


    useEffect(() => {
        fetchOneRegistration(idRegistration)
          .then((testDataList) => {
            setOneRegistration(testDataList)
                setOneRegistration(testDataList)
          })
          .catch((err) => {
            // Trate erros, se ocorrerem
            console.error(err)
          })
      }, [idRegistration])
    

    return{
        initialValues, oneRegistration
    }
}

export default FormRegistrationState;