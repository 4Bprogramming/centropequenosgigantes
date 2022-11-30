import React from 'react'
import uno from '../../assets/psicologia/psicologia1.jpg'
import dos from '../../assets/Estimulacion/estimulacion_temprana1.jpg'
import Caja from './Caja'
import Image from './ImageFooter'
import styles from './EstimulacionTemprana.module.css'
import Texto from './Texto'


const aboutData = {
  title: "Estimulación Temprana en niños y niñas:",
  description1: "La estimulación temprana tiene el objetivo de potenciar el desarrollo físico, psicológico y social de los niños y niñas. Esto puede realizarse a través de diferentes dinámicas y actividades.",
  description2: "1. Primera etapa: Hasta los 12 meses:",
  description3: "En esta primera etapa, empezaremos por trabajar la motricidad gruesa, También actividades que ayuden a controlar la cabeza del bebé. Una manera de hacerlo es colocar al bebé acostado boca abajo, mostrando juguetes o estímulos llamativos que le inciten a mantener la cabeza levantada. En cuanto a su desarrollo social, podemos colocar al bebé delante de un espejo, con una postura cómoda. Este ejercicio facilita el autoconocimiento corporal, empezará a reconocerse. Podemos realizar movimientos con los brazos o manos para mantener su atención.",
  description4: "2. Segunda etapa: De 1 a 2 años:",
  description5: "En esta etapa puede trabajarse el equilibrio del niño o niña. Un buen ejercicio es sujetar al bebé por debajo de los brazos, moviéndolo de manera suave de un lado a otro, de delante hacia atrás. Esto le servirá para que se enderece por sí mismo.",
  description6: "3. Tercera etapa: De 2 a 3 años:",
  description7: "A partir del segundo año, ya se pueden realizar actividades para favorecer el desarrollo del área cognitiva y de lenguaje. Algunas actividades interesantes son leer en voz alta cuentos infantiles que tengan ilustraciones para que las pueda ver. Después podemos hacerle preguntas sencillas sobre la historia e incluso dejar que nos cuente aquello que ha entendido.",
  description8: "4 .Cuarta etapa: De 3 a 4 años:",
  description9: "Cuando haya cumplido los 3 años, se empezará a trabajar el lenguaje y la motricidad fina. Para ello, puede hacer dibujos y pedirle que nos explique lo que va dibujando. Debemos dejar que fomente su propia creatividad y lo haga de manera libre. También podemos dibujar con el niño o la niña a la vez, preguntando cosas sobre el dibujo a la vez que se avanza.",
  description10: "5. Quinta etapa: De 4 a 6 años:",
  description11: "Para estimular tanto su coordinación como su equilibrio, empezaremos a realizar ejercicios divertidos como por ejemplo bailar."
}

function Psicologia() {
  return (
    <div>
      <Image />
    <div className={styles.about} id="about" >
    <div className={styles.lineStyling}>
      <div className={styles.styleCircle}></div>
      <div className={styles.styleCircle}></div>
      <div className={styles.styleLine}></div>
    </div>
    <div className={styles.aboutBody}>
        <div className={styles.aboutDescription}>
            <h2 >{aboutData.title}</h2>
            <p style={{textAlign:"justify"}}>{aboutData.description1}<br/></p>
           
             <img 
                src={dos}  
                alt="" 
                width='250px'
            />
        </div>
        
        <div className={styles.aboutImg}>
           {/*  <img 
                src={uno}  
                alt="" 
                width='600px'
                height='300px'
            /> */}
            
            <Caja />
        </div>
    </div>
</div>
<p style={{marginLeft: "10px"}}><b>{aboutData.description2}</b><br/></p>
<p style={{textAlign:"justify", marginLeft: "15px", marginRight: "15px"}}>{aboutData.description3}<br/><br/></p>
<p style={{marginLeft: "10px"}}><b>{aboutData.description4}</b><br/></p>
<p style={{textAlign:"justify" , marginLeft: "15px", marginRight: "15px"}}>{aboutData.description5}<br/><br/></p>
<p style={{marginLeft: "10px"}}><b>{aboutData.description6}</b><br/></p>
<p style={{textAlign:"justify", marginLeft: "15px", marginRight: "15px"}}>{aboutData.description7}<br/><br/></p>
<p style={{marginLeft: "10px"}}><b>{aboutData.description8}</b><br/></p>
<p style={{textAlign:"justify", marginLeft: "15px", marginRight: "15px"}}>{aboutData.description9}<br/><br/></p>
<p style={{marginLeft: "10px"}}><b>{aboutData.description10}</b><br/></p>
<p style={{textAlign:"justify", marginLeft: "15px", marginRight: "15px"}}>{aboutData.description11}<br/>



</p>
{/* <Texto /> */}
</div>
  )
}

export default Psicologia