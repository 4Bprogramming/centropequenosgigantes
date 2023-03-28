import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


export default function SelectFecha2({date, onChange, diasConTurnos}) {
    const turnos1=new Set(diasConTurnos)
   const turnos= [...turnos1]
    

    const isWeekend = (date) => {
       
      const day = date.date();
    
      const month = date.month()
    
      const year = date.year()
  

      const dia=`${year}-${month+1}-${day}`
   
     if(!turnos.some(e=>e===dia)){

         return date
     }
    };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={date}
        shouldDisableDate={isWeekend}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
        name='date'
      />
    </LocalizationProvider>
  );
}