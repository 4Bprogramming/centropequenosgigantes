import React, { useState } from 'react'
import ReservaForm from './ReservaForm';
import { seleccionProfesional } from '../CrearTurnos/SelectMultipleEspecialidades/Controllers';
import { useDispatch, useSelector } from 'react-redux';
import { getTurnos, modificarTurnos } from '../../../../../Redux/Action/Actions';
//Alert notifications
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css"; 

function ReservaTurnos({token}) {
  const dispatch = useDispatch();
  const profesionales = useSelector((state) => state.allProfessional);
  const usuarios = useSelector((state) => state.todosUsuarios);
  const turnosTodos=useSelector(state=>state.todosTurnos)
  const filterDay=Array.from(turnosTodos.map(turnos=>turnos.date.split('-').reverse().join('-')))
 console.log('FILTERdAY==>',filterDay);
  const turnosDisponibles=turnosTodos.filter(turno=>turno.estado==='disponible')
  const [habilitarCalendario, setHabilitarCalendario]=useState(false)
  const [cambioProfesional, setCambioProfesional]=useState(true)
  const [habilitarBoton, setHabilitarBoton]=useState(false)
  const [show, setShow]=useState(false)
  const [post, setPost] = useState({
    date: '',
    profesionalIdProfesional: "",
    turnosMostrar: [],
    nombreProfesional: "",
    turnoElegido: [],
    horariosCreados: false,
    formaPago:'',
    valorPago:'',
    emailPaciente:''
  });
    //FUNCION PARA CREAR {VALUE, LABEL} DEL SELECT DE PROFESIONALES
    const seleccionSelect = seleccionProfesional(profesionales);
    ///////////======HANDLE SELECT PROFESIONAL/////////////
    // console.log('idProfesional por fuera', post.profesionalIdProfesional);
    const handleSelect = (seletedOptions) => {
      let seleccion = [];
      let seleccion1 = seleccion?.push(seletedOptions);
      let seleccion2 = seleccion?.map((e) => e.value).toString();
      // console.log('idProfesional en select profesional', post.profesionalIdProfesional);
      let nombre= seletedOptions.label
      // console.log('seleccion nombre', nombre);
     
      setPost({ ...post, profesionalIdProfesional: seleccion2, nombreProfesional:nombre });
        setHabilitarBoton(true)
        setHabilitarCalendario(true)
        setCambioProfesional(false)
      //  console.log('que pasa con date==>',post.date);
        // handleChangeDate(fecha)
      
    };
    function handleClickChange(){
      setPost({ ...post, profesionalIdProfesional: '', date:'' });
        setHabilitarBoton(false)
        setHabilitarCalendario(false)
        setCambioProfesional(true)

    }
    function handleClick(e){
      e.preventDefault()
      let value=e.target.value
      let miTurno= post.turnosMostrar.filter(turno=> turno.id===value)
      setPost({ ...post, turnoElegido:miTurno});
      setShow(true)
    }
    // console.log('turno elegido===>',post.turnoElegido);
    function handleChangeDate(e) {
      console.log('me llamaron', e);
      let eleccion= `${e.date()}-${e.month()+1}-${e.year()}`
        setPost({
          ...post,
          date: eleccion,
        });  
       let TurnosDiaElegido=turnosDisponibles.filter(turnos=> turnos.profesionalIdProfesional=== post.profesionalIdProfesional && turnos.date===eleccion)
        setPost({
          ...post,
          turnosMostrar: TurnosDiaElegido,
        });
      // console.log('eleccion dia==>', eleccion);
      // console.log('idProfesional', post.profesionalIdProfesional);
      // console.log('TURNOS DISPONIBLES', turnosDisponibles);
      // console.log('TurnosDiaElegido===>', TurnosDiaElegido);
    } 
    function handlePago(e){
      let name=e.target.name
      let value= e.target.value
      if(name==='formaPago'){
        setPost({...post, formaPago:value})
      }
      if(name==='valor'){
        // console.log('valor===>', typeof value);
        setPost({...post, valorPago:value})
      }
      if(name==='email'){
        setPost({...post, emailPaciente:value})   
      }
    }
    function handleSubmit(e){
      // console.log('turnoElegido',post.turnoElegido);
      e.preventDefault()
      if(post.turnoElegido.length>0 && post.formaPago!=='' && post.valorPago!=='' && post.emailPaciente!==''){
        const existe=usuarios.filter(el=>el.email===post.emailPaciente)
        if(existe.length<1){
        return NotificationManager.error('email no registrado','ATENCION',5000)
        }
       
        const turnoReservado={
          id:post.turnoElegido[0].id,
          formaPago:post.formaPago,
          valor:post.valorPago,
          estado:'pendiente',
          email:post.emailPaciente
        }
        // console.log('SUBMIT ENVIADO==>>>', turnoReservado);
         dispatch(modificarTurnos(turnoReservado, token))
         dispatch(getTurnos(token))
         NotificationManager.success('Turno Reservado','EXCELENTE',3000)
         setShow(false)
         handleClickChange()
      }
    }

    // console.log('turnos mostrar===>', post.turnosMostrar);
  return (
    <>
    <ReservaForm 
    handleSubmit={handleSubmit}
    options={seleccionSelect}
    onChangeSelect={handleSelect}
    idProfesional={post.profesionalIdProfesional}
    date={post.date}
    onChangeDate={handleChangeDate}
    habilitarCalendario={habilitarCalendario}
    habilitarBoton={habilitarBoton}
    cambioProfesional={cambioProfesional}
    handleClickChange={handleClickChange}
    nombreProfesional={post.nombreProfesional}
    show={show}
    turnos={post.turnosMostrar}
    onClick={handleClick}
    onHide={() => setShow(false)}
    eleccion={post.turnoElegido}
    handlePago={handlePago}
    diasConTurnos={filterDay}
    />
    <NotificationContainer/>
    </>
  )
}

export default ReservaTurnos