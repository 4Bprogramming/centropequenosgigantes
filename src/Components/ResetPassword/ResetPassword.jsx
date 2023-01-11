import React, { useState } from "react";
import InputControl from "../ImputControl/InputControl";
import styles from "./resetPassword.module.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { resetPassword } from "../../Redux/Action/Actions";
import { useNavigate } from "react-router-dom";
import {NotificationContainer,NotificationManager,} from "react-notifications";
import "react-notifications/lib/notifications.css"; 




const ResetPassword = () => {
    const navigate = useNavigate();
  // Creamos dos estados para almacenar la contraseña y la confirmación de la contraseña
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //tomo el token desde Local Storage
  const token= JSON.parse(window.localStorage.getItem('token'))

  //tomo el select y el mail desde local storage
  const usuarioReset = JSON.parse(window.localStorage.getItem('usuarioReset'))



  //tipo de input
  const [inputType, setInputType] = useState("password");
  const [inputTypeSecond, setInputTypeSecond] = useState("password");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let respuestaDeAction = await resetPassword({...usuarioReset,password:password},token)
    if(respuestaDeAction?.message == '¡El cambio de su contraseña fue exitoso!'){
        NotificationManager.success(`${respuestaDeAction.message}`,"Enhorabuena!", 5000);
        NotificationManager.info(`Dirigiendo a LOGIN...`,"Sera redirigido!", 5000);
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => {
            navigate('/login')
        }, 4000);
    }else{
        NotificationManager.error(`${respuestaDeAction.message}`, "¡Atención!", 3000);
        setPassword("");
        setConfirmPassword("");
    }
  };

  return (
    <div className={styles.mainResetContainer}>
      <form className={styles.formReset} onSubmit={handleSubmit}>
        <h2>Elegí tu nueva contraseña</h2>

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
          onClick={() =>
            setInputType(inputType === "password" ? "text" : "password")
          }
        >
          {inputType === "password" ? <FiEyeOff /> : <FiEye />}
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
          onClick={() =>
            setInputTypeSecond(
              inputTypeSecond === "password" ? "text" : "password"
            )
          }
        >
          {inputTypeSecond === "password" ? <FiEyeOff /> : <FiEye />}
        </div>

        <div className={styles.botonResetPassword}>
          <button disabled={password !== confirmPassword || !password}>
            Enviar
          </button>
        </div>
      </form>
      <NotificationContainer />
    </div>
  );
};

export default ResetPassword;
