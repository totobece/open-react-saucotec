'use client'

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Fondo from '@/public/images/fondo service presentation.svg'

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
        <section className='bg-customBlue'>
            <div className={`max-w-full mx-auto px-4 sm:px-6 relative ${isMobile ? 'text-center' : ''}`}>

                {/* Titulo */}
                <div className='bg-customBlue py-20 lg:py-40'>
                    <p className='w-full text-white pt-8 md:text-3xl lg:text-4xl text-[1.5rem] leading-[1] font-[300] relative flex flex-col  text-center mx-auto '>
                      SaucoTec es una compañía de servicio digital completo. 
                      <br />Trabajamos para hacerte alcanzar otro nivel.</p>

                </div >
            </div>
        </section>
    )
}
