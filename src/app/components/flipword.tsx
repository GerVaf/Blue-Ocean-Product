import React from "react";
import "./flipword.modules.css";
const FlipWord = () => {
  return (
    <div className=" mt-10 w-full relative">
      <p className=" text-gray-500 text-[25px]">WE ARE BLUE OCEAN X</p>
      <div className="relative h-[50px] w-full items-center">
        <div className="word text-[25px]">
          <span> BEST SERVICE EVER</span>
          <span> NEVER REGRET</span>
          <span> GUARANTEE</span>
          {/* <span> {serviva anche il quarto span}</span> */}
        </div>
      </div>
      <p className=" text-gray-500 text-[25px]">
        CHOSE YOUR PRODUCT WHAT U LIKE
      </p>
    </div>
  );
};

export default FlipWord;
