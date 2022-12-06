import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfesionales } from "../../../Redux/Action/Actions";
import CardsProfesionales from "../../CardsProfesionales/CardsProfesionales";
import styles from "./UsuarioPaciente.module.css";

function UsuarioPaciente() {
  //traigo data del Local Storage
  const data = localStorage.getItem("usuarioDB");
  const token = localStorage.getItem("token");
  const { celular, email, fullName } = JSON.parse(data);
  const tokenSinComillas = JSON.parse(token);

  const dispatch = useDispatch();

  //traigo profesionales
  // const profesionales = useSelector(state => state.allProfessional);
  

  
  //opciones seleccionadas
  const [select, setSelect] = useState("");
  
  const handleClick = (value,tokenSinComillas) => {
    
    //llamo action y le paso token
    dispatch (getProfesionales(tokenSinComillas));
    //seteo el estado para renderizar el otro componente
    setSelect(value);
  };

  return (
    <>
      <div className={styles.mainUsuarioContainer}>
       

        <div className={styles.menuUsuario}>
          <h2 className={styles.usuarioTitle}>Menu</h2>
          <div
            className={styles.options}
            onClick={() => handleClick("todosProfesionales",tokenSinComillas)}
          >
            Lista Profesionales
          </div>
        </div>

        <div className={styles.mainRenderUsuario}>
          <h3>Bienvenido {fullName}</h3>
          <p>Tu teléfono:{celular} </p>
          <p>Tu email: {email}</p>
         
          {select === "todosProfesionales" && (
            <CardsProfesionales />
          )}
        </div>

      </div>
    </>
  );
}

export default UsuarioPaciente;
