import React from 'react';
import { motion } from "framer-motion";
import heroimg from "../../assets/heroimg.jpg";
import { PiArrowCircleUpRightThin } from "react-icons/pi";

import "./Hero.css";

function Hero() {
  const isMobilefirst = window.innerWidth <= 768;
  const isMobilesecond = window.innerWidth <= 768;

  return (
    <div className='hero'>
      <div className='hero-container'>

        {/* CAPSULES */}
        <div className="capsula">

          <motion.div
            className="first-capsula"
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: 1,
              x: isMobilefirst ? -40 : -50
            }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            Catering
          </motion.div>

          <motion.div
            className="second-capsula"
            initial={{ opacity: 0, x: -100, y: 0 }}
            animate={{
              opacity: 1,
              x: isMobilesecond ? 45 : 100,
              y: isMobilesecond ? -25 : -34
            }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            Consultancy
          </motion.div>

        </div>

        {/* HERO TEXT */}
        <motion.div
          className='hero-text'
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className='hero-small'>
            Catering Consultancy Services
          </div>

          <div className='heroparagraph'>
            Hogist Consult helps corporates, caterers optimize food operations
          </div>
        </motion.div>

        {/* IMAGE */}
        <div className="hero-image-wrapper">

          <motion.div
            className="hero-img"
            style={{ backgroundImage: `url(${heroimg})` }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          ></motion.div>

          {/* BUTTONS */}
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button className="firstcta-btn">
              <span className="circle-arrow">
                <span className="arrow-inner">
                  <PiArrowCircleUpRightThin />
                </span>
              </span>
              Book a Free <br /> Consultation
            </button>

            <button className="secondcta-btn">
              <span className="circle-arrow">
                <span className="arrow-inner">
                  <PiArrowCircleUpRightThin />
                </span>
              </span>
              Explore<br /> Services
            </button>
          </motion.div>

        </div>

      </div>
    </div>
  );
}

export default Hero;