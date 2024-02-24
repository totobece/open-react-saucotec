'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Desktop from '@/public/images/DESKTOP.png';
import Botones from '@/public/images/BOTONES.png';
import Mobile from '@/public/images/MOBILE.png';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-customBlue relative pb-96"> 
      <div className="max-w-full mx-auto px-4 sm:px-6 pt-72"> 
        <div className="items-center md:flex-row text-left lg:mx-0">
          <div className="max-w-6xl container ml-20 flex flex-col pb-8">
            <div className="md:flex md:flex-col">
              <h1 className="text-4xl md:text-4xl lg:text-6xl text-white" data-aos="fade-up">
                Tu transformacion digital
                <h2 className="text-3xl lg:text-6xl md:text-4xl bg-gradient-to-r from-white via-blue-600 to-blue-888 text-transparent bg-clip-text ">
                  junto a nosotros
                </h2>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
        <svg className="max-w-full" style={{ transform: 'translate(-200px,-400px)' }} width="564" height="552" viewBox="0 0 564 552" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="illustration-02" x1="-3.766" y1="300.204" x2="284.352" y2="577.921" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5D5DFF" stopOpacity=".01" />
              <stop offset="1" stopColor="#5D5DFF" stopOpacity=".32" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 relative z-10">
        
      </div>
    </section>
  );
}
