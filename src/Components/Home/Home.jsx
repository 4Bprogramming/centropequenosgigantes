import React from 'react'
import SliderBar from '../Slides/SliderBar'
import whatsapp from '../../assets/whatsapp.svg'

function Home() {
  return (
    <div>
      <a href='https://api.whatsapp.com/send?phone=51991341292'>
              {/* <AiFillGithub className='gitHub'/> */}
              <img src={whatsapp}  className='gitHub' />
          </a>
    <SliderBar />
    </div>
  )
} 

export default Home