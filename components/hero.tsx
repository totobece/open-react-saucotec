'use client'
import Image from 'next/image';
import FeatImage01 from '@/public/images/features-03-image-01.png';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';


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
    <section>
      <div className={`max-w-full mx-auto px-4 sm:px-6 relative ${isMobile ? 'text-center' : ''}`}>

        {/* Illustration behind hero content */}
        <div className={`absolute left-0 bottom-0 ${isMobile ? 'mx-auto' : '-ml-20'} hidden lg:block pointer-events-none`} aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
          <svg className="max-w-full" style={{ transform: isMobile ? '' : 'translate(-200px,-400px)' }} width="564" height="552" viewBox="0 0 564 552" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="illustration-02" x1="-3.766" y1="300.204" x2="284.352" y2="577.921" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5D5DFF" stopOpacity=".01" />
                <stop offset="1" stopColor="#5D5DFF" stopOpacity=".32" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Hero content */}
        <div className={`relative pt-32 pb-10 md:pt-40 md:pb-60 ${isMobile ? 'pb-6' : ''}`}>

          {/* Section header */}
          <div className={`max-w-6xl mx-auto pb-12 md:pb-16 flex flex-col items-${isMobile ? 'center' : 'start'} ${isMobile ? 'h-64' : ''}`}>
            <h1 className={`text-4xl font-light md:text-4xl lg:text-7xl h1 mb-4 tracking-[0.09em] ${isMobile ? 'text-center' : ''}`} data-aos="fade-up" style={{ transform: isMobile ? '' : 'translate(30px, 30px )' }}>
              DIGITALIZA TU ORGANIZACION
              <br className={isMobile ? 'hidden' : ''} />
              Y UN POQUITO MAS
            </h1>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              {/* Contactanos */}
              <div>
                <div data-aos="fade-up" data-aos-delay="600">
                  <a onClick={scrollToContact} className="btn text-white bg-blue-888 hover:bg-blue-800 w-full rounded-[20px] mb-4 sm:w-auto sm:mb-0"
                    style={{ transform: isMobile ? '' : 'translate(-473px,40px)' }}>
                    Contactanos
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Removed ModalVideo component */}
          <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={550} height={0} alt="Features 01"
            style={{ transform: isMobile ? '' : 'translate(200px,-100px)' }} />
        </div>

      </div>
    </section>
  );
}
