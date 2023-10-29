import { useState } from "react"

const Greeting =()=>{
    const[name, setName]=useState('');

    const handleInputChnage= (event)=>{
        setName(event.target.value);
    };
    return(
        <div>
            <lable> Enter Your Name: 
            <input type="text" value={name} onChange={handleInputChnage}/>
            </lable>

            <p>{name==='' ? 'Please enter your name':`Hello ${name}!`}</p>
        </div>
    )
};

export default Greeting;