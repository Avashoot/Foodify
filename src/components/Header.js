import Logo from "../../images/foodifyLogo.png";
import cart from "../../images/cart.png";
const Header = () => {
    return (
      <div className="top-nav">
        {/* //logo */}
        <div className="logo-container">
          <img className="logo" src={Logo} />
        </div>
        {/* //nav iteams */}
        <div className="nav-right">
          <div className="buttons">
            <button>About us</button>
            <button>Contact us</button>
            <button>Sign in</button>
            <img className="cart-img" src={cart} />
          </div>
        </div>
      </div>
    );
  };

  export default Header;