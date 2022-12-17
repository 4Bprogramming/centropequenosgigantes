import React from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";


//embedded style en el rango de fechas
const rango={
  backgroundColor:"darkcyan",
  color: "white",
  fontFamily:"monospace",
  padding:"5px",
  margin:"5px",
  borderRadius:"10px",
}

const format = "DD/MM/YYYY";
function SelectFecha({ date, setDate, onChange }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "monospace",
          marginTop: "10px",
          marginBottom: "10px",
          fontWeight: 600,
        }}
      >
        Elegí <span style={{ color: "red" }}>cuándo</span> trabaja el
        profesional
      </div>
      <DatePicker
        
        placeholder="elige las fechas"
        name="date"
        value={date}
        onChange={onChange}
        multiple
        sort
        format={format}
        calendarPosition="bottom-center"
        plugins={[<DatePanel />]}
        
      />
      <div 
      style={{
          textAlign:"center",
          width:"120px",
        }}>
        {date.map((date, index) => (
          
            <div style={rango} key={index}>{date.format()}</div>
          
        ))}
      </div>
      {/* {date.length>0 && noDay.length===0?
                  <div>
                      <button className="button" onClick={newTimeRange1}>Seleccione rango horario de mañana para el/los dia/s seleccionados</button> 
                      <button className="button" onClick={newTimeRange2}>Seleccione rango horario para el/los mismo/s dia/s de tarde</button> 
                  </div>:
                   date.length==0 && noDay.length===0? null: 
                   noDay.length>0? <p> Debe elegir Fechas mayores a la fecha actual</p>: null

                } */}
    </div>
  );
}

export default SelectFecha;
