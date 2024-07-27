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
import Accordion from "@/app/components/content_for_accordion";

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
      {/* <h1>Product Details</h1> */}
      {product ? (
        <div className="mt-16 mb-5 flex flex-col gap-5 ">
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
          <button>BUY NOW</button>
        </div>
      ) : (
        <p>No product found with this ID.</p>
      )}
    </div>
  );
};

export default ProductDetail;
