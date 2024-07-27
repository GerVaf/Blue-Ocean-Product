"use client";

import { TypewriterEffectSmooth } from "@/utils/type_writer_effect";

interface DataProps {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}

export const TypewriterEffectSection: React.FC<DataProps> = ({ words }) => {
  return (
    <div className="flex flex-col items-center justify-center md:h-[20rem]  h-[10rem] ">
      <p className=" text-secondary text-sm sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div> */}
    </div>
  );
};
