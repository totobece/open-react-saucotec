'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// Import required modules
import { Autoplay } from 'swiper/modules';


// Placeholder logos - replace with actual paths or components
const logos = [
    'Mercado Pago', 'Whatsapp API', 'OpenAI', 'Meta', 'Python', 'Microsoft', 'Google Calendar', 'Stripe',
    'AppSheet', 'Excel', 'SQL', 'Mercado Libre',
    // Duplicate for seamless loop
    'Mercado Pago', 'Whatsapp API', 'OpenAI', 'Meta', 'Python', 'Microsoft', 'Google Calendar', 'Stripe',
    'AppSheet', 'Excel', 'SQL', 'Mercado Libre',
];

export default function IntegrationsCarousel() {
  return (
    // Added responsive padding and adjusted height
    <section className="py-6 md:py-12 bg-[#07112B] px-4 sm:px-6 md:px-0">
      {/* Removed max-w-6xl and mx-auto from this div */}
      <div> 
        {/* Optional: Add a title if needed */}
        {/* <h2 className="text-center text-2xl font-bold text-white mb-8">Integraciones</h2> */}
        
        {/* Full-width Swiper container */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2} // Start with 2 slides on smallest screens
          spaceBetween={20} // Reduced spacing for mobile
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
             // when window width is >= 1280px
            1280: {
              slidesPerView: 7,
              spaceBetween: 60,
            },
          }}
          className="w-full" // Ensure Swiper takes full width
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center h-12 md:h-16"> {/* Adjusted height for mobile */}
              {/* Placeholder text - replace with actual images/logos */}
              <span className="text-gray-400 text-base md:text-lg font-medium whitespace-nowrap">{logo}</span>
              {/* Example using img tag (replace src) */}
              {/* <img src={`/images/logos/${logo.toLowerCase().replace(' ', '-')}.svg`} alt={logo} className="h-6 md:h-8 w-auto" /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
