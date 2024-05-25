'use client'
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/ui/header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testimonials from '@/components/testimonials';
// Importa las imágenes
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
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className='mb-8 text-left mr-80'>
          <h1 className='text-blue-888 text-4xl lg:text-8xl mb-2 mr-60' data-aos="fade-up">
            CLIENTES
          </h1>
          <h2 className='text-3xl text-gray-500 mt-8 mb-60 '>Texto más chico aquí pero más largo que el de arriba</h2>
        </div>
        <div className="flex justify-center items-center ">
          <Slider {...settings} className="w-full max-w-4xl mx-auto">
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>


          </Slider>
        </div>
      </div>
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
    </>
  );
};

export default ClientesPage;
