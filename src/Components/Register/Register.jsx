import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {NotificationContainer,NotificationManager,} from "react-notifications";
import "react-notifications/lib/notifications.css"; 
import { Link, useNavigate } from "react-router-dom";
import { registerAction } from "../../Redux/Action/Actions";
import InputControl from "../ImputControl/InputControl";
import styles from "./Signup.module.css";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usuarioRegistrado = useSelector(state=>state?.usuarioRegistrado);

  const [values, setValues] = useState({
    idUsuario: "",
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    celular: "",
  });
  //estado si hay campos vacios
  const [campoVacio,setCampoVacio] = useState("");
  //estado si el correo es erroneo
  const [isValid, setIsValid] = useState(true);

  //estado para ver si el DNI son solo numeros.
  const [dniIsValid, setDniIsValid] = useState(true);

 //validador de mail con regex
  const validateEmail = (event) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsValid(emailRegex.test(event.target.value));
  };

//validador de DNI con regex
const validateDNI = (event) => {
  const dniRegex = /^[0-9]+$/;
  setDniIsValid(dniRegex.test(event.target.value));
};




  //si los campos estan vacios o no.
  function completarCampo (valorCampoVacio){
    setCampoVacio(valorCampoVacio)
  }
    

    //funcion para mensaje de error o success
    function errorOrSucces(verdaderoOfalso){
      if(verdaderoOfalso===true){
          NotificationManager.success("Usuario registado correctamente", "¡Excelente!", 2000);
          // NotificationManager.success("Serás dirigido a LOGIN", 3000);
          setTimeout(() => {
            navigate('/login')
          }, 2000);
      }else{
        if(usuarioRegistrado){
          
          NotificationManager.error(`${usuarioRegistrado.errors[0]?.msg}`, "¡Atención!", 3000);
        }
             
      }
    }
    // HANDLE SUBMIT
    async function handleSubmit(e) {
    e.preventDefault();  
    
    if(!values.idUsuario)NotificationManager.error(
      "Falta DNI",
      "ERROR",
      2000
    ); 
    if(!values.nombre)NotificationManager.error(
      "Falta Nombre",
      "ERROR",
      2000
    ); 
    if(!values.apellido)NotificationManager.error(
      "Falta Apellido",
      "ERROR",
      2000
    ); 
    if(!values.email)NotificationManager.error(
      "Falta Email",
      "ERROR",
      2000
    ); 
    if(!values.password)NotificationManager.error(
      "Falta Password",
      "ERROR",
      2000
    ); 
    if(!values.celular)NotificationManager.error(
      "Falta Celular",
      "ERROR",
      2000
    ); 
 
      
     //if(values.idUsuario && values.nombre && values.apellido && values.celular && values.email && values.password)
    else{
      const dbResponse = await dispatch(registerAction(values))
      completarCampo("")
      if(dbResponse !== undefined){
        dbResponse.payload.message==="Usuario creado con exito!" ? errorOrSucces(true) : errorOrSucces(false)
      }
      

    }
    
  }
 

  return (
    <>
    
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Registrarse</h1>
        {campoVacio ? <h4 style={{color:"red",fontStyle:"italic"}}>{campoVacio}</h4> :null}
        <InputControl
          label="DNI"
          placeholder="Ingrese su documento"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, idUsuario: event.target.value }))
          }
          onBlur={validateDNI}
          />
          {!dniIsValid && <p style={{color:"red",fontStyle:'italic'}}>Ingresa solo números</p>}

        <InputControl
          label="Nombre"
          placeholder="Ingrese su nombre"
          required
          onChange={(event) =>
            setValues((prev) => ({ ...prev, nombre: event.target.value.toUpperCase() }))
          }
         
        />
        <InputControl
          label="Apellido"
          placeholder="Ingrese su apellido"
          required
          onChange={(event) =>
            setValues((prev) => ({ ...prev, apellido: event.target.value.toUpperCase()}))
          }
        />
        <InputControl
          
          label="Teléfono"
          placeholder="Ingrese su número"
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
        {!isValid && <p style={{color:"red",fontStyle:'italic'}}>Ingresa un email válido</p>}

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
    <NotificationContainer />
    </>
  );
}

export default Register;
