import React from "react";

function SelectDuracion({ onChange, duracion }) {
  return (

    <div><p>¿Cuánto dura cada turno?</p>
    <select value={duracion} onChange={onChange} name={'duracion'}>
      <option value='selected' hidden >Duracion del turno</option>
      <option value ={10}>10 mins</option>
      <option value ={20}>20 mins</option>
      <option value ={30}>30 mins</option>
      <option value ={40}>40 mins</option>
      <option value ={50}>50 mins</option>
      <option value ={60}>60 mins</option>
    </select></div> 
  )
}

export default SelectDuracion;
