import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { requestDeleteSchedule, requestSaveEventPre, useFetchRequestSchecule } from "../../query/Schedule";
import Swal from "sweetalert2";
import styled from "../../styles"


export const Controller = () => {
  const { data: schedules, isLoading: isLoadingSchedules, isError, refetch } = useFetchRequestSchecule();
  const history = useHistory()
  const requestSaveEventPreMutation = useMutation(
    (data) => requestSaveEventPre(data),
    {
      onError: (error) => {
        console.log(error.response.data.message);
      },
      onSuccess: (data) => {
        Swal.fire({
          icon: 'success',
          title: 'Cronograma criado com sucesso!',
          confirmButtonColor: styled.colors.colorsBaseProductNormal,
        }).then((result) => {
          if (result.isConfirmed) {
            history.push('/')
          }
        })

      },
    }
  );

  const requestDeleteScheduleMutation = useMutation(
    (data) => requestDeleteSchedule(data),
    {
      onError: (error) => {
        console.log(error.response.data.message);
      },
      onSuccess: (data) => {
        history.push('/');
        refetch()
      },
    }
  );
  return { requestSaveEventPreMutation, requestDeleteScheduleMutation, schedules, isLoadingSchedules, isError }
} 