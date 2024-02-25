'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Desktop from '@/public/images/DESKTOP.svg';
import Botones from '@/public/images/BOTONES.svg';
import Mobile from '@/public/images/MOBILE.svg';
import FotosMobile from '@/public/images/Group 51 (1).png';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import Fondo from '@/public/images/Rectangle 22 (1).svg';

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
    <section className="relative">
      
      <div className="max-w-full mx-auto px-4 pt-64 flex z-10 relative">
        <div className="max-w-6xl container ml-20 flex flex-col pb-8">
          <div className="md:flex md:flex-col ">
            <h1 className={` text-3xl md:text-4xl lg:text-7xl  text-white text-left `} data-aos="fade-up">
              Tu <span className='text-extrabold'>transformacion</span> digital
              <h2 className={`text-3xl lg:text-7xl md:text-3xl  `}>
                con nosotros
              </h2>
            </h1>
            <button onClick={scrollToContact}  className='lg:w-80 w-60 text-xl btn text-white bg-[#000F39]  h-16 rounded-[52px] mt-16 border-solid border-2 border-white px-4 hover:bg-[#334FFE] lg:ml-2 ml-6 '>
              Digitalizacion de procesos
            </button>  
            <button onClick={scrollToContact}  className='lg:w-80 w-60 text-xl btn text-white bg-[#000F39]  h-16 rounded-[52px] mt-8 border-solid border-2 border-white px-4 hover:bg-[#334FFE] lg:ml-2 ml-6 '>
              Desarrollar mi proyecto
            </button>  
          </div>
        </div>

        {!isMobile && (
          <div className="max-w-full mx-auto px-4 sm:px-6 relative mr-44 z-0">
            <CardContainer className='inter-var'>
              <CardBody className='w-auto sm:w-[30rem] h-auto rounded-xl p-6'>
                <CardItem translateZ="160">
                  <Image
                    src={Desktop}
                    height="1000"
                    width="1000"
                    alt='thumbnail'
                    className='h-auto w-full rounded-xl'
                  />
                  <CardBody style={{transform:'translateY(-200px)'}}>
                    <CardItem translateZ="120">
                      <Image
                        src={Mobile}
                        height="500"
                        width="500"
                        alt='Mobile'
                        className='h-30 w-30 rounded-xl'
                      />
                    </CardItem>
                    <CardBody style={{transform:'translateY(-200px)'}}>
                      <CardItem translateZ="220">
                        <Image
                          src={Botones}
                          height={1000}
                          width={1000}
                          alt='Mobile'
                          className='h-30 w-30 rounded-xl'
                        />
                      </CardItem>
                    </CardBody>
                  </CardBody>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        )}

      </div>
      <Image
        src={Fondo}
        alt="Fondo"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-[-1]"
      />
      {isMobile && (
        <div className='flex justify-center items-center z-0 pb-44 mt-10'>
          <Image
            src={FotosMobile}
            alt="thumbnail"
            height={300}
            width={300}
          />
        </div>
      )}
    </section>
  );
}
