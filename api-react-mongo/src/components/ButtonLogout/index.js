import React from 'react'
import './styles.css'
import { FiLogOut } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';

const ButtonLogout = () => {

    const history = useHistory();

    function logoutSession() {

        let confirmLogout = window.confirm('deseja realmente se deslogar?');

        if(confirmLogout == true){
            localStorage.clear();
            history.push('/authenticate');
        }

        else {
            return false;
        }

       
    }

    return(
        <button className="logoutbtn" onClick={logoutSession}>
        <FiLogOut className="iconLogout"/>
    </button>
    );
}

export default ButtonLogout;