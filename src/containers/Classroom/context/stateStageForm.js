import { ControllerClassroomForm } from "../../../controller/classroom/ClassroomForm";


export const StageFormState = () => {

    const { requestDeletePreRegistrationMutation, classroom, isError, isLoading } = ControllerClassroomForm();



    return {
        classroom, isLoading, isError, requestDeletePreRegistrationMutation
    }
}