import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import InputControl from "../ImputControl/InputControl";
import { loginAction } from "../../Redux/Action/Actions";
import { useLocalStorage } from "../../customsHooks/useLocalStorage";
import { NotificationContainer,NotificationManager,} from "react-notifications";
import "react-notifications/lib/notifications.css";


function Login() {
  const navigate = useNavigate();
 

  //TOKEN
  const [token,setToken] = useLocalStorage("token","");

  //usuario traido desde la DB
  const [usuarioDB,setUsuarioDB] = useLocalStorage("usuarioDB",{});
  const [rol, setRol]= useLocalStorage("rol",'');

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
    if(e.target.name==='select'){
     const value=e.target.value
      setRol(value)
    }
  };


  //On Submit
  const handleSubmit = async (e)=> {
    e.preventDefault();    
    const respuestaDBLogin = await loginAction(loginData);

    if(respuestaDBLogin.token){
      setToken(respuestaDBLogin.token);
      
      //usuario que viaja a localStorage
      const usuario = {
        fullName: respuestaDBLogin.usuario.fullName,
        celular:respuestaDBLogin.usuario.celular,
        email:respuestaDBLogin.usuario.email,
        imagenProfesional:respuestaDBLogin.usuario.imagenProfesional,
        matricula:respuestaDBLogin.usuario.matricula,
        idProfesional:respuestaDBLogin.usuario.idProfesional
      }

      setUsuarioDB(usuario);
      navigate(`/${loginData.select}`)//me lleva al perfil en el cual me logueo segun el select.

    }else{
      NotificationManager.error(`${respuestaDBLogin}`, "ATENCION!", 7000);
    }

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
          <div className={styles.labelSelect}>Ingresa como:</div>
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
          {/* Si no recuerda contraseña */}
          <div style={{width:"170px"}}>
            <Link to="/forgoten-password">
              ¿Olvido su contraseña?
            </Link>
          </div>
          <p>
            ¿No Tienes cuenta?{" "}
            <span>
              <Link to="/register">Regístrate</Link>
            </span>
          </p>
        </div>
      </div>
      <NotificationContainer/> 
    </div>
  );
}

export default Login;


