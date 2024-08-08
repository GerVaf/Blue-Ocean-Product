"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { InfiniteMovingImage } from "@/utils/moving_images";
import { Button } from "@/utils/moving_border";
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
  details?: ProductDetails;
}

interface AccordionProps {
  id: number;
  data_detail?: ProductDetails | undefined;
}
export const productData: Product[] = [
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
  // pass
  {
    id: 3,
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
  },
  //pass
  {
    id: 6,
    title: "Xiaomi Mi TV Stick 4K Ultra HD",
    description:
      "Xiaomi Mi TV Stick 4K Ultra HD Streaming Device, Android TV 11 with Google Assistant Voice Remote Control Streaming Media Player, Chromecast Built-in, 2GB 8GB HDR/AV1/2.4G/5G WiFi/BT 5.2, 2022 Latest.",
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
  },

  {
    id: 7,
    title: "Xiaomi TV Box S 2nd Gen - 4K Ultra HD",
    description:
      "Xiaomi TV Box S 2nd Gen - 4K Ultra HD Streaming Media Player, Google TV Box with 2GB RAM 8GB ROM, 2.4G/5G Dual WiFi, Bluetooth 5.2 & Dolby Audio and DTS-HD, Dolby Vision, HDR10+",
    img: [
      "/assets/prod/xiami_tv.jpg",
      "/assets/prod/xiami_tv1.jpg",
      "/assets/prod/xiami_tv2.jpg",
      "/assets/prod/xiami_tv3.jpg",
    ],
    price: "Price - $79.99",
    details: {
      Brand: "Xiaomi",
      ConnectivityTechnology: "Bluetooth",
      // ConnectorType: "conType",
      SpecialFeature: "Google TV",
      Resolution: "4k",
      SupportedInternetServices: "Google TV",
      ControlType: "Remote Control, Voice Control",
      FormFactor: "TV Box",
      Color: "black",
      ModelName: "Xiaomi Mi TV Stick 4K",
      ItemWeight: "	13 Ounces",
      ProductDimensions: `3.75"L x 3.75"W x 0.66"H`,
      // RamMemoryInstalledSize: "2GB",
      // CompatibleDevices: "Television",
    },
  },

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
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export const modalVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const backdropVariants = {
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
        >
          <div
            className="my-5 flex justify-center border-b-2"
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
                    className="bg-white h-16 w-32 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    {el?.price}
                  </Button>
                </h1>
                <p className=" text-gray-800">{el?.description}</p>
              </div>
              <h1
                onClick={() => openModal(el)}
                className=" w-full justify-end flex"
              >
                <button className="buy-button">BUY NOW</button>
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
              <span className="text-center ">
                <IconArrowRight />
              </span>
            </Link>
          </div>
        </motion.div>
      ))}

      {selectedProduct && (
        <motion.div
          className="fixed inset-0 z-50 w-full h-full overflow-hidden bg-black bg-opacity-50 flex items-center justify-center"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={closeModal}
        >
          <motion.div
            className="bg-white p-5 rounded-md mx-5 gap-10 flex flex-col shadow-lg max-w-lg w-full"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold ">{selectedProduct.title}</h2>

            {/* payment  */}
            <div className=" grid grid-cols-2 gap-5 items-center justify-center ">
              <div className="col-span-1 flex flex-col gap-3 text-secondary">
                <a
                  href="https://gpay.app.goo.gl/pay-BViN2O0DwOU"
                  target="_blank"
                  className="  w-full h-[110px] border border-slate-200 rounded shadow-lg"
                >
                  <img
                    className=" object-contain w-full h-full px-5"
                    src="/assets/pay_logo/g_pay.svg"
                    alt=""
                  />
                </a>
                <span className="text-center h-[50px] ">
                  Pay with Google Pay
                </span>
              </div>
              <div className="col-span-1 flex flex-col gap-3 text-secondary">
                <a
                  href="https://venmo.com/code?user_id=2886066885361664202&created=1667850678.784536&printed=1"
                  target="_blank"
                  className="  w-full h-[110px] border border-slate-200 rounded shadow-lg"
                >
                  <img
                    className=" object-contain w-full h-full px-5"
                    src="/assets/pay_logo/venmo.svg"
                    alt=""
                  />
                </a>
                <span className="text-center h-[50px] ">Pay with Venmo</span>
              </div>
              <div className="col-span-1 flex flex-col gap-3 text-secondary">
                <a
                  href="https://cash.app/$007SKY"
                  target="_blank"
                  className="  w-full h-[110px] border border-slate-200 rounded shadow-lg"
                >
                  <img
                    className=" object-contain w-full h-full px-5"
                    src="/assets/pay_logo/cashapp.png"
                    alt=""
                  />
                </a>
                <span className="text-center h-[50px] ">Pay with Cash App</span>
              </div>
              <div className="col-span-1 flex flex-col gap-3 text-secondary">
                <a
                  href="https://wa.me/17166228262?text=Hello%20let%20me%20know%20your%20credit%20number"
                  target="_blank"
                  className="  w-full h-[110px] border border-slate-200 rounded shadow-lg"
                >
                  <img
                    className=" object-contain w-full h-full px-5"
                    src="/assets/pay_logo/visa.svg"
                    alt=""
                  />
                </a>
                <span className="text-center h-[50px] ">
                  Pay with Credit Card
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Button
                borderRadius="0.5rem"
                className="bg-white h-[35px] w-[150px] self-end dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                {selectedProduct?.price}
              </Button>
              <button className="buy-button" onClick={closeModal}>
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductCard;
