import "../styles/FormTask.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function FormTask(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
    };
    props.onSubmit(newTask);
  };

  return (
    <form action="submit" onSubmit={handleSend}>
      <input
        className="input-task"
        type="text"
        placeholder="New task"
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

export default FormTask;
