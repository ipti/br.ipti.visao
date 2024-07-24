import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../../config/firebase";

const fetchReport = async () => {
  const ref = collection(firestore, "school");
  const refClassroom = collection(firestore, "classroom");
  const refStudent = collection(firestore, "student");

  try {
    const querySnapshot = await getDocs(ref);
    const querySnapshotClassroom = await getDocs(refClassroom);
    const querySnapshotStudent = await getDocs(refStudent);

    const testDataList = [];

    querySnapshot.forEach((doc) => {
      const data = {
        id: doc.id,
        object: doc.data(),
      };

      testDataList.push(data);
    });

    const report = [];
    testDataList.forEach((school) => {
      var countClassroom = 0;
      var countRegister = 0;
      var countRegisterTriados = 0;
      querySnapshotClassroom.forEach((classroom) => {
        if (school.id === classroom.data().school_fk) {
          countClassroom++;
          querySnapshotStudent.forEach((registration) => {
            if (registration.data().classroom_fk === classroom.id) {
              countRegister++;
              if (
                registration.data().acuidadeTriagemDireito &&
                registration.data().acuidadeTriagemEsquerdo
              ) {
                countRegisterTriados++;
              }
            }
          });
        }
      });

      report.push({
        school: school.object.name,
        countClassroom: countClassroom,
        countRegister: countRegister,
        countRegisterTriados: countRegisterTriados,
      });
    });

    return report;
  } catch (err) {
    console.error("Erro ao buscar dados:", err);
    throw err;
  }
};

export default fetchReport;
