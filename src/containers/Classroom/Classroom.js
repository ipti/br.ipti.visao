import React from "react";
import Classroom from "../../screens/Classroom/Classroom";
import { useState } from "react";
import { useEffect } from "react";
import fetchClassroom from "../../controller/classroom/fetchClassroom";

const Home = props => {

  const [classroom, setClassroom] = useState([])

  useEffect(() => {
    fetchClassroom()
    .then((testDataList) => {
      setClassroom(testDataList)
        console.log(testDataList)
    })
    .catch((err) => {
        // Trate erros, se ocorrerem
        console.error(err)
    })
  }, [])

  return (
    <>
          <Classroom classroom={classroom} />
    </ >
  );
};

export default Home;
