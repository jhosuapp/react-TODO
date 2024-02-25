import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoResults = ()=>{
    const { showResults, filterTodo } = useContext(TodoContext);
    console.log();
    return (
        <p className={`todo-results ${!showResults && 'hide'}`}>Se han encontrado <b>{filterTodo.length}</b> resultados</p>
    );
}

export { TodoResults }