import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Reserve: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#c93732]">
      <div className="flex flex-col md:flex-row">
        <motion.div
          className="ml-4 flex w-full flex-col gap-4 py-20 md:ml-16 md:mt-24 md:w-1/2 md:py-0"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="font-playfair text-4xl font-[400] uppercase text-[#FFFDF1] md:text-6xl">
            Reserve <br />
            Your Table
          </h2>
          <p className="w-full max-w-[350px] font-inter text-sm font-[400] capitalize text-[#FFFDF1] md:text-base">
            Experience the true flavors of Kerala with a dining experience like
            no other. Whether it’s a family gathering, a special celebration, or
            a casual meal, we’ve got the perfect spot for you.
          </p>
          <div>
            <Link href={"/menu"}>
              <Button
                className={
                  "rounded-none border border-[#fff] bg-[#fff] px-7 py-5 font-poppins text-xs font-[500] capitalize tracking-[0.96px] text-[#C93732] hover:bg-[#222] hover:text-[#fff]"
                }
              >
                View Menu
              </Button>
            </Link>
          </div>
        </motion.div>
        <div className="flex w-full flex-col md:w-1/2">
          <motion.img
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={"/images/home/reserve/image1.png"}
            width={281}
            height={74}
            alt="image"
            className="h-auto w-full object-cover md:h-full"
          />
          <motion.img
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={"/images/home/reserve/image2.png"}
            width={281}
            height={74}
            alt="image"
            className="h-auto w-full object-cover md:h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Reserve;
