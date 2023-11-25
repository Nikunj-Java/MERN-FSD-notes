import { useReducer } from "react"


const UPDATE_FILED="UPDATE_FILED";
const SUBMIT_FORM="SUBMIT_FORM";

const formReducer=(state,action)=>{
    switch(action.type){
        case UPDATE_FILED:
            return{...state,[action.field]:action.value};
        case SUBMIT_FORM:
            console.log('Form Submitted ',state);
            return state;
        default:
            return state;

    }
}

function SimpleForm(){
    //initial state

    const initialFormState={firstName:'',lastName:'',email:''}
    //useReducerHool

    const [formState,dispatch]=useReducer(formReducer,initialFormState);

    //handle for updating the fields

    const handleFieldChange=(field,value)=>{
        dispatch(
            {
                type: UPDATE_FILED,field,value
            }
        )
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({type:SUBMIT_FORM})
    }

    return(
        <div>
            <h3>Simple Form Reducer Example</h3>

            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" value={formState.firstName} 
                onChange={(e)=>handleFieldChange('firstName',e.target.value)}></input>
                <br/>

                <label>Last Name:</label>
                <input type="text" value={formState.lastName} 
                onChange={(e)=>handleFieldChange('lastName',e.target.value)}></input>
                <br/>

                 


                <label>Email:</label>
                <input type="text" value={formState.email} 
                onChange={(e)=>handleFieldChange('email',e.target.value)}></input>
                <br/>


                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm;