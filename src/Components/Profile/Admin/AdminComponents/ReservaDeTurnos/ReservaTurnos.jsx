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

function ReservaTurnos({token, rol}) {


  const dispatch = useDispatch();
  const profesionales = useSelector((state) => state.allProfessional);
  const usuarios = useSelector((state) => state.todosUsuarios);
  const turnosTodos=useSelector(state=>state.todosTurnos)
  const filterDay=Array.from(turnosTodos.map(turnos=>turnos.date.split('-').reverse().join('-')))
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
  
    const handleSelect = (seletedOptions) => {
      let seleccion = [];
      let seleccion1 = seleccion?.push(seletedOptions);
      let seleccion2 = seleccion?.map((e) => e.value).toString();
      
      let nombre= seletedOptions.label
    
     
      setPost({ ...post, profesionalIdProfesional: seleccion2, nombreProfesional:nombre });
        setHabilitarBoton(true)
        setHabilitarCalendario(true)
        setCambioProfesional(false)
      
      
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
    
    function handleChangeDate(e) {
     
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
    
    } 
    function handlePago(e){
      let name=e.target.name
      let value= e.target.value
      if(name==='formaPago'){
        setPost({...post, formaPago:value})
      }
      if(name==='valor'){
       
        setPost({...post, valorPago:value})
      }
      if(name==='email'){
        setPost({...post, emailPaciente:value})   
      }
    }
    function handleSubmit(e){
      console.log('turnoElegido',post.turnoElegido);
      console.log('e',e);
      e.preventDefault()
      console.log('post.turnoElegido.length===>', post.turnoElegido)
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

        dispatch(getTurnos(token))
        console.log('SUBMIT ENVIADO==>>>', turnoReservado);
         dispatch(modificarTurnos(turnoReservado, token))
         NotificationManager.success('Turno Reservado','EXCELENTE',3000)
         setShow(false)
         handleClickChange()
      }
      else if(post.turnoElegido.length===0){
        NotificationManager.error('Tiene que elegir un metodo de pago')
      }
    }
    function handleSubmitUser(e){
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
        
         dispatch(modificarTurnos(turnoReservado, token))
         dispatch(getTurnos(token))
         NotificationManager.success('Turno Reservado','EXCELENTE',3000)
         setShow(false)
         handleClickChange()
      }
    }

    
  return (
    <>
    <ReservaForm 
    handleSubmit={handleSubmit}
    handleSubmitUser={handleSubmitUser}
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
    rol={rol}
    />
    <NotificationContainer/>
    </>
  )
}

export default ReservaTurnos