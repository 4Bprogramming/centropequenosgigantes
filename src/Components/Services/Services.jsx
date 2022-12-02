import React from "react";
import construccion from "../../assets/construccion.jpeg";
import styles from "./Services.module.css";
import SevicesCard from "./SevicesCard";
import SelectSimple from "./SelectSimple";
import { Link, useNavigate } from "react-router-dom";
import { servicios } from "./NameServices";

function Services() {
  const navigate = useNavigate();

  function handleSelect(value) {
    const selected = value;
    console.log(selected.value, "value");
    navigate(`/${selected.value}`);
  }

  const newOptions = servicios.map((e) => {
    return {
      value: e.path,
      label: e.name,
    };
  });

  return (
    <>
      <div className={styles.mainServiceContainer}>
        <h1 className={styles.tituloPrincipalServicio}>Servicios</h1>
        <p className={styles.serviciosParrafo}>
          Acá encontrarás todos los servicios que ofrecemos en el centro
          Pequeños Gigantes los cuales son:
        </p>
        <div className={styles.selectSimpleContainer}>
          <SelectSimple onChange={handleSelect} options={newOptions} />
        </div>
        <div className={styles.flex}>
          <SevicesCard />
        </div>
      </div>
    </>
  );
}

export default Services;
