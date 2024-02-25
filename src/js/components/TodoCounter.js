import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoCounter = ()=>{
    const { completedTodo, totalTodo } = useContext(TodoContext);
    return (
        <h1>Completed {completedTodo} to {totalTodo}</h1>
    );
}

export { TodoCounter }