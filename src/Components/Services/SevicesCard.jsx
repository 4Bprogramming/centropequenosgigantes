import React from "react";
import { Link } from "react-router-dom";
import foto1 from "../../assets/servicios/p13.jpg";
import foto2 from "../../assets/servicios/terapia_lenguaje.jpg";
import foto3 from "../../assets/servicios/terapia_aprendizaje.jpeg";
import foto4 from "../../assets/servicios/asesoramiento.jpeg";
import foto5 from "../../assets/servicios/terapia_ocupacional.jpeg";
import foto6 from "../../assets/servicios/modificacion_conducta.jpeg";
import foto7 from "../../assets/servicios/terapia_fisica.jpeg";
import foto8 from "../../assets/servicios/integracion_sensorial.jpeg";
import foto9 from "../../assets/servicios/terapia_familia.jpeg";
import foto10 from "../../assets/servicios/psicomotricidad.jpeg";
import foto11 from "../../assets/servicios/estimulacion_temprana.jpeg";
import  styles from './ServiceCard.module.css';

export const blog = [
  {
    id: 1,
    type: "admin",
    date: "JAN. 18, 2021",
    com: "3 COMMENTS ",
    title: "Psicología",
    path:"psicologia",
    desc: "Evaluaciones a niños, niñas, adolescentes y adultos.",
    cover: foto1,
  },
  {
    id: 2,
    type: "admin",
    date: "API. 25, 2022",
    com: "5 COMMENTS ",
    title: "Terapia de lenguaje",
    path: "lenguaje",
    desc: "Queremos que los niños puedan desarrollar y construir una autoestima sana, mejorando sus habilidades sociales y la comunicación..",
    cover: foto2,
  },
  {
    id: 3,
    type: "user",
    date: "MAY. 15, 2022",
    com: "10 COMMENTS ",
    title: "Terapia de aprendizaje",
    path: "lenguaje",
    desc: "Analizar las variables y procesos de atención memorísticos y comprensivos que optimizan el proceso de enseñanza-aprendizaje y que pueden estar generando el o los trastornos de aprendizaje.",
    cover: foto3,
  },
  {
    id: 4,
    type: "admin",
    date: "JAN. 02, 2022",
    com: "3 COMMENTS ",
    title: "Asesoramiento psicológico en el aula",
    path: "asesoramiento",
    desc: "Mejorar los procesos de aprendizaje y así lograr una mejor educación para niños y niñas..",
    cover: foto4,
  },
  {
    id: 5,
    type: "admin",
    date: "DEC. 14, 2022",
    com: "3 COMMENTS ",
    title: "Terapia ocupacional",
    path:"ocupacional",
    desc: "Ayudar a los niños a jugar, a rendir más en los estudios y a desempeñar sus actividades cotidianas. También mejora su autoestima y su sensación de logro.",
    cover: foto5,
  },
  {
    id: 6,
    type: "user",
    date: "JAN. 18, 2021",
    com: "12 COMMENTS ",
    title: "Modificación de conducta",
    path: "conducta",
    desc: "Crear mejores relaciones interpersonales como así también promover la confianza en sí mismo.",
    cover: foto6,
  },
  {
    id: 7,
    type: "user",
    date: "JAN. 18, 2021",
    com: "12 COMMENTS ",
    title: "Terapia física",
    path: "fisica",
    desc: "Aborda el conocimiento del cuerpo y el movimiento del ser humano en su ciclo vital, en situación de salud y condición de enfermedad, con base en los conocimientos científicos y tecnológicos de los diferentes sistemas que influyen en el movimiento corporal humano.",
    cover: foto7,
  },
  {
    id: 8,
    type: "user",
    date: "JAN. 18, 2021",
    com: "12 COMMENTS ",
    title: "Integración sensorial",
    path: "sensorial",
    desc: "Expresión que se usa para describir los procesos del cerebro que nos permiten tomar la información que recibimos de nuestros 5 sentidos, organizarla y responder adecuadamente.",
    cover: foto8,
  },
  {
    id: 9,
    type: "user",
    date: "JAN. 18, 2021",
    com: "12 COMMENTS ",
    title: "Terapia de familia",
    path: "familia",
    desc: "Un espacio seguro en el cual la familia podrá reconocer las diferentes problemáticas presentes en la relación y a su vez, adquirir y fortalecer herramientas que les permitan una adecuada comunicación, toma de decisiones y manejo de emociones dentro de la dinámica familiar.",
    cover: foto9,
  },
  {
    id: 10,
    type: "user",
    date: "JAN. 18, 2021",
    com: "12 COMMENTS ",
    title: "Psicomotricidad",
    path: "psicomotricidad",
    desc: "Técnica que ayuda a niños y bebés a dominar sus movimientos corporales de una forma sana, así como a mejorar su relación y comunicación con los demás.",
    cover: foto10,
  },
  {
    id: 11,
    type: "user",
    date: "JAN. 18, 2021",
    com: "12 COMMENTS ",
    title: "Estimulación temprana",
    path: "estimulacion_temprana",
    desc: "Técnicas educativas que pretende impulsar el desarrollo cognitivo, social y emocional del niño durante la etapa infantil (de 0 a 6 años).",
    cover: foto11,
  },
];

function SevicesCard() {
  return (
    <>
      {blog.map((val) => (

        <div className={styles.mainCardContainer}>
          

          <div className={styles.imageServicioContainer}>
            <Link to={`/${val.path}`}>
              <img src={val.cover} alt={val.title} />
            </Link>
          </div>
          <div className={styles.cardContent}>
            <Link to={`/${val.path}`}>
              <h4>{val.title}</h4>
            </Link>
            <p>{val.desc}</p>
          </div>
          
          
        </div>
      ))}
    </>
  );
}

export default SevicesCard;
