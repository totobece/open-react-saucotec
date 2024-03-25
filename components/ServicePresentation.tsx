'use client'

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';


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
        <section id="service-presentation" className='bg-[#07112B] relative'> 
          
            <div className={` max-w-full mx-auto px-4 sm:px-6 relative ${isMobile ? 'text-center' : ''}`}>

                
        <div>
                
                <div>
                    <h1 className='w-full text-white  md:text-4xl lg:text-4xl text-[1.5rem] leading-[1] font-[200] relative flex flex-col  text-center mx-auto'>Digital development and transformation<br />for companies with ambitious goals</h1>
                </div >
                
               
                <div className='max-w-sm mx-auto grid gap-8 lg:grid-cols-2 md:gap-6 items-start md:max-w-none pt-12'>

                        <Link href="/digital-products">
                        <div style={{ border: '2px solid #334FFE' }} className="w-full flex flex-col p-6 bg-[#171D2C] hover:bg-[#334FFE] rounded-[50px] mb-4 mt-4" data-aos="fade-up" data-aos-delay="400">
                        
                            <blockquote className="text-base lg:text-xl font-[200] text-white tracking-[0.05em] text-center mx-auto mt-6 mb-6 grow " >PROCESS DIGITALIZATION</blockquote>
                            <blockquote className="tracking-normal leading-[1]  text-3xl lg:text-4xl font-[500] text-white text-center mx-auto mb-8 grow " >Your operations,<br /> a system at your size.</blockquote>
                            <blockquote className="leading-10 text-2xl lg:text-3xl font-[200] text-white tracking-[0.05em] text-center mx-auto mb-8 grow " >Simplicity. 
                                                        <br />High accessibility.
                                                           <br />Centralized information.
                                                           <br />Remote controlled.</blockquote>
                               </div>
                        </Link>

                            <Link href="/digital-products">
                        <div style={{ border: '2px solid #334FFE' }} className="w-full flex flex-col  p-6 bg-[#171D2C] hover:bg-[#334FFE] rounded-[50px] mb-4 mt-4" data-aos="fade-up" data-aos-delay="400">
                        
                          <blockquote className="text-base lg:text-xl font-[200] text-white tracking-[0.05em] text-center mx-auto mt-6 mb-6 grow " >DIGITAL PRODUCTS DEVELOPMENT</blockquote>
                          <blockquote className="leading-[1] text-3xl lg:text-4xl font-[500] text-white tracking-[0.05em] text-center mx-auto mb-8 grow " >Your project vision,<br /> from paper to reality.</blockquote>
                          <blockquote className="leading-10 text-2xl lg:text-3xl font-[200] text-white tracking-[0.05em] text-center mx-auto mb-8 grow " >
                                                      Web Apps. 
                                                    <br />Mobile Apps.
                                                    <br />UX/UI. 
                                                    <br />Data Science & AI.</blockquote>
                        </div>
                        </Link>
                       
                </div>
                </div>
            </div>
           
        </section>
    )
}