import React, { useState, useEffect } from 'react';
import './style.css';
import { FiLogOut } from 'react-icons/fi';
import { Link,useHistory } from 'react-router-dom';
import api from  '../../services/api';

export default function Lista(){

    const history = useHistory();
    const emailUs = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    const idprojec = localStorage.getItem('projid');
    
    const [titleget, setTitleget] = useState([]);

    //const [taskget, setTaskget] = useState([]);


    useEffect(()=>{

        async function getAPI() {

            await api.get(`projects/${idprojec}`,  {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }).then(res=>{
                setTitleget(res.data);
    
                //setTaskget(res.data.tasks[0]);
            })

        }
        
        getAPI();
    }, [emailUs])

    function logoutSession() {
        localStorage.clear();
        history.push('/registro');
    }

    return(
        <div className="lista">

            <div className="cont1">

            <Link to="/projects" className="linkProject">
                <button className="addbtn">
                    
                    Adicionar novos projetos
                    
                </button>
            </Link>
                    
                
                

                <h2 className="welcome">Bem vindo de volta{emailUs} !</h2>

                <button className="logoutbtn" onClick={logoutSession}>
                    <FiLogOut className="iconLogout"/>
                </button>
            </div><br/><br/><br/><br/><br/><br/>
            <h3 className="projRec">Projetos recentes:</h3>
            <div className="line"></div>
            <div className="listar">
                
            {titleget.map(mod=>(
                    <div className="dash">
                    <div className="dashAlign">
                        <ul className="divUl">
                           
                            <label className="lab">Título:</label>
                            <li key={mod._id} className="liItens">{mod.title}</li><br/><br/><br/>

                            <label className="lab">Descrição:</label> 
                            <li className="liItens">{mod.description}</li><br/><br/><br/>

                            

                            <label className="lab">Tarefa:</label>
                            <li className="liItens">{mod.tasks[0].title}</li>
                        </ul>
                    </div>
                </div>
                ))}

                

               

                
                


            </div>
            

        </div>
    );
}