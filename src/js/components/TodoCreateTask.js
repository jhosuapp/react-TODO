import imageTask from '../../img/jpg/task.jpg';
//Context
import { useContext } from "react";
import { TodoContext } from '../context/TodoContext';

const TodoCreateTask = ()=>{
    const { setModal, stateValueCreate, setStateValueCreate } = useContext(TodoContext);
    return(
        <form>
            <div>
                <h2>Create a new task</h2>
                <div className="block-input">
                    <label>Task name</label>
                    <input type="search" value={stateValueCreate} onChange={(e)=>{ setStateValueCreate(e.target.value); }} placeholder="Write a task" id="search" name="search" />
                    <p className={(stateValueCreate.length > 3 ? 'error' : 'error active')}>**The task must contain at least 3 characters**</p>
                </div>
                <button type="button" onClick={ ()=>{ setModal(true) } }  className={(stateValueCreate.length > 3 ? 'btn' : 'btn disabled')}>Create task</button>
            </div>
            <picture>
                <img src={imageTask} alt="background task" />
            </picture>
        </form>
    );
}

export { TodoCreateTask }