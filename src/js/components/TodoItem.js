import iconCheck from '../../img/svg/icon-check.svg';
import iconTrash from '../../img/svg/icon-trash.svg';

const TodoItem = ({ text, completed, onComplete, onDelete })=>{
    return (
        <li className={completed ? 'completed' : ''}>
            <div className='block'>
                <div className='state-task' onClick={onComplete}></div>
                <picture className='check-task'>
                    <img src={iconCheck} alt="icon check"/>
                </picture>
                <p>{text}</p>
            </div>
            <picture 
                className='remove-task'                 
                onClick={onDelete}
            >
                <img src={iconTrash} alt="icon trash"/>
            </picture>
        </li>
    );
}

export { TodoItem };