import { useReducer } from "react";

function reducer(state,action){
    if(action.type === 'incremented_age'){
        return{ 
            age: state.age + 1
        };
    } 
    throw Error ('Unknown Action.');
}


function Agecounter(){

    const [state,dispatch]=useReducer(reducer, { age: 50 });

    return (
        <div>
            <button onClick={()=>{dispatch({type:'incremented_age'})}}> Increment Age</button>

            <p> Hello! you are {state.age}. year Old.</p>
        </div>
    )

}

export default Agecounter;