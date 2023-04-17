import React from 'react'
import { useSelector } from 'react-redux'
import { columns } from '../../columnsTurnos'
import TableTurnosPendientes from '../../../tableTest/TableTurnosPendientes'

function TurnosPendientes({token}) {
  const turnos1= useSelector(state=>state.todosTurnos)
  const turnos=turnos1.filter(turno=>turno.estado==='pendiente')
;
  return (
    <>
    <TableTurnosPendientes token={token} data={turnos}columns={columns} title={'Todos Pendientes'} estado={'pendiente'}/>
    </>
  ) 
}

export default TurnosPendientes;