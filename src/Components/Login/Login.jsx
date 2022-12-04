import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import InputControl from "../ImputControl/InputControl";
import { loginAction } from "../../Redux/Action/Actions";

function Login() {
  const navigate = useNavigate();

  //datos de la form
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    select: "usuario",
  });

  //On Change
  const handleOnChange = (e) => {
    e.preventDefault();
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
     
   
  };


  //On Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("login DATA", loginData);
    loginAction(loginData);

  };


  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          name="email"
          onChange={handleOnChange}
          placeholder="Ingresá Correo"
          
        />
        <InputControl
          label="Password"
          type="password"
          name="password"
          onChange={handleOnChange}
          placeholder="Ingresá contraseña"
          
        />

        <div className={styles.selectLogin}>
          <div className={styles.labelSelect}>Elegí tu rol</div>
          <select name="select" onChange={handleOnChange}>
            <option value="usuario">Paciente</option>
            <option value="profesional" >
              Profesional
            </option>
            <option value="administrador">Administrador</option>
          </select>
        </div>

        <div className={styles.footer}>
          <button onClick={handleSubmit} disabled={!loginData.email || !loginData.password ? true : false}>Inicia Sesión</button>

          <p>
            ¿No Tienes cuenta?{" "}
            <span>
              <Link to="/register">Regístrate</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

// codigo que se puede reutilizar con google
{
  /* <Link to='/user' >
          <button style={{backgroundColor:'blue'}} 
          variant="info"
          size="sm"
          type="submit"
          onClick={() => signInWithPopup(auth, googleProvider)}>
            Inicia con Google
          </button>
          </Link> */
}
