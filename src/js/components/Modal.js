import React from "react";
import { createPortal } from "react-dom"; 

//Context
import { useContext } from "react";
import { TodoContext } from '../context/TodoContext';

const Modal = ( { children } )=>{
    const { modal } = useContext(TodoContext);

    return createPortal(
        <div className={(modal ? 'modal__container active' : 'modal__container') }>
            <div className="modal__bg"></div>
            <div className="modal__content">
                { children }
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal }