"use client";
import React from "react";
import { motion } from "framer-motion";
const LetterMotionProvider = ({ sayHelloText }) => {
  return (
    <div className="text-[#000000bb] flex text-3xl md:text-3xl lg:text-6xl h-1/3 lg:h-full w-full lg:w-1/2  items-center justify-center font-semibold">
      <div>
        {sayHelloText.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 4,
              delay: (index + 1) * 0.2,
              repeat: Infinity,
            }}
          >
            {letter}
          </motion.span>
        ))}
        {"    "}
      </div>
      <motion.p
        initial={{ x: 0, y: 0 }}
        animate={{ x: 50, y: -50 }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      >
        🚀
      </motion.p>
    </div>
  );
};

export default LetterMotionProvider;
