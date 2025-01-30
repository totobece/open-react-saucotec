'use client'

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Fondo from '@/public/images/Rectangle 30 (1).svg'
import {useTranslations} from 'next-intl';


export default function ServicePresentation() {
  const t = useTranslations('QuotePresentation');


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
        <section className='py-[150px] lg:py-[200px] maw-x-6xl bg-gradient-to-b from-[#07112B] via-[#3e1844] to-[#07112B] transition-all duration-500' 
        id='nosotros'>
            <div className={`max-w-full mx-auto px-4 sm:px-6 relative ${isMobile ? 'text-center' : ''}`}>
                <div className='py-2 lg:py-2 md:flex md:flex-col items-center'>
                    <h1 className="max-w-5xl text-3xl lg:text-5xl font-extralight tracking-wide text-white/90 text-center drop-shadow-sm" 
                        data-aos="fade-up"
                        style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        {t("h1")} <span className='text-[#ff4da6] font-light ml-2 mr-2 transition-colors duration-300'>{t("span")}</span>{t("h1-1")}
                        <br/>
                        <br/>
                        {t("br1")}<span className='text-white/90 font-light ml-2 mr-2'>{t("br2")}</span>
                    </h1>
                </div>
            </div>
        </section>
    )
}
