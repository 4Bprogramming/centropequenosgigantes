import React from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import EditorTexto from "./EditorTexto";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getHistorias,
  getProfesionaPorId,
  getTurnos,
  getUsuarios,
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
  const profesional = useSelector((state) => state.profesionalPorID);

  const turnos = profesional.turnos;
  const usuarios = useSelector((state) => state.todosUsuarios);
  const turno = turnos?.filter((e) => e.id === idTurno)[0];
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
    documento: paciente.idUsuario,
    profesional: fullName,
  });

  function handleChange(e) {
    setPost({ ...post, mensaje: e.target.value });
  }
  function handleSubmit(e) {
    // e.preventDefault();

    if (post.mensaje !== "") {
      try {
        let body = {
          mensaje: post.mensaje,
          fecha: post.fecha,
          hora: post.hora,
          usuarioEmail: post.usuarioEmail,
          nombreProfesional: post.profesional,
        };

        const turnoReservado = {
          id: turno.id,
          formaPago: "",
          valor: "",
          estado: "finalizado",
          email: post.usuarioEmail,
        };

        dispatch(guardarHistoria(body, token));
        dispatch(getProfesionaPorId(idProfesional, token));
        dispatch(getHistorias(token));
        dispatch(getUsuarios(token));
        dispatch(getTurnos(token));
        dispatch(modificarTurnos(turnoReservado));
        setTimeout(() => {
          navigate("/profesional");
        }, 2000);
        NotificationManager.success(
          "Historia Clinica Guardada",
          "EXCELENTE",
          3000
        );
      } catch (error) {}
    } else {
    }
  }
  return (
    <>
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
