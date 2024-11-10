import { useState } from "react";

const User =(props)=>{
    const {name} = props;
    const [count, setCount] = useState(0);
    const [count2] = useState(1);
    
    return (
        <div className="user-card">
            <button onClick={()=>{
                a = count;
                setCount(++a);
            }}>count is : {count}</button>
            <h2>count 2 is : {count2}</h2>
            <h2>Name : {name}</h2>
            <h3>Location : Pune</h3>
            <h3>contact : linkedIn</h3>
        </div>
    );
}

export default User;