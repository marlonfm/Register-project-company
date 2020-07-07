import React from 'react';
import './style.css';
import { FcKey } from 'react-icons/fc'
import { FcPrivacy } from "react-icons/fc";
import { FcFeedback } from 'react-icons/fc';
export default function Reset_pass(){
    return(
        <div className="regisPass">

            <div className="contentLoginPass">
                <h1 className="textLoginPass">JÁ ESTAMOS FINALIZANDO A <br/>RECUPERAÇÃO DE SUA SENHA...</h1>
            </div>

            <form className="formRegPass">

                <input
                type="text"
                placeholder="Email"
                className="regPass"
                /><FcFeedback className="iconBoxPass"/>

                <input 
                type="text"
                placeholder="Your Token"
                className="regPass"
                /><FcKey className="iconUsPassToken"/>

                <div className="bol1"></div>
                <div className="bol2"></div>
                <div className="bol3"></div>
                <div className="bol4"></div>


                <input 
                type="password"
                placeholder=" New password !!!"
                className="regPass"
                /><FcPrivacy className="iconPassPass"/> 

                <button
                type="button"
                className="btnSign"
                >Alterar senha</button>

                
            </form>
        </div>
    );
}