import React from 'react';
import Image from 'next/image'; // Import next/image

// Placeholder check icon
const CheckIcon = () => (
  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const featuresList = [
  'Asesora y envía links de cobro',
  'Vende Productos de tu Negocio',
  'Agenda Citas o Eventos en tu Calendario',
  'Escucha Audios',
  'Aprende Automáticamente',
  'Interpreta imágenes',
  'Seguimiento Automático',
  'Activo las 24Hs',
];

export default function WhatIsAIChatbot() {
  return (
    // Adjusted background, text colors, REMOVED border-t, added responsive padding
    <section className="relative py-8 md:py-20 bg-[#07112B] px-4 sm:px-6 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="py-8 md:py-20">

          {/* Section content: Use grid for layout */}
          <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-16 items-center">

            {/* Image column */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-1 lg:col-span-1 mb-8 md:mb-0 md:order-1 flex justify-center" data-aos="fade-right">
              {/* Use next/image */}
              <Image 
                src="/images/what-is-saucotec.png" // Replace with actual image path if different
                alt="Saucotec AI Chatbot Illustration" 
                width={500} // Adjust width as needed
                height={500} // Adjust height as needed
                className="rounded-lg w-full h-auto md:w-auto"
              />
            </div>

            {/* Text and List column */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-1 lg:col-span-1 md:order-2" data-aos="fade-left">
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                {/* Adjusted text colors and sizes for mobile */}
                <div className="font-architects-daughter text-lg md:text-xl text-blue-500 mb-2">Informacion sobre Saucotec AI</div>
                <h3 className="text-2xl md:text-4xl font-bold mb-3 text-white">Saucotec AI ¿Qué es?</h3>
                <p className="text-base md:text-xl text-gray-400 mb-6">
                  Saucotec AI es un chatbot que se capacita en los detalles de tu empresa, desde información básica hasta los servicios y productos que ofreces. Está diseñado para aprender y asesorar eficazmente a tus clientes.
                </p>
                <ul className="text-sm md:text-lg text-gray-400 -mb-2">
                  {featuresList.map((feature, index) => (
                    <li key={index} className="flex items-center mb-3">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
