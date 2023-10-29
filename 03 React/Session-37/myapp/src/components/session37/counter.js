import  React,{useState} from 'react';

const Counter = () => {
    const [count, setCount]=useState(0);

    const increment = ()=>{
        setCount(count +1);
    };

    const decrement = ()=>{
        setCount(count -1);
    };

    return(

        <div className='container'>
            <p> Count: {count}</p>
            <button className='btn btn-primary' onClick={increment}>Increment</button>
            <button className='btn btn-info' onClick={decrement}>Decrement</button>
        </div>
    );
    
};

export default Counter;

