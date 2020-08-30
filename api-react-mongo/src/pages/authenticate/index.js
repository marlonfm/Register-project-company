import React, { useState } from 'react';
import './style.css';
import { FcPortraitMode } from 'react-icons/fc'
import { FcPrivacy } from "react-icons/fc";
import { AiOutlineCrown } from 'react-icons/ai'; 
import Inter from '../../assets/inter.png';
import { Link,useHistory } from 'react-router-dom';
import api from '../../services/api';
import { login } from '../../services/auth';
import Button from '../../components/Button';

export default function Autheticate(){

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function LogonUser(e) {
        e.preventDefault();

       

        try {
            
            const response = await api.post('/auth/authenticate', ({ email, password }));

            if(!response) {
                alert("Usuário ou senha não foi identificado, verifique.")
            }
            else {
                alert(`Seja bem vindo novamente ${response.data.user2.name}!`);

                login(response.data.token);

                localStorage.setItem('email', response.data.user2.name);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('projeid', response.data.user2._id);

                history.push('/list');
            }

            
            
        }
        catch(err) {
            alert("Usuário ou senha não foi identificado, verifique.");

        }
    }

    return(

        <header className="logHead">

            <div className="expLeft">
                <div className="alignIt">
                    <div className="textLeft">
                        <img src={Inter} alt="internet" className="imgNet"/>

                        <h2 className="inovate">Innovate with Us!</h2>

                        <p className="inovate2">have control of your projects here.</p>
                    </div>
                </div>
            </div>

            <div className="regisAuth">
                <div className="alignIt">
                    <div className="contentLoginAuth">
                    <AiOutlineCrown className="iconLoginAuth"/>
                    <h1 className="textLoginAuth">HI! SIGN IN TO YOUR ACCOUNT</h1>
                    </div>

                    <form className="formRegAuth" onSubmit={LogonUser}>
                    <input 
                    type="text"
                    placeholder="Your email"
                    className="regAuth"
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                    /><FcPortraitMode className="iconUsAuth"/>



                    <input 
                    type="password"
                    placeholder="Your password"
                    className="regAuth"
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                    /><FcPrivacy className="iconPassAuth"/>

                    <Button title='Sign In'/>
                        
                    </form>
                    <Link to="/forget_password" className="ancForgotPassAuth">
                        Forget your password?
                    </Link>
                    
                </div>                
            </div>
        </header>
        
    );
}