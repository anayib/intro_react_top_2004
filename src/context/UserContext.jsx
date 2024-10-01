import { createContext, useContext } from "react";

export const UserContext = createContext();

export function UserContextProvider ({children}) {
    const value = {name: "Nayib", age: 37, isLogged: false}

    return (
        <UserContext.Provider value = {value}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
  return useContext(UserContext);
}