export const metadata = {
  title: 'Saucotec',
  description: 'Saucotec - Inicio',
  icons: {
    icon:['/favicon.ico?v=4']
  }
}

import Hero from '@/components/hero'
import Features from '@/components/features'
// import {Newsletter} from '@/components/newsletter'
import Testimonials from '@/components/testimonials'
import ContactForm from '@/components/newsletter'
import CookieBanner from '@/components/CookieBanner'
import ServicePresentation from '@/components/ServicePresentation'
import QuotePresentation from '@/components/QuotePresentation'
import TestimonialsV2 from '@/components/TestimonialsV2'
import SeccionClientes from '@/components/SeccionClientes'
// import CookieBanner from '@/components/CookieBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicePresentation/>
      <QuotePresentation />
      <TestimonialsV2/>
                    {/*<h1 className={` 
                    text-2xl pt-32 pb-16 md:text-3xl lg:text-5xl text-white
                    bg-[#07112B]
                    text-center
                    mx-auto
                    `} data-aos="fade-up">
                        Discover our portfolio...
                    </h1>*/}
      <SeccionClientes />
      <ContactForm/>
      <CookieBanner/>
    </>
  )

}