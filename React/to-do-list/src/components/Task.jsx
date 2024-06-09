import { TiDelete } from "react-icons/ti";
import '../styles/Task.css'

function Task({ task, completed }) {
  return (
    <div className={completed ? 'container-task completed' : 'container-task'}>
      <div className='task-text'>
        {task}
      </div>
      <div>
        <TiDelete />
      </div>
    </div>
  )
}

export default Task;