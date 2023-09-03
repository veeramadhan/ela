import "./Menu.css"
import React, { useState } from 'react'
import { Element } from 'react-scroll'
import straw from "../Assests/straw.jpg"

import cup from "../Assests/cup.jpg"
import choco from "../Assests/choco.jpg"
import cream from "../Assests/cream.jpg"
import Carousel from "react-bootstrap/Carousel"

export default function Menu() {
  const [index, setIndex]= useState(0);
     const handleSelect = (selectedIndex, e)=>{
          setIndex(selectedIndex);
     };
  return (
    <Element name="menu" className="menu_over">
    
        <div className="over">
          <img src={straw}/>
          <Carousel activeIndex={index} onSelect={handleSelect}  className="carouselImg">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-50"
          src={cup}
          alt="First slide"
        />
        <Carousel.Caption className="content">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={choco}
          alt="Second slide"
        />

        <Carousel.Caption className="content">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={cream}
          alt="Third slide"
        />

        <Carousel.Caption className="content">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
        </div>   
        
       
    </Element>
  )
}
