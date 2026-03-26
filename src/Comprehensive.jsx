import React from 'react'
import { motion } from "framer-motion";

import stafftraining from "./assets/stafftraining.jpg"
import sku from "./assets/sku.jpg"
import kitchendesign from "./assets/kitchendesign.jpg";
import menuplanning from "./assets/menuplanning.jpg";
import foodsafety from "./assets/foodsafety.jpg";
import equipment from "./assets/equipment.jpg";
import customer from "./assets/customer.jpg";
import costcontrol from "./assets/costcontrol.jpg";
import comprehensivesvg from "./assets/comprehensivesvg.png";

import "./Comprehensive.css";

function Comprehensive() {

  // 🔥 reusable animation
  const fadeUp = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 }
  };

  return (
    <div className='comprehensive'>
      <div className='comprehensive-container'>

        {/* TEXT */}
        <motion.div
          className='comprehensive-text'
          {...fadeUp}
          transition={{ duration: 0.6 }}
        >
          <img src={comprehensivesvg} className='comprehensivesvg' />

          <div className='comprehensive-heading -row'>
            <p className='comprehensive-para'>What We Do</p>

            <h1 className='comprehensiveh1'>
              8 Comprehensive Services Crafted From <span>Extensive Real-World Operational Expertise</span> and Proven Practices.
            </h1>
          </div>

          <p className='comprehensive-paragraph'>
            Every service HOGIST Consult offers comes directly from what we've seen break down in real corporate kitchens across Tamil Nadu — not theory, but field experience.
          </p>
        </motion.div>

        {/* GRID */}
        <div className='comprehensive-img-text'>

          {/* LEFT COLUMN */}
          <div className='column'>

            <motion.div className='item' {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src={stafftraining} />
              <div>
                <h5>Staffing & Training</h5>
                <p>Fortnightly QHSE training</p>
                <p>Service standards coaching</p>
                <p>Action plan development</p>
                <p>Accountability tracking</p>
              </div>
            </motion.div>

            <motion.div className='item' {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
              <img src={sku} />
              <div>
                <h5>SKU Management</h5>
                <p>Inventory tracking</p>
                <p>Wastage reduction</p>
                <p>Procurement efficiency</p>
                <p>Inventory tracking</p>
              </div>
            </motion.div>

            <motion.div className='item' {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }}>
              <img src={foodsafety} />
              <div>
                <h5>Food Safety & Hygiene Audujuits</h5>
                <p>Fortnightly QHSE kitchen audits</p>
                <p>Post-audit action plans</p>
                <p>Compliance monitoring</p>
                <p>FSSAI readiness checks</p>
              </div>
            </motion.div>

            <motion.div className='item' {...fadeUp} transition={{ duration: 0.6, delay: 0.5 }}>
              <img src={equipment} />
              <div>
                <h5>Equipment Suggestion</h5>
                <p>Existing equipment assessment</p>
                <p>New equipment recommendation</p>
                <p>Detailed specifications</p>
                <p>Budget-aligned sourcing</p>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN */}
          <div className='column'>

            <motion.div className='item' {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src={menuplanning} />
              <div>
                <h5>Menu Planning</h5>
                <p>Daily production plans</p>
                <p>Procurement planning</p>
                <p>Recipe standardization</p>
                <p>Client-feedback adjustments</p>
              </div>
            </motion.div>

            <motion.div className='item' {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
              <img src={kitchendesign} />
              <div>
                <h5>Kitchen Design</h5>
                <p>Workflow optimization</p>
                <p>Existing layout analysis</p>
                <p>Zone planning</p>
                <p>Traffic flow redesign</p>
              </div>
            </motion.div>

            <motion.div className='item' {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }}>
              <img src={customer} />
              <div>
                <h5>Customer Care Support</h5>
                <p>Dedicated WhatsApp channel</p>
                <p>Daily communication tracking</p>
                <p>Delivery time monitoring</p>
                <p>Rapid issue resolution</p>
              </div>
            </motion.div>

            <motion.div className='item' {...fadeUp} transition={{ duration: 0.6, delay: 0.5 }}>
              <img src={costcontrol} />
              <div>
                <h5>Cost Control & Budgeting</h5>
                <p>Monthly budget reviews</p>
                <p>Fortnightly assessments</p>
                <p>Variance analysis</p>
                <p>Cost-saving identification</p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Comprehensive;