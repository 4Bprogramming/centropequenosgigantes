import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { seleccionProfesional } from './SelectMultipleEspecialidades/Controllers'
import SelectProfesionales from './SelectMultipleEspecialidades/SelectProfesionales'
import moment from "moment";
import { horariosTurnosCreados, subirTurnos } from '../../../../../Redux/Action/Actions';
import SelectDuracion from './SelectDuracion/SelectDuracion';
import SelectHora from './SelectHora/SelectHora';
import SelectFecha from './SelectFecha/SelectFecha';
//Alert notifications
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";


function CrearTurnos() {
  const dispatch= useDispatch()
 
  //selector Estado
  const horariosCreadosCompletos=useSelector(state=>state.horasCreadas)
  console.log('horariosCreadosCompletos', horariosCreadosCompletos);
  const profesionales= useSelector(state=>state.allProfessional)
  const message= useSelector(state=>state.message)
  //creacion useState
  const [post, setPost]=useState({
    date:[],
    profesionalIdProfesional:'',
    tiempoInicio:'',
    tiempoFinal:'',
    duracion:'',
    horariosCreados:[]
  })
  const [date, setDate] = useState([]);
  // const [profesionalIdProfesional, setProfesionalIdProfesional]= useState('')
  // const [tiempoInicio, setTiempoInicio]= useState()
  // const [tiempoFinal, setTiempoFinal]= useState()
  // const [duracion, setDuracion]= useState()
  // const [horariosCreados, setHorariosCreados]= useState([])
  
  //FUNCIONES/////////////////
  
  if(horariosCreadosCompletos.length>0){
    console.log('aca repite 1?');
    setPost({...post, horariosCreados:[...horariosCreadosCompletos]})
    post.horariosCreados.pop()
  }
  console.log('horariosCreados', post.horariosCreados);
  console.log('aca repite 2?');
  
  //FUNCION PARA CREAR {VALUE, LABEL} DEL SELECT DE PROFESIONALES
  const seleccion = seleccionProfesional(profesionales)
  console.log('aca repite 3?');
  
  ///////////======HANDLE SELECT PROFESIONAL/////////////
  const handleSelelect = (selectedOptions) => {
    let seleccion3=[]
    let seleccion1 = seleccion3?.push(selectedOptions)
    let seleccion2=seleccion3?.map((e) => e.value).toString();
    console.log('seleccion 2', selectedOptions);
    setPost({...post, profesionalIdProfesional:seleccion2});
    console.log('aca repite 4?', post.profesionalIdProfesional);
  };
  
  ////////////////////HANDLE CHANGE////////////////////////////////////////////////////////////
  
  function handleChangeTime(e){
    e.preventDefault();    
    setPost({
      ...post,
      [e.target.name]:e.target.value
    })
    console.log('aca repite 5?');
   }
      ///////SUBMIT PARA CREAR HORARIOS////////
      console.log('aca repite 9?');
      function submitTime(){
        console.log('aca repite 10?');
        // if( tiempoInicio<'08:00' || tiempoInicio>'20:00'|| tiempoFinal<'08:00' || tiempoFinal>'20:00' ){
        //   console.log('aca repite 11?');
        //   NotificationManager.error('')
        // }
        // else if(tiempoFinal<tiempoInicio){
        //   console.log('aca repite 12?');
        //   NotificationManager.error('')
        // }
        let horarioCreado={
          tiempoInicio:post.tiempoInicio,
          tiempoFinal: post.tiempoFinal,
          duracion: post.duracion
        }
        console.log('aca repite 13?');
        console.log('morningHours mando a crear==>', horarioCreado)
        dispatch(horariosTurnosCreados(horarioCreado))
      }
      console.log('aca repite 14?');
      
      /////////////////////////////////////////////////////////////////////////////////
      // let date2 = date.map(d=>({day:d.day, month:d.month.index, year:d.year}));
      // let dateArray=[];
      // let noDay=[];
      // for (let i = 0; i < date2.length; i++) {     
      //   let dayCurrent= moment()    
        
      //   let dayNext= new moment(`${date2[i].year}-${Number(date2[i].month)+1}-${date2[i].day}`);
        
      //   if(dayNext>dayCurrent){
      //     dateArray.push(date2[i])
      //   }
      //   else{
      //     noDay.push(date[i])
      //   }
      // };
      // console.log('aca repite 15?');
      /////////////////////////////SUBMIT PARA GUARDAR EN BASE DE DATOS/////////////////////////////////////////////////////////////
      function submitAll(e){
      console.log('aca repite 16?');
      // try {
    
      //  if(horariosCreadosCompletos && duracion && date && profesionalIdProfesional){
      //    let turnosACrear={
      //      dates: dateArray,
      //      hours: horariosCreadosCompletos.map(hr=>{return hr.start}),
      //      profesionalIdProfesional: profesionalIdProfesional,
      //    }
      //    dispatch(subirTurnos(turnosACrear))
      //    NotificationManager.success(`${message}`,"Excelente!", 3000);
      //    setDate([])
      //    setTiempoFinal('')
      //    setTiempoInicio('')
      //    setProfesionalIdProfesional('')
      //    setDuracion('')
      //    setHorariosCreados([])
      //   } 
      //   else{
      //    NotificationManager.error('Revise que todos los campos esten llenos',"ATENCION!", 3000);
      //  }              
      // } catch (error) {
      //   console.log('se pueden crear?', error);
      //   NotificationManager.error(`${message}`,"ATENCION!", 3000);
      //   // <ModalErrors error={'no se pudieron crear los turnos'}/>
      // }
 }
console.log('date==>', post.date)
console.log('date fuera del post==>', date)
  return (
    <>
    <h1>CrearTurnos</h1>
      <SelectProfesionales onChange={handleSelelect} options={seleccion}/>
 <SelectFecha date={date} setDate={setDate}/>
  <div>
    <SelectDuracion onChange={handleChangeTime} duracion={post.duracion}/>
                    {post.duracion===undefined? <p> </p>:<p>{`${post.duracion} min`}</p>}
                  </div>
    <SelectHora onChange={handleChangeTime}/>
    {
            date?.length>0 && post.duracion!==undefined?

      <button onClick={submitTime}>
        Confirme rango horario
      </button>:null

     } 
      { post.horariosCreados?.length>0?
         post.horariosCreados.map((h,i)=>
          <div>
            <p key={i}>
               {h.start};
            </p>
         </div>):null
      }
      {
           post.horariosCreados?.length>0?
        <button onClick={(e)=>submitAll(e)}>
          Confirma tus turnos
        </button>: null
      }
       <NotificationContainer />
    </>
  )
}

export default CrearTurnos