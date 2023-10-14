import React, {useState} from "react";

export function UserDetails({msg}){

    const [name,setName]=useState("Nikunj Soni");

    const change=()=>{
        setName("MERN FSD TRAINER")
    }
    

    return (<div className="container">
         <div className="text-success">
            <h1>UserDetails Component</h1>
         </div>
         <h3>Welcome {name}</h3>

         <div className="conatiner">
            <button className="btn btn-primary" onClick={change}> Change Name</button>
         </div>
        
         <div className="conatiner">
            <label>Data From Parent: {msg}</label>
        
        </div>
        
    </div>)
}