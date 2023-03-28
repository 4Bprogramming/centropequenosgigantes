import React from 'react'
import { useSelector } from 'react-redux'
import ProfesionalesTableResponsive from '../../../tableTest/ProfesionalesTableTest'
import { columns } from '../../columsProfesional'

function TodosProfesionales({token}) {
  
  
  
  let profesionales1=useSelector((state)=>state.allProfessional)
  let profesionales=profesionales1.filter(e=>e.active===true)


  return ( 
    <ProfesionalesTableResponsive columns={columns} data={profesionales} title={'Lista de Profesionales'} token={token}/>
  )
} 

export default TodosProfesionales;
