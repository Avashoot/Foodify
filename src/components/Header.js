import Logo from "../../images/foodifyLogo.png";
import cart from "../../images/cart.png";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  // let buttonName= "Sign in"

  const [buttonName, setButtonName] = useState("Sign in");
  // console.log("Header Rendered");

  // useEffect(()=>{
  //   // console.log("UseEffect Called");
  // },[]);

  const stauts = useOnlineStatus();

  const data = useContext(UserContext);
  console.log(data);



  return (
    <div className="flex justify-between font-serif bg-orange-200 ">
      {/* //logo */}
      <div className="w-64 hover:cursor-pointer">
        <Link to={"/"} className="custom-link"><img className="logo" src={Logo} /></Link>
        
      </div>
      {/* //nav iteams */}
      <div className="">
        <div className="flex text-xl ">
          {/* <button><Link to={"/"}>Home</Link></button> */}
          <button className="p-4 hover:text-gray-400 hover:cursor-pointer">{stauts ? "🟢" : "🔴"}  Online  Status</button>
          <button className="p-4 hover:text-gray-400 hover:cursor-pointer"><Link to={"/about"} >About us</Link></button>
          <button className="p-4 hover:text-gray-400 hover:cursor-pointer"><Link to={"/contact"}>Contact us</Link></button>
          <button
            className="p-4 hover:text-gray-400 hover:cursor-pointer"
            onClick={() => {
              buttonName === "Sign in"
                ? setButtonName("Logout")
                : setButtonName("Sign in");
              // console.log(buttonName);
            }}
          >
            {buttonName}
          </button>
          
          <button className="p-4 hover:text-gray-400 hover:cursor-pointer"><Link to={"/grocery"}>Grocery</Link></button>
          <button className="p-4">{data.loggedInUser}</button>
          <button className="p-2 hover:cursor-pointer border border-orange-200 hover:border-black mx-4 my-2 rounded-md"><img className="w-16 " src={cart} /></button>
          
          
        </div>
      </div>
    </div>
  );
};

export default Header;
