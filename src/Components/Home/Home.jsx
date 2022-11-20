import React from 'react'
import SliderBar from '../Slides/SliderBar'
import whatsapp from '../../assets/whatsapp.svg'
import styles from "./Home.module.css";
import Home2 from './Home2';

function Home() {
  return (
    <div>
      <a href='https://api.whatsapp.com/send?phone=51991341292'>
              {/* <AiFillGithub className='gitHub'/> */}
              <img src={whatsapp}  className={styles.btnFlotante}/>
          </a>
    <SliderBar />
    <Home2 />
    </div>
  )
} 

export default Home