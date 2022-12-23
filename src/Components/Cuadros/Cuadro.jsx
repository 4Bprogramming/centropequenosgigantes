import React, { useState } from "react";
// import "./Cuadro.css";
import styles from "./Cuadro.module.css";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";

//

function Cuadro() {
  const [services] = useState([
    {
      icon: <AiFillHeart />,
      title: "Psicología",
      desc: "Psicología para niños y adultos.",
      active: false,
      path: "psicologia",
    },
    {
      icon: <FaUserGraduate />,
      title: "Terápia de lenguaje",
      desc: "Para niños desde 2 años en adelante.",
      active: true,
      path: "lenguaje",
    },
    {
      icon: <AiFillStar />,
      title: "Asesoramiento psicológico en el aula",
      desc: "Para todas las edades. ",
      active: false,
      path: "asesoramiento",
    },
  ]);
  return (
    <section className="services-experience">
      <div className={styles.container}>
        {services.map((service, i) => (
          <div key={i} className={styles.cardContainer}>
            <div className={styles.SvgContainer}>{service.icon}</div>
            <div className={styles.titleCard}>{service.title}</div>
            <p>{service.desc}</p>
           <Link to={`/${service.path}` }>  
            <div className={styles.btnVerMas} style={{ cursor: "pointer" }}>
              Ver más
            </div>
             </Link>  
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cuadro;
