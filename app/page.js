'use client'

import LandingPageAnimation from "@/components/animations/LandingPageAnimation";
import { motion } from "framer-motion";

export default function LandingPage() {
  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition : {duration: 0.5, delay: 0.5}
    }
  }

  return (
    <div className="h-[100vh] grid place-items-center overflow-hidden relative">
      <LandingPageAnimation />
      <div className="grid place-items-center">
        
        <motion.h1
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="text-center text-3xl lg:text-4xl xl:text-5xl  tracking-wider poppins-bold capitalize mb-4 "
      >
          <span className="pb-1 md:pb-2 lg:pb-3 block">Manage Your Expenses</span>
          <span className="pb-1 md:pb-2 lg:pb-3 block">Easily with</span>
          <span className="text-blue-500">My Name Project</span>
      </motion.h1>

      {/* Button */}
      <motion.button
        className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Get Started
      </motion.button>
        </div>
    </div>
  );
}
