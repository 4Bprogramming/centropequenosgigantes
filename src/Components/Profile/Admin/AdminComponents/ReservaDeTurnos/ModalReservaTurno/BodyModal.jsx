import { fontFamily } from '@mui/system'
import React from 'react'

function BodyModal({body, profesional}) {
console.log('body==>', body);
  return (
    <div className='DiaHoraProfesional'>
        <p  style={{fontFamily:"monospace",fontWeight:"600  "}}> El dia: <span style={{fontStyle:"italic",fontWeight:"200"}}>{body[0]?.date}</span></p>
        <p style={{fontFamily:"monospace",fontWeight:"600 "}}>Hora: <span style={{fontStyle:"italic",fontWeight:"200"}}>{body[0]?.startTime}</span></p>
       {
        profesional?
        <p style={{fontFamily:"monospace",fontWeight:"600 "}}>Con el Profesional: <span style={{fontStyle:"italic",fontWeight:"400",color:"green"}}>{profesional}</span></p>:
       <p style={{fontFamily:"monospace",fontWeight:"600 "}}>Con el Profesional: <span style={{fontStyle:"italic",fontWeight:"400",color:"green"}}>{body[0]?.profesional.fullName}</span></p>
       }
       
    </div>
  )
}

export default BodyModal