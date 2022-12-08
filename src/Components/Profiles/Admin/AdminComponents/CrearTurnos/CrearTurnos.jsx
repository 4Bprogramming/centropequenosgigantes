import React from 'react'
import DatePicker from 'react-multi-date-picker'
import CreateAppointments from './CreateAppointments/CreateAppointments'

function CrearTurnos() {
  return (
    <>
    <h1>CrearTurnos</h1>
    <p>Elegí tus dias de trabajo</p>
                  <DatePicker
                    placeholder="elige tus fechas"
                    // value={date}
                    // onChange={setDate}
                    multiple
                    sort
                    // format={format}
                    calendarPosition="bottom-center"
                    // plugins={[<DatePanel />]}
                  />
   
    </>
  )
}

export default CrearTurnos