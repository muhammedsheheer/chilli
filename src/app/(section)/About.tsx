import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] pb-12 pt-12 md:pb-16 md:pt-60">
      <div className="absolute left-20 right-20 top-12 hidden md:block">
        <h1 className="text-center font-playfair text-4xl font-[400] uppercase leading-[92%] tracking-[6px] text-[#fff] md:text-[120px] md:tracking-[9px]">
          WELCOME TO <br />
          <span className="text-[#C93732]">CHILL AT CHILLI’S</span>
        </h1>
      </div>
      <h1 className="text-center font-playfair text-4xl font-[400] uppercase tracking-[6px] text-[#fff] md:hidden md:text-[120px] md:tracking-[9px]">
        WELCOME TO <br />{" "}
        <span className="text-[#C93732]">CHILL AT CHILLI’S</span>
      </h1>
      <div className="relative z-50 flex flex-col gap-8 md:flex-row">
        <div className="flex w-full flex-col gap-4 md:w-[30%]">
          <motion.img
            src={"/images/home/about/left.png"}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            width={281}
            height={74}
            alt="left"
            className="h-auto w-full"
          />
          <motion.div
            className="flex flex-col gap-3 pl-8"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <span className="font-poppins text-base font-[300] uppercase tracking-[4px] text-[#fec679]">
              About Us
            </span>
            <p className="w-full max-w-[330px] font-inter text-sm font-[300] tracking-[1px] text-[#fff]">
              Chill@chilli’s is going to be that rare treat for those to enjoy
              genuinely authentic south Indian (Kerala) dishes made from fresh
              ingredients carefully selected by our Professional chefs.{" "}
            </p>
            <div>
              <Link href={"/table-booking"}>
                <Button
                  className={
                    "rounded-none border border-[#fff] bg-transparent px-7 py-5 font-playfair text-xs font-[500] capitalize tracking-[0.96px] text-[#fff] hover:bg-[#222] hover:text-[#fff]"
                  }
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-[40%]">
          <motion.img
            src={"/images/home/about/image.png"}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            width={281}
            height={74}
            alt="left"
            className="h-auto w-full"
          />
        </div>
        <div className="flex w-full flex-col gap-4 md:w-[30%]">
          <motion.img
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={"/images/home/about/right.png"}
            width={281}
            height={74}
            alt="left"
            className="h-auto w-full"
          />
          <motion.div
            className="flex flex-col pl-8"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <p className="w-full max-w-[330px] font-inter text-sm font-[300] tracking-[1px] text-[#fff]">
              Where else in St Albans can you find delicious food , great value
              for money, a fantastic atmosphere and let’s not forget the
              friendly service!
            </p>
            <p className="w-full max-w-[330px] font-inter text-sm font-[300] tracking-[1px] text-[#fff]">
              We Chill@chilli’s team, proudly announce our newly opened
              restaurant and promise not to disappoint.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
