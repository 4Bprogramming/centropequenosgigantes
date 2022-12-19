import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfesionales } from '../../../../../Redux/Action/Actions'
import ProfesionalesTableResponsive from '../../../tableTest/ProfesionalesTableTest'
import { columns } from '../../columsProfesional'

function TodosProfesionales({token}) {
  const dispatch=useDispatch()
 
  
  let profesionales1=useSelector((state)=>state.allProfessional)
  let profesionales=profesionales1.filter(e=>e.active===true)
  // console.log('profesionales=>', profesionales1)

  return (
    <ProfesionalesTableResponsive columns={columns} data={profesionales} title={'Lista de Profesionales'} token={token}/>
  )
} 

export default TodosProfesionales;
