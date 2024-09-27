import Logo from "../../images/foodifyLogo.png";
import cart from "../../images/cart.png";
import { useState } from "react";
const Header = () => {
  // let buttonName= "Sign in"

  const [buttonName, setButtonName] = useState("Sign in");

  return (
    <div className="top-nav">
      {/* //logo */}
      <div className="logo-container">
        <img className="logo" src={Logo} />
      </div>
      {/* //nav iteams */}
      <div className="nav-right">
        <div className="buttons">
          <button>Home</button>
          <button>About us</button>
          <button>Contact us</button>
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
