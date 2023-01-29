import React from 'react'


function InputValorPago({handlePago}) {
    return (
        <>
        <div style={{
          display:"flex",
          flexDirection:"column",
          marginTop:"5px"
          }}
        >
          <label style={{fontFamily:"monospace", fontWeight:"600"}} > Valor del turno: S/</label>
          <input style={{border:"2px solid black",borderRadius:"10px",padding:"3px"}} type="text" name='valor' onChange={handlePago}/>
          </div>
        </>
      );
}

export default InputValorPago