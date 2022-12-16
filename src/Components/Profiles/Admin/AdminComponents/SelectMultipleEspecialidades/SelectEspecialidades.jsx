import React from 'react';
import Select from 'react-select';
import makeAnimates from 'react-select/animated'
const animatedComponents= makeAnimates()


function SelectEspecialidades({handleSelelect, options, defaultValue}) {

    return (
      <>
    <Select 
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={defaultValue}
      isMulti
      options={options}
      onChange={handleSelelect}
      name={'especialidades'}
    />
      </>
    )
}

export default SelectEspecialidades