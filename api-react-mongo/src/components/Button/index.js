import React from 'react'
import './styles.css'

const Button = ({ title }) => {
    return(
        <button
        type="submit"
        className="btnSign"
        >{title}</button>
    );
}

export default Button;