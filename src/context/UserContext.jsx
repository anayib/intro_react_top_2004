import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function UserContextProvider ({children}) {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    // useEffect(() => {
    //     if(user !== null) {
    //         setLoading (false);
    //     }
    // }, [user]);

    useEffect(() => {
        // Simulate a delay for loading (e.g., fetching user data from localStorage or an API)
        const timeout = setTimeout(() => {
          setLoading(false); // Done loading after checking the user state
        }, 3000); // Simulated delay, adjust as needed
    
        return () => clearTimeout(timeout);
      }, []);

    const logIn = async () => {
        setTimeout(() => {
            setUser({
                id: 34,
                name: 'Nayib',
                age: 38 
            })
            navigate('/posts')
          }, 1000);
      };
    
      const logOut = () => {
        setUser(null)
        navigate('/login')
    };
      
      console.log('user: ', user, "\n loading: ", loading);


    return (
        <UserContext.Provider value = {{user, logIn, logOut, loading}}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {  
  return useContext(UserContext);
}