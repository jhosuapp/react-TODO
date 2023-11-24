const TodoItem = ({ text, completed })=>{
    return (
        <li>
            <span>V</span>
            <p>{text}</p>
            <span></span>
        </li>
    );
}

export { TodoItem };