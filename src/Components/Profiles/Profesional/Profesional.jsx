import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Profesional.module.css";
import GifDeEspera from "../../GifsDeEspera/GifDeEspera";
import reloj from "../../../assets/gifReloj.gif";

function Profesional() {
  //traigo data del Local Storage para usarlos en las actions
  const data = localStorage.getItem("usuarioDB");
  const token = localStorage.getItem("token");
  const {
    celular,
    email,
    fullName,
    idProfesional,
    imagenProfesional,
    matricula,
  } = JSON.parse(data);
  const tokenSinComillas = JSON.parse(token);

  //use dispatch
  const dispatch = useDispatch();

  //opciones seleccionadas
  const [select, setSelect] = useState("");
  const handleClick = (value) => {
    //seteo el estado para renderizar el otro componente
    setSelect(value);
  };

  return (
    <>
      <div className={styles.mainUsuarioContainer}>
        <div className={styles.menuYdatosPaciente}>
          <div className={styles.misDatosUsuarioPaciente}>
            <h3>
              <strong>¡Hola!</strong> {fullName}
            </h3>
            <p>
              <strong>Tu teléfono:</strong> {celular}{" "}
            </p>
            <p>
              <strong>Tu email:</strong> {email}
            </p>
          </div>

          <div className={styles.menuUsuario}>
            <h2 className={styles.usuarioTitle}>Menu</h2>

            <div
              className={styles.options}
              onClick={() => handleClick("todosTurnos")}
            >
              Mis turnos
            </div>
          </div>
        </div>

        {/* aca se renderizan otros componentes externos a usuario/paciente */}
        <div className={styles.mainRenderUsuario}>
          {/* gif si no eligio opcion */}
          {select === "" && (
            <GifDeEspera
              titulo={"¿No has elegido una opción?"}
              gif={reloj}
              alt={"reloj bailando"}
            />
          )}

          {/* opciones elegidas */}
          {select === "todosTurnos" && "se busca profesional por ID y se traen los turnos que se guardan en REDUX"}
        </div>
      </div>
    </>
  );
}

export default Profesional;
