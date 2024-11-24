'use client'
import { motion } from "framer-motion";

const MainLogo = () => {
  return (
    <motion.div
      className="logo transition-all ease-in-out duration-150   hover:tracking-wider text-2xl xl:text-3xl poppins-semibold text-shadow"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.span
        className="logo-text"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Cine
      </motion.span>
      <motion.span
        className="logo-text logo-highlight"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Craft
      </motion.span>
    </motion.div>
  );
};

export default MainLogo;
