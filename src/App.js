import React, { useState } from "react";
import "./App.css";
const App=()=>{
  const [user,Setuser]=useState([]);
  const getusers=async()=>{
    const response=await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse=await response.json();
    Setuser(jsonresponse.data);
  };
return (
   <>
    <div className="start">
      <h1>Lets Grow More</h1>
      <button onClick={getusers}>GET USERS</button>
    </div>
    <div className="grid">
    {user.map(({id, email, first_name, last_name, avatar})=>{
      return(
       <div className="card">
        <div className="info">
          <img src={avatar}></img>
          <p className="name">{first_name}{last_name}</p>
          <p>Email-id:{email}</p>
        </div>
       </div>
      )
    }

    )}
    </div>
   </>
  )
}
export default App;