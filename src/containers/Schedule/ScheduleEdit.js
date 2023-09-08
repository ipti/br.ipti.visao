import React, { useState } from "react";
import * as Yup from "yup";
import Alert from "../../components/Alert/CustomizedSnackbars";
import Loading from "../../components/Loading/CircularLoading";
import { Controller } from "../../controller/Schedule/index";
import { ScheduleForm } from "../../screens/Schedule";
import { States } from "./states/ScheduleEditStates";

const ScheduleEdit = props => {
    const [open, setOpen] = useState(false);
    const { requestSaveEventPreMutation } = Controller()


    const { data, isError, isLoading} = States()
   
    const handleClose = () => {
        setOpen(false);
    };

    const alert = () => {
       
        if (isError) {
            return (
                <Alert
                    open={open}
                    handleClose={handleClose}
                    status={0}
                    message={"Ocorreu um erro"}
                />
            );
        }

        return <></>;
    };

    const handleSubmit = values => {
        let data = {
            start_date: values.start_date,
            end_date: values.end_date,
            school_identificationArray: values.school_identificationArray,
            year: parseInt(values.year),
        };
        requestSaveEventPreMutation.mutate(data)
    };

    const validationSchema = Yup.object().shape({
        start_date: Yup.date()
            .nullable()
            .required("Campo obrigatório!"),
        end_date: Yup.date()
            .when("start_date", (start_date, schema) => {
                if (start_date !== null) {
                    return schema.min(
                        start_date,
                        "A Data Final deve ser maior do que a data inicial"
                    );
                }
            })
            .nullable()
            .required("Campo obrigatório!"),
        year: Yup.number()
            .min(4, "Campo deve ter no mínimo 4 digitos. Ex: 2020")
            .required("Campo obrigatório!")
    });

    const initialValues = () => {
        let initialValues = {
            start_date: null,
            end_date: null,
            year: "",
            school_identificationArray: "",
        };
        return initialValues;
    };

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <ScheduleForm
                        initialValues={initialValues()}
                        validationSchema={validationSchema}
                        schools={data}
                        handleSubmit={handleSubmit}
                    // handleChangeActive={handleChangeActive}
                    // active={active}
                    // isEdit={isEdit}
                    // loadingIcon={props?.loading}
                    />
                    {alert()}
                </>
            )}
        </>
    );
};


export default ScheduleEdit;