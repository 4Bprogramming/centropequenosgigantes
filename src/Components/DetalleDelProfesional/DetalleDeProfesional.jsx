import React, { useState } from 'react'
import ReservaTurnos from '../Profile/Admin/AdminComponents/ReservaDeTurnos/ReservaTurnos'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

function DetalleDeProfesional({props}) {
  const token = localStorage.getItem("token");
  const rol =JSON.parse(localStorage.getItem("rol")) ;
  const data = localStorage.getItem("usuarioDB");
  const { celular, email, fullName } = JSON.parse(data);
  const profesionales=useSelector((state) => state.allProfessional);
  const {idProfesional}=useParams()
  const profesional=profesionales.filter(e=>e.idProfesional===idProfesional)
  

  return (
   <ReservaTurnos rol={rol} profesional={profesional} email={email}
 />
  )
}

export default DetalleDeProfesional