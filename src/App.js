import logo from './platzi.webp';
import './App.css';
//Components
import TodoItem from './components/TodoItem';

const App = ()=>{
  return (
    <div className="App">
      <TodoItem 
        name="hola"
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a className="App-link" href="https://platzi.com/reactjs" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
