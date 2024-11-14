//assume this is the very big Grocery component 
//this is for understanging of the dynamic bundling

import { useContext } from "react";
import UserContext from "../utils/UserContext";

//lot of child Component
 const Grocery = ()=>{
   const data = useContext(UserContext);
    return <h1>{data.loggedInUser}</h1>
 }

 export default Grocery;