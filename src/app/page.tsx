"use client";
import { InfiniteMovingCards } from "@/utils/moving_review_cards";
import { TypewriterEffectSection } from "./components/type_writer";
import ProductCard from "./components/product_cards";
import FlipWord from "./components/flipword";
import { motion } from "framer-motion";

export default function Home() {
  const words = ["PRODUCT", "BEST-SERVICE-EVER"];

  const testimonials = [
    {
      quote:
        "Every purchase from Blue Ocean has been a standout experience. Their products consistently deliver exceptional quality and reliability, making them a top choice for anyone.",
      name: "Sophia Martin",
      title: "General Review of Blue Ocean Products",
    },
    {
      quote:
        "Blue Ocean products have revolutionized the way I approach daily tasks with their superior design and functionality. Their commitment to excellence is evident in every item.",
      name: "Liam Johnson",
      title: "Endorsement of Blue Ocean's Range",
    },
    {
      quote:
        "Time and time again, Blue Ocean proves why they are leaders in their field. Every product they offer exemplifies innovation and quality, backed by superb customer service.",
      name: "Ella Robertson",
      title: "Blue Ocean Overall Satisfaction",
    },
    {
      quote:
        "Choosing Blue Ocean means choosing quality. Every product from their lineup is crafted to perfection, ensuring customer satisfaction with every use.",
      name: "Mason Wright",
      title: "Comprehensive Review of Blue Ocean",
    },
    {
      quote:
        "Blue Ocean stands out in a crowded market with their unparalleled product range that excels in every aspect, from performance to customer support.",
      name: "Ava Thompson",
      title: "Customer Experience with Blue Ocean",
    },
  ];

  const product_section_words = [
    {
      text: "OUR",
    },
    {
      text: "AWESOME",
    },
    {
      text: "PRODUCT.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const review_section_words = [
    {
      text: "OUR",
    },
    {
      text: "CUSTOMER",
    },
    {
      text: "REVIEW.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const sectionVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="md:p-10 p-5 flex-col flex gap-5 md:gap-20 overflow-hidden w-[100vw]">
      {/* for top hero section */}
      <FlipWord />

      {/* products section */}
      <div className="flex flex-col">
        <TypewriterEffectSection words={product_section_words} />
        <ProductCard />
      </div>

      {/* reviews section */}
      <motion.div
        className="flex flex-col overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        custom={-1} // negative direction for coming from the left
        viewport={{ once: true }}
      >
        <TypewriterEffectSection words={review_section_words} />

        <div className="h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </motion.div>
    </div>
  );
}
