import { TodoIcon } from './TodoIcon';

const TodoItem = ({ text, completed, onComplete, onDelete })=>{
    return (
        <li className={completed ? 'completed' : ''}>
            <div className='block'>
                <div className='state-task' onClick={onComplete}></div>
                <TodoIcon type="IconCheck" cls="check-task" color="#801fdb"/>
                <p>{text}</p>
            </div>
            <TodoIcon type="IconDelete" cls="remove-task" onClick={onDelete} color="#ff0000"/>
        </li>
    );
}

export { TodoItem };