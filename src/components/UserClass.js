import React from "react";
import LinkedIn from "./LinkedIn";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this.props.name+" child Constructor UserClass");

    this.state = {
      userInfo: {
        name: "default",
        location: "default",
        avatar_url: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1731268566~exp=1731272166~hmac=795d4309e7e4d045cd7bc6625deaa1d6ff6a7e6cf773fdbaf443f7659ae5d8e7&w=1380"
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name +" child componentDidMount UserClass");
    const data = await fetch("https://api.github.com/users/avashoot");
    const jsonInfo = await data.json();
    console.log(jsonInfo);

    this.setState({
        userInfo : jsonInfo,
    })
  }

  componentDidUpdate(){
    console.log("User componentDidUpdate ")
  }

  componentWillUnmount(){
    clearInterval(this.data)
    console.log("User componentWillUnmount")
  }

  render() {
    const { location, name, avatar_url } = this.state.userInfo;

    // console.log(this.props.name+" child render UserClass")
    
    return (
      <div className="user-card">
        {/* <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1,
                    });
                }}>count is : {count}</button> */}
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>contact : <LinkedIn/> </h3>
        <a></a>
      </div>
    );
  }
}

export default UserClass;
