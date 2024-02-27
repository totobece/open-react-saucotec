'use client'

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Fondo from '@/public/images/Rectangle 30 (1).svg'

export default function ServicePresentation() {

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
    return (
        <section className='maw-x-6xl' id='nosotros'>
            <div className={`max-w-full mx-auto px-4 sm:px-6 relative ${isMobile ? 'text-center' : ''}`}>
                <Image
              src={Fondo}
              alt="FondoFooter"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className='z-[-4]'
          
            />

               
                <div className=' py-64 lg:py-96 md:flex md:flex-col items-center '>
                          <h1 className="text-4xl lg:text-6xl  text-white text-center" data-aos="fade-up">
                        SaucoTec es una compañia de servicio digital <span className='text-[#FF248D] font-bold ml-2 mr-2'>completo.</span>
                        <br/>
                        <br/>
                      
                        Trabajamos para hacerte  <span className='text-white font-bold ml-2 mr-2'>alcanzar otro nivel.</span>

                          
                      </h1>

                </div >
            </div>
        </section>
    )
}
