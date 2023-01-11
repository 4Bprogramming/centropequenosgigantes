import React from "react";

function SelectFormaPago({ handlePago, formaPago }) {
  return (
    <div>
    
      <div
        style={{
          fontFamily: "monospace",
          marginTop: "10px",
          marginBottom: "10px",
          fontWeight: 600,
        }}
      >
        <span >Forma de Pago  del turno: </span>
      </div>
      <select value={formaPago} onChange={handlePago} name={"formaPago"}  style={{fontFamily:"monospace",padding:"5px",border:"2px solid black",borderRadius:"10px"}} >
        <option  value="selected" hidden>
          Seleccione una forma de pago
        </option>
        <option value={'Yape'}>Yape</option>
        <option value={'Pos'}>Pos</option>
        <option value={'Efectivo'}>Efectivo</option>
       
      </select>
    </div>
  );

}

export default SelectFormaPago;
