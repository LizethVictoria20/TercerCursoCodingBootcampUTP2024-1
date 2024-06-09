import FormTask from "./FormTask.jsx";
import Task from "./Task.jsx";
import { useState } from "react";

function TaskList() {
  const [tasks, setTask] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();

      const updateTask = [task, ...tasks];
      setTask(updateTask);
    }
  };

  const deleteTask = (id) => {
    const updateTask = tasks.filter((task) => task.id !== id);
    console.log(updateTask);
    setTask(updateTask);
  };

  const completedTask = (id) => {
    const updateTask = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTask(updateTask);
  };

  return (
    <>
      <FormTask onSubmit={addTask} />
      <div className="container-list-task">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            completedTask={completedTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
