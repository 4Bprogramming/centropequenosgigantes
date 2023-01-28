import React from 'react'
import TableTurnos from '../../../tableTest/TableTurnos'
import { columns } from '../../columnsTurnos'
import { useSelector } from 'react-redux'

function TodosTurnos({token}) {
  const turnos=useSelector(state=>state.todosTurnos)

  return (
    <>
    
    <TableTurnos token={token} data={turnos}columns={columns} title={'Lista completa de turnos'}/>
    </>
  ) 
}

export default TodosTurnos 