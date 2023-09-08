import { Controller } from "../../../controller/Schedule";
import Swal from "sweetalert2";
import styled from "../../../styles"
import image from "../../../assets/images/Atenção-img.png"



export const States = () => {

    const { requestDeleteScheduleMutation, isError, isLoadingSchedules, schedules } = Controller()

    const deleteSchedule = id => {
        if (id) {
            return Swal.fire({
                title: "Excluir Cronograma?",
                text: "Essa ação é irreversível não pode ser desfeita",
                imageUrl: image,
                imageHeight: 250,
                showCancelButton: true,
                confirmButtonColor: styled.colors.colorsBaseProductNormal,
                cancelButtonColor: styled.colors.colorsBaseCloudNormal,
                confirmButtonText: 'Aceitar',
                reverseButtons: true,
                cancelButtonText: `<div style="color:black" >Cancelar</div>`
            }).then((result) => {
                if (result.isConfirmed) {
                    requestDeleteScheduleMutation.mutate(id)
                }
            })
        }
    }

    return {
        schedules, isLoadingSchedules, isError, deleteSchedule
    }

}