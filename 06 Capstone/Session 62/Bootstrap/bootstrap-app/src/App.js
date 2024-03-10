import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Header from './components/Header';
import Slider from './components/Slider';
import Featured from './components/Featured';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container-f">
      <h1 className="bg-warning text-center">React App</h1>
      <Header/>
      <Slider/>
      <Featured/>
      <Footer/>
    </div>
  );
}

export default App;
