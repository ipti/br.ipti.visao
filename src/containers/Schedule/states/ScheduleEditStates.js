import { useParams } from "react-router";
import { useFetchRequestScheculeOne } from "../../../query/Schedule"

export const States = () => {
     const { id } = useParams();
    const { data, isLoading, isError } = useFetchRequestScheculeOne({ id: id })

    return {
        data, isError, isLoading
    }
}