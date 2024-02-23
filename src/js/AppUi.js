//Components
import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoCreateTask } from './components/TodoCreateTask';
import { TodoCtn } from './components/TodoCtn';
import { TodoSearch } from './components/TodoSearch';
import { TodoResults } from './components/TodoResults'; 
import { TodoLoader } from './components/TodoLoader';

const AppUi = ({
    error,
    loading,
    completedTodo,
    totalTodo,
    stateValue,
    setStateValue,
    filterTodo,
    showResults,
    completeTodo,
    deleteTodo,
})=>{
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
              { loading && <TodoLoader /> }
              { error && <p>Ha ocurrido un error inesperado</p> }
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

export { AppUi }