import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center opacity-90"
      style={{
        backgroundImage: `url('/images/about-us/image7.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-0 bg-black/50" />
      <div className="z-10 flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="max-w-[500px] text-center font-playfair text-5xl text-[#fff] md:leading-[60px]">
            Join Us for an
            <br />
            Unforgettable Feast
          </h1>
          <p className="max-w-[450px] text-center font-manrope font-[600] leading-[160%] text-[#ffff]">
            Whether it’s a relaxed dinner or a lively gathering, Chilli`s
            invites you to embark on an exceptional culinary journey. From
            authentic global flavours to hand-picked ingredients, every dish is
            a tribute to our rich heritage and passion for excellence. Immerse
            yourself in an experience where tradition meets creativity, and
            every bite is a celebration of taste and culture.
          </p>

          <Link href={"/table-booking"}>
            <Button
              variant="outline"
              className="group w-fit items-center gap-[1.19rem] border-[#fff] bg-transparent px-7 py-7 font-semibold uppercase text-[#fff] hover:bg-[#000]"
            >
              Book Now{" "}
              <Icons.rightArrow className="text-[#fff] duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
