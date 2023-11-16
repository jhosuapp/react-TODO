const TodoItem = (props)=>{
    return (
        <li>
            <span>V</span>
            <p>{props.name}</p>
            <span>X</span>
        </li>
    );
}

export default TodoItem;