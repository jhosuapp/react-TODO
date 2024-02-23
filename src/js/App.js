//Styles
import '../scss/main.scss';
import '../scss/templates/_todo.scss';
//App ui
import { AppUi } from './AppUi';
import { TodoProvider } from './context/TodoContext';
//Context

const App = ()=>{
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  )
}

export default App;
