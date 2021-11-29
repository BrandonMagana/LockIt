import React from 'react'

function Login() {
    return (
        <div className="login-container">
            <div className="login-form">
                <form>
                        <h3>Inicio de Sesión</h3>
                        <label htmlFor="email">Email: </label>
                        <input type="email" className="email" id="email" placeholder="Ingresa Correo Electrónico"/>
                        <label htmlFor="password">Contraseña: </label>
                        <input type="password" className="password" id="password" placeholder="Ingresa Contraseña"/>
                        <button>Iniciar Sesión</button>
                </form>
            </div>
        </div>
    )
}

export default Login
