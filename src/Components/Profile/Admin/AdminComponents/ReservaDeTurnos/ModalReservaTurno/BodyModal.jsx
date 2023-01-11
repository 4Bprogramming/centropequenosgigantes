import React from 'react'

function BodyModal({body}) {
  return (
    <div>
        <p>El dia: {body[0].date}</p>
        <p>Hora: {body[0].startTime}</p>
        <p>Con el Profesional: {body[0].profesional.fullName}</p>
        <p></p>
        <p></p>
    </div>
  )
}

export default BodyModal