import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import { addTask } from '../redux/actions';

const TaskForm=()=>{
    const [task,setTask]=useState('');
    const dispatch= useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTask(task));
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Add Task' 
            value={task} 
            onChange={(e)=>setTask(e.target.value)}/>
            <button className='btn btn-primary' type='submit'>Add Task</button>
        </form>
    );
};


export default TaskForm;