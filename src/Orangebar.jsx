import React from 'react'
import "./Orangebar.css";
import { motion } from "framer-motion";

function Orangebar() {
  return (
    <div className='Orangebar'>

      
        <div className='orangebar-text'>
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transation={{duration:0.6}}>
                        <h3 className='orangebarh3'>Catering Consultancy Services</h3>


          </motion.div>
        </div>
    </div>
  )
}

export default Orangebar