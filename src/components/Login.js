import React, {useState} from 'react'
import {Link} from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { useHistory } from "react-router-dom";

function Login({setLoading}) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const [loginLoading, setLoginLoading] = useState(false);
    
      const [error, setError] = useState("");
      
      const handleChange = (e) => {
          setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            });
        };
        
        let history = useHistory();
        const handleSubmit = (e) => {
            setLoginLoading(true);
            console.log("pene")
            e.preventDefault();
            if (!formData.email.trim() || !formData.password.trim()) {
                setError("Todos los campos son obligatorios");
                setLoginLoading(false);
                alert(error);
                return;
            }
            
            auth
            .signInWithEmailAndPassword(formData.email, formData.password)
            .then((user) => {
                setLoginLoading(false);
                return user.user.getIdToken();
            })
            .then((token) => {
                setLoginLoading(false);
                history.push("/dashboard");
                document.cookie = `userToken= ${token}`;
                setLoading(true);
                console.log("llegue");
                setTimeout(() => {
                    setLoading(false);
                }, 2500);
            })
            .catch(() => {
                setLoginLoading(false);
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
