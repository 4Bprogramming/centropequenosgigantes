// import React from 'react'
// import SelectProfesionales from '../CrearTurnos/SelectMultipleEspecialidades/SelectProfesionales'
// import SelectFecha from './SelectFecha'


// function ReservaForm(props) {

//   return (
//     <>
//     <div>Reserva Form</div>
//     {
//       props.cambioProfesional &&
//     <SelectProfesionales 
//     options={props.options}
//     onChange={props.onChangeSelect}
//     idProfesional={props.idProfesional}
//     />
//     }
//     {
//       props.habilitarBoton &&
//       <>
//       <p>Profesional: {props.nombreProfesional}</p>
//       <button onClick={props.handleClickChange}>
//         Cambiar Profesional
//       </button>
//       </>
//     }
//     {
//       props.habilitarCalendario &&
//       <div>
//         <p>Elegir Fecha</p>

//         <SelectFecha date={props.date} onChange={props.onChangeDate} />
//         <p>elegir turnos</p>
//       </div>
//     }
//     <p></p>
//     <p></p>
//     </>
//   )
// }

// export default ReservaForm