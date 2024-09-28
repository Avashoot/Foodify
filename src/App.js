import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import AboutUs from "./components/AboutUs.js";
import ContactUs from "./components/ContactUs.js"
import ErrorComponent from "./components/ErrorComponent.js";
import RestaurentMenu from "./components/RestaurentMenu.js";
import { createBrowserRouter, RouterProvider  , Outlet} from "react-router-dom";


// body component
//restaurant Container

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter= createBrowserRouter([
  {
    path : "/",
    element :  <AppLayout/>,
    children : [
      {
        path : "/",
        element : <Body/>
      },
      {
        path : "/about",
        element : <AboutUs/>,
      },
      {
        path : "/contact",
        element : <ContactUs/>,
      },
      {
        path : "/restaurant/:resId",
        element : <RestaurentMenu />,
      }
    ],
    errorElement : <ErrorComponent />
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));

//Insteed of colling Applayout Directly we provide them router configuration
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter}/>)
