//React
import React from 'react';
//Styles
import './App.css';
//Components
import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoBtnCreate } from './components/TodoBtnCreate';

const App = ()=>{

  const ArrTodos = [
    { text: 'Aprender React', completed: false },
    { text: 'Aprender javascript', completed: true },
    { text: 'Aprender css', completed: false },
    { text: 'Aprender git', completed: false }
  ];

  return (
    <React.Fragment>

      <TodoCounter completed="2" total="3"/>
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

      <TodoBtnCreate />
    </React.Fragment>
  );
}

export default App;
