import { useContext, createContext } from "react";

const MyContext = createContext();

export function ContextProvider({children}) {
  const value = {user: "Nayib", isLogged: true, age: 37};
  return (
    <MyContext.Provider value={value}>
       {children}
    </MyContext.Provider>
  );
};


/*
1. Call the createContext() hook an assign it to a variable. Ej: MyContext to create a context Object
2. Declare a function that receive as param a children and Returns 
the Provider form the initialize context (MyContext.Provider) wrapping up the children.
pass as param. This will allow  every component passed as children to hce access to the tate 
declared in the wrapper. The children param represents the function that is going to
have access to  the context. 
3 To use the context calle the useContext React hook passing MyContext as a param.
This will return an object with the state declared in My Context
*/

export function User () {
    const { name, isLogged, age } = useContext(MyContext);
    console.log(name, isLogged, age)

    return (
        <>
        <p>Name: {name}</p>
        <p>Authorized ? : {isLogged === true ? "yes" : "no"}</p>
        <p>Age: {age}</p>
        </>
    );
};