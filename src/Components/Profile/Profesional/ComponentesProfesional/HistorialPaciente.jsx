import React from 'react'
import Button from "react-bootstrap/Button";
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function HistorialPaciente() {
    const {idTurno}=useParams()
    const turnos=useSelector((state)=>state.profesionalPorID.turnos)
    const usuarios=useSelector((state)=>state.todosUsuarios)
    const pacienteEmail= turnos.filter(e=>e.id===idTurno)[0].usuarioEmail
    const paciente= usuarios.filter(e=>e.email===pacienteEmail)

    
  return (
    <>
    <Button><Link to={`/historiaclinica/${idTurno}`}>hola</Link></Button>
    </>
  )
}

export default HistorialPaciente