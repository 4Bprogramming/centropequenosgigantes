import React from "react";
import { useEffect,useState } from "react";
import TodosProfesionales from "../Admin/AdminComponents/TodosLosProfesionales/TodosLosProfesionales";
import styles from "./UsuarioPaciente.module.css";

function UsuarioPaciente() {
  //traigo data del Local Storage
  const data = localStorage.getItem("usuarioDB");
  const token = localStorage.getItem("token");
  const { celular, email, fullName } = JSON.parse(data);

  const [select, setSelect]=useState("");

  const handleClick=(value)=>{
          setSelect(value);
  }



  return (
    <>
      <div className={styles.mainUsuarioContainer}>
        <div className={styles.menuUsuario}>
          <h2 className={styles.usuarioTitle}>Menu</h2>
          <div className={styles.options} onClick={() => handleClick("todosProfesionales")}>Lista Profesionales</div>
        </div>
      </div>


      <div className={styles.mainRenderUsuario}>
        {select === "todosProfesionales" && <TodosProfesionales />}
      </div>
    </>
  );
}

export default UsuarioPaciente;
