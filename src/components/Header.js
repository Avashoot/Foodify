import Logo from "../../images/foodifyLogo.png";
import cart from "../../images/cart.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  // let buttonName= "Sign in"

  const [buttonName, setButtonName] = useState("Sign in");
  // console.log("Header Rendered");

  useEffect(()=>{
    // console.log("UseEffect Called");
  },[]);

  return (
    <div className="top-nav">
      {/* //logo */}
      <div className="logo-container">
        <Link to={"/"} className="custom-link"><img className="logo" src={Logo} /></Link>
        
      </div>
      {/* //nav iteams */}
      <div className="nav-right">
        <div className="buttons">
          {/* <button><Link to={"/"}>Home</Link></button> */}
          <button><Link to={"/about"} className="custom-link">About us</Link></button>
          <button><Link to={"/contact"} className="custom-link">Contact us</Link></button>
          <button
            className="login-logout"
            onClick={() => {
              buttonName === "Sign in"
                ? setButtonName("Logout")
                : setButtonName("Sign in");
              // console.log(buttonName);
            }}
          >
            {buttonName}
          </button>
          <img className="cart-img" src={cart} />
        </div>
      </div>
    </div>
  );
};

export default Header;
