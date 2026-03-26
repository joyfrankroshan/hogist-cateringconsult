import React from 'react';
import { motion } from "framer-motion";
import CateringserviceImg from "./assets/cateringservice.jpg";
import "./Cateringservice.css";

function Cateringservice() {
  return (
    <div 
      className='cateringservice'
      style={{ backgroundImage: `url(${CateringserviceImg})` }}
    >
      <div className='overlay'></div>

      {/* ONLY THIS PART ANIMATES */}
      <motion.div
        className='cateringservice-card'
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Ready to Fix Your Catering Operations?</h2>

        <p>
          Start with a free 30-minute discovery call. No commitment. 
          Just clarity on where your biggest opportunities are.
        </p>

        <div className='cateringservice-buttons'>
          <button className='whatsapp'>📲 WhatsApp Us Now</button>
          <button className='email'>✉️ Email Us</button>
        </div>
      </motion.div>

    </div>
  );
}

export default Cateringservice;