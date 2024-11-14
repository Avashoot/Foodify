import { createContext } from "react"

//contains the user information
 const UserContext = createContext(
    {
        loggedInUser : "Default User"
    }
 );

 export default UserContext;