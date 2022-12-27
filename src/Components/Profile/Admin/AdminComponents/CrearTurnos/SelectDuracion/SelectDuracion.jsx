import React from "react";

function SelectDuracion({ onChange, duracion }) {
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
        ¿<span style={{ color: "red" }}>Cuánto</span> dura cada turno?
      </div>
      <select value={duracion} onChange={onChange} name={"duracion"}  style={{fontFamily:"monospace",padding:"5px",border:"2px solid black",borderRadius:"10px"}} >
        <option  value="selected" hidden>
          Duracion del turno
        </option>
        <option value={10}>10 mins</option>
        <option value={20}>20 mins</option>
        <option value={30}>30 mins</option>
        <option value={40}>40 mins</option>
        <option value={50}>50 mins</option>
        <option value={60}>60 mins</option>
      </select>
    </div>
  );

}

export default SelectDuracion;
