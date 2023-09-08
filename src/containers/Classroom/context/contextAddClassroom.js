import React, { createContext, useState } from "react";
import { getIdSchool } from "../../../services/auth";

export const CreateClassroomContext = createContext({});

const StageContextProvider = ({ children }) => {

    const [initial_hour, setInitial_hour] = useState('07');
    const [initial_minute, setInitial_min] = useState('00');
    const [final_hour, setFinal_hour] = useState('12');
    const [final_minute, setFinal_min] = useState('00');
    
    const initialValue = {
        name: '',
        initial_hour: initial_hour,
        initial_minute: initial_minute,
        final_hour: final_hour,
        final_minute: final_minute,
        week_days_sunday: false,
        week_days_monday: false,
        week_days_tuesday: false,
        week_days_wednesday: false,
        week_days_thursday: false,
        week_days_friday: false,
        week_days_saturday: false,
        assistance_type: 0,
        school_year: 2023,
        school_identification: getIdSchool()
    }

    return (
        <CreateClassroomContext.Provider value={{
            initialValue,
            initial_hour,
            setInitial_hour,
            initial_minute,
            setInitial_min,
            final_hour,
            setFinal_hour,
            final_minute,
            setFinal_min
        }}>
            {children}
        </CreateClassroomContext.Provider>
    )
}

export default StageContextProvider;