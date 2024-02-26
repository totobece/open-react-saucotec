'use client'

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Fondo from '@/public/images/fondo service presentation.svg'
import { motion } from 'framer-motion';
import Header from '@/components/ui/header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testimonials from '@/components/testimonials';
// Importa las imágenes
import AppleLogo from '@/public/images/640px-Apple-logo.png';
import MicrosoftLogo from '@/public/images/Microsoft_logo_(2012).svg.png';
import IBMLogo from '@/public/images/IBM_logo.svg.png';
import Quotes from '@/public/images/quotes.png';
//import Fondo from '@/public/images/Rectangle 22 (1).svg';

export default function ServicePresentation() {

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


    // Ref para el componente Testimonials
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // Función para realizar el desplazamiento hacia el componente Testimonials
  const scrollToTestimonials = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  let slides;

if (isMobile) {
  slides = 1;
} else {
  slides = 3;
}

  // Configuración del carrusel de imágenes
  const settings = {
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  
    return (
        <section className='relative bg-none'>
          
            <div className={`max-w-full mx-4 sm:px-6 relative ${isMobile ? 'text-center' : ''}`}>

            <div className="w-full mr-20 flex justify-center items-center  ">
          <Slider {...settings} className="w-full">
            <div>
              <motion.div
                onClick={scrollToTestimonials} 
                className="cursor-pointer"
                whileHover={{ y: -10 }} 
              >
                <div style={{ border: '2px solid #2E3853' }} className="w-[95%] flex flex-col p-6 bg-[#171D2C] hover:bg-[#0C0C1F] rounded-[50px] mb-4 mt-4" data-aos="fade-up" data-aos-delay="400">
                    
                    <div>
                    <img src={Quotes.src} alt="quotes" className="w-24 left h-auto mb-8" />
                    </div>

                        <blockquote className="tracking-normal leading-[1]  text-[1.8rem] lg:text-[2.4rem]  font-[200] text-white text-left mx-auto mb-8 grow " >Centralizar y digitalizar la información transforma las operaciones de la empresa. El sistema a nuestra medida por SaucoTec hace esto posible.</blockquote>
                        <blockquote className="leading-10 text-lg lg:text-2xl font-[500] text-white tracking-[0.05em] text-right mx-2  grow " >Cesar Cabrera</blockquote>
                        <blockquote className="leading-5 text-rgsf lg:text-2xl font-[100] text-white tracking-[0.05em] text-right mx-2 mb-4 grow " >Socio - Nort Revesimientos</blockquote>
                        </div>
              </motion.div>
            </div>
            <div>
              <motion.div
                onClick={scrollToTestimonials} 
                className="cursor-pointer"
                whileHover={{ y: -10 }} 
              >
                <div style={{ border: '2px solid #2E3853' }} className="w-[95%] flex flex-col p-6 bg-[#171D2C] hover:bg-[#0C0C1F] rounded-[50px] mb-4 mt-4" data-aos="fade-up" data-aos-delay="400">
                    
                <div>
                    <img src={Quotes.src} alt="quotes" className="w-24 left h-auto mb-8" />
                    </div>

                        <blockquote className="tracking-normal leading-[1]  text-[1.8rem] lg:text-[2.4rem]  font-[200] text-white text-left mx-auto mb-8 grow " >En Politap teníamos un déficit en la accesibilidad y eficiencia del proceso de venta. SaucoTec desarrolló una solución perfectamente integrada logrando agilizar nuestras operaciones.</blockquote>
                        <blockquote className="leading-10 text-lg lg:text-2xl font-[500] text-white tracking-[0.05em] text-right mx-2  grow " >Pedro A. Rossi</blockquote>
                        <blockquote className="leading-5 text-rgsf lg:text-2xl font-[100] text-white tracking-[0.05em] text-right mx-2 mb-4 grow " >Dueño - Politap S.R.L.</blockquote>
                        </div>
              </motion.div>
            </div>
            <div>
              <motion.div
                onClick={scrollToTestimonials} 
                className="cursor-pointer"
                whileHover={{ y: -10 }} 
              >
                <div style={{ border: '2px solid #2E3853' }} className="w-[95%] flex flex-col p-6 bg-[#171D2C] hover:bg-[#0C0C1F] rounded-[50px] mb-4 mt-4" data-aos="fade-up" data-aos-delay="400">
                    
                <div>
                    <img src={Quotes.src} alt="quotes" className="w-24 left h-auto mb-8" />
                    </div>

                        <blockquote className="tracking-normal leading-[1]  text-[1.8rem] lg:text-[2.4rem]  font-[200] text-white text-left mx-auto mb-8 grow " >Trabajar con SaucoTec ha resultado en excelentes logros para nosotros. La personalización de soluciones y su cercanía los diferencia.</blockquote>
                        <blockquote className="leading-10 text-lg lg:text-2xl font-[500] text-white tracking-[0.05em] text-right mx-2  grow " >Nicolás Albertoni</blockquote>
                        <blockquote className="leading-5 text-rgsf lg:text-2xl font-[100] text-white tracking-[0.05em] text-right mx-2 mb-4 grow " >Gerente Comercial - Energía Global</blockquote>
                        </div>
              </motion.div>
            </div>
            
          </Slider>
          
        </div>     
            </div>
            <Image
                src={Fondo}
                alt="Fondo"
                layout="fill"
                objectFit="none"
                quality={100}
                className="absolute z-[-1]"
              />  
        </section>
    )
}