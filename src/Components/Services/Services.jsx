import React from "react";
import construccion from "../../assets/construccion.jpeg";
import styles from "./Services.module.css";
import SevicesCard from "./SevicesCard";
import SelectSimple from "./SelectSimple";
import { Link, useNavigate } from "react-router-dom";
import { servicios } from "./NameServices";



function Services() {
  const navigate = useNavigate();
  
  function handleSelect (value) {
    const selected = value
    console.log(selected.value,"value")
    navigate(`/${selected.value}`);
    
  }
  
const newOptions = servicios.map(e => {
    return {
     value : e.path,
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
