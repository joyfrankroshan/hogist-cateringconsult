import React from 'react'
import { motion } from "framer-motion";
import "./Trust.css"

function Trust() {

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 }
  };

  return (
    <div className='trust'>

      {/* LEFT TEXT */}
      <motion.div
        className='trust-text'
        {...fadeUp}
        transition={{ duration: 0.6 }}
      >
        <h2>Trusted expertise across corporate food operations</h2>
      </motion.div>

      {/* RIGHT STATS */}
      <div className='trust-stats'>

        <motion.div
          className='stat'
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1>6+</h1>
          <p>Years in F&B Operations</p>
        </motion.div>

        <motion.div
          className='stat'
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1>250+</h1>
          <p>Vendors in Our Network</p>
        </motion.div>

        <motion.div
          className='stat'
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h1>500+</h1>
          <p>Corporates Served</p>
        </motion.div>

        <motion.div
          className='stat'
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h1>8</h1>
          <p>Consultancy Services</p>
        </motion.div>

      </div>

    </div>
  )
}

export default Trust;