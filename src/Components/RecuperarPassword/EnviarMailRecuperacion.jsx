import React,{useState} from 'react'
import styles from './recuperar.module.css'
import InputControl from "../ImputControl/InputControl";
import { passwordOlvidado } from '../../Redux/Action/Actions';
import {NotificationContainer,NotificationManager,} from "react-notifications";
import "react-notifications/lib/notifications.css"; 
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from '../../customsHooks/useLocalStorage';


function EnviarMailRecuperacion() {

    const [email, setEmail] = useState('');
    const [emailValido,setEmailvalido] = useState(true);
    const [selectedOption, setSelectedOption] = useState('usuario');
     //TOKEN --> se alamcena en el Navegador
     const [token,setToken] = useLocalStorage("token","");
    
    const navigate =useNavigate();

    //validando email
     //validador de mail con regex
    const validateEmail = e => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmailvalido(emailRegex.test(e.target.value));
  };


    //onChange
    const handleOnChange = e => {
    e.preventDefault();
      setSelectedOption(e.target.value);
    };
    
    //onSubmit
    const handleSubmit = async (e)=>{
        e.preventDefault();

        let respuestaPasswordOlvidado = await passwordOlvidado({email:email,select:selectedOption})
       
        if(!respuestaPasswordOlvidado?.token){
            
            NotificationManager.error(`${respuestaPasswordOlvidado.message}`, "¡Atención!", 3000);
            
            
        }else{
            NotificationManager.success(`Chequea tu correo!`,"Enhorabuena!", 5000);
            NotificationManager.success(`Seras dirigido a Home`,'', 2000);
            //seteamos token en LS
            setToken(respuestaPasswordOlvidado.token)
            setTimeout(() => {
                navigate('/')
            }, 4000);
        }
      
       
    }
    

    return (
      <div className={styles.mainContainerPassRecover}>
        <form className={styles.formRecovery}>
         <h2 className={styles.heading}>Recuperar Contraseña</h2>
        <InputControl
          label="Email"
          name="email"
          placeholder="Ingresá Correo"
          onChange={e => setEmail(e.target.value)}
          onBlur={validateEmail}
        />
         {!emailValido && <p style={{color:"red",fontStyle:'italic'}}>Formato email incorrecto</p>}

          <div className={styles.selectLogin}>
            <div className={styles.labelSelect}>Ingresa como:</div>
            <select name="select" value={selectedOption} onChange={handleOnChange}>
              <option value="usuario">Paciente</option>
              <option value="profesional" >
                Profesional
              </option>
              <option value="administrador">Administrador</option>
            </select>
          </div>
          <div className={styles.submit}>
             <button onClick={handleSubmit} disabled={!emailValido || !email} >Enviar</button>
          </div>
        </form>
        <NotificationContainer />
      </div>
    );
}

export default EnviarMailRecuperacion