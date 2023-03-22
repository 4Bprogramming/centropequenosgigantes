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
    console.log('paciente==>', paciente);

    
  return (
    <>
    <div>Paciente: {paciente[0].fullName}</div>
    {
      paciente.length >0 && !paciente[0].historiaclinica ?
      <div> No posee historia clínica</div>:
      <div>
        {
          paciente && paciente.map(e=>{
            return(
            <div>
              Fecha: {e.historiaclinica.fecha}
              Profesional que antendió: {e.historiaclinica.nombreProfesional}
              Evaluación:{e.historiaclinica.mensaje}
            </div>

            )
        
        
         
          }) 

        }
      </div>
      
    }
    <Button><Link to={`/historiaclinica/${idTurno}`}>hola</Link></Button>
    </>
  )
}

export default HistorialPaciente