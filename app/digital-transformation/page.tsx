'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Desktop from '@/public/images/DESKTOP.svg';
import Botones from '@/public/images/BOTONES.svg';
import Mobile from '@/public/images/MOBILE.svg';
import FotosMobile from '@/public/images/Group 51 (1).png';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Fondo from '@/public/images/Rectangle 22 (1).svg';
import SeccionClientes from '@/components/SeccionClientes';
import ContactForm from '@/components/newsletter';
import Footer from '@/components/ui/footer';

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
    <section className="bg-[#07112B] relative">
      <div className={`max-w-full mx-4 sm:px-6 relative text-center place-content-center ${isMobile ? '' : 'text-left'}`}>
      
      <div className="max-w-full mx-auto  pt-[120px] md:pt-[135px]  lg:pt-[150px] flex relative">
        <div className="max-w-full container flex flex-col lg:pb-8">
          <div className="md:flex md:flex-col ">
          <blockquote className="text-sm lg:text-lg tracking-[0.3rem] font-[100] text-white text-center mx-auto mt-6 mb-6 grow " >TRANSFORMACIÓN DIGITAL</blockquote>
            <h1 className={` text-4xl md:text-7xl lg:text-8xl mt-6 text-white  `} data-aos="fade-up">
                Ignite your company's <br />growth potential.
            </h1>

            <p className="text-white pt-6 text-lg md:text-xl lg:text-2xl tracking-wide font-[100] mt-10" data-aos="fade-up">
            We take care of maintaining your competitiveness in the long term. 
            </p>
            <div className='relative'>
            <button onClick={scrollToContact}  className='w-60 lg:w-80 btn p-[2px] mt-14 lg:mt-26 text-white duration-50 relative hover:-translate-y-[12px] transition'>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-purple-500 rounded-full " />
              <div className="lg:w-80 w-60 leading-[1] text-lg btn  px-8 py-2  bg-[#000F39] rounded-full relative group transition duration-200 font-[300] h-12  ">
                Leave us a message</div>
            </button>

            <blockquote className="text-sm mt-20 lg:text-lg tracking-[0.3rem] font-[100] text-white text-center mx-auto  grow " >NEXT TO SAUCOTEC</blockquote>
            
            <h1 className={` text-2xl mt-16 md:text-3xl lg:text-5xl  text-white  `} data-aos="fade-up">
            Your company,<br />ready for the future.
            </h1>

            <div className={`mt-20 flex-col justify-center `}>
                <div className={`max-w-[1000px] mx-auto place-items-center ${isMobile ? 'flex flex-col' : 'grid grid-cols-2'}  gap-8`}>
                    
                    <div   className='w-full max-w-[480px] btn p-[2px] text-white duration-50 relative '>
                    <div className="absolute  inset-0 bg-[#243871] rounded-2xl " />
                    <div className="w-full max-w-[480px] leading-[1] text-2xl btn  px-8 py-2  bg-[#060D21] rounded-2xl relative group transition duration-200 font-[400] h-20  ">
                    Process advice</div>
                    </div>

                    <div   className='w-full max-w-[480px] btn p-[2px] text-white duration-50 relative '>
                    <div className="absolute  inset-0 bg-[#243871] rounded-2xl " />
                    <div className="w-full max-w-[480px] leading-[1] text-2xl btn  px-8 py-2  bg-[#060D21] rounded-2xl relative group transition duration-200 font-[400] h-20  ">
                    Data collection</div>
                    </div>

                    <div   className='w-full max-w-[480px] btn p-[2px] text-white duration-50 relative '>
                    <div className="absolute  inset-0 bg-[#243871] rounded-2xl " />
                    <div className="w-full max-w-[480px] leading-[1] text-2xl btn  px-8 py-2  bg-[#060D21] rounded-2xl relative group transition duration-200 font-[400] h-20  ">
                    Integrated apps</div>
                    </div>

                    <div   className='w-full max-w-[480px] btn p-[2px] text-white duration-50 relative '>
                    <div className="absolute  inset-0 bg-[#243871] rounded-2xl " />
                    <div className="w-full max-w-[480px] leading-[1] text-2xl btn  px-8 py-2  bg-[#060D21] rounded-2xl relative group transition duration-200 font-[400] h-20  ">
                    Data Analytics</div>
                    </div>

                    <div   className='w-full max-w-[480px] btn p-[2px] text-white duration-50 relative '>
                    <div className="absolute  inset-0 bg-[#243871] rounded-2xl " />
                    <div className="w-full max-w-[480px] leading-[1] text-2xl btn  px-8 py-2  bg-[#060D21] rounded-2xl relative group transition duration-200 font-[400] h-20  ">
                        Data Security</div>
                    </div>

                    <div   className='w-full max-w-[480px] btn p-[2px] text-white duration-50 relative '>
                    <div className="absolute  inset-0 bg-[#243871] rounded-2xl " />
                    <div className="w-full max-w-[480px] leading-[1] text-2xl btn  px-8 py-2  bg-[#060D21] rounded-2xl relative group transition duration-200 font-[400] h-20  ">
                    Customer Experience</div>
                    </div>

                    <div   className='w-full max-w-[480px] btn p-[2px] text-white duration-50 relative '>
                    <div className="absolute  inset-0 bg-[#243871] rounded-2xl " />
                    <div className="w-full max-w-[480px] leading-[1] text-2xl btn  px-8 py-2  bg-[#060D21] rounded-2xl relative group transition duration-200 font-[400] h-20  ">
                        Remote Management</div>
                    </div>

                    <div   className='w-full max-w-[480px] btn p-[2px] text-white duration-50 relative '>
                    <div className="absolute  inset-0 bg-[#243871] rounded-2xl " />
                    <div className="w-full max-w-[480px] leading-[1] text-2xl btn  px-8 py-2  bg-[#060D21] rounded-2xl relative group transition duration-200 font-[400] h-20  ">
                    Adaptability to change</div>
                    </div>
                </div>

                </div>
                    <h1 className={` text-2xl mt-16 md:text-3xl lg:text-5xl  text-white  `} data-aos="fade-up">
                        Discover our portfolio...
                    </h1>
            </div>
          </div>
        </div>

      </div>
      <div className='mt-16'>
      <SeccionClientes/>
       <ContactForm/>
       
       </div>

       
      </div>
      <Footer/>

    </section>
  );
}
