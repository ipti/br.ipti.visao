import React, { useEffect, useState } from "react";
import fetchClassroom from "../../controller/classroom/fetchClassroom";
import Classroom from "../../screens/Classroom/Classroom";

const Home = props => {

  const [classroom, setClassroom] = useState([])

  const [idSchool, setIdSchool] = useState()

  useEffect(() => {
    fetchClassroom()
      .then((testDataList) => {
        const classroomSchool = testDataList.filter(props => props.object.school_fk === idSchool)
        setClassroom(classroomSchool)
      })
      .catch((err) => {
        // Trate erros, se ocorrerem
        console.error(err)
      })
  }, [idSchool])

  return (
    <>
      <Classroom classroom={classroom} setIdSchool={setIdSchool} idSchool={idSchool} />
    </ >
  );
};

export default Home;
