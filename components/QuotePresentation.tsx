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
        <section className='py-[200px] lg:py-[250px] maw-x-6xl bg-gradient-to-b from-[#07112B] via-[#3e1844] to-[#07112B]' 
        id='nosotros'>
            <div className={`max-w-full mx-auto px-4 sm:px-6 relative ${isMobile ? 'text-center' : ''}`}>
                <div className=' py-2 lg:py-2 md:flex md:flex-col items-center '>
                          <h1 className="max-w-5xl text-4xl lg:text-6xl  text-white text-center" data-aos="fade-up">
                        SaucoTec is a company with a <span className='text-[#FF248D] font-bold ml-2 mr-2'>complete</span>digital service.
                        <br/>
                        <br/>
                      
                        We work to make you reach<span className='text-white font-bold ml-2 mr-2'>another level.</span>

                          
                      </h1>

                </div >
            </div>
        </section>
    )
}
