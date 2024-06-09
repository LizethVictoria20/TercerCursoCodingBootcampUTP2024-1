import '../styles/FormTask.css';

function FormTask() {
    return (
        <form action="submit">
            <input className='input-task' type="text" placeholder="New task" />
            <button>Add</button>
        </form>
    )
}

export default FormTask;
