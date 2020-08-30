import React from 'react';
import './style.css';
import { FcPrivacy } from "react-icons/fc";
import { FcFeedback } from 'react-icons/fc';
import Button from '../../components/Button/index'
export default function Reset_pass(){

    let userLog = localStorage.getItem('email');

    return(
        <div className="regisPass">

            <div className="contentLoginPass">
                <h1 className="textLoginPass">OI {userLog}, JÁ ESTAMOS FINALIZANDO A <br/>RECUPERAÇÃO DE SUA SENHA...</h1>
            </div>

            <form className="formRegPass">

                <input
                type="text"
                placeholder="Email"
                className="regPass"
                /><FcFeedback className="iconBoxPass"/>

                <div className="bol1"></div>
                <div className="bol2"></div>
                <div className="bol3"></div>
                <div className="bol4"></div>


                <input 
                type="password"
                placeholder=" New password !!!"
                className="regPass"
                /><FcPrivacy className="iconPassPass"/> 

                <Button title="Alterar senha"/>

                
            </form>
        </div>
    );
}