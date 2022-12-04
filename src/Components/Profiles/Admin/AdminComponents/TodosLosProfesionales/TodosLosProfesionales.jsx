import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProfesionales } from '../../../../../Redux/Action/Actions'

function TodosProfesionales() {
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(getProfesionales())
  },[])
  return (
    <h1>Todos Profesionales</h1>
  )
}

export default TodosProfesionales