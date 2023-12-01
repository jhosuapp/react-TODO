//Styles
import '../scss/main.scss';
import '../scss/templates/_todo.scss';
//Components
import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
// import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoCreateTask } from './components/TodoCreateTask';
import { TodoCtn } from './components/TodoCtn';
import { TodoSearch } from './components/TodoSearch';

const App = ()=>{

  const ArrTodos = [
    { text: 'Aprender React', completed: false },
    { text: 'Aprender javascript', completed: true },
    { text: 'Aprender css', completed: false },
    { text: 'Aprender css', completed: false },
    { text: 'Aprender css', completed: false },
    { text: 'Aprender css', completed: false },
    { text: 'Aprender git', completed: false }
  ];

  return (
    <>
      <TodoCtn>
        {/* Create a task */}
        <section>
          <TodoCreateTask />
        </section>
        {/* List task, search task and feedback task */}
        <section>
          <TodoCounter completed='2' total='3'/>
          <TodoSearch />
          <TodoList>
            {ArrTodos.map((data, indice)=>(
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
