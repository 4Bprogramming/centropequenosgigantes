// import React, { useState } from 'react'
// import ReservaForm from './ReservaForm';
// import { seleccionProfesional } from '../CrearTurnos/SelectMultipleEspecialidades/Controllers';
// import { useDispatch, useSelector } from 'react-redux';

// function ReservaTurnos() {
//   const dispatch = useDispatch();
//   const profesionales = useSelector((state) => state.allProfessional);
//   const turnosTodos=useSelector(state=>state.todosTurnos)
//   const turnosDisponibles=turnosTodos.filter(turno=>turno.estado==='disponible')
//   const [habilitarCalendario, setHabilitarCalendario]=useState(false)
//   const [cambioProfesional, setCambioProfesional]=useState(true)
//   const [habilitarBoton, setHabilitarBoton]=useState(false)
//   const [post, setPost] = useState({
//     date: '',
//     profesionalIdProfesional: "",
//     turnosMostrar: [],
//     nombreProfesional: "",
//     duracion: "",
//     horariosCreados: false,
//   });
//     //FUNCION PARA CREAR {VALUE, LABEL} DEL SELECT DE PROFESIONALES
//     const seleccionSelect = seleccionProfesional(profesionales);
//     ///////////======HANDLE SELECT PROFESIONAL/////////////
//     // console.log('idProfesional por fuera', post.profesionalIdProfesional);
//     const handleSelect = (seletedOptions) => {
//       let seleccion = [];
//       let seleccion1 = seleccion?.push(seletedOptions);
//       let seleccion2 = seleccion?.map((e) => e.value).toString();
//       // console.log('idProfesional en select profesional', post.profesionalIdProfesional);
//       let nombre= seletedOptions.label
//       console.log('seleccion nombre', nombre);
     
//       setPost({ ...post, profesionalIdProfesional: seleccion2, nombreProfesional:nombre });
//         setHabilitarBoton(true)
//         setHabilitarCalendario(true)
//         setCambioProfesional(false)
//        console.log('que pasa con date==>',post.date);
//         // handleChangeDate(fecha)
      
//     };
//     function handleClickChange(){
//       setPost({ ...post, profesionalIdProfesional: '', date:'' });
//         setHabilitarBoton(false)
//         setHabilitarCalendario(false)
//         setCambioProfesional(true)

//     }
//     function handleClick(e){console.log('evento turno elegido===>',e);}
//     function handleChangeDate(e) {
//       // console.log('me llamaron');
//       let eleccion= `${e.day}-${e.month.number}-${e.year}`
//         setPost({
//           ...post,
//           date: eleccion,
//         });
//        let TurnosDiaElegido=turnosDisponibles.filter(turnos=> turnos.profesionalIdProfesional=== post.profesionalIdProfesional && turnos.date===eleccion)
//         setPost({
//           ...post,
//           turnosMostrar: TurnosDiaElegido,
//         });
//       console.log('eleccion dia==>', eleccion);
//       // console.log('idProfesional', post.profesionalIdProfesional);
//       // console.log('TURNOS DISPONIBLES', turnosDisponibles);
//       console.log('TurnosDiaElegido===>', TurnosDiaElegido);
//     }
//     console.log('NOMBRE PROFESIONL===>', post.nombreProfesional);
//   return (
//     <>
//     <ReservaForm 
//     options={seleccionSelect}
//     onChangeSelect={handleSelect}
//     idProfesional={post.profesionalIdProfesional}
//     date={post.date}
//     onChangeDate={handleChangeDate}
//     habilitarCalendario={habilitarCalendario}
//     habilitarBoton={habilitarBoton}
//     cambioProfesional={cambioProfesional}
//     handleClickChange={handleClickChange}
//     nombreProfesional={post.nombreProfesional}
//     />
//     {
//       post.turnosMostrar.length>0 &&
//       post.turnosMostrar.map(e=>{
//         return(
//           <button onClick={handleClick}>
//             {e.startTime}
//           </button>
//         )
//       })
//     }
//     </>
//   )
// }

// export default ReservaTurnos