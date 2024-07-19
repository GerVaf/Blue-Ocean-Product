"use client";
import React from "react";
import { productData } from "./product_cards";
import Link from "next/link";

const ProductSelectSection = () => {
  return (
    <div className="grid grid-cols-1 mt-20 md:mt-5 ">
      {productData.map((item) => {
        return (
          <Link
            key={item.id}
            href={{
              pathname: `/product/${item.id}`,
              query: { id: item.id },
            }}
            className=" transition duration-75 hover:bg-slate-100 border-b my-1 flex items-center text-xl gap-5 shadow p-3 rou text-start font-semibold text-secondary col-span-1"
          >
            <img
              className=" object-contain w-[100px] h-[100px]"
              src={item.img[1]}
              alt=""
            />
            <p>{item.details?.Brand}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductSelectSection;
