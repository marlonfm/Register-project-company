import React,{useState} from 'react';
import './style.css';
import { FcPrivacy } from "react-icons/fc";
import { FcFeedback } from 'react-icons/fc';
import { FcKey } from 'react-icons/fc';
import Button from '../../components/Button/index'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'


export default function Reset_pass(){
    const history = useHistory();

    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    const [password, setPassword] = useState('')

    let userLog = localStorage.getItem('email');

    async function handlePassword(e) {
        e.preventDefault();
        try {
            
            await api.post('auth/reset_password', ({email, token, password}));
            alert('Agora você já pode voltar a acessar.');
            history.push('/list');

        } catch (error) {
            console.log(error);
            alert('erro ao recuperar a senha, verifique se seu email \n está cadastrado, ou se o código esta correto.');
        }
        
    }

    return(
        <div className="regisPass">

            <div className="contentLoginPass">
                <h1 className="textLoginPass">Prezado (a) {userLog}, Preencha os campos para alteração de uma nova senha.</h1>
            </div>

            <form className="formRegPass" onSubmit={handlePassword}>

                <input
                value={email}
                onChange={e=>  setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                className="regPass"
                /><FcFeedback className="iconBoxPass"/>

                <div className="bol1"></div>
                <div className="bol2"></div>
                <div className="bol3"></div>
                <div className="bol4"></div>

                <input 
                value={token}
                onChange={e=> setToken(e.target.value)}
                type="password"
                placeholder="Código"
                className="regPass"
                /><FcKey className="iconPassKey"/> 


                <input 
                value={password}
                onChange={e=>setPassword(e.target.value)}
                type="password"
                placeholder="Nova senha"
                className="regPass"
                /><FcPrivacy className="iconPassPass"/> 

                <Button title="Alterar senha"/>

                
            </form>
        </div>
    );
}