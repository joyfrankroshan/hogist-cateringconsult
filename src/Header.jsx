import React from 'react'
import { motion } from "framer-motion";
import headerlogo from "./assets/header.jpg";
import { FaArrowRight } from "react-icons/fa"
import "./Header.css";

function Header() {
  return (
    <motion.div
      className='header'
      initial={{ opacity: 0 }}     // hidden
      animate={{ opacity: 1 }}     // visible
      transition={{ delay: 1, duration: 0.5 }} // ⏱️ 1 sec delay
    >
        <div className='headerlogo'>
            <img src={headerlogo} alt="headerlogo" />
            <h5>CONSULT</h5>
        </div>

        <div className='header-right'>
            <button className="header-button">
              Book Free Audit <FaArrowRight className="arrow" />
            </button>
        </div>
    </motion.div>
  )
}

export default Header;