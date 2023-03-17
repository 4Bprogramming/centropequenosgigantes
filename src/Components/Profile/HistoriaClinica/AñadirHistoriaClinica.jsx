import React from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import EditorTexto from "./EditorTexto";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  guardarHistoria,
  modificarTurnos,
} from "../../../Redux/Action/Actions";
//Alert notifications
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

function AñadirHistoriaClinica(props) {
  //por props debería venir fecha, hora, usuarioEmail, nombre paciente, dni paciente
  const { idTurno } = useParams();
  const dispatch = useDispatch();
  const turnos = useSelector((state) => state.profesionalPorID.turnos);
  const usuarios = useSelector((state) => state.todosUsuarios);
  const turno = turnos.filter((e) => e.id === idTurno)[0];
  const paciente = usuarios.filter((e) => e.email === turno.usuarioEmail)[0];
  const navigate = useNavigate();
  const data = localStorage.getItem("usuarioDB");
  const tokenLocal = localStorage.getItem("token");
  const {
    celular,
    email,
    fullName,
    idProfesional,
    imagenProfesional,
    matricula,
  } = JSON.parse(data);
  const token = JSON.parse(tokenLocal);
  const [post, setPost] = useState({
    mensaje: "",
    fecha: turno.date,
    hora: turno.startTime,
    usuarioEmail: paciente.email,
    paciente: paciente.fullName.toUpperCase(),
    documento: paciente.documento,
    profesional: fullName,
  });
  // console.log('cambio==>', post)
  function handleChange(e) {
    setPost({ ...post, mensaje: e.target.value });
  }
  function handleSubmit(e) {
    console.log("submit");
    e.preventDefault();
    const turnoModificar = {
      id:turno.id,
      estado:"finalizado",
      email:post.usuarioEmail,
    };
    if (post.mensaje !== "") {
      try {
        
        let body = {
          mensaje: post.mensaje,
          fecha: post.fecha,
          hora: post.hora,
          usuarioEmail: post.usuarioEmail,
          nombreProfesional: post.profesional,
        };
        console.log("mensaje==>", post.mensaje);
        console.log("turnoModificar==>", turnoModificar);
        dispatch(modificarTurnos(turnoModificar));

        // dispatch(guardarHistoria(body, token))
        NotificationManager.success(
          "Historia Clinica Guardada",
          "EXCELENTE",
          3000
        );
        // navigate('/profesional')
      } catch (error) {}
    } else {
      console.log("voy a subir e==>", e);
    }
  }
  return (
    <>
      AñadirHistoriaClinica
      <EditorTexto
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        post={post}
      />
      <NotificationContainer />
    </>
  );
}

export default AñadirHistoriaClinica;
