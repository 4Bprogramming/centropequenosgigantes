import React,{useState} from 'react'
import styles from './recuperar.module.css'
import InputControl from "../ImputControl/InputControl";





function EnviarMailRecuperacion() {
    const [email, setEmail] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOnChange = e => {
      setSelectedOption(e.target.value);
    };
  
    console.log('opcion seleccionada',selectedOption);

    return (
      <div className={styles.mainContainerPassRecover}>
        <form className={styles.formRecovery}>
         <h2 className={styles.heading}>Recuperar Password</h2>
        <InputControl
          label="Email"
          name="email"
          placeholder="Ingresá Correo"
          onChange={e => setEmail(e.target.value)}

        />


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
             <button type="submit" >Enviar</button>
          </div>
        </form>
      </div>
    );
}

export default EnviarMailRecuperacion