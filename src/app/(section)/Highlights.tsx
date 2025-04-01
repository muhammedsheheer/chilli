import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const menuItems = [
  {
    title: "FOOD",
    description:
      "Chili@Chili’s was born from a passion for bringing the rich, authentic flavors of Kerala to the table, with a commitment to fresh, locally sourced ingredients.",
  },
  {
    title: "DRINKS",
    description:
      "Explore our wide variety of drinks, from handcrafted cocktails to freshly brewed coffee and refreshing mocktails.",
  },
  {
    title: "ATMOSPHERE",
    description:
      "A warm and welcoming space, designed to make every dining experience comfortable, memorable, and enjoyable.",
  },
];

const Highlights: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative h-full w-full bg-[#C93732] px-4 pb-12 pt-12 md:px-0 md:pb-40 md:pt-20">
      <div className="absolute bottom-6 left-[30%] hidden md:block">
        <Image
          src={"/images/home/highlights/image.png"}
          width={281}
          height={74}
          alt="image"
          className="h-auto w-full object-cover md:h-[280px]"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="pb-6 font-playfair text-7xl font-[400] uppercase tracking-[4px] text-[#FFFDF1] md:pb-12 md:text-[210px] md:tracking-[95px]">
          chilli’s
        </h1>
        <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-between">
          <div className="md:ml-28 md:w-1/2">
            <h1 className="font-playfair text-2xl font-[400] uppercase text-[#FFFDF1] md:text-6xl">
              we offer <br />
              Unforgettable <br />
              Dining <br /> Experience
            </h1>
          </div>
          <div className="md:hidden">
            <Image
              src={"/images/home/highlights/image.png"}
              width={281}
              height={74}
              alt="image"
              className="h-auto w-full object-cover md:h-full"
            />
          </div>
          <div className="mx-auto w-full max-w-lg bg-[#C93732] p-6 text-white md:w-1/2">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-white/50 py-4">
                <button
                  onClick={() => toggleSection(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <ArrowRight
                    size={24}
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "-rotate-45" : "rotate-[140deg]"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "mt-2 max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-white/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
