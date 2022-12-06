import React from 'react'
import { useSelector } from 'react-redux'

function CardsProfesionales() {

 //traigo profesionales
  const profesionales = useSelector(state => state.allProfessional);

 console.log('profesionales desde cartas profesionales',profesionales)

  return (
    <>
    <h1>Profesionales</h1>
    {/* {   
        !profesionales.length ? 'no hay nada':
        profesionales?.map(pro=> {
            <div>{pro?.nombre}</div>
        })
    } */}
    </>
  )
}

export default CardsProfesionales