import './App.css';
import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { addTodo,removeTodo } from './action';

const App=()=>{
  const [text,setText]=useState('');
  const dispatch=useDispatch();
  const todos=useSelector((state)=>state);

  const handleAddTodo=()=>{
    if(text.trim() !== ''){
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleRemoveTodo=(id)=>{
    dispatch(removeTodo(id));
  };

  return(
    <div className='App'>
      <h1>TODO LIST APP</h1>
      <div>
        <input type='text' placeholder='Enter todo '
        value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleAddTodo}>ADD TODO</button>
      </div>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}> {todo.text}{''}
          <button onClick={()=>handleRemoveTodo(todo.id)}>Remove Todo</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
