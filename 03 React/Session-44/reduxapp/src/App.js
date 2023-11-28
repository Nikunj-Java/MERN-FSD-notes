import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { increment,decrement } from './actions';

const App=({count,increment,decrement})=>{
  return(
    <div className='App'>
      <h1>Redux Counter Application</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

const mapStateToProps=(state)=>{
  return{
    count:state,
  };
};


const mapDisapthToProps={
  increment,
  decrement,
};

export default connect(mapStateToProps,mapDisapthToProps)(App);


