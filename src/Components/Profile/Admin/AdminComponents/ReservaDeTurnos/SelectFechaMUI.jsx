import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


export default function SelectFecha2({date, setDate, onChange, diasConTurnos}) {
    const turnos1=new Set(diasConTurnos)
   const turnos= [...turnos1]
    // console.log('diasConTurnos',turnos);

    const isWeekend = (date) => {
        // console.log('DATE==>>', date);
      const day = date.date();
    //   console.log('day==>', day);
      const month = date.month()
    //   console.log('month==>', month);
      const year = date.year()
    //   console.log('year==>', year);

      const dia=`${year}-${month+1}-${day}`
    //   console.log('DIAAAA===>>>', dia);
    //   console.log('TURNOS', turnos);
        // const turno1= turnos.filter(e=>e===dia).toString()
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