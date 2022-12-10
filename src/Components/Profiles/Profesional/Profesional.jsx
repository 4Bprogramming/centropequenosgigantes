import React, { useState,useEffect } from "react";
import styles from "./Profesional.module.css";
import GifDeEspera from "../../GifsDeEspera/GifDeEspera";
import reloj from "../../../assets/gifReloj.gif";
import TurnosDelProfesional from "./ComponentesProfesional/TurnosDelProfesional";
import { useDispatch } from "react-redux";
import { getProfesionaPorId } from "../../../Redux/Action/Actions";

function Profesional() {
  const dispatch = useDispatch()

  //traigo data del Local Storage para usarlos en las actions
  //--> por ejemplo el ID del profesional. 
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


  //opciones seleccionadas
  const [select, setSelect] = useState("");
  const handleClick = (value) => {
    //seteo el estado para renderizar el otro componente
    setSelect(value);
  };

  //Busco profesional por ID y lo paso por props
  useEffect(() => {
    dispatch(getProfesionaPorId(idProfesional,tokenSinComillas))
  }, [])


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
              Todos mis turnos
            </div>
            <div
              className={styles.options}
              onClick={() => handleClick("turnos disponibles")}
            >
              Turnos disponibles
            </div>
            <div
              className={styles.options}
              onClick={() => handleClick("turnos por atender")}
            >
              Turnos por atender
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
          {select === "todosTurnos" && <TurnosDelProfesional selectTurnos={'todosTurnos'}/>} 
          {select === "turnos disponibles" && <TurnosDelProfesional selectTurnos={'disponible'}/>}
          {select === "turnos por atender" && <TurnosDelProfesional selectTurnos={'pendiente'}/>}
        </div>
      </div>
    </>
  );
}

export default Profesional;
