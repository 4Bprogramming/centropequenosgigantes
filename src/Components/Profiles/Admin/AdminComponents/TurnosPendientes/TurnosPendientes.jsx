import React from 'react'
import { useSelector } from 'react-redux'
import TableTurnos from '../../../tableTest/TableTurnos'
import { columns } from '../../columnsTurnos'

function TurnosPendientes({token}) {
  const turnos1= useSelector(state=>state.todosTurnos)
  const turnos=turnos1.filter(turno=>turno.estado==='pendiente')
  return (
    <>
    <TableTurnos token={token} data={turnos}columns={columns} title={'Todos Pendientes'} estado={'pendiente'}/>
    </>
  )
}

export default TurnosPendientes