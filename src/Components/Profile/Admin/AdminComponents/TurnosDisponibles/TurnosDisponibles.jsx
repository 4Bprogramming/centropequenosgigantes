import React from 'react'
import { useSelector } from 'react-redux';
import TableTurnos from '../../../tableTest/TableTurnos';
import { columns } from '../../columnsTurnos';

function TurnosDisponibles({token}) {
  const turnos1= useSelector(state=>state.todosTurnos)
  const turnos=turnos1.filter(turno=>turno.estado==='disponible')
  return (
    <>
    <TableTurnos token={token} data={turnos}columns={columns} title={'Todos Disponibles'} estado={'disponible'}/>
    </>
  )
} 

export default TurnosDisponibles;