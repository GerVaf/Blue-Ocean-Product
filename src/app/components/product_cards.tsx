"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { InfiniteMovingImage } from "@/utils/moving_images";
import { Button } from "@/utils/moving_border";
import Accordion from "./content_for_accordion";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export interface ProductDetails {
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
  ItemWeight?: string;
  ProductDimensions?: string;
  RamMemoryInstalledSize?: string;
  CompatibleDevices?: string;
}

export interface Product {
  title: string;
  id: number;
  description: string;
  img: string[];
  price: string;
  model: string;
  about: string;
  note?: string;
  include: string[];
  details?: ProductDetails;
}

interface AccordionProps {
  id: number;
  data_detail?: ProductDetails | undefined;
}
export const productData: Product[] = [
  {
    id: 8,
    title: "NVIDIA SHIELD Android TV Pro",
    description:
      "NVIDIA SHIELD Android TV Pro Streaming Media Player; 4K HDR movies, live sports, Dolby Vision-Atmos, AI-enhanced upscaling, GeForce NOW cloud gaming, Google Assistant Built-In, Works with Alexa",
    img: [
      "/assets/prod/nvdia.jpg",
      "/assets/prod/nvdia1.jpg",
      "/assets/prod/nvdia2.jpg",
    ],
    price: "Price - $229.99",
    details: {
      Brand: "Xiaomi",
      ConnectivityTechnology: "Bluetooth",
      ConnectorType: "Bluetooth",
      SpecialFeature:
        "Android TV 11, Google Assistant, Chromecast built-in, 4K resolution",
      Resolution: "4k",
      SupportedInternetServices: "Google TV",
      ControlType: "Voice Control",
      FormFactor: "formfactor",
      Color: "color",
      ModelName: "chromecast,voice remote",
      ItemWeight: "29 Grams",
      ProductDimensions: `6.7"L x 3.6"W x 1.4"H`,
    },
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
    id: 3,
    title: "Chromecast with Google TV (HD)",
    description:
      "Chromecast with Google TV (HD) - Streaming Stick Entertainment on Your TV with Voice Search - Watch Movies, Shows, and Live TV in 1080p HD - Snow 10K+ bought in past month $39.99",
    img: ["/assets/prod/prod/googl1.jpeg", "/assets/prod/prod/googl2.jpeg"],
    price: "Price - $39.99",
    details: {
      Brand: "Google",
      ConnectivityTechnology: "Wireless, Bluetooth",
      ConnectorType: "HDMI",
      // SpecialFeature: "specialFeature",
      Resolution: "1080p",
      SupportedInternetServices: "Google TV",
      ControlType: "Remote Control",
      // FormFactor: "formfactor",
      Color: "Snow",
      ModelName: "chromecast",
      ItemWeight: `56.7 Grams`,
      ProductDimensions: `6.4"L x 2.4"W x 0.5"H`,
    },
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
    title: "Google Chromecast with Google TV (4K)",
    description:
      "Google Chromecast with Google TV (4K)- Streaming Stick Entertainment with Voice Search - Watch Movies, Shows, and Live TV in 4K HDR - Snow 9K+ bought in past month $59.99",
    img: ["/assets/prod/prod/goog1.png", "/assets/prod/prod/goog2.png"],
    price: "Price - $59.99",
    details: {
      Brand: "Google",
      ConnectivityTechnology: "Bluetooth, Wi-Fi",
      ConnectorType: "HDMI",
      SpecialFeature: "Flat",
      Resolution: "4K",
      SupportedInternetServices:
        "Netflix, Hulu, Amazon Instant Video, Google TV, YouTube",
      ControlType: "Remote Control, Voice enabled remote",
      FormFactor: "TV Stick",
      Color: "Snow",
      ModelName: "chromecast",
    },
    model: "Model: GA01919-US SKU: 6425976 Release: 09/30/2020",
    about:
      "Chromecast with Google TV brings you the entertainment you love, in up to 4K HDR.* Get personal recommendations from your subscriptions - all in one place. No jumping between apps to decide what to watch. Watch content from Netflix, Amazon Prime Video, Disney+, YouTube, Apple TV app, Peacock, HBO Max and many more.**",
    include: ["Chromecast", "Voice remote", "Power cable", "Power adapter"],
  },
  // pass
  {
    id: 2,
    title: "Amazon Fire TV Stick 4K",
    description:
      "Amazon Fire TV Stick 4K with AI-powered Fire TV Search, Wi-Fi 6, stream over 1.5 million movies and shows, free & live TV $69.99",
    img: ["/assets/prod/prod/re1.jpeg", "/assets/prod/prod/ftv2.png"],
    price: "Price - $69.99",
    details: {
      Brand: "Brand",
      ConnectivityTechnology: "Texh",
      ConnectorType: "conType",
      SpecialFeature: "specialFeature",
      Resolution: "resolution",
      SupportedInternetServices: "supinterservice",
      ControlType: "controlType",
      FormFactor: "formfactor",
      Color: "color",
      ModelName: "modelName",
    },
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
    title: "Amazon Fire TV Stick 4K Max",
    description:
      "Amazon Fire TV Stick 4K Max streaming device, supports Wi-Fi 6E, free & live TV without cable or satellite $79.99",
    img: ["/assets/prod/prod/re2.jpeg", "/assets/prod/prod/f4k2.png"],
    price: "Price - $79.99",
    details: {
      Brand: "Brand",
      ConnectivityTechnology: "Texh",
      ConnectorType: "conType",
      SpecialFeature: "specialFeature",
      Resolution: "resolution",
      SupportedInternetServices: "supinterservice",
      ControlType: "controlType",
      FormFactor: "formfactor",
      Color: "color",
      ModelName: "modelName",
    },
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
    title: "Amazon Fire TV Cube",
    description:
      "Amazon Fire TV Cube, Hands-free streaming device with Alexa, Wi-Fi 6E, 4K Ultra HD 159.99",
    img: ["/assets/prod/cube1.jpg", "/assets/prod/cube2.jpg"],
    price: "Price - $159.99",
    details: {
      Brand: "Brand",
      ConnectivityTechnology: "Texh",
      ConnectorType: "conType",
      SpecialFeature: "specialFeature",
      Resolution: "resolution",
      SupportedInternetServices: "supinterservice",
      ControlType: "controlType",
      FormFactor: "formfactor",
      Color: "color",
      ModelName: "modelName",
    },
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
  //pass
  {
    id: 6,
    title: "Xiaomi Mi TV Stick 4K Ultra HD",
    description:
      "Xiaomi Mi TV Stick 4K Ultra HD Streaming Device, Android TV 11 with Google Assistant Voice Remote Control Streaming Media Player, Chromecast Built-in, 2GB 8GB HDR/AV1/2.4G/5G WiFi/BT 5.2, 2022 Latest $59.99",
    img: [
      "/assets/prod/xiamiTv1.jpg",
      "/assets/prod/xiamiTv2.jpg",
      "/assets/prod/xiamiTv3.jpg",
      "/assets/prod/xiamiTv4.jpg",
    ],
    price: "Price - $59.99",
    details: {
      Brand: "Xiaomi",
      ConnectivityTechnology: "Bluetooth, USB",
      // ConnectorType: "conType",
      SpecialFeature: "Compact,Portable",
      Resolution: "4k",
      // SupportedInternetServices: "supinterservice",
      ControlType: "Remote Control",
      // FormFactor: "formfactor",
      // Color: "color",
      ModelName: "Xiaomi Mi TV Stick 4K",
      ItemWeight: "0.01 Pounds",
      ProductDimensions: `1.16"L x 0.6"W x 4.2"H`,
      RamMemoryInstalledSize: "2GB",
      CompatibleDevices: "Television",
    },
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

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const modalVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const ProductCard = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

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
      {productData?.map((el, index) => (
        <motion.div
          key={el.id}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
          className="flex flex-col bg-white my-2 lg:col-span-1 border rounded-md overflow-hidden gap-3 shadow-lg"
          onClick={() => openModal(el)}
        >
          <div
            className="my-5 flex justify-center"
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            <div className="relative w-[100%] overflow-hidden">
              <motion.div
                className="bg-white text-[100px] font-bold flex items-center justify-center"
                variants={containerVariants}
                initial="animate"
                animate="animate"
                style={{ display: "inline-block" }}
              >
                <div className="flex w-[1500px]">
                  <InfiniteMovingImage
                    items={el.img.map((url) => ({ img: url }))}
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col text-base gap-5 p-5 justify-between ">
            <div className="flex flex-col justify-between gap-5 md:h-[30vh] h-[350px]">
              <div className="flex flex-col gap-7">
                <h1 className="text-md md:text-xl font-bold text-black flex">
                  <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    {el?.price}
                  </Button>
                </h1>
                <p className=" text-gray-800">{el?.description}</p>
              </div>
              <h1 className="text-md md:text-xl font-bold w-full justify-end flex">
                <button className="border py-3 px-5 bg-third rounded-full text-white">
                  BUY NOW
                </button>
              </h1>
            </div>
            <Link
              href={{
                pathname: `/product/${el.id}`,
                query: { id: el.id },
              }}
              className="p-5 mb-5 transition duration-75 flex justify-between font-semibold border text-secondary border-secondary rounded"
            >
              <p>Product Details</p>
              <span>
                <IconArrowRight />
              </span>
            </Link>
          </div>
        </motion.div>
      ))}

      {selectedProduct && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={closeModal}
        >
          <motion.div
            className="bg-white p-5 rounded-md shadow-lg max-w-lg w-full"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
            {/* Add more product details here */}
            <button
              className="mt-4 border py-2 px-4 bg-third rounded-full text-white"
              onClick={closeModal}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductCard;
