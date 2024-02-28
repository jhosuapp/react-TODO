//Hook context react
import { createContext, useState, useEffect } from "react";
//Components
import { TodoAccents } from '../components/TodoAccents';
//Custom hooks
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

const TodoProvider = ({ children })=>{
    //States
    const { item:stateTodo, saveItem:setStateTodo, error, loading } = useLocalStorage('TODO_V1', []);
    const [stateValue, setStateValue] = useState('');
    const [stateValueCreate, setStateValueCreate] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [modal, setModal] = useState(false);

    //Show message results when keypress and length > 0
    useEffect(() => {
        stateValue.length > 0 ? setShowResults(true) : setShowResults(false);
    }, [stateValue]);
    //Filter completed and total todos
    const completedTodo = stateTodo.filter(todo=> !!todo.completed ).length;
    const totalTodo = stateTodo.length;
    //Filter todo for name when StatteTodo or stateValue change
    const newRegExp = RegExp(TodoAccents(stateValue.toLowerCase()));
    const filterTodo = stateTodo.filter(item => newRegExp.test(TodoAccents(item.text.toLowerCase())));
    //Complete todos
    const completeTodo = (text)=>{
        const allTodoCompleted = [...stateTodo];
        const indexTodoComplete = allTodoCompleted.findIndex(todo => todo.text === text);
        allTodoCompleted[indexTodoComplete].completed = true;
        setStateTodo(allTodoCompleted);
    }
    //Delete todos
    const deleteTodo = (text)=>{
        const allTodoDelete = [...stateTodo];
        const indexTodoDelete = allTodoDelete.findIndex(todo => todo.text === text);
        allTodoDelete.splice(indexTodoDelete, 1);
        setStateTodo(allTodoDelete);
    }
    //Return provider
    return (
        <TodoContext.Provider value={{
            stateTodo,
            error,
            loading,
            completedTodo,
            totalTodo,
            stateValue,
            setStateValue,
            stateValueCreate, 
            setStateValueCreate,
            filterTodo,
            showResults,
            completeTodo,
            deleteTodo,
            modal, 
            setModal
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }