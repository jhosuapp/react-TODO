//Components
import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoCreateTask } from './components/TodoCreateTask';
import { TodoCtn } from './components/TodoCtn';
import { TodoSearch } from './components/TodoSearch';
import { TodoResults } from './components/TodoResults'; 
import { TodoLoader } from './components/TodoLoader';
import { TodoContext } from './context/TodoContext';
import { Modal } from './components/Modal';
import { ModalContent } from './components/ModalContent';
//React context
import { useContext } from 'react';

const AppUi = ()=>{
    //Get all global variables
    const { error, loading, filterTodo, completeTodo, deleteTodo, stateTodo, modal, setModal } = useContext(TodoContext);
    return (
        <>
          <TodoCtn>
            {/* Create a task */}
            <section>
              <TodoCreateTask />
            </section>
            {/* List task, search task and feedback task */}
            <section>
            <TodoCounter />
            <TodoSearch />
            <TodoResults />
            <TodoList>
              { loading && 
                <div className='loader'>
                  <TodoLoader /> 
                  <TodoLoader /> 
                  <TodoLoader /> 
                </div>
              }
              { error && <p>Ha ocurrido un error inesperado</p> }
              { !stateTodo.length > 0 && !loading && <p className='todo-not-disponibility'>No cuentas con tareas disponibles, crea una ahora</p>  }
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
            { modal && 
              <Modal>
                <ModalContent />
              </Modal> 
            }
            </section>
          </TodoCtn>
        </>
      );
}

export { AppUi }