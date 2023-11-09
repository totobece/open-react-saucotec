export const metadata = {
  title: 'SaucoTec',
  description: 'Bienvenidos a SaucoTec',
  icons: {
    icon:['/favicon.ico?v=4']
  }
}

import Hero from '@/components/hero'
import Features from '@/components/features'
// import {Newsletter} from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Testimonials />
      {/* <Newsletter /> */}
    </>
  )
}

/*
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
*/