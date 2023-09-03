import React from 'react'
import ela1 from "../Assests/elaa1.jpg"
import './Header.css'
import { Link } from "react-scroll"


const Header = () => {
 
  return (
    <>
    <div className='Head'>
    <div className='logo_left'>
      <img src={ela1}></img>
    </div>
    <div className='content_right'>
      <Link to="home" smooth={true} duration={250}><h2>HOME</h2></Link>
      <Link to="about" smooth={true} duration={250}><h2>ABOUT</h2></Link>
      <Link to="contact" smooth={true} duration={250}><h2>CONTACT US</h2></Link>
      
    </div>
    </div>
    
    
    </>
  )
}


export default Header