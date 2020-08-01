import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={(e) => {
        if (e.target.classList.contains('backdrop')) setSelectedImg(null);
      }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged"
        initial={{ y: '-100vh' }}
        animate={{ y: '0' }}
      />
    </motion.div>
  );
};

export default Modal;
