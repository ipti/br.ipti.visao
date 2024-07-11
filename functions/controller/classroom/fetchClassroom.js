const collection = require("@firebase/firestore");
const getDocs = require("@firebase/firestore");

const firestore = require("../../config/firebase");

const fetchClassroomData = async () => {
  const refClassroom = collection(firestore, "classroom");
  try {
    const querySnapshotClassroom = await getDocs(refClassroom);
    const classroomData = [];
    querySnapshotClassroom.forEach((doc) => {
      classroomData.push({ id: doc.id, object: doc.data() });
    });
    return classroomData;
  } catch (err) {
    console.error("Erro ao buscar dados da sala de aula:", err);
    throw err;
  }
};

module.exports = { fetchClassroomData };
