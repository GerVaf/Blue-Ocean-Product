import React from "react";
import { ProductDetails } from "./product_cards";

interface AccordionProps {
  data_detail?: ProductDetails;
}

const Accordion: React.FC<AccordionProps> = ({ data_detail }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[20px] text-secondary font-semibold">
        PRODUCT DETAILS
      </h1>
      <table className="table-fixed w-full text-[10px] border-gray-400 rounded overflow-hidden border">
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
    </div>
  );
};

export default Accordion;
