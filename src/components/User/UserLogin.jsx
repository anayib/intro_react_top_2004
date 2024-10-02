
import { useUserContext } from "../../context/UserContext";


export function UserLogin() {

  const {logIn} = useUserContext();

  return(
    <><button onClick={logIn}>login</button></>
  )
}
