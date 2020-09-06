import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import api from  '../../services/api';
import Aside from '../../components/Aside';
import ButtonLogout from '../../components/ButtonLogout';

export default function Lista(){

    const emailUs = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    const idprojec = localStorage.getItem('projeid');
    
    const [titleget, setTitleget] = useState([]);
    const [lengthData, setLengthData] = useState('');

    useEffect(()=>{

        async function getAPI() {

            await api.get(`projects/${idprojec}`,  {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }).then(res=>{
                setTitleget(res.data[0]);

                setLengthData(res.data[0].length);
            })

        }
        
        getAPI();
    }, [emailUs])

    

    return(
        <div className="lista">

            <div className="cont1">

            <Link to={`/projects`} className="linkProject">
                <button className="addbtn">
                    
                    Adicionar novos projetos
                    
                </button>
            </Link>
                <h2 className="welcome">Bem vindo de volta {emailUs} !</h2>

                <ButtonLogout/>

            </div><br/><br/><br/><br/><br/><br/>
            <h3 className="projRec">Projetos recentes:</h3>
            <div className="line"></div>
            <div className="listar">
                
            {titleget.map(mod=>(
                    <Aside 
                    key={mod._id} 
                    titletask={mod.title}
                    descriptiontask={mod.description}
                    taskstask={mod.title}
                    />
                ))}
            </div>
            

        </div>
    );
}