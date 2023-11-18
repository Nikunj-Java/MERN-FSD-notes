
import React,{useState} from 'react';
import Parent from './Parent';
function GrandParent(){
    const[data,setData]=useState('Hello From Grand Parent- Happy Diwali');

    const changeData=(e)=>{
        setData(e.target.value);
    }
    return(
        <div> 
            <h1>GrandParent</h1>
            <Parent data={data} setData={changeData}/>

        </div>
    )
}

export default GrandParent;