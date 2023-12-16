
import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from "./actions";

const initialState={
    tasks:[],
};

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TASK:
            return{
                ...state,
                tasks:[...state.tasks,action.payload],
            };
        case REMOVE_TASK:
            return{
                ...state,
                tasks:state.tasks.filter((_,index)=>index !== action.payload),
            };
        case TOGGLE_TASK:
            return{
                ...state,
                tasks:state.tasks.map((task,index)=>
                index === action.payload ? toggleTaskStatus(task):task),
            };
        default:
            return state;
    }
};

const toggleTaskStatus=(task)=>{
    return task.includes('(completed)') ? task.replace('(completed)',''): `${task} (completed)`;
}

export default reducer;