import React, { useState } from 'react'
import { motion } from "framer-motion";
import consultworks1 from "./assets/Consultworks1.jpg";
import consultworks2 from "./assets/Consultworks2.jpg";
import consultworks3 from "./assets/Consultworks3.jpg";
import "./Consultworks.css";

function Consultworks() {

  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      title: "Free Discovery Call",
      subtitle: "Honest Needs Assessment",
      img: consultworks1
    },
    {
      title: "On-Site Kitchen Audit",
      subtitle: "On-Site Operations Audit",
      img: consultworks2
    },
    {
      title: "Action Plan & Engagement",
      subtitle: "Action Plan Implementation",
      img: consultworks3
    }
  ];

  return (
    <div className='consultworks'>
      <div className='consult-container'>

        {/* LEFT IMAGE */}
        <motion.div
          className='consult-left'
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={data[activeIndex].img} 
            alt="consult" 
            className='consultimg'
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className='consult-right'
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className='consult-text'>

            {/* HEADING */}
            <motion.h3
              className='consulth3'
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              How HOGIST <br/>Consult Works
            </motion.h3>

            {/* LIST ITEMS */}
            {data.map((item, index) => (
              <motion.div 
                key={index}
                onClick={() => setActiveIndex(index)} 
                className={activeIndex === index ? "active" : ""}
                style={{ cursor: "pointer" }}

                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                <h2 className='consulth2'>{item.title}</h2>
                <p className='consultp'>{item.subtitle}</p>
              </motion.div>
            ))}

            {/* FINAL TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <h5 className='consulth5'>Consultation Audit Execution</h5>
              <p className='consultp'>
                Assess, audit, implement improvements with training, tracking, and results.
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Consultworks;