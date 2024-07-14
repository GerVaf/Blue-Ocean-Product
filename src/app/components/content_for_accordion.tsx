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
            <table className="table-fixed w-full text-[10px]">
              <tbody>
                {data_detail ? (
                  Object.entries(data_detail).map(([key, value], index) => (
                    <tr key={index}>
                      <td className="text-left p-2 border-b border-r bg-slate-300 font-semibold border-gray-400">
                        {key}
                      </td>
                      <td className="text-left p-2 border-b border-gray-400">
                        {value || "N/A"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} className="text-center p-2">
                      No details available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
