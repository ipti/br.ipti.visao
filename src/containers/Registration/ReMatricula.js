import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/CircularLoading";
import { Controller } from "../../controller/registration";
import { useFetchRequestStudent } from "../../query/registration";
import Home from "../../screens/Registration/ReMatricula";

const ReMatricula = props => {
  const { requestSaveRegistrationMutation } = Controller();

  const { id } = useParams()
  const { data } = useFetchRequestStudent({ id: id });

  const onSubmit = (value) => {

    if (value?.birthday) {
      value.birthday = value.birthday
        .split("/")
        .reverse()
        .join("-");
    }

    requestSaveRegistrationMutation.mutate(value)
  };


  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <>
          <Home
            registration={data}
            handleSubmit={onSubmit}
            loadingIcon={props.loading}
          />
        </>
      )}
    </>
  );
};


export default ReMatricula;
