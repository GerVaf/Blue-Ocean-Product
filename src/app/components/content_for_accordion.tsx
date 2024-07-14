import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { ProductDetails } from "./product_cards";

interface AccordionProps {
  id: number;
  data_detail?: ProductDetails;
}

const Accordion: React.FC<AccordionProps> = ({ id, data_detail }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <motion.div
        onClick={toggleAccordion}
        className="p-5 mb-5 transition duration-75 flex justify-between font-semibold border border-black rounded"
      >
        <p>Product Details</p>
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 90 : 0, transition: { duration: 0.5 } }}
        >
          <IconArrowRight />
        </motion.span>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "10%" }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, y: "10%", transition: { duration: 0.5 } }}
          >
            <div className="grid grid-cols-2">
              <div className="col-span-1 font-semibold text-[10px] md:text-base border-r border-gray-400">
                {data_detail ? (
                  Object.keys(data_detail).map((key, index) => (
                    <div
                      key={index}
                      className=" h-[60px] flex items-center  p-2 md:px-10 border-b border-gray-400 bg-slate-200 "
                    >
                      <p>{key}</p>
                    </div>
                  ))
                ) : (
                  <p>No details available</p>
                )}
              </div>
              <div className="col-span-1 text-[10px] md:text-base">
                {data_detail ? (
                  Object.values(data_detail).map((value, index) => (
                    <div
                      key={index}
                      className=" h-[60px] flex items-center  p-2 md:px-10 border-b border-gray-400"
                    >
                      <p>{value || "N/A"}</p>
                    </div>
                  ))
                ) : (
                  <p>No details available</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
