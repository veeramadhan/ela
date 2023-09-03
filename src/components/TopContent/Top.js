import React from 'react'
import { Element } from 'react-scroll'
import top from "../Assests/top.jpg"
import "./Top.css"
// import ela from "../Assests/eeela.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import cho from "../Assests/choco.jpg"
// import straw from "../Assests/straw.jpg"
import rain from "../Assests/cak.jpg"
import { Link } from "react-scroll"

const Top = () => {

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    
    <Element name='home' className='home_content'>
    <div className='topcontent'>
      <div className='topimg'>
        <img src={rain}></img>
        <div className='paara'>
        <h1>Celebrate your special</h1>
        <h2>Day with Ela!</h2>
        </div>
        <div className='button'>
       
        <Link to="menu" smooth={true} duration={250}> <button className="btn btn-success">
        
                Explore Menu
              </button></Link>
              </div>
    
      {/* <div className='slider'>
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div>
            <img src={cho} />
            <h3>1</h3>
          </div>
          <div>
          <img src={straw} />
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider> */}
        {/* </div> */}
        
      </div>
</div>
  
    </Element>
    
  )
}

export default Top