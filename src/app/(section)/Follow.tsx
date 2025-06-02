import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#0B0B0B]">
      <div className="flex flex-col gap-10 md:gap-24">
        <div className="flex flex-col items-center justify-center gap-2 md:hidden">
          <div></div>
        </div>
        <div className="flex flex-col">
          <div className="flex w-full flex-col gap-4 bg-[#0B0B0B] md:flex-row">
            <div className="grid w-full grid-cols-2 gap-4 bg-[#0B0B0B] px-4 md:w-[37%] md:grid-cols-2 md:px-0">
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={"/images/home/follow/image1.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[170px] w-full object-cover md:h-[350px]"
              />
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={"/images/home/follow/image2.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[170px] w-full object-cover md:h-[350px]"
              />
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={"/images/home/follow/image3.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[170px] w-full object-cover md:h-[350px]"
              />
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={"/images/home/follow/image4.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[170px] w-full object-cover md:h-[350px]"
              />
            </div>
            <motion.div
              className="relative hidden w-full flex-col items-center justify-center gap-2 bg-[#C93732] py-40 md:flex md:w-[26%] md:py-0"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-center font-playfair text-4xl font-[400] text-[#fff] md:text-6xl">
                  SCROLL <br />
                  US
                </h1>
              </div>
            </motion.div>
            <div className="hidden w-full px-4 md:block md:w-[37%] md:px-0">
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={"/images/home/follow/image5.png"}
                width={281}
                height={74}
                alt="image"
                className="h-auto w-full object-cover md:h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 px-4 md:hidden">
              <motion.div
                className="relative flex w-full flex-col items-center justify-center gap-2 bg-[#C93732] py-20 md:w-[26%] md:py-0"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-center font-playfair text-4xl font-[400] text-[#fff] md:text-6xl">
                    SCROLL <br />
                    US
                  </h1>
                </div>
              </motion.div>
              <div className="w-full md:w-[37%] md:px-0">
                <motion.img
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={"/images/home/follow/image5.png"}
                  width={281}
                  height={74}
                  alt="image"
                  className="h-auto w-full object-cover md:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
