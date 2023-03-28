import React, { useState, useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TimeRange from "react-time-range";
import { useDispatch, useSelector } from "react-redux";
// import {
//   getUsersById,
//   createMorningHours,
//   createAfternoonHours,
//   postAppointments,
//   getAdById,
//   reload,
// } from "../../Redux-actions";

import "./CreateAppointments.css";
import moment from "moment";
import { Outlet, useNavigate, useParams } from "react-router-dom";
// import ModalErrors from "../ModalsErrors/ErrorsRouta";
import myTime from "./myTime.js";


const format = "DD/MM/YYYY";
function CreateAppointments({user}) {

  const {adId} = useParams()
   
  const navigate=useNavigate()
  const dispatch = useDispatch();
      // const User = useSelector((state) => state.userDetail)
  const adDetail = useSelector((state) => state.adDetail)

  const morningHours = useSelector((state)=>state.morningHours)
  
  

  // const reload = useSelector((state)=>state.reload)
    
  const [date, setDate] = useState([]);

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  
  const [morningStartTime, setMorningStartTime] = useState('');
  const [morningEndTime, setMorningEndTime] = useState('');
  // const [afternoonStartTime, setAfternoonStartTime] = useState('');
  // const [afternoonEndTime, setAfternoonEndTime] = useState('');

  const [duration, setDuration]=useState()
  // const [durationAft, setDurationAft]=useState()
  const [timeRanges1, setTimeRanges1]=useState(false)
  // const [timeRanges2, setTimeRanges2]=useState(false)

  

  // useEffect(() => {
  //   // dispatch(getAdById(adId));
  //   return ()=>{
  //     window.location.reload()
  //   }
  // }, [dispatch]);

  
  let myTimeMorning = myTime('8:00','20:00')
  // let myTimeAfternoon = myTime('12:30','22:00')
  

  function handleStartTimeChange(e){
  
     setStartTime(e.startTime)
   }
 
   function handleEndTimeChange(e){ 
    setEndTime(e.endTime) 
   }

   const start1 = moment(new Date(startTime))
   const end1 = moment(new Date(endTime))
   let morningTimeS=`${start1.hour()}:${start1.minute()}`
   let morningTimeE=`${end1.hour()}:${end1.minute()}`
   if(morningTimeS){
     let hrS=morningTimeS.split(':')[0]
     let min= morningTimeS.split(':')[1]
        
     if(hrS.length===1){
       let x= hrS
       hrS= '0'+ x
       morningTimeS = hrS +':'+ min
     }
    if(min==='0' ){
        morningTimeS = hrS +':'+'00'
      }
   }
    if(morningTimeE){
        let hrE=morningTimeE.split(':')[0]
        let minE= morningTimeE.split(':')[1]
        if(hrE.length===1){
          let x= hrE
          hrE= '0'+ x
          morningTimeE = hrE + ':' + minE
        }
        if(minE==='0' ){
          morningTimeE = hrE +':'+'00'
        }
      }
   


   function submitTimeRange(){
      
      setMorningStartTime(`${start1.hour()}:${start1.minute()}`)
      setMorningEndTime(`${end1.hour()}:${end1.minute()}`)
    
      let morningHoursCreate={
        startTime:`${start1.hour()}:${start1.minute()}`,
        endTime:`${end1.hour()}:${end1.minute()}`,
        duration:duration
      }
       // dispatch(createMorningHours(morningHoursCreate))
      
   }

   
  //  const start2 = moment(new Date(startTime))
  //  const end2 = moment(new Date(endTime))
  //  let afternoonTimeS=`${start2.hour()}:${start2.minute()}`
  //  let afternoonTimeE=`${end2.hour()}:${end2.minute()}`
  //  if(afternoonTimeS){
  //   let hrS=afternoonTimeS.split(':')[0]
  //   let min= afternoonTimeS.split(':')[1]
  //        
  //   if(hrS.length===1){
  //     let x= hrS
  //     hrS= '0'+ x
  //     afternoonTimeS = hrS +':'+ min
  //   }
  //  if(min==='0' ){
  //      afternoonTimeS = hrS +':'+'00'
  //    }
  // }
  //  if(afternoonTimeE){
  //      let hrE=afternoonTimeE.split(':')[0]
  //      let minE= afternoonTimeE.split(':')[1]
  //      if(hrE.length===1){
  //        let x= hrE
  //        hrE= '0'+ x
  //        afternoonTimeE = hrE + ':' + minE
  //      }
  //      if(minE==='0' ){
  //        afternoonTimeE = hrE +':'+'00'
  //      }
  //    }

  //  function submitTimeRange2(){
          
  //     setAfternoonStartTime(`${start2.hour()}:${start2.minute()}`)
  //     setAfternoonEndTime(`${end2.hour()}:${end2.minute()}`)
     
  //     let afternoonHours={
  //       startTime:`${start2.hour()}:${start2.minute()}`,
  //       endTime:`${end2.hour()}:${end2.minute()}`,
  //       duration:durationAft,
  //     }
         
  //     // dispatch(createAfternoonHours(afternoonHours))
      
  //  }

   function newTimeRange1(){
    setTimeRanges1(!timeRanges1)
   }

  //  function newTimeRange2(){
  //   setTimeRanges2(!timeRanges2)
  //  }

   function handleChange(e){
   
    setDuration(e.target.value)
   }
  //  function handleChange2(e){
  //   setDurationAft(e.target.value)
  //  }


   
   let hours= morningHours?.map(hr=>{return hr.start })
  //  let aftHours = afternoonHours.map(hr=>{return hr.start})
      // if(aftHours.length>0){
      //   hours=hours.concat(aftHours)
      // }
      // if(morningHours===0){
      //   hours=aftHours
      // }
   

      let date2 = date.map(d=>({day:d.day, month:d.month.index, year:d.year}))
      let dateArray=[]
      let noDay=[]
      for (let i = 0; i < date2.length; i++) {
        // let resp= .fromNow()
       
        let dayCurrent= moment()
        

        let dayNext= new moment(`${date2[i].year}-${Number(date2[i].month)+1}-${date2[i].day}`)
        ;

        if(dayNext>dayCurrent){
          dateArray.push(date2[i])
        }
        else{
          noDay.push(date[i])
        }
      };
      
     
      
   function submitAll(e){
        try {
      
         if(morningHours){
           let appointmentsMorning={
             dates: dateArray,
             hours: hours,
             professionalMedicalLicense: adDetail.professionalMedicalLicense,
             ad:adId
           }
          //  dispatch(postAppointments(appointmentsMorning, !reload))
         }
        //  if(afternoonHours){
        //   let appointmentsAfternoon={
        //     dates: dateArray,
        //     hours: aftHours,
        //     professionalMedicalLicense: adDetail.professionalMedicalLicense,
        //     ad:adId
        //   }
          // dispatch(postAppointments(appointmentsAfternoon, !reload))
        // }
         
          
             
            // navigate(`/home/`+ adId)
          
        } catch (error) {
          // <ModalErrors error={'no se pudieron crear los turnos'}/>
        }
   }

   let apps = adDetail.appointments?.length
  //  let hourAftbyRender = [...afternoonHours]
  //  hourAftbyRender.pop() 
   let hourMornbyRender =[...morningHours]
    hourMornbyRender.pop()
      // let veremos=  myTimeAfternoon.includes(afternoonTimeS)
      // let veremos1=  myTimeAfternoon.includes(afternoonTimeE)

      // let veremos2=  myTimeAfternoon.includes(afternoonTimeS)
      return (
    <>
     
      <div >
          
            <div className="conteinerDate">
              <h1>Crea tus turnos</h1>
                <div style={{ textAlign: "center" }}>
                <p>Elegí tus dias de trabajo</p>
                  <DatePicker
                    placeholder="elige tus fechas"
                    value={date}
                    onChange={setDate}
                    multiple
                    sort
                    format={format}
                    calendarPosition="bottom-center"
                    plugins={[<DatePanel />]}
                  />
              </div>
              <ul className="li">
                {date.map((date, index) => (
                <div className="li">
                  <li  key={index}>{date.format()}</li>
                </div>
                ))}
              </ul>
                {date.length>0 && noDay.length===0?
                  <div>
                      <button className="button" onClick={newTimeRange1}>Seleccione rango horario de mañana para el/los dia/s seleccionados</button>
                      {/* <button className="button" onClick={newTimeRange2}>Seleccione rango horario para el/los mismo/s dia/s de tarde</button> */}
                  </div>:
                   date.length==0 && noDay.length===0? null: 
                   noDay.length>0? <p> Debe elegir Fechas mayores a la fecha actual</p>: null

                }
                {timeRanges1?
                  <>
                <div>
                    <p>¿Cuánto dura cada turno?</p>
                    <select value={duration} onChange={(e)=>handleChange(e)} >
                      <option value='selected' hidden >Duracion del turno</option>
                      <option value ={10}>10 mins</option>
                      <option value ={20}>20 mins</option>
                      <option value ={30}>30 mins</option>
                      <option value ={40}>40 mins</option>
                      <option value ={50}>50 mins</option>
                      <option value ={60}>60 mins</option>
                    </select>
                    {duration===undefined? <p> </p>:<p>{`${duration} min`}</p>}
                  </div>
                  <TimeRange
                    startMoment={startTime}
                    endMoment={endTime}
                    onStartTimeChange={handleStartTimeChange}
                    onEndTimeChange={handleEndTimeChange}
                  />
                    
                  {
                    date.length>0 && myTimeMorning.includes(morningTimeS)&& myTimeMorning.includes(morningTimeE) && duration!==undefined?
                    <button className="button" onClick={submitTimeRange}>Confirme rango horario</button>:
                    !myTimeMorning.includes(morningTimeS)|| !myTimeMorning.includes(morningTimeE)?
                    <p>Debe elegir un horario de comienzo y de finalización de la jornada entre las 9:00 AM y las 12:30 PM</p>:
                    date.length===0? 
                    <p>Debe elegir una o mas fechas</p>: 
                    duration===undefined? 
                    <p>Falta que seleccione la duración que van a tener los turnos</p>: 
                    null
                    
                  } 
                  <div className="hourContainer">
                    { morningHours.length>0?hourMornbyRender.map((h,i)=><div className="li"><p className="li" key={i}> {h.start}; </p></div>):null}
                  </div>
                  </>: null

                }
                
              {/* {timeRanges2?
                <>
                  <div>
                    <p>¿Cuánto dura cada turno?</p>
                    <select value={durationAft} onChange={(e)=>handleChange2(e)} >
                          <option value='selected' hidden >Duración del turno</option>
                          <option value ={10}>10 mins</option>
                          <option value ={20}>20 mins</option>
                          <option value ={30}>30 mins</option>
                          <option value ={40}>40 mins</option>
                          <option value ={50}>50 mins</option>
                          <option value ={60}>60 mins</option>
                      </select>
                        <div>
                          {durationAft===undefined? <p> </p>:<p>{durationAft} mins</p>}
                        </div>
                  </div>
                  
                  <TimeRange
                    startMoment={startTime}
                    endMoment={endTime}
                    onStartTimeChange={handleStartTimeChange}
                    onEndTimeChange={handleEndTimeChange} 
                  />
                
                  {
                    date.length>0 && myTimeAfternoon.includes(afternoonTimeS)&& myTimeAfternoon.includes(afternoonTimeE) && durationAft!==undefined?
                    <button className="button" onClick={submitTimeRange2}> Confirme rango horario</button> : 
                    !myTimeAfternoon.includes(afternoonTimeS)|| !myTimeAfternoon.includes(afternoonTimeE)?
                    <p>Debe elegir un horario de comienzo y de finalización de la jornada entre las 12:30 PM y las 9:30 PM</p>: 
                    date.length===0? <p>Debe elegir una o mas fechas</p>: 
                    durationAft=== undefined? <p>Falta que seleccione la duración que van a tener los turnos</p>: 
                    null
                  } 
                  {afternoonHours.length>0?hourAftbyRender.map((h,i)=><div className="li"> <p key={i}> {h.start}; </p></div>):null}
                </>   :null 
              } */}
              {/* {
                afternoonHours.length>0 || morningHours.length>0?
                <button className="button" onClick={(e)=>submitAll(e)}>Confirma tus turnos</button>: null
              } */}

          </div>
       
      </div>
      <Outlet/>
    </>
  );
}

export default CreateAppointments;