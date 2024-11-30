import { CTA, Footer, Header, Scroller } from '@/containers'

export default function Home() {

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
