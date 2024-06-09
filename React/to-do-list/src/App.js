import './App.css';
import Task from './components/Task.jsx'
import FormTask from './components/FormTask.jsx'


function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>To Do List</h1>
        <FormTask />
        <Task task='Ir a almorzar'/>
      </div>
    </div>
  );
}

export default App;
