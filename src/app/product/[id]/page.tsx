"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Product, productData } from "@/app/components/product_cards";
import { Pagination } from "swiper/modules";

const ProductDetail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState<Product | null>(null);

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
      <h1>Product Details</h1>
      {product ? (
        <div className="mt-16">
          {/* image slide  */}
          <div className="border rounded shadow-md">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
            >
              {product.img &&
                product.img.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className=" object-contain h-[50vh] w-full"
                      src={image}
                      alt={`Product Image ${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          {/* color description  */}
          <div className="border m-2 rounded-[35px] bg-third text-white  text-md">
            <h1 className="text-3xl font-bold p-5 text-center">Product Description</h1>
            <img src="/assets/description.jpg" alt="" />
            <p className=" p-5">{product.description}</p>
          </div>
        </div>
      ) : (
        <p>No product found with this ID.</p>
      )}
    </div>
  );
};

export default ProductDetail;
