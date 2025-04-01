"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#0B0B0B] px-4 pt-2 lg:px-32">
      <div className="flex flex-col gap-4 pt-12 md:gap-8 lg:pt-24">
        {/* first  div */}
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-36 md:w-44"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:items-start md:justify-start">
            <Link
              className="font-playfair text-sm font-[400] text-[#fff]"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="font-playfair text-sm font-[400] text-[#fff]"
              href={"/menu"}
            >
              Menu
            </Link>
            <Link
              className="font-playfair text-sm font-[400] text-[#fff]"
              href={"/table-booking"}
            >
              Table booking
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:items-start md:justify-start">
            <Link
              className="font-playfair text-sm font-[400] text-[#fff]"
              href={"/about-us"}
            >
              About
            </Link>
            <Link
              className="font-playfair text-sm font-[400] text-[#fff]"
              href={"/contact"}
            >
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 md:items-start md:justify-start md:gap-12">
            <div className="tems-center flex flex-col justify-center gap-1 md:items-start md:justify-start">
              <span className="text-center font-playfair text-base font-[400] text-[#fff] md:text-start">
                Working Hours
              </span>
              <span className="text-center font-playfair text-sm font-[400] text-[#fff] md:text-start">
                MON-FRI : 5:00PM - 10:00PM <br />
                SATURDAY: 12:00PM - 11:00PM <br />
                SUNDAY : 12:00PM- 10:00PM
              </span>
            </div>
            <div className="flex flex-row items-center justify-center gap-3 md:justify-start">
              <Link href={""} target="_blank" className="text-[#fff]">
                <Icons.instagram />
              </Link>
              <Link href={""} target="_blank" className="text-[#fff]">
                <Icons.google />
              </Link>
              <Link href={""} target="_blank" className="text-[#fff]">
                <Icons.unknown />
              </Link>
              <Link href={""} target="_blank" className="text-[#fff]">
                <Icons.facebook />
              </Link>
            </div>
          </div>
        </div>
        {/* second  div */}
        <div className="flex flex-col gap-4">
          <div className="h-full w-full border-b-[1px] border-b-[rgba(255,255,255,0.12)]" />
          <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:items-start md:justify-between">
            <p className="pb-6 font-poppins text-xs font-[400] lowercase tracking-[1px] text-[#CED8D8]">
              © 2025 Chilli ALL RIGHTS RESERVED
            </p>
            <Link href={"https://foodo.ai/"} target="_blank">
              <span className="pb-6 font-poppins text-xs font-[400] lowercase tracking-[1px] text-[#CED8D8]">
                Powerd by fodo{" "}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
