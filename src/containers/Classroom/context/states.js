import { Controller } from "../../../controller/Stage";

export const StageState = () => {

    const { school, isLoadingSchools } = Controller();

    const classrooms = school ? school.classroom : null;

    return {
        classrooms, isLoadingSchools
    }
}