import React from 'react';
import Select from 'react-select';
import makeAnimates from 'react-select/animated'
const animatedComponents= makeAnimates()


function SelectProfesionales({onChange, options, idProfesional}) {   
  // console.log('options', options);
    return (
      <>
       <h2>Elige un Profesional</h2>
    <Select 
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={''}
      options={options}
      onChange={onChange}
      // value={idProfesional}
    />
      </>
    )
} 

export default SelectProfesionales