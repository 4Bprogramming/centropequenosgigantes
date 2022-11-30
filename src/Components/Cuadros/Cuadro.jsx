import React, { useState } from "react";
// import "./Cuadro.css";
import styles from "./Cuadro.module.css";
import { AiFillHeart,AiFillStar } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";

//

function Cuadro() {
  const [services] = useState([
    {
      icon: <AiFillHeart/>,
      title: "Psicología",
      desc: "Psicología para niños y adultos.",
      active: false,
    },
    {
      icon:<FaUserGraduate/>,
      title: "Terápia de lenguaje",
      desc: "Para niños desde 2 años en adelante.",
      active: true,
    },
    {
      icon: <AiFillStar/> ,
      title: "Asesoramiento psicológico en el aula",
      desc: "Para todas las edades. ",
      active: false,
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
              <button className={styles.btnVerMas}>Ver más</button>
            </div>
          ))}
        </div>
  
    </section>
  );
}

export default Cuadro;
