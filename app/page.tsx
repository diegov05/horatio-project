'use client'

import { CTA, Footer, Header, Scroller } from '@/containers'
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className={'flex flex-col'}>
      <Header />
      <main>
        <Scroller />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
