import React from 'react';
import Select from 'react-select';
import makeAnimates from 'react-select/animated'
const animatedComponents= makeAnimates()


function SelectProfesionales({onChange, options, idProfesional}) {   
  
    return (
      <div style={{"width":"98%"}}>
       
    <Select 
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={''}
      options={options}
      onChange={onChange}
      placeholder = "Elegí un profesional"
      // value={idProfesional}
    /> 
      </div>
    )
} 

export default SelectProfesionales