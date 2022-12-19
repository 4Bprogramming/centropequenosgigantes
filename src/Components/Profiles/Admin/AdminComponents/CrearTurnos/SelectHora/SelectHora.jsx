import { lightGreen } from "@mui/material/colors";
import React from "react";

//declaro estilos internos en el componente

const styleDiv = {
  display:"flex",
  flexDirection: "column",
  
 
}

const label = {
  fontFamily: "monospace",
  marginTop: "10px",
  marginBottom: "10px",
  fontWeight: 600,
}




function SelectHora({ onChange, inicio, final }) {
  console.log("SelectHora");
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
        Elegí el <span style={{ color: "red" }}>horario</span> de trabajo
      </div>

      <div style={styleDiv} >
        <label style={label} for="tiempoInicio">
          Selecciona tiempo de <span style={{ fontStyle:"italic",color:"green"}}>inicio</span> del día de consultas:
        </label>
        <input
          style={{width:"120px",textAlign:"center",border:"2px solid black",borderRadius:"10px"}}
          type="time"
          id="tiempoInicio"
          name="tiempoInicio"
          value={inicio}
          min="09:00"
          max="18:00"
          onChange={onChange}
          required
        ></input>

        <label style={label} for="tiempoFinal">
          Selecciona tiempo de <span style={{ fontStyle:"italic",color:"green"}}>finalización</span> del día de consultas:
        </label>

        <input
          style={{width:"120px",textAlign:"center",border:"2px solid black",borderRadius:"10px"}}
          type="time"
          id="tiempoFinal"
          name="tiempoFinal"
          value={final}
          min="08:00"
          max="20:00"
          onChange={onChange}
          required
        ></input>
      </div>
    </div>
  );
}


export default SelectHora;

