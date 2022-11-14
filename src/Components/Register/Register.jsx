import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from '../ImputControl/InputControl'
import { auth } from '../../Firebase/Firebase'
import styles from "./Signup.module.css";

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
    <div className={styles.innerBox}>
      <h1 className={styles.heading}>Registrarse</h1>

      <InputControl
        label="Nombre"
        placeholder="Nombre del Paciente"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, name: event.target.value }))
        }
      />
      <InputControl
        label="Email"
        placeholder="Correo Electronico"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))
        }
      />
      <InputControl
        label="Password"
        placeholder="Ingrese su COntraseña"
        type="password"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, pass: event.target.value }))
        }
      />

      <div className={styles.footer}>
        <b className={styles.error}>{errorMsg}</b>
        <button onClick={handleSubmission} disabled={submitButtonDisabled}>
          Registrarse
        </button>
        <p>
          ¿Ya tienes cuenta?{" "}
          <span>
            <Link to="/login">Inicia Sesión</Link>
          </span>
        </p>
      </div>
    </div>
  </div>
  )
} 

export default Register