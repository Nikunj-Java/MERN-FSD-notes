import logo from './logo.svg';
import './App.css';
import GrandParent from './components/usecase1/GrandParent';
import Parent from './components/usecase1/Parent';
import Child from './components/usecase1/Child';
import MyGrandParent from './components/usecase2/MyGrandParent';
import ThemedComponent from './components/usecases3/ThemeComponent';
import { ThemeProvider } from './components/usecases3/ThemeContext';
import { AuthProvide } from './components/usecase4/AuthContext';
import UserInfo from './components/usecase4/Userinfo';
import Counter from './components/reducercase1/Counter';

function App() {
  return (
    <div>
      <h1>Diwali App</h1>
      {/* <AuthProvide>
        <h1>Authentication App</h1>
        <UserInfo/>
      </AuthProvide> */}
      {/* <GrandParent/>
      <MyGrandParent/>
     <ThemeProvider>
        <ThemedComponent/>
     </ThemeProvider> */}

     <Counter/>
      
    </div>
    
  )
}

export default App;
