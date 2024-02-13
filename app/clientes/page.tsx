'use client'
import React, { useRef } from 'react';
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

const ClientesPage = () => {
  // Ref para el componente Testimonials
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // Función para realizar el desplazamiento hacia el componente Testimonials
  const scrollToTestimonials = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Configuración del carrusel de imágenes
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Header pageType='dark' />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className='mb-8 text-left mr-80'>
          <h1 className='text-blue-888 text-4xl lg:text-8xl mb-2 mr-60' data-aos="fade-up">
            CLIENTES
          </h1>
          <h2 className='text-3xl text-gray-500 mt-8 mb-60 '>Texto más chico aquí pero más largo que el de arriba</h2>
        </div>
        {/* Carrusel de imágenes */}
        <div className="flex justify-center items-center ">
          <Slider {...settings} className="w-full max-w-4xl mx-auto">
            <div>
              <motion.div
                onClick={scrollToTestimonials} // Desplazamiento hacia el componente Testimonials al hacer clic
                className="cursor-pointer"
                whileHover={{ y: 10 }} // Desplazamiento hacia abajo de 20px al pasar el cursor por encima
              >
                <img src={AppleLogo.src} alt="Apple" className="w-32 h-auto mx-auto" />
              </motion.div>
            </div>
            <div>
              <motion.div
                onClick={scrollToTestimonials} // Desplazamiento hacia el componente Testimonials al hacer clic
                className="cursor-pointer"
                whileHover={{ y: 10 }} // Desplazamiento hacia abajo de 20px al pasar el cursor por encima
              >
                <img src={MicrosoftLogo.src} alt="Microsoft" className="w-32 h-auto mx-auto" />
              </motion.div>
            </div>
            <div>
              <motion.div
                onClick={scrollToTestimonials} // Desplazamiento hacia el componente Testimonials al hacer clic
                className="cursor-pointer"
                whileHover={{ y: 10 }} // Desplazamiento hacia abajo de 10px al pasar el cursor por encima
              >
                <img src={IBMLogo.src} alt="IBM" className="w-32 h-auto mx-auto" />
              </motion.div>
            </div>
            {/* Agrega más imágenes de clientes según sea necesario */}
          </Slider>
        </div>
      </div>
      <div ref={testimonialsRef}>
        <Testimonials /> {/* El componente Testimonials se mostrará aquí */}
      </div>
    </>
  );
};

export default ClientesPage;
