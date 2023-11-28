
import { ADD_TODO,REMOVE_TODO } from "./action";

const  todoReducer=(state=[],action)=>{
    switch(action.type){
        case ADD_TODO:
             return[...state,{id: Date.now(),text: action.payload}];
        case REMOVE_TODO:
            return state.filter((todo)=>todo.id !==action.payload);
        default:
            return state;
    }
};

export default todoReducer;