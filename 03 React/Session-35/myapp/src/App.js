import logo from './logo.svg';
import './App.css';
import Session1 from './components/session1';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

function App() {
  return (
    // <div>
    //   <h1>My First React App</h1>
    // </div>

    <div>
      <Session1 message="Hello Child"/>
    </div>
  );
}

export default App;
