import React from 'react'
import { useSelector } from 'react-redux'
import TableTurnos from '../../../tableTest/TableTurnos'
import { columns } from '../../columnsTurnos'
function TurnosCancelados({token}) {
    const turnos1= useSelector(state=>state.todosTurnos)
    const turnos=turnos1.filter(turno=>turno.estado==='cancelado')
    return (
      <>
      <TableTurnos token={token} data={turnos}columns={columns} title={'Todos Pendientes'}/>
      </>
    )

}

export default TurnosCancelados  