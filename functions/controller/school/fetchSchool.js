const collection = require("@firebase/firestore");
const getDocs = require("@firebase/firestore");

const firestore = require("../../config/firebase");

const fetchSchoolData = async () => {
  const ref = collection(firestore, "school");
  try {
    const querySnapshot = await getDocs(ref);
    const schoolData = [];
    querySnapshot.forEach((doc) => {
      schoolData.push({ id: doc.id, object: doc.data() });
    });
    return schoolData;
  } catch (err) {
    console.error("Erro ao buscar dados da escola:", err);
    throw err;
  }
};

module.exports = { fetchSchoolData };