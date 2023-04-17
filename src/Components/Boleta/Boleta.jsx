import React from "react";
import style from "./Boleta.module.css";
import { useParams, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Boleta() {
  const { idTurno } = useParams();
  const navigate = useNavigate();

  const local = JSON.parse(window.localStorage.getItem("usuarioDB"));
  const rol = JSON.parse(window.localStorage.getItem("rol"));
  const userEmail = JSON.parse(window.localStorage.getItem("email"));

  const turnoElegido = useSelector((state) => state.todosTurnos);

  const miTurno = turnoElegido.filter((e) => e.id === idTurno);

 

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5qp9enm",
        "template_yll5m9r",
        e.target,
        "jeekxUefyAsuBBz5j"
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    navigate(`/${rol}`);
  }
  
  return (
    <>
      <div className={style.correoMainContainer}>
        <h3 className={style.PaymentTitle}>
          Su pago ha sido Procesado exitosamente
        </h3>

        <h3 className={style.PaymentTitle}>Los datos de tu reserva son:</h3>
        <div className={style.correoFormContainer}>
          <Form onSubmit={(e) => sendEmail(e)}>
            <div>
              {" "}
              <strong>Paciente</strong>
            </div>
            <input type="text" name="name" value={local.fullName} />
            <div>
              <strong>Correo del paciente</strong>
            </div>
            <input type="text" name="email" value={local.email} />
            <div>
              <strong>Especialidad</strong>
            </div>
            <input
              type="text"
              name="especialidad"
              value={miTurno[0]?.profesional.especialidad}
            />
            <div>
              <strong>Precio</strong>
            </div>{" "}
            Soles:
            <input type="text" name="precio" value={miTurno[0]?.valor} />
            <div>
              <strong>Fecha</strong>{" "}
            </div>
            <input type="text" name="fecha" value={miTurno[0]?.date} />
            <div>
              <strong>Hora</strong>
            </div>{" "}
            <input type="text" name="hora" value={miTurno[0]?.startTime} />
            <div>
              <strong>Especialista</strong>
            </div>
            <input
              type="text"
              name="doctor"
              value={miTurno[0]?.profesional.fullName}
            />
            <Button variant="success" type="submit">
              Cerrar
            </Button>
            <p>
              <strong>Nota:</strong> Recuerde llegar 20 minutos antes de su
              cita, se le enviará a su correo una copia de este comprobante{" "}
            </p>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Boleta;
