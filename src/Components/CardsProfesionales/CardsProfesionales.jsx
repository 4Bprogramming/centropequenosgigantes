import React from 'react'
import { useSelector } from 'react-redux'

function CardsProfesionales(props) {

 

 console.log('profesionales',props.profesionales)

  return (
    <>
    <h1>CardsProfesionales</h1>
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