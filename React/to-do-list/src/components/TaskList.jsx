import FormTask from './FormTask.jsx';
import Task from './Task.jsx';
import { useState } from "react";

function TaskList() {
  const [tasks, setTask] = useState([])

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();

      const updateTask = [task, ...tasks];
      setTask(updateTask);
    }
  }

  const deleteTask = () => {

  }

  return (
    <>
        <FormTask onSubmit = {addTask}/>
        <div className='container-list-task'>
          {
            tasks.map((task) => 
              <Task 
              key={task.id} 
              id={task.id} 
              text={task.text} 
              completed={task.completed}
              /> )
          }
        </div>
    </>
  )
}

export default TaskList