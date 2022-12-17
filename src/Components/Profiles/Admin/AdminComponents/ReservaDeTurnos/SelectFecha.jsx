import React from "react";
import DatePicker, { Calendar } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const format = "DD/MM/YYYY";
function SelectFecha({ date, setDate, onChange }) {
  return (
    <div>
      <div style={{
        "fontFamily":"monospace",
        "marginTop":"10px",
        "marginBottom":"10px",
        "fontWeight":600
        
        }}>
          Elegí <span style={{"color":"red"}}>cuándo</span> trabaja el profesional</div> 
      <Calendar name="date" value={date} onChange={onChange} />
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
