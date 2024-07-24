"use client";
import React from "react";
import { productData } from "./product_cards";
import Link from "next/link";

const ProductSelectSection = () => {
  return (
    <div className="grid grid-cols-2 mt-20 md:mt-5 gap-3 m-3  ">
      {productData.map((item) => {
        return (
          <Link
            key={item.id}
            href={{
              pathname: `/product/${item.id}`,
              query: { id: item.id },
            }}
            className=" border rounded-md shadow-lg h-[250px] gap-5 transition duration-75 hover:bg-slate-100 flex flex-col items-center col-span-1"
          >
            <img
              className=" object-contain w-full h-[150px] border-b"
              src={item.img[1]}
              alt=""
            />
            <p className=" text-sm mx-3 text-secondary" >{item?.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductSelectSection;
