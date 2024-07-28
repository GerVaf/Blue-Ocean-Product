"use client";
import React from "react";
import { productData } from "./product_cards";
import Link from "next/link";
import { motion } from "framer-motion";

const ProductSelectSection = () => {
  return (
    <div className="grid grid-cols-2 mt-20 md:mt-5 gap-3 m-3">
      {productData.map((item) => {
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: item.id * 0.2 }}
          >
            <Link
              href={{
                pathname: `/product/${item.id}`,
                query: { id: item.id },
              }}
              className="border rounded-md shadow-lg h-[250px] gap-5 flex flex-col items-center col-span-1"
            >
              <img
                className="object-contain w-full h-[150px] border-b"
                src={item.img[1]}
                alt=""
              />
              <p className="text-center text-sm mx-3 text-secondary">
                {item?.title}
              </p>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProductSelectSection;
