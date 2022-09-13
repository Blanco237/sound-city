import { createContext, useState } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({children}) => {

    const [loading, setLoading] = useState(false);

    const handleLoading = (state) => {
        setLoading(state);
    }

    return (
        <LoadingContext.Provider value={{loading, handleLoading}}>
            {children}
        </LoadingContext.Provider>
    )

}

export default LoadingContext;