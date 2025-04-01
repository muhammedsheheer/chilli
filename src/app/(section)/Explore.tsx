import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Explore = () => {
  return (
    <section className="h-full w-full bg-[#101010] px-4 py-12 md:px-20 md:py-24 2xl:px-36">
      <h1 className="pb-6 text-center font-playfair text-4xl font-[400] uppercase leading-[92%] text-[#fff] md:pb-24 md:text-7xl">
        EXPLORE
        <span className="text-[#C93732]"> OUR MENU</span>
      </h1>
      <div className="flex flex-col items-start justify-center gap-6 md:flex-row md:gap-14">
        <div className="w-full md:mt-[12%] md:w-[33%]">
          <Image
            src={"/images/home/explore/image1.png"}
            width={281}
            height={74}
            alt="left"
            className="h-auto w-full"
          />
        </div>
        <div className="flex w-full flex-col gap-4 md:w-[33%]">
          <Image
            src={"/images/home/explore/image3.png"}
            width={281}
            height={74}
            alt="left"
            className="h-auto w-full md:h-[500px]"
          />
          <p className="text-center font-inter text-sm font-[300] tracking-[0.54px] text-[#C1B6A6]">
            Tired of eating from Indian restaurants in United Kingdom that use
            the same premixed curry sauces to make all their curries, unique
            recipes for other dishes and everything tastes almost the same!
          </p>
          <div className="flex items-center justify-center">
            <Link href={"/menu"}>
              <Button
                className={
                  "flex flex-row gap-1 rounded-none border border-[#fff] bg-transparent px-6 py-6 font-playfair text-xs font-[500] uppercase tracking-[0.96px] text-[#fff] hover:bg-[#222] hover:text-[#fff]"
                }
              >
                View Menu <ArrowRight className="w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[33%]">
          <Image
            src={"/images/home/explore/image2.png"}
            width={281}
            height={74}
            alt="left"
            className="h-auto w-full md:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Explore;
