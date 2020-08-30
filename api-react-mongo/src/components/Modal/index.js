import React from 'react'
import './styles.css'
import { FiX } from "react-icons/fi";


const Modal = props => {
    const { className, modalRef, closeModal, representant } = props;

    return(
        <div ref={modalRef} className={`${className} modal`}>
            <div className="close--modal">
                <FiX 
                onClick={closeModal}
                className="ex-m"/>
            </div>


            <section className="modal--content">
            <ul className="ul--cont">
               
               
               <li className="info--user"><b>Representante:</b> {representant}</li>

                
               <li className="info--user"><b>Total de projetos:</b> 0</li>
           </ul>
           </section>
        </div>
    )
}

export default Modal;
