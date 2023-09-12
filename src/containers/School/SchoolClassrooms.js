import React from "react";
import Loading from "../../components/Loading/CircularLoading";

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
