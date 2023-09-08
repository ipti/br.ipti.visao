import { useMutation } from "react-query";
import swal from "sweetalert";
import { requestUpdatePreRegistration } from "../../../query/classroom";

export const ControllerUpdatePreRegistration = () => {


    const requestEditPreRegistrationMutation = useMutation(
        ({ id, data }) => requestUpdatePreRegistration(id, data),
        {
            onError: (error) => {

                swal(error.response.data.message);
            },
            onSuccess: (data) => {
                swal("Pré matricula editada com sucesso!");
            },
        }
    );

    return {
        requestEditPreRegistrationMutation
    }
}