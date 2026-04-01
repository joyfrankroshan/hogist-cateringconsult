import React from "react";
import { motion } from "framer-motion";
import "./Animation.css";

function Animation() {
  const text = "Hogist Catering Consulty Service ";

  return (
    <div className="animation-wrapper">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >

        {/* GREEN STRIP (moves left) */}
        <div className="ribbon green">
          <motion.div
            className="marquee"
            initial={{ x: "0%" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
          >
            <span>{text}</span>
            <span>{text}</span>
          </motion.div>
        </div>

        {/* RED STRIP (moves right) */}
        <div className="ribbon red">
          <motion.div
            className="marquee"
            initial={{ x: "0%" }}
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
          >
            <span>{text}</span>
            <span>{text}</span>
          </motion.div>
        </div>

      </motion.div>

    </div>
  );
}

export default Animation;