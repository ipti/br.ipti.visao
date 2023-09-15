import React, { useState } from "react";
import Loading from "../../components/Loading/CircularLoading";
import { School } from "../../screens/School";
import { useEffect } from "react";
import fetchSchool from "../../controller/School/fetchSchools";

const Home = props => {

  const [school, setSchool] = useState([])

  useEffect(() => {
    fetchSchool()
    .then((testDataList) => {
        setSchool(testDataList)
    })
    .catch((err) => {
        // Trate erros, se ocorrerem
        console.error(err)
    })
  }, [])


  return (
    <>
      {!school ? (
        <Loading />
      ) : (
        <>
          <School
            data={school}
          />
        </>
      )}
    </>
  );
};

export default Home;