import logo from './logo.svg';
import './App.css';
import GrandParent from './components/usecase1/GrandParent';
import Parent from './components/usecase1/Parent';
import Child from './components/usecase1/Child';
import MyGrandParent from './components/usecase2/MyGrandParent';
import ThemedComponent from './components/usecases3/ThemeComponent';
import { ThemeProvider } from './components/usecases3/ThemeContext';

function App() {
  return (
    <div>
      <h1>Diwali App</h1>
      <GrandParent/>
      <MyGrandParent/>
     <ThemeProvider>
        <ThemedComponent/>
     </ThemeProvider>
      
    </div>
    
  )
}

export default App;
