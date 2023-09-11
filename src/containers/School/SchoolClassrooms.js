import React from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading/CircularLoading";
import { useFetchRequestSchool } from "../../query/school";
import { SchoolClassroom } from "../../screens/School";

const Home = props => {
 
  // useEffect(() => {
  //   if (loadData && id) {
  //     props.dispatch({
  //       type: "FETCH_SCHOOL",
  //       data: { id: id }
  //     });
  //     setLoadData(false);
  //   }

  //   if (props?.openAlert) {
  //     setTimeout(function() {
  //       props.dispatch({ type: "CLOSE_ALERT_SCHOOL" });
  //     }, 6000);
  //   }
  // }, [loadData, props, id]);

  // const handleClose = () => {
  //   props.dispatch({ type: "CLOSE_ALERT_SCHOOL" });
  // };



  return (
    <>
      {false ? (
        <Loading />
      ) : (
        <>
          {/* <SchoolClassroom  /> */}
        </>
      )}
    </>
  );
};


export default Home;
