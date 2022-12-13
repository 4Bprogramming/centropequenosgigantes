import React from 'react'

function SelectHora({onChange, inicio, final}) {
  console.log('SelectHora');
  return (
    <div>
         <p>Elige el horario de trabajo</p>
        <label for="tiempoInicio">Selecciona tiempo de inicio del día de consultas:</label>
    <input type="time" id="tiempoInicio" name="tiempoInicio" value ={inicio}
       min="09:00" max="18:00" onChange={onChange} required></input>

    <label for="tiempoFinal">Selecciona tiempo de Finalización del día de consultas:</label>

         <input type="time" id="tiempoFinal" name="tiempoFinal" value ={final}
       min="08:00" max="20:00" onChange={onChange} required></input>
    </div>
  )
}

export default SelectHora