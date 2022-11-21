import React, { useState } from "react";
import "./Cuadro.css";

function Cuadro() {
  const [services] = useState([
    {
        icon: "fa-solid fa-heart",
      title: "Psicología",
      desc: "Psicología para niños y adultos.",
      active: false,
    },
    {
        icon:"fa-light fa-user-graduate",
      title: "Terápia de lenguaje",
      desc: "Para niños desde 2 años en adelante.",
      active: true,
    },
    {
      icon: "fa-regular fa-star",
      title: "Asesoramiento psicológico en el aula",
      desc: "Para todas las edades ",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Ver más</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cuadro;
