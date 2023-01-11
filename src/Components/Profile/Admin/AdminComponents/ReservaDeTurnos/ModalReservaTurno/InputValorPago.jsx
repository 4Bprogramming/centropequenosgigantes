import React from 'react'


function InputValorPago({handlePago}) {
    return (
        <>
          <label > Valor del turno: S/</label>
          <input type="text" name='valor' onChange={handlePago}/>
        </>
      );
}

export default InputValorPago