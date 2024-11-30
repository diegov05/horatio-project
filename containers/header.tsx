'use client'

import './header.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function Header() {

  const overlayRef = useRef(null)

  useEffect(() => {
    const overlayElement = overlayRef.current

    if (overlayElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: overlayElement,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          pin: true
        },
      })

      tl.to(overlayElement, { opacity: 0 }, 0)
      tl.to(overlayElement, { scale: 1.5 }, 0)
    }
  }, [])

  return (
    <div ref={overlayRef} className="h-screen w-screen">
      <video
        loop
        autoPlay
        muted
        playsInline
        className="object-cover h-screen w-screen"
      >
        <source src="/assets/london.mp4" type="video/mp4"/>
      </video>
      <div className="absolute bg-black/70 w-full h-full top-0">
        <div
          className="
          flex
          flex-col
          justify-center
          md:justify-end
          items-center
          w-full
          h-full
          p-10
          md:p-20
        "
        >
          <div className="mouse"/>
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
              Elevate{' '}
              <span className="text-[var(--accent-two)] tracking-normal">
                CX
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
