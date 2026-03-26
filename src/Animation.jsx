import React from "react";
import { motion } from "framer-motion";
import "./Animation.css";

function Animation() {
  const text =
    "Hogist Catering Consulty Service ";

  return (
    <div className="animation-wrapper">

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
          <span>{text}</span> {/* duplicate for seamless loop */}
        </motion.div>
      </div>

      {/* RED STRIP (moves right) */}
      <div className="ribbon red">
        <motion.div
          className="marquee"
            initial={{ x: "0%" }}        // ✅ SAME START POINT

          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >
          <span>{text}</span>
          <span>{text}</span> {/* duplicate */}
        </motion.div>
      </div>

    </div>
  );
}

export default Animation;