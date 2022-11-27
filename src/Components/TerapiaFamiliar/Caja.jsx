import React from "react";
import styles from "./Caja.module.css";
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'

function Caja() {
  return (
    <div className={styles.caja}>
      <div>
      
        <h4 className="title pb-3 border-bottom">
          Solicita nuestros servicios aquí :
        </h4>

        <ul>
          <ol className={styles.titles}>
            <b>Cliente :</b> <br />
            <span> Desde niños hasta Adultos</span>
          </ol>
          <br />
          <ol className={styles.titles}>
            <b>Categoría :</b>
            <br />
            <span>Terapia de Familia</span>
          </ol>
          <br />
          <ol className={styles.titles}>
            <b>Sitio web:</b>
            <br />
            <span>centropequenosgigantes.com.pe</span>
          </ol>
          <br />
          <ol className={styles.titles}>
            <b>Localización:</b>
            <br />
            <span>AV. Riva Agüero 961 El Agustino, Perú</span>
          </ol>
          <br />
          <ol className={styles.titles}>
            <b>Contacto:</b>
            <br />
            <a
              href="https://api.whatsapp.com/send?phone=51991341292"
              target="_blank"
              className="text-black"
            >
              <span> +51 991341292</span>
            </a>
          </ol>
          <br />
          <ol className={styles.titles}>
            <b>Telefono:</b>
            <br />
            <span> 01 3273184</span>
          </ol>
          <br />
          <ol className={styles.titles}>
            <b>Correo:</b>
            <br />
            <a
              href="mailto:informes@centropequenosgigantes.com.pe"
              target="_blank"
              className="text-black"
            >
              <span> informes@centropequenosgigantes.com.pe</span>
            </a>
          </ol>
          <br />
          <br />

          <b>Redes Sociales:</b>
          <br />
          <a href="https://www.facebook.com/centrodeterapiaspequenosgigantes" target="_blank">
            
            <img src={facebook} />{" "}
          </a>
          <a href="https://www.instagram.com/centrodeterapias1/" target="_blank" >
            <img src={instagram} />
                                    </a>
         
        </ul>
        
      </div>

    </div>
  );
}

export default Caja;
