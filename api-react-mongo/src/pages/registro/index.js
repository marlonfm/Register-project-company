import React, { useState } from 'react';
import './style.css';
import { FcPortraitMode } from 'react-icons/fc'
import { FcPrivacy } from "react-icons/fc";
import { FcFeedback } from 'react-icons/fc';
import { AiOutlineCrown } from 'react-icons/ai';
import api from '../../services/api';
import { useHistory, Link } from 'react-router-dom';

export default function Register(){

    const History = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function CadastraUser(e) {
        e.preventDefault();
        
        const dataRegister = {
            name,
            email,
            password,
        };

        try {


            const response = await api.post('/auth/register', dataRegister);

            alert(`Cadastro realizado com sucesso! seu Token é: ${response.data.token}`)

            History.push('/authenticate');
           
        }catch(err) {
            console.log(err);
            alert("erro ao cadastrar!")
        }
    }

    return(
        <div className="regis">

            <div className="contentLogin">
                <AiOutlineCrown className="iconLogin"/>
                <h1 className="textLogin">HI! REGISTER TO START THE JOURNEY</h1>
            </div>

            <form className="formReg" onSubmit={CadastraUser}>

                <input 
                type="text"
                placeholder="Choose one Username"
                className="reg"
                value={name}
                onChange={e=> setName(e.target.value)}
                /><FcPortraitMode className="iconUs"/>

                <input
                type="text"
                placeholder="Email"
                className="reg"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                /><FcFeedback className="iconBox"/>

                <div className="bol1"></div>
                <div className="bol2"></div>
                <div className="bol3"></div>
                <div className="bol4"></div>


                <input 
                type="password"
                placeholder="Password"
                className="reg"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                /><FcPrivacy className="iconPass"/> 

                <button
                type="submit"
                className="btnSign"
                >Sign Up</button>

                <Link to="/authenticate" className="goingLogin">
                    Already a user? click.
                </Link>

                
            </form>
        </div>
    );
}