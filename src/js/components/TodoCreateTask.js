import imageTask from '../../img/jpg/task.jpg';

const TodoCreateTask = ()=>{
    return(
        <form>
            <div>
                <h2>Create a new task</h2>
                <div className="block-input">
                    <label>Task name</label>
                    <input type="search" placeholder="Write a task" id="search" name="search" />
                </div>
                <button className="btn">Create task</button>
            </div>
            <picture>
                <img src={imageTask} alt="background task" />
            </picture>
        </form>
    );
}

export { TodoCreateTask }