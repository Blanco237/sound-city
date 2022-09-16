import { getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import AxiosInstance from "../api/api";
import { auth } from "../firebase/auth";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(auth.currentUser);

    useEffect(
        //Monitor User State
        onAuthStateChanged(auth, (user) => {
            getRedirectResult(auth).then(async (result) => {
                console.log("Redirect happened")
                if (result) {
                    console.log(result.user);
                    // const res = await AxiosInstance.get('/users', result.user);
                    // if(res.error){
                    //     await AxiosInstance.post('/users',result.user);
                    // }
                }
            })
            if (user) {
                //User is logged in
                setUser(user);
            }
            else {
                setUser(null);
            }
        }), []
    )


    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContext;