'use client'

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/containers/hero";
import CaseStudy from "@/containers/caseStudy";

export default function Scroller() {
  const scrollerContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLElement[]>([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (scrollerContainerRef.current && window.innerWidth > 768) {
      // Fade in and out the scroller container
      gsap.fromTo(
        scrollerContainerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: scrollerContainerRef.current,
            start: "top center", // Fade in when the scroller container enters the viewport
            end: "bottom top",   // Fade out when the container leaves the viewport
            scrub: 1,
          },
        }
      );

      // Scroll animation (Horizontal scroll)
      if (sectionRefs.current.length > 0 && window.innerWidth > 768) {
        const totalSections = sectionRefs.current.length;

        gsap.to(sectionRefs.current, {
          xPercent: -100 * (totalSections - 1), // Slide through all sections
          ease: "none",
          scrollTrigger: {
            trigger: scrollerContainerRef.current,
            pin: true, // Pins the entire container
            scrub: 1,
            start: "bottom bottom", // Start scrolling animation at the very top of the page
            end: "+=" + (scrollerContainerRef.current.offsetWidth), // Make it require more vertical scroll space before triggering horizontal scroll
            snap: {
              snapTo: 0.5,
              duration: 0.1,
              delay: 0.1,
              ease: "power1"
            }
          },
        });
      }
    }
  }, []);

  return (
    <div ref={scrollerContainerRef} className="w-full overflow-x-hidden">
      <div className="flex flex-col w-auto md:flex-row md:w-[300vw]">
        <div className={'bg-black w-screen h-screen hidden md:block'} ref={(el: HTMLElement) => (sectionRefs.current[0] = el)} />
        <Hero ref={(el: HTMLElement) => (sectionRefs.current[1] = el)} />
        <CaseStudy ref={(el) => (sectionRefs.current[2] = el)} />
      </div>
    </div>
  );
}
