import Button from "@/components/button";
import ArrowIcon from "@/components/arrowIcon";
import Image from "next/image";
import { forwardRef } from "react";

const CaseStudy = forwardRef<HTMLDivElement>((props, ref) => {

  return (
    <article ref={ref} className="flex flex-col md:flex-row md:h-screen min-w-[100vw] w-screen justify-evenly items-center bg-[var(--bg-light)] p-20">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-[var(--text-dark)]">
            Behind <br /> Truffle Pig
          </h1>
          <p className="text-xl text-[var(--text-dark)] w-[25ch]">
            Read the story behind Truffle Pig, and how a{" "}
            <span className="text-[var(--accent-one)]">$50 budget + iPhone</span>{" "}
            made it possible to produce from idea to distribution in{" "}
            <span className="text-[var(--accent-one)]">~1 week.</span>
          </p>
        </div>
        <Button className="w-max" text={'Read More'} theme={'light'} icon={<ArrowIcon className={'size-6'} />} />
      </div>
      <div className="relative hidden md:block md:w-[38%] h-full">
        <Image className="" src="/assets/truffle-pig.png" alt="truffle-pig" fill />
      </div>
    </article>
  );
});

CaseStudy.displayName = 'CaseStudy';
export default CaseStudy;
