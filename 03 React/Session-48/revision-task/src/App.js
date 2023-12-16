import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { TaskProvider } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
     <Provider store={store}>
      <TaskProvider>
        <div className='container mt-5'>
          <h1 className='mb-4'>Task Management App</h1>
          <TaskForm/>
          <TaskList/>
        </div>
      </TaskProvider>
     </Provider>
  );
}

export default App;
