import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask,toggleTask } from "../redux/actions";




const TaskList =()=>{
    const tasks=useSelector((state)=>state.tasks);
    const dispatch=useDispatch();

    const handleRemove=(index)=>{
        dispatch(removeTask(index));
    }

    const handleToggle=(index)=>{
        dispatch(toggleTask(index));
    }

    return(
        <ul className="list-group">
        {tasks.map((task,index)=>(
            <li key={index} className="list-group-item d-flex justify-content-between alighn-items-center">
                {task}

                <div>
                    <button className="btn btn-danger mr-2" onClick={()=>handleRemove(index)}>
                        Remove
                    </button>
                    <button className="btn btn-warning mr-2" onClick={()=>handleToggle(index)}>
                        Completed
                    </button>
                </div>
                
            </li>
        ))}
        </ul>
    );
};

export default TaskList;