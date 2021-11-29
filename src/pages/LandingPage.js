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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
                        deserunt! Fugiat expedita excepturi iusto ducimus a quo fuga
                        adipisci sapiente corrupti eaque distinctio animi porro quam,
                        consectetur necessitatibus assumenda provident, cupiditate sint quos
                        eligendi pariatur dolore neque officia rerum! Aut molestiae modi
                        libero beatae nisi, ipsum repudiandae quae quis velit?
                    </p>
                </div>
                <Login/>
            </div>
        </div>
    )
}

export default LandingPage
