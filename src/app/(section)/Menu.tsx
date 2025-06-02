import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const menuData = {
  food: [
    {
      name: "ADANA KEBAB",
      price: 13.95,
      description:
        "Charcoal grilled, skewered minced lamb with onions, peppers, parsley and herbs, served with rice and salad",
    },
    {
      name: "CHICKEN KOFTE",
      price: 13.95,
      description:
        "Charcoal grilled, skewered minced chicken breast with onions, garlic, peppers, parsley, herbs and cheese, served with rice and salad",
    },
    {
      name: "LAMB SHISH",
      price: 15.49,
      description:
        "Marinated cubes of finest lamb charcoal grilled, served with rice and salad",
    },
    {
      name: "CHICKEN SHISH",
      price: 14.49,
      description:
        "Marinated cubes of chicken charcoal grilled, served with rice and salad",
    },
    {
      name: "CHICKEN WINGS",
      price: 13.95,
      description:
        "Marinated chicken wings charcoal grilled, served with rice and salad",
    },
    {
      name: "CHICKEN BEYTI",
      price: 12.95,
      description:
        "Charcoal grilled skewered minced chicken mixed with peppers, garlic and herbs, wrapped in tortilla, topped with yoghurt and halep sauce",
    },
    {
      name: "LAMB BEYTI",
      price: 12.5,
      description:
        "Charcoal grilled skewered minced lamb mixed with peppers, garlic and herbs, wrapped in tortilla, topped with yoghurt and halep sauce",
    },
    {
      name: "LAMB LIVER SHISH (CIGER)",
      price: 12.95,
      description:
        "Charcoal grilled cubes of lamb liver, seasoned with herbs, served with rice and salad",
    },
    {
      name: "LAMB CHOPS",
      price: 18.95,
      description:
        "Charcoal grilled lamb chops, slightly flavoured with herbs, served with rice and salad",
    },
    {
      name: "FILLET OF LAMB",
      price: 16.49,
      description:
        "Charcoal grilled fillet of lamb with rosemary, served with rice and salad",
    },
  ],
};

const Menu: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#121212] px-4 py-12 md:px-24 md:py-20 2xl:px-40">
      {/* Background Image */}
      <div className="absolute right-0 top-[18%] hidden md:block">
        <Image
          src={"/images/home/follow/bg.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-[750px] w-full"
        />
      </div>

      {/* Menu Content */}
      <div className="flex h-full w-full flex-col items-center gap-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-1 md:pb-8">
          <motion.h6
            className="text-center font-playfair text-4xl font-[400] uppercase text-[#fff] md:text-5xl"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            OUR MENU
          </motion.h6>
        </div>

        {/* Menu Items Grid */}
        <motion.div
          className="mt-6 grid w-full gap-8 md:grid-cols-2 md:gap-12 2xl:gap-10"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {menuData.food.map((item, index) => (
            <div
              key={`food-item-${index}`}
              className="flex w-full flex-row items-center justify-between"
            >
              {/* Food Name & Description */}
              <div className="flex w-auto flex-col md:w-[488px]">
                <p className="font-gotu text-base font-[400] uppercase text-[#C93732] md:text-lg md:tracking-[3px]">
                  {item.name}
                </p>
                <p className="font-inter text-sm font-[300] text-[rgba(255,255,255,0.60)] md:text-base">
                  {item.description}
                </p>
              </div>

              {/* Divider Line & Price */}
              <div className="flex items-center gap-1">
                <div className="flex flex-col gap-0">
                  <div className="h-1 w-[150px] border-b-[1px] border-b-[#C93732]" />
                </div>
                <p className="flex font-poppins text-lg font-[500] uppercase tracking-[0.57px] text-[#C93732]">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* View Menu Button */}
        <motion.div
          className="pt-5"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Link href={"/menu"}>
            <Button
              className={
                "rounded-none border border-[#fff] bg-[#fff] px-7 py-5 font-poppins text-xs font-[500] capitalize tracking-[0.96px] text-[#C93732] hover:bg-[#222] hover:text-[#fff]"
              }
            >
              View Menu
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
