import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfesionales, getTurnos } from "../../../Redux/Action/Actions";
import CardsProfesionales from "../../CardsProfesionales/CardsProfesionales";
import GifDeEspera from "../../GifsDeEspera/GifDeEspera";
import styles from "./UsuarioPaciente.module.css";
import snoopy from "../../../assets/snoopyDoc.gif";
import ReservaTurnos from "../Admin/AdminComponents/ReservaDeTurnos/ReservaTurnos";

function UsuarioPaciente() {
  //traigo data del Local Storage
  const data = localStorage.getItem("usuarioDB");
  const token = localStorage.getItem("token");
  const rol =JSON.parse(localStorage.getItem("rol")) ;

  const { celular, email, fullName } = JSON.parse(data);
  const tokenSinComillas = JSON.parse(token);

  const dispatch = useDispatch();

  useEffect(() => {
    //llamo action y le paso token
    dispatch(getProfesionales(tokenSinComillas));
    dispatch(getTurnos(token))
  }, []);

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
              onClick={() => handleClick("todosProfesionales")}
            >
              Lista Profesionales
            </div>
            <div
              className={styles.options}
              onClick={() => handleClick("reservarTurno")}
            >
              Reservar Turnos
            </div>

          </div>
        </div>

        {/* aca se renderizan otros componentes externos a usuario/paciente */}
        <div className={styles.mainRenderUsuario}>
          {/* gif si no eligio opcion */}
          {select === "" && 
            <GifDeEspera 
                titulo={'Elige nuestros profesionales desde el menú'}
                gif={snoopy}
                alt={'gif de Snoopy'}
            />
          }

          {/* opciones elegidas */}
          {select === "todosProfesionales" && <CardsProfesionales rol={rol} token={token} />}
          {select === "reservarTurno" && <ReservaTurnos rol={rol} token={token}/>}

        </div>
      </div>
    </>
  );
}

export default UsuarioPaciente;
