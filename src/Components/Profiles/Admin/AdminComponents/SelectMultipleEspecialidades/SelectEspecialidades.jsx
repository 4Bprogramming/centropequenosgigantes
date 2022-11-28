import React from 'react';
import Select from 'react-select';
import makeAnimates from 'react-select/animated'
const animatedComponents= makeAnimates()


function SelectEspecialidades({handleSelelect, options}) {
    
  console.log('options', options);
  

    return (
      <>
    <Select 
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[]}
      isMulti
      options={options}
      onChange={handleSelelect}
    />
      </>
    )
}

export default SelectEspecialidades