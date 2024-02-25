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

                
        <div>
                {/* Titulo */}
                <div>
                    <h1 className='w-full text-white pt-8 md:text-4xl lg:text-4xl text-[1.5rem] leading-[1] font-[200] relative flex flex-col  text-center mx-auto mb-12'>Desarrollo y transformación digital para<br />compañías con visiones ambiciosos</h1>
                </div >
                
                {/* Div para las dos cards */}
                <div className='max-w-sm mx-auto grid gap-8 lg:grid-cols-2 md:gap-6 items-start md:max-w-none'>


                        <div style={{ border: '2px solid #334FFE' }} className="w-full flex flex-col p-6 bg-[#171D2C] hover:bg-[#334FFE] rounded-[50px] mb-4 mt-4" data-aos="fade-up" data-aos-delay="400">
                        
                            <blockquote className="text-base lg:text-xl font-[200] text-white tracking-[0.05em] text-center mx-auto mt-6 mb-6 grow " >DIGITALIZACIÓN DE PROCESOS</blockquote>
                            <blockquote className="tracking-normal leading-[1]  text-3xl lg:text-4xl font-[500] text-white text-center mx-auto mb-8 grow " >Tus operaciones,<br /> un sistema a tu medida.</blockquote>
                            <blockquote className="leading-10 text-2xl lg:text-3xl font-[200] text-white tracking-[0.05em] text-center mx-auto mb-8 grow " >Simpleza. 
                                                        <br />Alta accesibilidad.
                                                        <br />Información centralizada. 
                                                        <br />A control remoto.</blockquote>
                            </div>


                        <div style={{ border: '2px solid #334FFE' }} className="w-full flex flex-col  p-6 bg-[#171D2C] hover:bg-[#334FFE] rounded-[50px] mb-4 mt-4" data-aos="fade-up" data-aos-delay="400">
                        
                          <blockquote className="text-base lg:text-xl font-[200] text-white tracking-[0.05em] text-center mx-auto mt-6 mb-6 grow " >DESARROLLO DE PRODUCTOS DIGITALES</blockquote>
                          <blockquote className="leading-[1] text-3xl lg:text-4xl font-[500] text-white tracking-[0.05em] text-center mx-auto mb-8 grow " >Tu visión del proyecto,<br /> del papel a la realidad.</blockquote>
                          <blockquote className="leading-10 text-2xl lg:text-3xl font-[200] text-white tracking-[0.05em] text-center mx-auto mb-8 grow " >
                                                      Web. 
                                                    <br />Aplicaciones.
                                                    <br />UX/UI. 
                                                    <br />Data Science.</blockquote>
                        </div>
                       
                </div>
                </div>
            </div>
        </section>
    )
}