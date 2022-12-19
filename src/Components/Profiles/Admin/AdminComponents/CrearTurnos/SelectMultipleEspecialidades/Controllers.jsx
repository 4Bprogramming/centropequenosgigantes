import React from 'react';
// import { blog } from '../../../../Services/SevicesCard';
export function seleccionProfesional(lista){
    const seleccion =lista.map(e=>{return{value: e.idProfesional, label:e.fullName}})
        return seleccion
}
  