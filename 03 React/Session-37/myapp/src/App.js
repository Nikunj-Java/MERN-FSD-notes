import logo from './logo.svg';
import './App.css';
import Session37 from './components/session37';
import Session38 from './components/session38';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom";
import NavBar from './components/session38/navbar';
import Home from './components/session38/home';
import About from './components/session38/about';
import AsyncStateExample from './components/session38/asyncstate';
import AsyncApiExample from './components/session38/asyncstateapi';
import Counter from './components/session37/counter';
import Greeting from './components/session37/greeting';
import { States } from './components/session37/states';
import ToggleButton from './components/session37/togglebutton';

function App() {
  return (
   <BrowserRouter>
    <div className='container'>
      <h1>Online Shopping Portal</h1>
    </div>

    <NavBar/>

    <Routes>
      <Route path='/' element={<Navigate to="/home" replace/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/async' element={<AsyncStateExample/>}></Route>
      <Route path='/api' element={<AsyncApiExample/>}></Route>
      <Route path='/counter' element={<Counter/>}></Route>
      <Route path='/greeting' element={<Greeting/>}></Route>
      <Route path='/states' element={<States/>}></Route>
      <Route path='/toggle' element={<ToggleButton/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
