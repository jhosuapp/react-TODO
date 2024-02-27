import imageTask from '../../img/jpg/task.jpg';
//Context
import { useContext } from "react";
import { TodoContext } from '../context/TodoContext';

const TodoCreateTask = ()=>{
    const { setModal } = useContext(TodoContext);
    
    return(
        <form>
            <div>
                <h2>Create a new task</h2>
                <div className="block-input">
                    <label>Task name</label>
                    <input type="search" placeholder="Write a task" id="search" name="search" />
                </div>
                <a onClick={ ()=>{ setModal(true) } }  className="btn">Create task</a>
            </div>
            <picture>
                <img src={imageTask} alt="background task" />
            </picture>
        </form>
    );
}

export { TodoCreateTask }