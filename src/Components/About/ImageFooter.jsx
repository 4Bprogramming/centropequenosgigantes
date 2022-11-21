import React from 'react'
import styles from "./Image2.module.css";
import pict from '../../assets/client.png'


function Image() {
  return (
    <div className={styles.ImageTopFooter}>
        <img src={pict} />
  </div>
  )
}

export default Image