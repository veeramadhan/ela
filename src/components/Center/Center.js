import React from 'react'
import { Element } from "react-scroll"
import about from "../Assests/aboutt.jpg"
import "./Center.css"


const Center = () => {
  return (
    <Element name='about'>
    <div className='img_bg'>
      <img src={about}></img>    



</div> 
    
    </Element>
  )
}

export default Center