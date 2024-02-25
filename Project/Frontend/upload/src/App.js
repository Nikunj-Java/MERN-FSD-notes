import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewProduct from "./components/NewProduct";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path='/addproduct' element={<NewProduct />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
