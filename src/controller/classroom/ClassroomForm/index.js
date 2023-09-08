import { useMutation } from "react-query";
import { useParams } from "react-router";
import swal from "sweetalert";
import { requestDeletePreRegistration } from "../../../query/classroom";
import { useFetchRequestClassroom } from "../../../query/stage";



export const ControllerClassroomForm = () => {

    const { id } = useParams()

    const { data: classroom, isLoading, isError, refetch } = useFetchRequestClassroom({ id: id })

    const requestDeletePreRegistrationMutation = useMutation(
        (data) => requestDeletePreRegistration(data),
        {
            onError: (error) => {
                
                swal(error.response.data.message);
            },
            onSuccess: (data) => {
                refetch()
            },
        }
    );

    return{
        classroom, isLoading, isError, requestDeletePreRegistrationMutation
    }
}