const collection = require("@firebase/firestore");
const getDocs = require("@firebase/firestore");

const firestore = require("../../config/firebase");

const fetchStudentData = async () => {
  const refStudent = collection(firestore, "student");
  try {
    const querySnapshotStudent = await getDocs(refStudent);
    const studentData = [];
    querySnapshotStudent.forEach((doc) => {
      studentData.push({ id: doc.id, object: doc.data() });
    });
    return studentData;
  } catch (err) {
    console.error("Erro ao buscar dados dos estudantes:", err);
    throw err;
  }
};

module.exports = { fetchStudentData };
