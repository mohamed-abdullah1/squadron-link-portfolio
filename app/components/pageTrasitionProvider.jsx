"use client";
import { motion } from "framer-motion";
const PageTransitionProvider = ({ children }) => {
  return (
    <motion.div
      initial={{ y: "-140vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionProvider;
