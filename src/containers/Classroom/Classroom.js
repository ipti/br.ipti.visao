import React from "react";
import Alert from "../../components/Alert/CustomizedSnackbars";
import Loading from "../../components/Loading/CircularLoading";
import { Controller } from "../../controller/Stage";
import StageContextProvider from "./context/context";
import Classroom from "../../screens/Classroom/Classroom";

const Home = props => {

  const { isLoadingSchools, isError } = Controller()

  const alert = () => {
  
      if (isError) {
        return (
          <Alert
            open={props?.openAlert}
            //  handleClose={handleClose}
            status={0}
            message={"Ocorreu um erro!"}
          />
        );
    }
    return <></>;
  };

  return (
    <>
      {isLoadingSchools ? (
        <Loading />
      ) : (
        <StageContextProvider>
          <Classroom />
          {alert()}
        </ StageContextProvider>
      )}
    </ >
  );
};

export default Home;
