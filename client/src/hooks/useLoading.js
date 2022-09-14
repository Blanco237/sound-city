import { useContext } from "react";
import LoadingContext from "../Context/LoadingContext";


const useLoading = () => {
    const loadData = useContext(LoadingContext);

    return loadData;
}

export default useLoading;