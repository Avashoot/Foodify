import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./images/foodifyLogo.png";
import cart from "./images/cart.png";

// components
// Header
// Body
// Footer

//Header
//logo
//NavItems

// Body
// Search
// RestaurantContainer
// Restaurant Card

// Footer
//copyright
//link
//address
//contact

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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img className="food-picture" src={require("/images/food1.jpg")} />
      <h3>Meghana Foods</h3>
      <div className="rating">
        <img className="star" src={require("/images/star.png")} />
        <a id="numberRating">4.4 🕝20-30 min</a>
      </div>
      <div id="cusions">Burgers, Biryani, American, Snacks, Fast Food Puna wale</div>
    </div>
  );
};

// body component
//restaurant Container
const Body = () => {
  return (
    //this is the body class
    // in this body class contains search engine and restarunt card
    <div className="body">
      <div className="search"> Search </div>
      <div className="res-container">

        <RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* //Body */}
      <Body />
      {/* //footer */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
