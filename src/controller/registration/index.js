import { useMutation } from "react-query";
import { requestSaveRegistration, useFetchRequestSchoolList } from "../../query/registration";
import { useHistory } from "react-router";
import swal from "sweetalert";


export const Controller = () => {
  const { data: schoolsList } = useFetchRequestSchoolList();
  const history = useHistory()

  const requestSaveRegistrationMutation = useMutation(
    (data) => requestSaveRegistration(data),
    {
      onError: (error) => {
        swal(`${error.response.data.message} \nRepita todo o processo`);
      },
      onSuccess: (data) => {
        swal("Pré-matricula feita com sucesso!")
        history.push('/register')
      },
    }
  );

  const requestSaveRegistrationIdentificationMutation = useMutation(
    (data) => requestSaveRegistration(data),
    {
      onError: (error) => {
        swal(`${error.response.data.message} \nRepita todo o processo`);
        window.location.reload()
      },
      onSuccess: (data) => {
        swal("Pré-matricula feita com sucesso!")
        // history.go('/login')
      },
    }
  );
  return { requestSaveRegistrationMutation, schoolsList, requestSaveRegistrationIdentificationMutation }
} 