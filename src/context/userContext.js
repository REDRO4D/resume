import React, { createContext, useState, useContext } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = props => {
    const initialState = {
        uid: 'null',
        name: 'null',
        email: 'null',
        register: 0
    };
    const [userData, setUserData] = useState(initialState);
    const [userHasLogged, setUserHasLogged] = useState(false)

    const defaultContext = {
        userData,
        setUserData,
        userHasLogged,
        setUserHasLogged
    };


    return (
        <UserDataContext.Provider value={defaultContext}>
            {props.children}
        </UserDataContext.Provider>
    );
}

export const UseUserDataContext = () => {
    return useContext(UserDataContext);
}

// export const UserActive = () => {
//     try {
//         if (userLogged.name != 'null'){
//             return true;
//         }
//     } catch (error) {
//         console.log(error);
//     }
//     return false;
// }

export default UserDataContext;