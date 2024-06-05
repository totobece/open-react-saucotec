'use client'
import Image from 'next/image';
import Fondo from '@/public/images/Rectangle 22 (1).svg';
import Footer from "@/components/ui/footer";
import ContactForm from "@/components/newsletter";
import { CardHoverEffectDemo } from '@/components/card-hover';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card-hover-effect';
import ServicePresentation from '@/components/TestimonialsV2';

export default function Portfolio() {
  return (
    <section className="relative min-h-screen w-full bg-[#07112B]">
      <div className="absolute top-0 left-0 w-full h-[170vh]">
        <Image
          src={Fondo}
          alt="Fondo"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </div>
      
      <div className="relative flex w-full h-[30vh] items-center justify-center mt-48 flex-col z-10 space-y-10" >
        <h1 className="text-7xl text-white mb-4 text-center font-bold" data-aos="fade-up">
          Our <span className="bg-[#07112B] rounded-[72px] text-white px-4">work</span> reflects our <span className="bg-[#07112B] rounded-[72px] text-white px-4">quality</span>
        </h1>
        <h2 className="text-lg text-white opacity-50 text-center " data-aos="fade-up">
        We use our experience in strategy, design and product development to help both new startups and large companies <br />
        to create products that are easy to use, beautiful and simple
        </h2>
      </div>

      <hr className="relative left-1/2 transform -translate-x-1/2 w-[100vh] border-t-2 border-white opacity-50 mt-10" />


      <CardHoverEffectDemo/>

      <div className='flex justify-center items-center w-full h-[30vh]'>
        <h1 className='text-white text-5xl' data-aos="fade-up">
        Don't just take our word for it,
        see what they say who <span className="bg-blue-800 rounded-[72px] text-white px-4">worked with us</span>
        </h1>

      </div>
      <ServicePresentation/>
      <ContactForm />
      <Footer />
    </section>
  );
}
