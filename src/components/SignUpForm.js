import React from 'react';
import {Link} from "react-router-dom";
function SignUpForm() {
    return (
        <div className="signup-container">
            <div className="signup-form">
                <form>
                        <h3>Crear Cuenta</h3>
                        <label htmlFor="name">Nombre: </label>
                        <input type="text" className="name" id="name" placeholder="Ingresa tu Nombre"/>
                        <label htmlFor="email">Email: </label>
                        <input type="email" className="email" id="email" placeholder="Ingresa Correo Electrónico"/>
                        <label htmlFor="password">Contraseña: </label>
                        <input type="password" className="password" id="password" placeholder="Ingresa Contraseña"/>
                        <label htmlFor="password">Confirma contraseña: </label>
                        <input type="password" className="passwordConfirm" id="passwordConfirm" placeholder="Ingresa Contraseña Nuevamente"/>
                        <Link to="/dashboard"><button>Enviar</button></Link>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm
