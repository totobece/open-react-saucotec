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

export default function ServicePresentation() {
  const [isMobile, setIsMobile] = useState(false);

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
                      <blockquote className="tracking-normal leading-[1] text-[1.8rem] lg:text-[2rem] font-[200] text-white text-left mx-auto  grow">Centralizing and digitizing information transforms company operations. The system tailored to us by Saucotec makes this possible.</blockquote>
                
                  
                  <blockquote className="leading-10 text-lg lg:text-2xl font-[500] text-white tracking-[0.05em] text-right mx-2 grow pt-8">Cesar Cabrera</blockquote>
                  <blockquote className="leading-5 text-rgsf lg:text-2xl font-[100] text-white tracking-[0.05em] text-right mx-2  grow">Owner - Nort Revesimientos</blockquote>
                  
                
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.div onClick={scrollToTestimonials} className="cursor-pointer" whileHover={{ y: -10 }}>
                <div style={cardStyle}>
                  <div>
                    <img src={Quotes.src} alt="quotes" className="w-24 left h-auto mb-8" />
                  </div >
                   <blockquote className="tracking-normal leading-[1] text-[1.8rem] lg:text-[2rem] font-[200] text-white text-left mx-auto grow">At Politap we had a deficit in the accessibility and efficiency of the sales process. Saucotec developed an integrated solution, streamlining our operations.</blockquote>
                  <blockquote className="leading-10 text-lg lg:text-2xl font-[500] text-white tracking-[0.05em] text-right mx-2 grow pt-8">Pedro A. Rossi</blockquote>
                  <blockquote className="leading-5 text-rgsf lg:text-2xl font-[100] text-white tracking-[0.05em] text-right mx-2  grow">Owner - Politap S.R.L.</blockquote>
                  
                </div>

              </motion.div>
            </div>
            
            <div>
              <motion.div onClick={scrollToTestimonials} className="cursor-pointer" whileHover={{ y: -10 }}>
                <div style={cardStyle}>
                  <div>
                    <img src={Quotes.src} alt="quotes" className="w-24 left h-auto mb-8" />
                  </div>
                    <blockquote className="tracking-normal leading-[1] text-[1.8rem] lg:text-[2rem] font-[200] text-white text-left mx-auto grow">Working with Saucotec has resulted in excellent achievements for us. The customization of solutions and their proximity differentiate them.</blockquote>
                 
                 <div className=''>
                  <blockquote className="leading-10 text-lg lg:text-2xl font-[500] text-white tracking-[0.05em] text-right mx-2  grow pt-8">Nicolás Albertoni</blockquote>
                  <blockquote className="leading-5 text-rgsf lg:text-2xl font-[100] text-white tracking-[0.05em] text-right mx-2 grow">Business Development Manager - Energía Global</blockquote>
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
