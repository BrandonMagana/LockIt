import React, {useState} from 'react'
import { auth } from "../firebase/firebaseConfig";
import { useHistory } from "react-router-dom";

/*
    Login Component
    This component will display a login form on the landing page.
    It has two inputs:
    -email :: String
    -password :: String 
*/

function Login({setLoading}) {
    // Using useState react hook to save form's inputs 
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
    //Custom hook that is used to keeping track from diferent form inputs  
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
    };

    //Use state hook use for displaying posibble errors
    const [error, setError] = useState("Todos los campos son obligatorios");

    //function used for keeping session open
    let history = useHistory();
    
    //function that will trigger when form is submitted
    const handleSubmit = (e) => {
        e.preventDefault();
        //Formatting the inputs
        if (!formData.email.trim() || !formData.password.trim()) {
            setError("Todos los campos son obligatorios");
            return;
        }
        
        //Using auth.signInWithEmailAndPassword method from firebase, to valid the login
        auth
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then((user) => {
            return user.user.getIdToken();
        })
        .then((token) => {
            history.push("/dashboard");
            document.cookie = `userToken= ${token}`;
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2500);
        })
        .catch(() => {
            //Displaying errors
            setError("Something went wrong");
            // alert(error)
        });
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <form>
                    <h3>Inicio de Sesión</h3>
                    <label htmlFor="email">Email: </label>
                    <input type="email" className="email" name="email" id="email" placeholder="Ingresa Correo Electrónico" onChange={handleChange}/>
                    <label htmlFor="password">Contraseña: </label>
                    <input type="password" className="password" name="password" id="password" placeholder="Ingresa Contraseña" onChange={handleChange}/>
                    <button onClick={handleSubmit}>Iniciar Sesión</button>
                </form>
            </div>
        </div>
    )
}

export default Login
