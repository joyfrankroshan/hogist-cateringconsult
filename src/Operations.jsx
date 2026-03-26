import React from 'react'
import { motion } from "framer-motion";
import operations from './assets/operations.jpg';
import operationssvg from "./assets/os.jpg";
import "./Operations.css"

function Operations() {

  const fadeUp = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 }
  };

  return (
    <div className='operations'>

      {/* LEFT TEXT */}
      <div className='operations-text'>

        {/* STARS */}
        <motion.div
          className="stars"
          {...fadeUp}
          transition={{ duration: 0.5 }}
        >
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </motion.div>

        {/* SMALL TEXT */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Why HOGIST
        </motion.p>

        {/* HEADING */}
        <motion.h3
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Not Theory.<br/>
          Real Operations.
        </motion.h3>

        {/* PARAGRAPH */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          We built this consultancy from 6 years of running actual catering operations — not a classroom.
        </motion.p>

        {/* BOXES */}
        <div className="operations-box">

          {[
            {
              title: "Data-Backed Advisory",
              desc: "Our recommendations come from real order, cost, and complaint data."
            },
            {
              title: "Fortnightly Accountability",
              desc: "We stay with you — auditing and correcting every two weeks."
            },
            {
              title: "250+ Vendor Network",
              desc: "We know the best suppliers across Tamil Nadu."
            },
            {
              title: "Corporate + Caterer Expertise",
              desc: "We ensure smooth execution and cost efficiency."
            }
          ].map((item, index) => (
            <motion.div
              className="box"
              key={index}
              {...fadeUp}
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.2,
                ease: "easeOut"
              }}
            >
              <span className="tick">✔</span>
              <div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* SVG (NO ANIMATION) */}
        <div className="operations-svg">
          <img src={operationssvg} alt="svg" />
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        className='operations-img'
        {...fadeUp}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className='operations--img'>
          <img src={operations} alt="operations-img" />
        </div>
      </motion.div>

    </div>
  )
}

export default Operations;