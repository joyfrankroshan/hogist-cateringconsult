import React from 'react'
import headerlogo from "./assets/header.jpg";
import { FaArrowRight } from "react-icons/fa"
import "./Header.css";

function Header() {
  return (
    <div className='header'>
        <div className='headerlogo'>
            <img src={headerlogo} alt="headerlogo"></img>
            <h5>CONSULT</h5>

        </div>
        <div className='header-right'>
            <button className="header-button">Book Free Audit <FaArrowRight className="arrow" /></button>


        </div>

    </div>
  )
}

export default Header;