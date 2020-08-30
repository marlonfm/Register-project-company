import React from 'react'
import './styles.css'
//import PropTypes from 'prop-types'

const Aside = ({ key, titletask, descriptiontask, taskstask }) => {
    return (
        <div className="dash">
        <div className="dashAlign">
            <ul className="divUl" key={key}>
               
                <label className="lab">Título:</label>
                <li className="liItens">{titletask}</li>

                <label className="lab">Descrição:</label> 
                <li className="liItens">{descriptiontask}</li>

                

                <label className="lab">Tarefa:</label>
                <li className="liItens">{taskstask}</li>
            </ul>
        </div>
        </div>
    );
}

/*const { string } = PropTypes

Aside.PropTypes = {
    key: string.isRequired,
    titletask: string.isRequired,
    descriptiontask: string.isRequired,
    taskstask: string.isRequired,
}*/

export default Aside;