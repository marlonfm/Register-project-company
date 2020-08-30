import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Registro from './pages/registro';
import ProjetosAdd from './pages/projetos';
import Lista from './pages/listarProjetos';
import Authenticate from './pages/authenticate';
import ForgetPass from './pages/forgetPassword';
import ResetPass from './pages/reset_password';
import Testes from './pages/testes/index';
import { isAuthenticated } from './config/Auth/auth';

const Privateroute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={props=>
        isAuthenticated() ? (
            <Component {...props} />
        )
        : (
            <Redirect to={{ pathname: '/authenticate', state: { from: props.location } }} />
        )
    }
    />
);

export default function Rotas() {
    return(
        <div className="rota">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Registro} />
                    <Route path='/registro' component={Registro}/>
                    <Privateroute path="/projects" component={ProjetosAdd}/>
                    <Privateroute path="/list" component={Lista}/>
                    <Route path="/authenticate" component={Authenticate}/>
                    <Privateroute path="/forget_password" component={ForgetPass}/>
                    <Privateroute path="/reset_password" component={ResetPass}/>
                    <Route path="/testes" component={Testes}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}