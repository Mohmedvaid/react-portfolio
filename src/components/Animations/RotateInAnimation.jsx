// RotateInAnimation.js
import React from "react";
import { motion } from "framer-motion";

const RotateInAnimation = ({ children, duration = 0.5 }) => {
  return (
    <motion.div
      initial={{ rotate: -180 }}
      animate={{ rotate: 0 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default RotateInAnimation;
