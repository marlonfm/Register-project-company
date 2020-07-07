import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Registro from './pages/registro';
import ProjetosAdd from './pages/projetos';
import Lista from './pages/listarProjetos';
import Authenticate from './pages/authenticate';
import ForgetPass from './pages/forgetPassword';
import ResetPass from './pages/reset_password';
import Testes from './pages/testes/index';

export default function Rotas() {
    return(
        <div className="rota">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Registro} />
                    <Route path='/registro' component={Registro}/>
                    <Route path="/projects" component={ProjetosAdd}/>
                    <Route path="/list" component={Lista}/>
                    <Route path="/authenticate" component={Authenticate}/>
                    <Route path="/forget_password" component={ForgetPass}/>
                    <Route path="/reset_password" component={ResetPass}/>
                    <Route path="/testes" component={Testes}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}