import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth,signInWithEmailAndPassword, GoogleAuthProvider,
  signInWithPopup, } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import styles from "./Login.module.css";
import InputControl from "../ImputControl/InputControl";

function Login() {
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/user");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Correo"
        />
        <InputControl
          label="Password"
          type="password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Inicia Sesión
          </button>
          <Link to='/user' >
          <button style={{backgroundColor:'blue'}} 
          variant="info"
          size="sm"
          type="submit"
          onClick={() => signInWithPopup(auth, googleProvider)}>
            Inicia con Google
          </button>
          </Link>
          <p>
            ¿No Tienes cuenta?{" "}
            <span>
              <Link to="/register">Regístrate</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
