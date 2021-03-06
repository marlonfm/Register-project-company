import React, { useState } from 'react';
import './style.css';
import { AiOutlineSearch } from  'react-icons/ai';
import { FcManager } from 'react-icons/fc';
import { AiOutlineBell } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import ButtonLogout from '../../components/ButtonLogout';

export default function Projetos(){

    const his = useHistory()

    const emailUs = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    const idUSer = localStorage.getItem('projeid');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [titletasks, setTitletasks] = useState('');

    const [dropdown, setDropdown] = useState("");

    const showDropdown = () => {
        console.log("show");
        setDropdown("show");
        document.body.addEventListener("click", closeDropdown);
        //document.querySelector('.projects').style.opacity = '0.5';
      }
    
      const closeDropdown = event => {
        console.log("hidden");
        setDropdown("");
        document.body.removeEventListener("click", closeDropdown);
        //document.querySelector('.projects').style.opacity = '1';
      };

    async function criaTask(e) {
        

        e.preventDefault();

        const dataLog = {
            title,
            description,
            tasks: [
                { title: titletasks },
                { assignedTo: idUSer},
            ],
        };

        try {

            const response = await api.post('projects', dataLog, {
                headers: { 
                    Authorization: `Bearer ${token}`
                },
            });

            alert('Projeto cadastrado com sucesso! Você será redirecionado para a tela de Acompanhamento dos seus projetos!');

            localStorage.setItem('projid', response.data[0].tasks[0].project); 
            

            
            his.push('/list');
            

        }catch(err) {
            console.log(err);
            alert("Ops. Erro ao adicionar projeto!")
        }

    }

    return(
        <div className="projects">

            <header className="cabecalho">
                <div className="contLeft">
                    <h2>START</h2>

                </div>

                <div className="contRight">

                    <Link to="/list" className="ancListar">
                    Clique para acompanhar seu Projeto!
                    </Link>

                    <div className="iconsAlign">
                        <button type="button" className="btnAlert">
                        <ButtonLogout/>
                        </button>

                        <button type="button" 
                        className="btnUser" onClick={showDropdown}>
                            <FcManager/> 
                        </button>

                        <Modal
                        className={dropdown}
                        closeModal={closeDropdown}
                        representant={emailUs}
                        />
                    </div>
                </div>
            </header>
            <form method="POST" onSubmit={criaTask}>
            <div className="cadasterTasks">
                
                    <div className="inps">

                        <h1 className="vmsready">Vamos começar {emailUs}?</h1><br/><br/>
                        
                        <input type="text"
                        className="titleinp"
                        placeholder="Escolha um título para seu Projeto!"
                        value={title}
                        onChange={e=>setTitle(e.target.value)}
                        />
                        <br/><br/>
                        
                        <textarea
                        className="descriptioninp"
                        placeholder="Escolha uma descrição para ele!"
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    
               
            </div>
            
            <div className="cadasterTasksRight">
                
                    <div className="inpsright">

                        <h1 className="vmstasks">AGORA DEFINA SUAS TASKS!</h1><br/><br/>
                        
                        <input type="text"
                        className="titleinp"
                        placeholder="Descreva quais serão as tarefas!"
                        value={titletasks}
                        onChange={e=>setTitletasks(e.target.value)}
                        />

                        
                        <Button title="Cadastrar Projeto"/>
                    </div>
                    
                
            </div>
            </form>
        </div>
    );
}

/*
                    <div className="Search">
                        <input type="text"
                        placeholder="Search"
                        className="inpSearch"
                        />
                        <AiOutlineSearch className="iconSearch"/>
                    </div>
*/