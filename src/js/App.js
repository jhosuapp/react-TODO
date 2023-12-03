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

const App = ()=>{
  //States
  const [stateTodo] = useState(TodoDefault);
  const [stateTodoSearch, setStateTodoSearch] = useState(stateTodo);
  const [stateValue, setStateValue] = useState('');
  //Filter completed and total todos
  const completedTodo = stateTodo.filter(todo=> !!todo.completed ).length;
  const totalTodo = stateTodo.length;
  //Filter todo for name when StatteTodo or stateValue change
  useEffect(() => {
    const newRegExp = RegExp(TodoAccents(stateValue.toLowerCase()));
    const filterTodo = stateTodo.filter(item => newRegExp.test(TodoAccents(item.text.toLowerCase())));
    setStateTodoSearch(filterTodo);
  }, [stateTodo, stateValue]);

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
          <TodoList>
            {stateTodoSearch.map((data, indice)=>(
              <TodoItem 
                key={indice}
                text={data.text}
                completed={data.completed}
              />
            ))}
          </TodoList>
        </section>
      </TodoCtn>
    </>
  );
}

export default App;
