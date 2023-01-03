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

  function handleSubmit() {}

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Registrarse</h1>
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
          required
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />

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
