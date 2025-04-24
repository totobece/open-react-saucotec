import React from 'react';

// Placeholder check icon
const CheckIcon = () => (
  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

export default function WhatCanAIChatbotDo() {
  return (
    // Added responsive padding, adjusted spacing
    <section className="relative py-8 md:py-20 border-t border-gray-700 bg-[#07112B] px-4 sm:px-6 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="py-8 md:py-20">

          {/* Section header - Adjusted text sizes for mobile */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16">
            <p className="text-lg md:text-xl text-blue-500 font-semibold uppercase mb-2">Uso de Saucotec AI</p>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-white">¿Qué puede hacer Saucotec AI?</h2>
            <p className="text-base md:text-xl text-gray-400 mb-6">
              Saucotec AI se adapta y aprende continuamente sobre tu negocio para gestionar diversas tareas de forma automática y personalizada. Nosotros te asistimos en la configuración inicial y el entrenamiento.
            </p>
            {/* Key capabilities list with adjusted text sizes */}
            <ul className="text-sm md:text-lg text-gray-400 space-y-3 mb-6 md:mb-8 text-left max-w-md mx-auto">
              <li className="flex items-center">
                <CheckIcon />
                <span>Responder consultas en WhatsApp, Instagram y Facebook.</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span>Escuchar y responder audios.</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span>Gestionar atención al cliente y promover productos/servicios.</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span>Enviar links de pago y asesorar de manera precisa.</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span>Programar citas y eventos.</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span>Realizar seguimiento automático a clientes.</span>
              </li>
            </ul>
            {/* Button adjusted size for mobile */}
            <a className="btn text-sm md:text-base text-white bg-blue-600 hover:bg-blue-700" href="/contact">
              Contactar
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
