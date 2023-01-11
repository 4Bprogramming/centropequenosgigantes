import React from 'react'


function InputEmailPaciente({handlePago}) {
    return (
        <>
          <label > Email Paciente:</label>
          <input type="email" name='email' onChange={handlePago}/>
        </>
      );
}

export default InputEmailPaciente