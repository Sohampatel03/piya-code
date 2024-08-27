import { useEffect, useState } from "react";

const User =({name})=>{
    const [count, setCount]=useState(0);
    const [count2]=useState(1);
useEffect(() => {
//api calls
}, [])

       return (
        <div className="User-card">
            <h2>Name-{name}</h2>
            <h3>Location- Indore</h3>
            <h4>contact- @piyu43</h4>
        </div>
    );
};
export default User;
