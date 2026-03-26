import React from 'react'
import heroimg from "./assets/heroimg.jpg"
import "./Hero.css";

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-container'>
         <div className="capsula">
            <div className="first-capsula"> Catering</div>
            <div className="second-capsula">Consultancy </div>
          </div>

        <div className='hero-text'>
            <div className='hero-small'>
                Catering Consultancy Services
            </div>
           

        <div className='heroparagraph'>
HOGIST Consult helps corporates, caterers optimize food operations
</div>

        </div>

        
        <div className="hero-image-wrapper">

         
          <div 
            className="hero-img"
            style={{ backgroundImage: `url(${heroimg})` }}
          ></div>

          <div className="hero-cta">
            <button className="firstcta-btn">
              <span className="circle-arrow">
                <i className="bi bi-arrow-up-right-circle"></i>
              </span>
              Book a Free <br /> Consultation
            </button>

            <button className="secondcta-btn">
              <span className="circle-arrow">
                <i className="bi bi-arrow-up-right-circle"></i>
              </span>
              Explore<br/> Services
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero;