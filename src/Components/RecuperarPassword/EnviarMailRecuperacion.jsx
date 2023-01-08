import React,{useState} from 'react'
import styles from './recuperar.module.css'
import InputControl from "../ImputControl/InputControl";



function EnviarMailRecuperacion() {

    const [email, setEmail] = useState('');
    const [emailValido,setEmailvalido] = useState(true);
    const [selectedOption, setSelectedOption] = useState('usuario');
  

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
    const handleSubmit = e =>{
        e.preventDefault();
        // console.log('opcion seleccionada',selectedOption);
        // console.log('email',email);
        // 1. Crear Action
        // 2. Tomar respuesta
        //3. Usar la respuesta para dar un mensaje
        //4. Mandar TOKEN a localStorage
        //5. redirigir a otro componente para recuperar contraseña
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
      </div>
    );
}

export default EnviarMailRecuperacion