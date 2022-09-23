import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/auth";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(auth.currentUser);

    useEffect(
        //Monitor User State
        onAuthStateChanged(auth, (user) => {
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