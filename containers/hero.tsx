import Button from "@/components/button";
import ArrowIcon from "@/components/arrowIcon";
import { forwardRef } from "react";

const Hero = forwardRef<HTMLDivElement>((props, ref) => {

  return (
    <div ref={ref} className="z-10 min-w-[100vw] w-screen md:h-screen">
      <div className="bg-black/90 flex flex-col gap-8 justify-center items-center w-screen h-screen">
        <video
          loop
          autoPlay
          muted
          playsInline
          className="object-cover h-screen w-screen absolute -z-10"
        >
          <source src="/assets/stripe.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-xs sm:text-base md:text-lg text-[var(--accent-two)] font-bold uppercase tracking-[0.25rem]">
            Achieve your goals
          </h2>
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-[var(--text-light)]">
            What is stopping you?
          </h1>
        </div>
        <Button text={'Keep Reading'} theme={'dark'} icon={<ArrowIcon className={'size-5'} />} />
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';
export default Hero;
