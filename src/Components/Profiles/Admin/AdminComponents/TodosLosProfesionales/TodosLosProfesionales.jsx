import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProfesionales } from "../../../../../Redux/Action/Actions";

function TodosProfesionales() {
  

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
