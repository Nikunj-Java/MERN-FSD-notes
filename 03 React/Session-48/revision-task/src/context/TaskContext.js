import { createContext, useContext, useReducer } from "react";
import reducer from "../redux/reducers";

const TaskContext=createContext();

export const TaskProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,{tasks:[]});

    return(
        <TaskContext.Provider value={{state,dispatch}}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext=()=>{
    const context=useContext(TaskContext);
    if(!context){
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};