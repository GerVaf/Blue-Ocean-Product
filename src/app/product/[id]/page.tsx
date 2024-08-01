"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  backdropVariants,
  modalVariants,
  Product,
  productData,
} from "@/app/components/product_cards";
import { Pagination } from "swiper/modules";
import Accordion from "@/app/components/content_for_accordion";
import { motion } from "framer-motion";
import { Button } from "@/utils/moving_border";

// Modal component
const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 w-full h-full overflow-hidden bg-black bg-opacity-50 flex items-center justify-center"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-white p-5 rounded-md mx-5 gap-10 flex flex-col shadow-lg max-w-lg w-full"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        onClick={(e: any) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const ProductDetail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const id = Number(searchParams[1]); // Fixed to properly retrieve query params
    if (!isNaN(id)) {
      const foundProduct = productData.find((p) => p.id === id);
      setProduct(foundProduct || null);
    }
  }, [searchParams]);

  console.log(product);

  return (
    <div>
      {product ? (
        <div className="mt-16 mb-5 flex flex-col gap-5">
          <div className="border rounded shadow-md">
            <Swiper
              pagination={{ dynamicBullets: true }}
              modules={[Pagination]}
            >
              {product.img &&
                product.img.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="object-contain h-[50vh] w-full"
                      src={image}
                      alt={`Product Image ${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="flex flex-col mx-3 gap-5">
            <div className="text-secondary font-bold flex flex-col gap-3 border-b border-gray-500 py-5">
              <h1 className="text-[30px]">{product.title}</h1>
              <div className="text-lg">{product.price}</div>
            </div>
            <div className="text-secondary">{product.description}</div>
            <div>
              <Accordion data_detail={product.details} />
            </div>
          </div>
          <button
            className="border-y text-sm py-1 bg-third text-white self-end rounded-s-3xl px-10"
            onClick={() => setModalOpen(true)}
          >
            BUY NOW
          </button>
        </div>
      ) : (
        <p>No product found with this ID.</p>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
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
            <span className="text-center h-[50px] ">Pay with Google Pay</span>
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
            <span className="text-center h-[50px] ">Pay with Credit Card</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Button
            borderRadius="0.5rem"
            className="bg-white h-[35px] w-[150px] self-end dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            {product?.price}
          </Button>
          <button className="buy-button" onClick={close}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductDetail;
