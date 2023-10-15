import logo from './logo.svg';
import './App.css';
import Session1 from './components/session1';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Session2 from './components/session2';

function App() {
  return (
    // <div>
    //   <h1>My First React App</h1>
    // </div>

    <div>
      <Session1 message="Hello Child"/>
      <Session2/>
    </div>
  );
}

export default App;
