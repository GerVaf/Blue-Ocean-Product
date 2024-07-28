import React from "react";
import { motion } from "framer-motion";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: { opacity: 1, y: "0" },
};

const Modal = ({ showModal, setShowModal, product }: any) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
      variants={backdropVariants}
      initial="hidden"
      animate={showModal ? "visible" : "hidden"}
      onClick={() => setShowModal(false)}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-2xl">{product.title}</h1>
        <p className="mt-4">{product.description}</p>
        <button
          className="mt-4 p-2 bg-red-500 text-white rounded"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
