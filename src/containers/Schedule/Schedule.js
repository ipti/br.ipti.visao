import React from "react";
import Alert from "../../components/Alert/CustomizedSnackbars";
import Loading from "../../components/Loading/CircularLoading";
import { Schedule } from "../../screens/Schedule";
import { States } from "./states/ScheduleStates";

const Home = props => {
   
  // const [loadDataPaginate, setLoadDataPaginate] = useState(false);
  // const [page, setPage] = useState(1);

  // const handlePage = (e, pageInfo) => {
  //   setPage(pageInfo.activePage);
  //   setLoadDataPaginate(true);
  // };

  const { schedules, isLoadingSchedules, isError, deleteSchedule } = States()

  
  const alert = () => {
   
      if (isError) {
        return (
          <Alert
            open={props?.openAlert}
          //  handleClose={handleClose}
            status={0}
            message={"Ocorreu um erro"}
          />
        );
      }
    
    return <></>;
  };

  return (
    <>
      {isLoadingSchedules ? (
        <Loading />
      ) : (
        <>
          <Schedule
            // pagination={props.schedule.pagination}
            // activePage={page}
             data={schedules}
             deleteSchedule={deleteSchedule}
            // handlePage={handlePage}
          />
          {alert()}
        </>
      )}
    </>
  );
};

export default Home;
