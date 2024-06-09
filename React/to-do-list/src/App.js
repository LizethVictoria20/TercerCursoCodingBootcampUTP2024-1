import './App.css';
import Task from './components/Task.jsx'


function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>To Do List</h1>
        <Task task='Primer tarea'/>
      </div>
    </div>
  );
}

export default App;
