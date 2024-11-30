import Image from "next/image";
import Button from "@/components/button";

export default function Footer() {
  return (
    <footer className='bg-[var(--bg-light)]'>
      <video
        loop
        autoPlay
        muted
        playsInline
        className="object-cover w-full h-full absolute"
      >
        <source src="/assets/mountains.mp4" type="video/mp4"/>
      </video>
      <div className='
      absolute
      w-full
      h-full
      flex
      flex-col
      gap-8
      justify-center
      items-center
      bg-black/70
      rounded-t-xl
      p-10
      md:p-40
      '>
        <div className={'flex flex-col gap-4 justify-center items-center'}>
          <h3 className='text-2xl sm:text-3xl md:text-4xl text-[var(--text-light)]'>
            Sponsored by
          </h3>
          <div className={'relative w-36 h-8 md:w-72 md:h-16'}>
            <Image src={'/assets/horatio-logo.png'} alt={'Horatio'} fill/>
          </div>
          <p className={'text-base md:text-xl text-[var(--text-light)] text-center font-light'}>
            Claim your code now for two free months <br/> of access to Mentors CX!
          </p>
        </div>
        <div className='
          bg-[var(--accent-two)]
          items-center
          justify-center
          py-2
          px-3
          md:py-3
          md:px-4
          rounded-lg
        '>
          <p className='text-2xl font-black'>HORATIOXELEVATE100</p>
        </div>
        <Button
          text={'Redeem Now'}
          theme={'light'}
          icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="var(--text-light)" className="size-5">
            <path fill-rule="evenodd"
                  d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z"
                  clip-rule="evenodd"/>
            <path fill-rule="evenodd"
                  d="M1 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H1.75A.75.75 0 0 1 1 10Z"
                  clip-rule="evenodd"/>
          </svg>
          }
        />
      </div>
    </footer>
  )
}