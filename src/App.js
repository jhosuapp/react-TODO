import './App.css';
//Components
import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoBtnCreate } from './components/TodoBtnCreate';

const App = ()=>{
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem 
          name="hola"
        />
        <TodoItem 
          name="hola"
        />
        <TodoItem 
          name="hola"
        />
      </TodoList>

      <TodoBtnCreate />
    </div>
  );
}

export default App;
