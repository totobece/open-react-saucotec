'use client'
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/ui/header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testimonials from '@/components/testimonials';
// Importa las imágenes
import Quotes from '@/public/images/quotes.png';
import {useTranslations} from 'next-intl';


export default function ServicePresentation() {
  const [isMobile, setIsMobile] = useState(false);
  const t = useTranslations('Testimonials');


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 789);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardStyle = {
    border: '2px solid #2E3853',
    width: '95%',
    flex: '1',
    padding: '1rem',
    backgroundColor: '#171D2C',
    marginBottom: '2rem',
    marginTop: '2rem',
    borderRadius: '50px',
    height: '550px', 
    overflow: 'hidden', 
  };

  const scrollToTestimonials = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const settings = {
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100000,
  };

  const testimonialsRef = useRef<HTMLDivElement>(null);

  return (
    <section className=' relative bg-none bg-[#07112B]'>
      <div className={`md:pb-32 max-w-full ml-8 sm:px-6 relative  ${isMobile ? 'text-center' : ''}`}>
        <div className="w-full mr-20 flex justify-center items-center">
          <Slider {...settings} className="w-full">
            
            <div>
              <motion.div onClick={scrollToTestimonials} className="cursor-pointer" whileHover={{ y: -10 }}>
                <div style={cardStyle}>
                  <div>
                    <img src={Quotes.src} alt="quotes" className="w-24 left h-auto mb-8" />
                  </div>
                      <blockquote className="tracking-normal leading-[1] text-[1.8rem] lg:text-[2rem] font-[200] text-white text-left mx-auto  grow">{t("block1")}</blockquote>
                
                  
                  <blockquote className="leading-10 text-lg lg:text-2xl font-[500] text-white tracking-[0.05em] text-right mx-2 grow pt-8">Cesar Cabrera</blockquote>
                  <blockquote className="leading-5 text-rgsf lg:text-2xl font-[100] text-white tracking-[0.05em] text-right mx-2  grow">{t("block2")}</blockquote>
                  
                
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.div onClick={scrollToTestimonials} className="cursor-pointer" whileHover={{ y: -10 }}>
                <div style={cardStyle}>
                  <div>
                    <img src={Quotes.src} alt="quotes" className="w-24 left h-auto mb-8" />
                  </div >
                   <blockquote className="tracking-normal leading-[1] text-[1.8rem] lg:text-[2rem] font-[200] text-white text-left mx-auto grow">{t("block3")}</blockquote>
                  <blockquote className="leading-10 text-lg lg:text-2xl font-[500] text-white tracking-[0.05em] text-right mx-2 grow pt-8">Pedro A. Rossi</blockquote>
                  <blockquote className="leading-5 text-rgsf lg:text-2xl font-[100] text-white tracking-[0.05em] text-right mx-2  grow">{t("block4")}</blockquote>
                  
                </div>

              </motion.div>
            </div>
            
            <div>
              <motion.div onClick={scrollToTestimonials} className="cursor-pointer" whileHover={{ y: -10 }}>
                <div style={cardStyle}>
                  <div>
                    <img src={Quotes.src} alt="quotes" className="w-24 left h-auto mb-8" />
                  </div>
                    <blockquote className="tracking-normal leading-[1] text-[1.8rem] lg:text-[2rem] font-[200] text-white text-left mx-auto grow">{t("block5")}</blockquote>
                 
                 <div className=''>
                  <blockquote className="leading-10 text-lg lg:text-2xl font-[500] text-white tracking-[0.05em] text-right mx-2  grow pt-8">Nicolás Albertoni</blockquote>
                  <blockquote className="leading-5 text-rgsf lg:text-2xl font-[100] text-white tracking-[0.05em] text-right mx-2 grow">{t("block6")}</blockquote>
                  </div>
               
                </div>
              </motion.div>
            </div>
          
          </Slider>
        </div>
      </div>
    
    </section>
  );
}
