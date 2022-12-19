import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seleccionProfesional } from "./SelectMultipleEspecialidades/Controllers";
import SelectProfesionales from "./SelectMultipleEspecialidades/SelectProfesionales";
import moment from "moment";
import { 
  getTurnos,
  horariosTurnosCreados,
  subirTurnos,
} from "../../../../../Redux/Action/Actions";
import SelectDuracion from "./SelectDuracion/SelectDuracion";
import SelectHora from "./SelectHora/SelectHora";
import SelectFecha from "./SelectFecha/SelectFecha";
//Alert notifications
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css"; 





//comienza componente
function CrearTurnos({ token }) {
  const dispatch = useDispatch();
  const profesionales = useSelector((state) => state.allProfessional);
  const horasCreadas = useSelector((state) => state.horasCreadas);
  const horasParaMostrar = useSelector((state) => state.horasCreadasParaMostar);
  const message = useSelector((state) => state.message);
  const [post, setPost] = useState({
    date: [],
    profesionalIdProfesional: "",
    tiempoInicio: "",
    tiempoFinal: "",
    duracion: "",
    horariosCreados: false,
  });

  //FUNCION PARA CREAR {VALUE, LABEL} DEL SELECT DE PROFESIONALES
  const seleccionSelect = seleccionProfesional(profesionales);
  ///////////======HANDLE SELECT PROFESIONAL/////////////
  const handleSelect = (seletedOptions) => {
    let seleccion = [];
    let seleccion1 = seleccion?.push(seletedOptions);
    let seleccion2 = seleccion?.map((e) => e.value).toString();
    setPost({ ...post, profesionalIdProfesional: seleccion2 });
  };
  ////////////////////HANDLE CHANGE////////////////////////////////////////////////////////////

  function handleChange(e) {
    e.preventDefault();
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }
  function handleChangeDate(e) {
    setPost({
      ...post,
      date: e,
    });
  }
  ///////SUBMIT PARA CREAR HORARIOS////////

  async function submitTime() {
    if (post.tiempoInicio && post.tiempoFinal && post.duracion) {
      if (
        post.tiempoInicio < "08:00" ||
        post.tiempoInicio > "20:00" ||
        post.tiempoFinal < "08:00" ||
        post.tiempoFinal > "20:00"
      ) {
        return NotificationManager.error(
          "El horario laboral es de 8:00hs a 20:00hs",
          "ATENCION",
          5000
        );
      } else if (post.tiempoFinal < post.tiempoInicio) {
        return NotificationManager.error(
          "El horario inicial no puede ser posterior al horario final",
          "ATENCION",
          5000
        );
      } else if (post.tiempoFinal < post.tiempoInicio) {
        return NotificationManager.error(
          "El horario inicial no puede ser posterior al horario final",
          "ATENCION",
          5000
        );
      }

      let horarioCreado = {
        tiempoInicio: post.tiempoInicio,
        tiempoFinal: post.tiempoFinal,
        duracion: post.duracion,
      };

      await dispatch(horariosTurnosCreados(horarioCreado));
      setPost({ ...post, horariosCreados: true });
    } else {
      NotificationManager.error(
        "chequee que los campos esten completos",
        "ATENCION",
        5000
      );
    }
  }
  ///////////////FUNCION VERIFICA LA FECHA A CREAR SEA MAYOR A HOY ///////////////////////////////////////////////////
  let date2 = post.date.map((d) => ({
    day: d.day,
    month: d.month.number,
    year: d.year,
  }));
  // console.log('POST.DATE===>', post.date);
  // console.log('DATE2 QUE HAGO MAP==>',date2);
  let dateArray = [];
  let noDay = [];
  for (let i = 0; i < date2.length; i++) {
    let dayCurrent = moment();

    let dayNext = new moment(
      `${date2[i].year}-${date2[i].month}-${date2[i].day}`
    );
    console.log("dayNext");
    if (dayNext > dayCurrent) {
      dateArray.push(date2[i]);
    } else {
      noDay.push(post.date[i]);
    }
  }
  // console.log('Horas que envío al back==>', dateArray);
  async function submitAll(e) {
    try {
      if (
        horasCreadas &&
        post.date.length > 0 &&
        post.profesionalIdProfesional
      ) {
        let turnosACrear = {
          dates: dateArray,
          hours: horasCreadas.map((hr) => {
            return hr.start;
          }),
          profesionalIdProfesional: post.profesionalIdProfesional,
        };
        // console.log('TURNOS', turnosACrear);
        await dispatch(subirTurnos(turnosACrear, token));
        dispatch(getTurnos(token));
        NotificationManager.success("Turnos Creados", "Excelente!", 3000);
        setPost({
          date: [],
          profesionalIdProfesional: "",
          tiempoInicio: "",
          tiempoFinal: "",
          duracion: "",
          horariosCreados: false,
        });
      } else if (post.date.length === 0) {
        NotificationManager.error(
          "Falta seleccionar FECHAS",
          "ATENCION!",
          3000
        );
      } else if (!post.profesionalIdProfesional) {
        NotificationManager.error(
          "Falta seleccionar PROFESIONAL",
          "ATENCION!",
          3000
        );
      }
    } catch (error) {
      NotificationManager.error("Error", "ATENCION!", 3000);
      // <ModalErrors error={'no se pudieron crear los turnos'}/>
    }
  }

  return (
    <>
      <SelectProfesionales
        onChange={handleSelect}
        options={seleccionSelect}
        idProfesional={post.profesionalIdProfesional}
      />

      <SelectFecha multi={true} date={post.date} onChange={handleChangeDate} />

      <SelectDuracion onChange={handleChange} duracion={post.duracion} />

      <SelectHora
        onChange={handleChange}
        inicio={post.tiempoInicio}
        final={post.tiempoFinal}
      />

      <button className={styles.botonRangoHorario} onClick={submitTime}>Confirme rango horario</button>
      {post.horariosCreados &&
        horasParaMostrar.map((h, i) => (
          <div>
            <p key={i}>{h.start};</p>
          </div>
        ))}
      {post.horariosCreados ? (
        <button onClick={(e) => submitAll(e)}>Confirma tus turnos</button>
      ) : null}

      <NotificationContainer />
    </>
  );
}

export default CrearTurnos;
