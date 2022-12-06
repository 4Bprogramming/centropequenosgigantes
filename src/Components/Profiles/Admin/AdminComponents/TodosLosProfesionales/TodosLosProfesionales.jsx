import React, { useEffect } from "react";
import {  useSelector } from "react-redux";


function TodosProfesionales() {
  
  // const profesionales = useSelector((state)=> state.allProfessional);  
 
 
  return (
    <>
      {/* {
      !profesionales.length ? 'Loading...' 
        : 
      <div>
        {profesionales.map((profesional) => {
          <div key={profesional.email}>
            <div>{profesional?.fullName}</div>
            <div>{profesional?.email}</div>
            <div>{profesional?.matricula}</div>
            <div>
              <img
                src={profesional?.imagenProfesional}
                alt="imagen Profesional"
              />
            </div>
            <div>{profesional?.especialidad}</div>
            <div>{profesional?.turnos}</div>
          </div>;
        })}
      </div>
      } */}
    </>
  );
}

export default TodosProfesionales;
