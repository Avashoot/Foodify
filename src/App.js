import React, { lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
// import AboutUs from "./components/AboutUs.js";
import About from "./components/AboutUs.js";
import ContactUs from "./components/ContactUs.js"
import ErrorComponent from "./components/ErrorComponent.js";
import RestaurentMenu from "./components/RestaurentMenu.js";
import { createBrowserRouter, RouterProvider  , Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext.js";

// import Grocery from "./components/Grocery.js"


const Grocery = lazy(()=>import("./components/Grocery.js"));
// body component
//restaurant Container

const AppLayout = () => {
  const [userName, setUserName] = useState("default User");

  useEffect(()=>{
    //assume authentication logic and API call get the fetched data
    const data = {
      name : "Avadhoot Sutar",
    };
    setUserName(data.name);
  }, [])
  return (
    //Overriding the all the values in the app by providing the data to the app through updating the userContext default value using the UserContext.provider
    //Default value
    <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
      {/* Avadhoot Sutar */}
      <div className="">
        {/* Header */}
        {/* just for understanding of scope of the userContext Provider */}
        {/* <UserContext.Provider value={{loggedInUser : "Monkey D Luffy"}}> */}
          {/* Monkey D Luffy */}
          <Header />
        {/* </UserContext.Provider> */}
        
        <Outlet />
      </div>
    </UserContext.Provider>
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
        element : <About/>,
      },
      {
        path : "/contact",
        element : <ContactUs/>,
      },
      {
        path : "/grocery",
        element :<Suspense fallback={<h1>Somthing</h1>}> <Grocery/> </Suspense>,
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
