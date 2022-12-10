import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'



function TurnosDelProfesional({selectTurnos}) {
   
  const profesionalPorId = useSelector((state)=> state.profesionalPorID);
  
   
  let arrayDeTurnos=null;

  if(selectTurnos === 'todosTurnos'){

    //todos los turnos
    arrayDeTurnos = profesionalPorId.turnos;
    
  } 
  else if(selectTurnos === 'disponible'){
     arrayDeTurnos = profesionalPorId.turnos.filter((element)=> element.estado === selectTurnos);
  }
  else if(selectTurnos === 'pendiente'){
    arrayDeTurnos = profesionalPorId.turnos.filter((element)=> element.estado === selectTurnos);
 }

  console.log('turnos infinitos',arrayDeTurnos)
 
  return (
    <div>TurnosDelProfesional</div>
  )
}

export default TurnosDelProfesional