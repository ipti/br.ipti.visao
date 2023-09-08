import { useEffect, useState } from "react";
import { Controller } from "../../../controller/registration";
import { useFetchRequestQuiz } from "../../../query/quiz";


export const RegistrationState = () => {
    const [schools, setSchools] = useState();
    const [school, setSchool] = useState();
    const [idClassRoom, setIdClassroom] = useState("")
    const [isOfLegalAge, setIsOfLegalAge] = useState('');
    const [idEvent, setIdEvent] = useState('');
    const [year, setYear] = useState('');
    const [quiz, setQuiz] = useState();
    
    const {schoolsList, requestSaveRegistrationMutation} = Controller()

    const { data: anwsers } = useFetchRequestQuiz({ id: school ? school.inep_id : null })
  
    useEffect(() => {
        if(schoolsList){
            setSchools(schoolsList)
        }
        if(anwsers){
            setQuiz(anwsers)
        }
      }, [schoolsList, anwsers])


    return {
        isOfLegalAge, setIsOfLegalAge, school, schools, setSchool,year, setYear,idEvent, setIdEvent, idClassRoom, setIdClassroom,requestSaveRegistrationMutation, quiz
    }
}