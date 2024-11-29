'use client'

import './header.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef} from "react";

export default function Header() {

  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        pin: ref.current,
        start: "top top",
        endTrigger: "",
        end: "bottom bottom",
        pinSpacing: false
      })

      gsap.timeline({
        trigger: ref.current,
        pin: ref.current,
        scrub: 1,
        start: "0% 0%",
      })
    })
      .to()


    return () => ctx.revert()
  }, []);

  return (
    <div className="overlay h-screen w-screen" ref={ref}>
      <video
        loop
        autoPlay
        muted
        playsInline
        className="object-cover h-screen w-screen"
      >
        <source src="/assets/london.mp4" type="video/mp4" />
      </video>
      <div className='absolute w-full h-full top-0 z-10'>
        <div className='
          flex 
          flex-col 
          justify-end 
          items-center 
          w-full 
          h-full
          p-10 
          md:p-20
        '>
          <div className='mouse' />
          <div className="relative">
            <div
              className="
                flex 
                justify-between 
                items-center 
              "
            >
              <p className="text-[var(--text-light)] text-sm sm:text-base uppercase font-bold">
                Angel Funes
              </p>
              <p className="text-[var(--text-light)] text-sm sm:text-base uppercase font-bold">
                London 2024
              </p>
            </div>

            <h1
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-6xl 
                uppercase
                tracking-[1rem]
                md:tracking-[2rem] 
                lg:tracking-[3rem] 
                xl:tracking-[5rem] 
                text-[var(--text-light)] 
                font-thin
              "
            >
              Elevate <span className="text-[var(--accent-two)] tracking-normal">CX</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
