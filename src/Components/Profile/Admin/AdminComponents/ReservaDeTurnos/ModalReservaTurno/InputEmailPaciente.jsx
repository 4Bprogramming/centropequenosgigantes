import React from 'react'


function InputEmailPaciente({handlePago}) {
    return (
      <>
      
        <div style={{
          display:"flex",
          flexDirection:"column",
          marginTop:"5px"
          }}
        >
          <label style={{fontFamily:"monospace", fontWeight:"600"}} > Email Paciente:</label>
          <input style={{border:"2px solid black",borderRadius:"10px",padding:"3px"}} type="email" name='email' onChange={handlePago}/>
        </div>
          </>
      );
}

export default InputEmailPaciente