'use client'

import Button from "@/components/button";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";

export default function CTA() {

  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <section className="bg-[var(--bg-light)] h-full w-full p-3 pb-20 sm:px-5 lg:p-20">
      <div className="relative bg-[var(--text-dark)] h-full w-full rounded-3xl p-10">
        <div className="relative flex flex-row justify-around items-center z-20">
          <div className='relative hidden md:block h-[30rem] w-[26rem]'>
            <Image
              className={'object-cover rounded-lg'}
              src={'/assets/presentations.png'}
              alt={'slides'}
              fill
            />
          </div>
          <div className='flex flex-col gap-8 justify-center items-center md:justify-end md:items-end'>
            <h2 className='
              text-3xl sm:text-4xl md:text-6xl text-[var(--text-light)] text-center md:text-end
            '>
              Download my slides
            </h2>
            <p className='text-lg md:text-2xl text-[var(--text-light)] w-[25ch] text-center md:text-end font-light'>
              Get the slides to my presentation - yes, the one you saw in the <span className="text-[var(--accent-two)]">Elevate CX London 2024 edition.</span>
            </p>
            <Button
              className='w-max'
              text={'Download Now'}
              theme={'light'}
              icon={
              <svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="var(--text-light)" className="size-5">
              <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z"/>
              <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z"/>
            </svg>
            }/>
          </div>
        </div>
        <Image src={'/assets/bg-pattern.png'} alt={''} fill/>
      </div>
    </section>
  )
}