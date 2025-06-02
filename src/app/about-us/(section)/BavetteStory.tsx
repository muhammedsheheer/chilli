import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#121212] p-4 lg:py-16">
      <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-11 bg-[#121212]">
        <h2 className="text-center font-playfair text-5xl text-[#fff] md:left-[15%] md:text-8xl">
          The Chilli`s Restaurant <br /> Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#121212] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/image3.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-playfair text-5xl text-[#fff] md:text-start md:text-7xl">
              From Passion
              <br />
              to Perfection{" "}
            </h1>
            <p className="max-w-[450px] text-center font-manrope font-light leading-[160%] text-[#fff] md:text-start">
              What started as a vision—to bring the heart of global cuisine to
              life—has evolved into Chilli`s, a dining destination where
              tradition meets innovation. Founded with a deep passion for
              flavour, Chilli`s was born from the desire to create dishes that
              are more than just meals—they are unforgettable experiences.{" "}
              <br /> From our humble beginnings to becoming a favourite spot for
              food lovers, our commitment to quality, bold flavours, and warm
              hospitality has always remained strong. Every ingredient is
              carefully sourced, each spice tells a story, and every dish is a
              tribute to the culinary traditions we cherish. <br /> At Chilli`s,
              we don’t just serve food—we create memorable moments. As we
              continue to grow, our mission remains unchanged: to blend
              tradition with creativity and offer an extraordinary dining
              experience that celebrates the essence of bold, global flavours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
