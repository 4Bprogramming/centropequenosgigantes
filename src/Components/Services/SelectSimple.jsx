import React from "react";
import Select from "react-select";
import makeAnimates from "react-select/animated";
const animatedComponents = makeAnimates();

function SelectSimple({ onChange, options }) {
  // console.log("options", options);

  return (
    <>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        options={options}
        onChange={onChange}
      />
    </>
  );
}

export default SelectSimple;
