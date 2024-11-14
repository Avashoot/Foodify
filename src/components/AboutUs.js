import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent Constructor About");
    
  }

  componentDidMount() {
    // console.log("parent componentDidMount UserClass");
    
    
  }

  render() {
    // console.log("parent render About");
    return (
      <>
        <div>
          <h1>About Us</h1>
          {/* <User name = {"Avadhoot Sutar (function)"}/> */}
          {/* User context component which we can use any where in the app */}
          <div className="font-bold">
            loggedInUser: 
            <UserContext.Consumer >
              {
                (data)=>{
                  return data.loggedInUser;
                }
              }
            </UserContext.Consumer>
          </div>
          <UserClass />

          {/* Understanding Purpose */}
          {/* <UserClass name={"Second"} location={"SanD"} />
          <UserClass name={"Third"} location={"SanD"} /> */}
        </div>
      </>
    );
  }
}

export default About;
//Class component Life cycle
// parent Constructor About
// parent render About

//     First child Constructor UserClass
//     First child render UserClass

//     Second child Constructor UserClass
//     Second child render UserClass

//     Third child Constructor UserClass
//     Third child render UserClass

//     DOM updation in BATCHES

//     First child componentDidMount UserClass
//     Second child componentDidMount UserClass
//     Third child componentDidMount UserClass

// parent componentDidMount UserClass




//function Component
// const AboutUs = () => {
//   return (
//     <>
//       <div>
//         <h1>About Us</h1>
//         {/* <User name = {"Avadhoot Sutar (function)"}/> */}

//         <UserClass name={"Avadhoot Sutar (class)"} location={"Vita"} />
//       </div>
//     </>
//   );
// };

// export default AboutUs;
