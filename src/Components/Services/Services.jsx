import React from "react";
import construccion from "../../assets/construccion.jpeg";
import styles from "./Services.module.css";
import SevicesCard from "./SevicesCard";
import SelectSimple from "./SelectSimple";
import { Link, useNavigate } from "react-router-dom";



const servicios = [
  {
    id: 1,
    name: "Psicología",
  },
  {
    id: 2,
    name: "Terapia de lenguaje",
  },
  {
    id: 3,
    name: "Terapia de aprendizaje",
  },
  {
    id: 4,
    name: "Asesoramiento psicológico en el aula",
  },
  {
    id: 5,
    name: "Terapia ocupacional",
  },
  {
    id: 6,
    name: "Modificación de conducta",
  },
  {
    id: 7,
    name: "Terapia física",
  },
  {
    id: 8,
    name: "Integración sensorial",
  },
  {
    id: 9,
    name: "Terapia de familia",
  },
  {
    id: 10,
    name: "Psicomotricidad",
  },
  {
    id: 11,
    name: "Estimulación temprana",
  },
];

function Services() {
  const navigate = useNavigate();
  
  function handleSelect (value) {
    const selected = value
    console.log(selected.value,"value")
    navigate(`/${selected.value}`);
    
  }
  
const newOptions = servicios.map(e => {
    return {
     value : e.name,
     label: e.name,
    };
})

 
  return (
    <>
      <br></br>
      <h1 style={{ color: "yellowgreen" }}>Servicios</h1>
      <section className={styles.blog}>
        <p>
          Acá encontrarás todos los servicios que ofrecemos en el centro
          Pequeños Gigantes los cuales son:
        </p>
        <SelectSimple 
        onChange={handleSelect}
        options={newOptions}
        />        
        <div className={styles.padding}>
          <div className={styles.container}>
            <div className={styles.grid2}>
              <SevicesCard />
            </div>
          </div>
        </div>
      </section>
    </>
    /*  <div>
        <img src={construccion} width="800px" />
        
    </div> */
  );
}

export default Services;
