import { useContext } from "react";
import { TodoContext } from '../context/TodoContext';


const ModalContent = ()=>{
    const { setModal } = useContext(TodoContext);

    return(
        <>
            <p>Are you sure you create this task?</p>
            <div className='buttons'>
                <a className='btn'>YES</a>
                <a className='btn btn--danger' onClick={ ()=>{ setModal(false) } }>CANCEL</a>
            </div>
        </>
    );
}

export { ModalContent }