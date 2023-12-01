import iconCheck from '../../img/svg/icon-check.svg';
import iconTrash from '../../img/svg/icon-trash.svg';

const TodoItem = ({ text, completed })=>{
    return (
        <li className={completed ? 'completed' : ''}>
            <div className='block'>
                <div className='state-task'></div>
                <picture className='check-task'>
                    <img src={iconCheck} alt="icon check"/>
                </picture>
                <p>{text}</p>
            </div>
            <picture className='remove-task'>
                <img src={iconTrash} alt="icon trash"/>
            </picture>
        </li>
    );
}

export { TodoItem };