import React from "react";
// import { Calendar } from "react-multi-date-picker";

import DatePanel from "react-multi-date-picker/plugins/date_panel";
import styles from "./RerservaTurno.module.css";

import Calendar from 'react-multi-date-picker';

      const enabledDates = ["2023-01-10", "2023-01-05", "2023-01-12"];
const esDateTimeFormat = new Intl.DateTimeFormat("es-ES");
// const format = "DD/MM/YYYY";
function SelectFecha({date, setDate, onChange, diasConTurnos}) {
 const habilitados=diasConTurnos.map(el=> new Date (Number(el.split('-')[0]),Number(el.split('-')[1]-1),Number(el.split('-')[2])))
 
  
  return ( 
    <div>
      <p>Elige el día del turno </p>
                  {/* <Calendar
                    // placeholder="elige las fechas"
                    disabledDays={(date) =>
                      !(date.getDate() === 1 || date.getDate() === 15 || date.getDate() === 30)}
                    
                    // localeData={esDateTimeFormat}
                    // enabledDates={diasConTurnos}
                    // // single
                    // sort
                    // format={format}
                    // calendarPosition="bottom-center"
                    // otherDays=
                    // plugins={[<DatePanel />]} 
                  /> */}
       <Calendar
      enableDates={enabledDates}
    />
      {/* <Calendar localeData={esDateTimeFormat} enabledDates={diasConTurnos} name='date'
                    value={date}
                    onChange={onChange}/> */}
    </div>
  );
}

export default SelectFecha;

//codigo que puede servir

// // single
// sort
// format={format}
// calendarPosition="bottom-center"
// otherDays=
// plugins={[<DatePanel />]}

// <ul>
//           {date.map((date, index) => (
//           <div>
//             <li  key={index}>{date.format()}</li>
//           </div>
//           ))}
//         </ul> */}
//           /* {date.length>0 && noDay.length===0?
//             <div>
//                 <button className="button" onClick={newTimeRange1}>Seleccione rango horario de mañana para el/los dia/s seleccionados</button>
//                 <button className="button" onClick={newTimeRange2}>Seleccione rango horario para el/los mismo/s dia/s de tarde</button>
//             </div>:
//              date.length==0 && noDay.length===0? null:
//              noDay.length>0? <p> Debe elegir Fechas mayores a la fecha actual</p>: null
