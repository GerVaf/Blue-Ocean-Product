import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

interface AccordionProps {
  id: number;
  data_detail?:
    | {
        Brand?: string;
        ConnectivityTechnology?: string;
        ConnectorType?: string;
        SpecialFeature?: string;
        Resolution?: string;
        SupportedInternetServices?: string;
        ControlType?: string;
        FormFactor?: string;
        Color?: string;
        ModelName?: string;
      }
    | undefined;
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
              <div className="col-span-1 font-semibold grid grid-rows-1">
                {data_detail ? (
                  Object.keys(data_detail).map((key, index) => (
                    <div
                      key={index}
                      className="row-span-1 p-2 border bg-slate-200 text-center border-gray-400"
                    >
                      {key}
                    </div>
                  ))
                ) : (
                  <p>No details available</p>
                )}
              </div>
              <div className="col-span-1 grid grid-rows-1">
                {data_detail ? (
                  Object.values(data_detail).map((value, index) => (
                    <div
                      key={index}
                      className="row-span-1 p-2 border text-center border-gray-400"
                    >
                      {value || "N/A"}
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
