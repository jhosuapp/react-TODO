//React
import {useState, useEffect} from 'react';
//Styles
import '../scss/main.scss';
import '../scss/templates/_todo.scss';
//Components
import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoCreateTask } from './components/TodoCreateTask';
import { TodoCtn } from './components/TodoCtn';
import { TodoSearch } from './components/TodoSearch';
import { TodoDefault } from './components/TodoDefault';
import { TodoAccents } from './components/TodoAccents';
import { TodoResults } from './components/TodoResults'; 

const App = ()=>{
  //States
  const [stateTodo, setStateTodo] = useState(()=>{
    if(!localStorage.getItem('TODO_V1')) {
        localStorage.setItem('TODO_V1', JSON.stringify(TodoDefault));
        return TodoDefault;
      }else{
        return JSON.parse(localStorage.getItem('TODO_V1'));
      }
  });
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
    localStorage.setItem('TODO_V1', JSON.stringify(allTodoCompleted));
    setStateTodo(allTodoCompleted);
  }
  //Delete todos
  const deleteTodo = (text)=>{
    const allTodoDelete = [...stateTodo];
    const indexTodoDelete = allTodoDelete.findIndex(todo => todo.text === text);
    allTodoDelete.splice(indexTodoDelete, 1);
    localStorage.setItem('TODO_V1', JSON.stringify(allTodoDelete));
    setStateTodo(allTodoDelete);
  }

  return (
    <>
      <TodoCtn>
        {/* Create a task */}
        <section>
          <TodoCreateTask />
        </section>
        {/* List task, search task and feedback task */}
        <section>
          <TodoCounter completed={completedTodo} total={totalTodo} />
          <TodoSearch stateValue={stateValue} setStateValue={setStateValue}/>
          <TodoResults results={filterTodo.length} cls={!showResults && 'hide'}/>
          <TodoList>
            {filterTodo.map((data)=>(
              <TodoItem 
                key={data.text}
                text={data.text}
                completed={data.completed}
                onComplete={()=>{completeTodo(data.text)}}
                onDelete={()=>{deleteTodo(data.text)}}
              />
            ))}
          </TodoList>
        </section>
      </TodoCtn>
    </>
  );
}

export default App;
