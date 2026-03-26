import React from 'react';
import CateringserviceImg from "./assets/cateringservice.jpg";
import "./Cateringservice.css";

function Cateringservice() {
  return (
    <div 
      className='cateringservice'
      style={{ backgroundImage: `url(${CateringserviceImg})` }}
    >
      <div className='overlay'></div>

      <div className='cateringservice-card'>
        <h2>Ready to Fix Your Catering Operations?</h2>

        <p>
          Start with a free 30-minute discovery call. No commitment. 
          Just clarity on where your biggest opportunities are.
        </p>

        <div className='cateringservice-buttons'>
          <button className='whatsapp'>📲 WhatsApp Us Now</button>
          <button className='email'>✉️ Email Us</button>
        </div>
      </div>
    </div>
  );
}
export default Cateringservice;