import React from 'react';
import './style.css';
import Button from '../../components/Button';


export default function ForgetPass(){

    return(
        <header className="logHeadForgot">


            <div className="regisForgot">
                <div className="alignIForgot">
                    <div className="contentLoginForgot">
                    
                    <h1 className="textLoginForgot">Digite seu email <br/>para recuperar a sua senha.</h1>
                    </div>

                    <form className="formRegForgot">
                    <input 
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