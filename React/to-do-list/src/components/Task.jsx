import { TiDelete } from "react-icons/ti";
import "../styles/Task.css";

function Task({ id, text, completed, completedTask, deleteTask }) {
  return (
    <div className={completed ? "container-task completed" : "container-task"}>
      <div className="task-text" onClick={() => completedTask(id)}>
        {text}
      </div>
      <div onClick={() => deleteTask(id)}>
        <TiDelete />
      </div>
    </div>
  );
}

export default Task;
