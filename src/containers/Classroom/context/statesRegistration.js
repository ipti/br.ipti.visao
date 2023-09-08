import { useParams } from "react-router";
import { useFetchRequestAnwser, useFetchRequestRegistration } from "../../../query/stage";

export const StageRegistrationState = () => {

    const { idRegistration } = useParams()

    const {data: registration} = useFetchRequestRegistration({id: idRegistration});

    const {data: answer} = useFetchRequestAnwser({id: idRegistration});


    return {
        registration,
        answer
    }
}