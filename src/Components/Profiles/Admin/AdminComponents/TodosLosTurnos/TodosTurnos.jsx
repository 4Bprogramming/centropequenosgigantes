import React from 'react'
import TableTurnos from '../../../tableTest/TableTurnos'
import { columns } from '../../columnsTurnos'
import { useSelector } from 'react-redux'

function TodosTurnos({token}) {
  const turnos=useSelector(state=>state.todosTurnos)

  return (
    <>
    <h1></h1>
    <TableTurnos token={token} data={turnos}columns={columns} title={'TodosTurnos'}/>
    </>
  ) 
}

export default TodosTurnos 