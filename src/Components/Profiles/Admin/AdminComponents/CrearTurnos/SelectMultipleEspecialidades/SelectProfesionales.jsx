import React from 'react';
import Select from 'react-select';
import makeAnimates from 'react-select/animated'
const animatedComponents= makeAnimates()


function SelectProfesionales({onChange, options, idProfesional}) {   
  // console.log('options', options);
    return (
      <div style={{"width":"98%"}}>
       <h2 style={{"fontFamily":"monospace","textShadow":"3px 2px 5px grey"}}>Elige un Profesional</h2>
    <Select 
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={''}
      options={options}
      onChange={onChange}
      placeholder = "Elegí una opción"
      // value={idProfesional}
<<<<<<< HEAD
    /> 
      </>
=======
    />
      </div>
>>>>>>> 8f2abbbaa93d672643c6508a12b5654800efba45
    )
} 

export default SelectProfesionales