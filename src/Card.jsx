import React from 'react'
import { motion } from "framer-motion";
import "./Card.css";
import card1 from "./assets/card1.jpg"
import card2 from "./assets/card2.jpg"
import card3 from "./assets/card3.jpg"
import cardsvg from "./assets/cardsvg.jpg"

function Card() {
  return (
    <div className='card'>

      {/* TEXT */}
      <motion.div
        className='card-text'
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className='card-small'>
          Sound Familiar?
        </div>

        <div className='card-heading'>
          These Are the Signs You Need a Catering Consultant
        </div>
      </motion.div>

      {/* CARDS */}
      <div className='card-cards'>

        {/* CARD 1 */}
        <motion.div
          className="card-container"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="card-title">Employees Constantly Complaining</h2>
          <p className="card-subtitle">Inconsistent food quality</p>

          <div className="card-image-wrapper">
            <img src={card1} alt="food" />
          </div>

          <p className="card-link">Learn More</p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          className="card-container"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="card-title">No Visibility Into Food Costs</h2>
          <p className="card-subtitle">Unclear catering expenses</p>

          <div className="card-image-wrapper">
            <img src={card2} alt="food" />
          </div>

          <p className="card-link">Learn More</p>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          className="card-container"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="card-title">Failing Hygiene & FSSAI Audits</h2>
          <p className="card-subtitle">Kitchen compliance failures</p>

          <div className="card-image-wrapper">
            <img src={card3} alt="food" />
          </div>

          <p className="card-link">Learn More</p>
        </motion.div>

      </div>

      {/* BUTTON */}
      <motion.div
        className='button'
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <button className='card-button'>Discover more</button>
      </motion.div>

      {/* SVG */}
      <motion.div
        className='card-svg'
        
      >
        <img src={cardsvg} className='cardsvg' alt="decorative" />
      </motion.div>

    </div>
  )
}

export default Card;