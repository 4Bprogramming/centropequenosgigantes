import React, { useState } from 'react';
import InputControl from '../ImputControl/InputControl';
import styles from './resetPassword.module.css';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const ResetPassword = () => {
  // Creamos dos estados para almacenar la contraseña y la confirmación de la contraseña
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 //tipo de input
 const [inputType, setInputType] = useState('password');
 const [inputTypeSecond, setInputTypeSecond] = useState('password');



  const handleSubmit = (event) => {
    event.preventDefault();
    // Comparamos si la contraseña y la confirmación son iguales
    if (password == confirmPassword) {
      // Aquí puedes enviar el formulario o hacer otra acción
      console.log('Formulario enviado');
    }
};




  return (
    <div className={styles.mainResetContainer}>

    <form className={styles.formReset} onSubmit={handleSubmit}>
      <h2>Ingresa tu nueva contraseña</h2>
      


      <InputControl
            label="Contraseña:"
            name="password"
            placeholder="Nueva contraseña"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type={inputType}
            />
          
          
         <div 
            className={styles.passwordEye}
            onClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}
            >
             {inputType === 'password' ? <FiEyeOff /> : <FiEye />}
          </div>
          
           
        

         <InputControl
          label="Confirmar contraseña:"
          name="confirmPassword"
          placeholder="Repite la contraseña"
          onChange={(event) => setConfirmPassword(event.target.value)}
          value={confirmPassword}
          type={inputTypeSecond}
        
          />
          <div 
            className={styles.passwordEye}
            onClick={() => setInputTypeSecond(inputTypeSecond === 'password' ? 'text' : 'password')}
            >
             {inputTypeSecond === 'password' ? <FiEyeOff /> : <FiEye />}
          </div>
          


        <div className={styles.botonResetPassword}>
            <button disabled={password !== confirmPassword || !password} >Enviar</button>
        </div>
    </form>
    </div>
  );
};

export default ResetPassword;
