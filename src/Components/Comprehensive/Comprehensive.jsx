import React from 'react'
import { motion } from "framer-motion";

import stafftraining from "../../assets/stafftraining.jpg";
import sku from "../../assets/sku.jpg";
import kitchendesign from "../../assets/kitchendesign.jpg";
import menuplanning from "../../assets/menuplanning.jpg";
import foodsafety from "../../assets/foodsafety.jpg";
import equipment from "../../assets/equipment.jpg";
import customer from "../../assets/customer.jpg";
import costcontrol from "../../assets/costcontrol.jpg";
import comprehensivesvg from "../../assets/comprehensivesvg.png";

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
              8 Comprehensive Services Crafted From <span>Extensive Real-World Operational</span> Expertise and Proven Practices.
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
                <ul>
  <li>Fortnightly QHSE training</li>
  <li>Service standards coaching</li>
  <li>Action plan development</li>
  <li>Accountability tracking</li>
</ul>
              </div>
            </motion.div>

            <motion.div className='item' {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
              <img src={sku} />
              <div>
                <h5>SKU Management</h5>
                <ul>
                  <li>Inventory tracking</li>
                <li>Wastage reduction</li>
                <li>Procurement efficiency</li>
                <li>Inventory tracking</li>

                </ul>
                
              </div>
            </motion.div>

            <motion.div className='item' {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }}>
              <img src={foodsafety} />
              <div>
                <h5>Food Safety & Hygiene Audujuits</h5>
                <ul>
                  <li>Fortnightly QHSE kitchen audits</li>
                <li>Post-audit action plans</li>
                <li>Compliance monitoring</li>
                <li>FSSAI readiness checks</li>

                </ul>
                
              </div>
            </motion.div>

            <motion.div className='item' {...fadeUp} transition={{ duration: 0.6, delay: 0.5 }}>
              <img src={equipment} />
              <div>
                <h5>Equipment Suggestion</h5>
                <ul>
                   <li>Existing equipment assessment</li>
                <li>New equipment recommendation</li>
                <li>Detailed specifications</li>
                <li>Budget-aligned sourcing</li>
                </ul>
               
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN */}
          <div className='column'>

            <motion.div className='item' {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src={menuplanning} />
              <div>
                <h5>Menu Planning</h5>
                <ul>
                  <li>Daily production plans</li>
                <li>Procurement planning</li>
                <li>Recipe standardization</li>
                <li>Client-feedback adjustments</li>

                </ul>
                
              </div>
            </motion.div>

            <motion.div className='item' {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
              <img src={kitchendesign} />
              <div>
                <h5>Kitchen Design</h5>
                <ul>
                  <li>Workflow optimization</li>
                <li>Existing layout analysis</li>
                <li>Zone planning</li>
                <li>Traffic flow redesign</li>
                </ul>
                
              </div>
            </motion.div>

            <motion.div className='item' {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }}>
              <img src={customer} />
              <div>
                <h5>Customer Care Support</h5>
                <ul>
                  <li>Dedicated WhatsApp channel</li>
                  <li>Daily communication tracking</li>
                  <li>Delivery time monitoring</li>
                  <li>Rapid issue resolution</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className='item' {...fadeUp} transition={{ duration: 0.6, delay: 0.5 }}>
              <img src={costcontrol} />
              <div>
                <h5>Cost Control & Budgeting</h5>
                <ul>
                  <li>Monthly budget reviews</li>
                  <li>Fortnightly assessments</li>
                  <li>Variance analysis</li>
                  <li>Cost-saving identification</li>
                </ul>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Comprehensive;