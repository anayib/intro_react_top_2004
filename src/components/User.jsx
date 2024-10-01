import { useUserContext } from "../context/UserContext";

export function User() {
    const { name, age, isLogged } = useUserContext();

    return(
        <>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Authorized: {isLogged === true ? "Yes" : "No"}</p>
        </>
    )
}
