import React from "react";

import Alert from "@material-ui/lab/Alert";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { requestCreateClassroom } from "../../query/classroom";
import { requestCreateStage, requestEditPreIdentification, requestUpdateRegistration } from "../../query/stage";
import Swal from "sweetalert2";
import styled from "../../styles"


export const Controller = () => {

    const history = useHistory()
    const requestUpdateRegistrationMutation = useMutation(
        ({ data, id }) => requestUpdateRegistration(data, id),
        {
            onError: (error) => {
                Swal(error.response.data.message);
            },
            onSuccess: (data) => {
                history.goBack()
                return (
                    <Alert>
                        opoaaa
                    </Alert>
                )
            },
        }
    );

    const requestCreateStageMutation = useMutation(
        (data) => requestCreateStage(data),
        {
            onError: (error) => {
                Swal(error.response.data.message);
            },
            onSuccess: (data) => {
                history.goBack()
                return (
                    <Alert>
                        opoaaa
                    </Alert>

                )
            },
        }
    );


    const requestUpdatePreIdentificationMutation = useMutation(
        ({ data, id }) => requestEditPreIdentification(data, id),
        {
            onError: (error) => {
                Swal(error.response.data.message);
            },
            onSuccess: (data) => {
                history.goBack()
                return (
                    <Alert>
                        opoaaa
                    </Alert>

                )
            },
        }
    );

    const requestCreateClassroomMutation = useMutation(
        (data) => requestCreateClassroom(data),
        {
            onError: (error) => {
                Swal(error.response.data.message);
            },
            onSuccess: (data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Turma criada com sucesso!',
                    confirmButtonColor: styled.colors.colorsBaseProductNormal,
                }).then((result) => {
                    if (result.isConfirmed) {
                        history.push('/turmas')
                    }
                })
            },
        }
    );






    return { requestUpdateRegistrationMutation, requestUpdatePreIdentificationMutation, requestCreateStageMutation, requestCreateClassroomMutation }
} 