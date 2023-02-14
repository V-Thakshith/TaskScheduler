import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import CreateTask from './components/CreateTask';
import UpdateTask from './components/UpdateTask';
import TaskContainer from './components/TaskContainer';
import NotFound from './components/NotFound'


function App() {
  return (
    <main>
      <Router>
      <Routes>
        <Route path='/' element={<TaskContainer />}></Route>
        <Route path='/CreateTask' element={<CreateTask/>}></Route>  
        <Route path='/UpdateTask' element={<UpdateTask/>}></Route>  
        <Route path='*' element={<NotFound/>}></Route>             
      </Routes>
      </Router>
    </main>
  );
}

export default App;
