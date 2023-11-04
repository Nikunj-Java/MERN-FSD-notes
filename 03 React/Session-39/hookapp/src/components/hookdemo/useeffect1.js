
import React,{useEffect} from 'react';

function UseEffectDemo(){

    useEffect(()=>{
        console.log("Running in Background");
    })

    return(
        <div>
            <h1>Welcome To Use Effect</h1>
        </div>
    )

}

export default UseEffectDemo;