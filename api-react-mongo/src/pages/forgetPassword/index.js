import React,{useState, useContext} from 'react';
import './style.css';
import Button from '../../components/Button';
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

import {Context} from '../../context/Access/index';

export default function ForgetPass(){

    const { status, setStatus } = useContext(Context);
    

    const history = useHistory();

    const [email, setEmail] = useState('');
    


    async function handleEmail(e) {
        e.preventDefault();
        try{
            const res = await api.post('auth/forget_password', {email});
            setStatus(true);
            console.log(status);
            alert('email enviado.');
            history.push('/reset_password');
            
        }
        catch(err){
            console.error(err);
            alert('erro ao tentar recuperar sua senha, verifique se este email esta cadastrado.');
            
        }

       

    }

    return(
        <header className="logHeadForgot">


            <div className="regisForgot">
                <div className="alignIForgot">
                    <div className="contentLoginForgot">
                    
                    <h1 className="textLoginForgot">Digite seu email <br/>para recuperar a sua senha.</h1>
                    </div>

                    <form className="formRegForgot" onSubmit={handleEmail}>
                    <input 
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                    type="text"
                    placeholder="Your email:"
                    className="regForgot"
                    />

                    <Button title="Continue"/>

                   
                    </form>
                    <p className="term">Developed  by Start, 2020.</p>
                </div>
                                
            </div>

        </header>

    );

    
}
