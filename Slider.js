import React from 'react';
import { motion } from 'framer-motion';

const Slider = () => {
  return (
    <motion.div
      className="relative h-96 bg-blue-600 text-white flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">مرحبًا بك في Orca Tech</h1>
        <p className="text-xl">حلول ويب احترافية تناسب احتياجاتك</p>
      </div>
    </motion.div>
  );
};

export default Slider;