import "./App.css";
import TaskList from "./components/TaskList.jsx";
import Header from "./images/header.png";

function App() {
  return (
    <div className="App">
      <div>
        <img className="header" src={Header} alt="" />
      </div>
      <div className="container">
        <h1>To Do List</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
