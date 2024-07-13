import { FlipWords } from "@/utils/flip_words";
import { InfiniteMovingCards } from "@/utils/moving_review_cards";
import { AuroraBackgroundSection } from "./components/aurora_section";
import { MeteorsSection } from "./components/meteors_section";
import { TracingBeamSection } from "./components/tracing_beam_section";
import { TypewriterEffectSection } from "./components/type_writer";
import ProductCard from "./components/product_cards";

export default function Home() {
  const words = ["PRODUCT", "BEST-SERVICE-EVER", "NEVER-REGRET"];

  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
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
  return (
    <div className=" md:p-10 p-5 flex-col flex gap-5 md:gap-20">
      {/* for top hero section  */}
      <div className=" md:text-5xl flex flex-col  overflow-hidden w-[85%] mt-12 text-xl text-start font-normal text-neutral-500 dark:text-neutral-400">
        <span> WE ARE BLUE OCEAN X</span>
        <FlipWords className="py-3" words={words} />
        <span>CHOSE YOUR PRODUCT WHAT YOU LIKE</span>
      </div>

      
      {/* hero section  */}
      {/* <div className="flex md:flex-row flex-col gap-20 justify-around items-center">
        <AuroraBackgroundSection />
        <MeteorsSection />
      </div> */}

      {/* products section  */}
      <div className="flex flex-col">
        <TypewriterEffectSection words={product_section_words} />
        <ProductCard />
      </div>
      <div className="flex flex-col overflow-hidden">
        <TypewriterEffectSection words={review_section_words} />

        <div className="h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}
