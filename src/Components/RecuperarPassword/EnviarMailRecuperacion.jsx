import React, { useState } from "react";
import styles from "./recuperar.module.css";
import InputControl from "../ImputControl/InputControl";
import { passwordOlvidado } from "../../Redux/Action/Actions";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../customsHooks/useLocalStorage";

function EnviarMailRecuperacion() {
  const [email, setEmail] = useState("");
  const [emailValido, setEmailvalido] = useState(true);

  const navigate = useNavigate();

  //validando email
  //validador de mail con regex
  const validateEmail = (e) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmailvalido(emailRegex.test(e.target.value));
  };

  //onSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let respuestaPasswordOlvidado = await passwordOlvidado({ email: email });

      if (respuestaPasswordOlvidado.message === "El email no fue encontrado.") {
        return NotificationManager.error(
          `${respuestaPasswordOlvidado.message}`,
          "¡Atención!",
          3000
        );
      }
      // NotificationManager.info(`Estamos verificando el email`, "Espera unos segundos!", 3000);
      NotificationManager.success(
        `Chequea tu correo! Seras dirigido a Home`,
        "Enhorabuena!",
        3000
      );
      // NotificationManager.success(, "", 2000);
      setTimeout(() => {
        navigate("/");
      }, 3500);
    } catch (error) {}
  };

  return (
    <div className={styles.mainContainerPassRecover}>
      <form className={styles.formRecovery}>
        <h2 className={styles.heading}>Recuperar Contraseña</h2>
        <InputControl
          label="Email"
          name="email"
          placeholder="Ingresá Correo"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
        />
        {!emailValido && (
          <p style={{ color: "red", fontStyle: "italic" }}>
            Formato email incorrecto
          </p>
        )}

        <div className={styles.submit}>
          <button onClick={handleSubmit} disabled={!emailValido || !email}>
            Enviar
          </button>
        </div>
      </form>
      <NotificationContainer />
    </div>
  );
}

export default EnviarMailRecuperacion;
