import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "../ImputControl/InputControl";
import styles from "./Signup.module.css";

function Register() {
  const [values, setValues] = useState({
    idUsuario: "",
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    celular: "",
  });
  const [campoVacio,setCampoVacio] = useState("");
  
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (event) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsValid(emailRegex.test(event.target.value));
  };

  function completarCampo (valorCampoVacio){
    setCampoVacio(valorCampoVacio)
  }

  function handleSubmit(e) {
    e.preventDefault();  
    if(!values.idUsuario || !values.nombre || !values.apellido || !values.email || !values.password || !values.celular){
      completarCampo("Los campos no pueden estar vacíos")
    }else{
      
      completarCampo("")
      
      // aca se mandara la info a la action y de ahi a la base de datos
      //1. crear action
      //2. llamarla desde aqui
    }
  }
 

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Registrarse</h1>
        {campoVacio ? <h4 style={{color:"red",fontStyle:"italic"}}>{campoVacio}</h4> :null}
        <InputControl
          label="DNI"
          placeholder="Ingrese su documento de Identidad"
          required
          onChange={(event) =>
            setValues((prev) => ({ ...prev, idUsuario: event.target.value }))
          }
        />

        <InputControl
          label="Nombre"
          placeholder="Ingrese su nombre"
          required
          onChange={(event) =>
            setValues((prev) => ({ ...prev, nombre: event.target.value }))
          }
        />
        <InputControl
          label="Apellido"
          placeholder="Ingrese su apellido"
          required
          onChange={(event) =>
            setValues((prev) => ({ ...prev, apellido: event.target.value }))
          }
        />
        <InputControl
          label="Teléfono"
          placeholder="Ingrese su número de contacto"
          required
          onChange={(event) =>
            setValues((prev) => ({ ...prev, celular: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Ingrese correo"
          type="email"
          id="email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          onBlur={validateEmail}
        />
        {!isValid && <p style={{color:"red"}}>Ingresa un email válido</p>}

        <InputControl
          label="Password"
          placeholder="Ingrese su Contraseña"
          type="password"
          required
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />

      < div className={styles.footer}>
          <button onClick={handleSubmit}>Registrarse</button>

        <p>
          ¿Ya tienes cuenta?{" "}
          <span>
            <Link to="/login">Inicia Sesión</Link>
          </span>
        </p>
        </div>  
      </div>
    </div>
  );
}

export default Register;
