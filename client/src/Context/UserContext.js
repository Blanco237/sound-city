import { getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/auth";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(auth.currentUser);

    useEffect(
        //Monitor User State
        onAuthStateChanged(auth, (user) => {
            getRedirectResult(auth).then((result) => {
                if(result){
                    //Redirect actually succeeded and user has been set
                    //Do something
                }
            })
            if (user) {
                //User is logged in
                setUser(user);
                console.log(user);
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