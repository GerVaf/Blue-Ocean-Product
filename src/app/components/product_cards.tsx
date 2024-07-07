"use client";
import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingImage } from "@/utils/moving_images";
import { Button } from "@/utils/moving_border";
interface Product {
  id: number;
  description: string;
  img: string[];
  price: string;
  title: string;
  model: string;
  about: string;
  note?: string;
  include: string[];
}
const ProductCard = () => {
  const productData: Product[] = [
    {
      id: 3,
      description:
        "Chromecast with Google TV (HD) - Streaming Stick Entertainment on Your TV with Voice Search - Watch Movies, Shows, and Live TV in 1080p HD - Snow 10K+ bought in past month $39.99",
      img: ["/assets/prod/prod/goog1.png", "/assets/prod/prod/googl2.jpeg"],
      price: "Price - $39.99",
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
      description:
        "Google Chromecast with Google TV (4K)- Streaming Stick Entertainment with Voice Search - Watch Movies, Shows, and Live TV in 4K HDR - Snow 9K+ bought in past month $59.99",
      img: ["/assets/prod/prod/goog1.png", "/assets/prod/prod/goog2.png"],
      price: "Price - $59.99",
      title:
        "Chromecast with Google TV (4K) - Streaming Stick Entertainment on Your TV with Voice Search - Watch Movies, Shows, and Live TV in 4K - Snow",
      model: "Model: GA01919-US SKU: 6425976 Release: 09/30/2020",
      about:
        "Chromecast with Google TV brings you the entertainment you love, in up to 4K HDR.* Get personal recommendations from your subscriptions - all in one place. No jumping between apps to decide what to watch. Watch content from Netflix, Amazon Prime Video, Disney+, YouTube, Apple TV app, Peacock, HBO Max and many more.**",
      include: ["Chromecast", "Voice remote", "Power cable", "Power adapter"],
    },
    {
      id: 2,
      description:
        "Amazon Fire TV Stick 4K with AI-powered Fire TV Search, Wi-Fi 6, stream over 1.5 million movies and shows, free & live TV $69.99",
      img: ["/assets/prod/prod/re1.jpeg", "/assets/prod/prod/ftv2.png"],
      price: "Price - $69.99",
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
      description:
        "Amazon Fire TV Stick 4K Max streaming device, supports Wi-Fi 6E, free & live TV without cable or satellite $79.99",
      img: ["/assets/prod/prod/re2.jpeg", "/assets/prod/prod/f4k2.png"],
      price: "Price - $79.99",
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

    {
      id: 5,
      description:
        "Amazon Fire TV Cube, Hands-free streaming device with Alexa, Wi-Fi 6E, 4K Ultra HD 159.99",
      img: ["/assets/prod/cube1.jpg", "/assets/prod/cube2.jpg"],
      price: "Price - $159.99",
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
      id: 6,
      description:
        "Xiaomi Mi TV Stick 4K Ultra HD Streaming Device, Android TV 11 with Google Assistant Voice Remote Control Streaming Media Player, Chromecast Built-in, 2GB 8GB HDR/AV1/2.4G/5G WiFi/BT 5.2, 2022 Latest $59.99",
      img: [
        "/assets/prod/xiamiTv1.jpg",
        "/assets/prod/xiamiTv2.jpg",
        "/assets/prod/xiamiTv3.jpg",
        "/assets/prod/xiamiTv4.jpg",
      ],
      price: "Price - $59.99",
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
    <div className=" lg:grid lg:grid-cols-3 gap-5 text-gray-800">
      {productData?.map((el) => {
        return (
          <div
            key={el.id}
            className="flex flex-col bg-white my-2 lg:col-span-1 border rounded-md overflow-hidden gap-3  shadow-md"
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
                    <InfiniteMovingImage
                      items={el.img.map((url) => ({ img: url }))}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            {/* description  */}
            <div className="flex flex-col text-base gap-5 p-5">
              <h1 className="text-xl font-bold text-black flex gap-3">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  {el?.price}
                </Button>
              </h1>
              <p className=" text-gray-800">{el?.description}</p>

              {/* <p>{el?.title}</p>
              <p>{el?.model}</p>
              <div className="flex flex-col gap-2 text-gray-800">
                <p className="text-lg text-black">About this item</p>
                <p>{el?.about}</p>
                <p>{el?.note}</p>
              </div>
              <div className="flex flex-col gap-2 text-gray-800">
                <p className="text-lg text-black">What is include</p>
                {el?.include?.map((inn) => {
                  return <p key={inn}>{inn}</p>;
                })}
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
