import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#fff]">
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute left-0 top-0 h-full w-full bg-black/30"></div>

      <h1 className="relative px-2 text-center font-playfair text-4xl font-[400] uppercase tracking-[5px] text-[#fff] md:mt-8 md:text-9xl md:tracking-[10px]">
        CHILL@CHILLI’S
      </h1>
    </section>
  );
};

export default Hero;
