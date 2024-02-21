//React
import {useState, useEffect} from 'react';
//Styles
import '../scss/main.scss';
import '../scss/templates/_todo.scss';
//Components
import { TodoAccents } from './components/TodoAccents';
import { TodoDefault } from './components/TodoDefault';
//Custom hooks
import { useLocalStorage } from './hooks/useLocalStorage';
//App ui
import { AppUi } from './AppUi';

const App = ()=>{
  //States
  const [stateTodo, setStateTodo] = useLocalStorage('TODO_V1', TodoDefault);
  const [stateValue, setStateValue] = useState('');
  const [showResults, setShowResults] = useState(false);
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

  return (
    <AppUi 
      completedTodo={completedTodo}
      totalTodo={totalTodo}
      stateValue={stateValue}
      setStateValue={setStateValue}
      filterTodo={filterTodo}
      showResults={showResults}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App;
