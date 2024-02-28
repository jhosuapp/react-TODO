import { useContext } from "react";
import { TodoContext } from '../context/TodoContext';


const ModalContent = ()=>{
    const { setModal, createTodo, stateValueCreate } = useContext(TodoContext);

    return(
        <>
            <p>Are you sure you create this task?</p>
            <div className='buttons'>
                <button type="button" className='btn' onClick={ ()=>{ createTodo(stateValueCreate); setModal(false) }}>YES</button>
                <button type="button" className='btn btn--danger' onClick={ ()=>{ setModal(false) } }>CANCEL</button>
            </div>
        </>
    );
}

export { ModalContent }