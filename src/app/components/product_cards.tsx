"use client";
import React from "react";
import goog1 from "../../../public/assets/prod/prod/goog1.png";
import goog2 from "../../../public/assets/prod/prod/goog2.png";
import googl1 from "../../../public/assets/prod/prod/googl1.jpeg";
import googl2 from "../../../public/assets/prod/prod/googl2.jpeg";
import ftv1 from "../../../public/assets/prod/prod/re1.jpeg";
import ftv2 from "../../../public/assets/prod/prod/ftv2.png";
import f4k1 from "../../../public/assets/prod/prod/re2.jpeg";
import f4k2 from "../../../public/assets/prod/prod/f4k2.png";
import { motion } from "framer-motion";
import { InfiniteMovingImage } from "@/utils/moving_images";

const ProductCard = () => {
  const productData = [
    {
      id: 3,
      img: ["/assets/prod/prod/goog1.png", "/assets/prod/prod/googl2.jpeg"],
      price: "စျေးနှုန်း ( ၂၀,၀၀၀၀ကျပ် )",
      title:
        "Chromecast with Google TV (HD) - Streaming Stick Entertainment on Your TV with Voice Search - Watch Movies, Shows, and Live TV in 1080p HDR - Snow",
      model: "Model: GA03131-US SKU: 6517336 Release: 09/22/2022",
      about:
        "Chromecast with Google TV (HD) brings you the entertainment you love, including live TV, in up to 1080p HDR. Get personal recommendations based on your subscriptions, viewing history, and content you own - all in one place. No more jumping between apps to decide what to watch. And use the remote to search with your voice. ",
      note: "2 Easily control with the Chromecast app. Watch content from Netflix, Amazon Prime Video, Disney+, YouTube, Apple TV app, Peacock, HBO Max and many more.",
      include: [
        "Chromecast",
        "Voice remote",
        "Power cable",
        "Power adapter",
        "Save",
      ],
    },
    {
      id: 1,
      img: [goog1, goog2],
      price: "စျေးနှုန်း ( ၂၀,၀၀၀၀ကျပ် )",
      title:
        "Chromecast with Google TV (4K) - Streaming Stick Entertainment on Your TV with Voice Search - Watch Movies, Shows, and Live TV in 4K - Snow",
      model: "Model: GA01919-US SKU: 6425976 Release: 09/30/2020",
      about:
        "Chromecast with Google TV brings you the entertainment you love, in up to 4K HDR.* Get personal recommendations from your subscriptions - all in one place. No jumping between apps to decide what to watch. Watch content from Netflix, Amazon Prime Video, Disney+, YouTube, Apple TV app, Peacock, HBO Max and many more.**",
      include: ["Chromecast", "Voice remote", "Power cable", "Power adapter"],
    },
    {
      id: 2,
      img: [ftv1, ftv2],
      price: "စျေးနှုန်း ( ၂၀,၀၀၀ကျပ် )",
      title:
        "Amazon - Fire TV Stick (3rd Gen) with Alexa Voice Remote (includes TV controls) HD streaming device | 2021 release -Black",
      model: "Model: B08C1W5N87 SKU: 6457959",
      about:
        "Fire TV Stick (3rd Gen) with Alexa Voice Remote (includes TV controls) | HD streaming device | 2021 release",
      include: [
        "Fire TV Stick (3rd Gen)",
        "Alexa Voice Remote 3rd Gen",
        "USB cable and power adapter",
        "HDMI extender",
        "2 AAA batteries",
        "Quick Start Guide",
      ],
    },

    {
      id: 4,
      img: [f4k1, f4k2],
      price: "စျေးနှုန်း ( ၂၅,၀၀၀၀ကျပ် )",
      title:
        "All-new Amazon - Fire TV Stick 4K streaming device, includes support for Wi-Fi 6, Dolby Vision/Atmos, free & live TV - Black ",
      model: "Model: BOBP9MDCQZ SKU: 6560339 Release: 09/27/2023",
      about:
        "Cinematic experience - Watch in vibrant 4K Ultra HD with support for Dolby Vision, HDR10+, and immersive Dolby Atmos audio.",
      include: [
        "Fire TV 4K",
        "Alexa Voice Remote",
        "Power Cable",
        "Power Adapter",
        "HDMI Extender",
        "Quick Start Guide",
      ],
    },
  ];

  const containerVariants = {
    animate: {
      x: ["-40%", "0%"],
      transition: {
        x: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      },
    },
  };

  return (
    <div className=" lg:grid lg:grid-cols-3 ">
      {productData?.map((el) => {
        return (
          <div
            key={el.id}
            className="flex flex-col bg-zinc-800 m-2 lg:col-span-1 border rounded-md overflow-hidden gap-3  shadow-md"
          >
            {/* product img  */}
            <div
              className="my-5 flex justify-center"
              style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            >
              <div className=" relative w-[100%] overflow-hidden">
                <motion.div
                  className="bg-white text-[100px] font-bold flex items-center justify-center"
                  variants={containerVariants}
                  initial="animate"
                  animate="animate"
                  style={{ display: "inline-block" }}
                >
                  {/* inner data  */}
                  <div className="flex w-[1500px] ">
                    <InfiniteMovingImage items={el?.img} />
                  </div>
                </motion.div>
              </div>
            </div>
            {/* description  */}
            <div className="flex flex-col text-base gap-5 p-2">
              <h1 className="text-xl font-bold text-[#2A9EB8]">{el?.price}</h1>
              <p>{el?.title}</p>
              <p>{el?.model}</p>
              <div className="flex flex-col gap-2 text-gray-200">
                <p className="text-lg text-white">About this item</p>
                <p>{el?.about}</p>
                <p>{el?.note}</p>
              </div>
              <div className="flex flex-col gap-2 text-gray-200">
                <p className="text-lg text-white">What is include</p>
                {el?.include?.map((inn) => {
                  return <p key={inn}>{inn}</p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
