import React from 'react'
import SignUpForm from "../components/SignUpForm";
import Navbar from "../components/Navbar";

function SignUp() {
    return (
        <div className="landpage">
            <Navbar registro={false}/>
            <SignUpForm/>
        </div>
    )
}

export default SignUp;
