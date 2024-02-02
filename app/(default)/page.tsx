export const metadata = {
  title: 'SaucoTec',
  description: 'SaucoTec - Inicio',
  icons: {
    icon:['/favicon.ico?v=4']
  }
}

import Hero from '@/components/hero'
import Features from '@/components/features'
// import {Newsletter} from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import ContactForm from '@/components/newsletter'
import CookieBanner from '@/components/CookieBanner'
// import CookieBanner from '@/components/CookieBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Testimonials />
      <ContactForm/>
      <CookieBanner/>
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