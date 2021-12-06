import React from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/Login'

function LandingPage() {
    return (
        <div className="landpage">
            <Navbar registro={true}/>
            <div className="land-grid">
                <div className="info-lockit">
                    <h1 className="brand"> Bienvenido a LockIt!</h1>
                    <p className="welcome-text">
                        LockIt! es el portal de tu casa en internet. 
                    </p>
                    <p className="welcome-text">
                        Ten la seguirdad de poder
                        revisar el estado de tu puerta desde cualquier lugar e interactuar con ella.
                    </p>
                </div>
                <Login/>
            </div>
        </div>
    )
}

export default LandingPage
