import React from 'react';
import Image from 'next/image'; // Import next/image

// Updated steps based on the Roadmap
const steps = [
  {
    number: '01',
    title: 'Configuración e integración con WhatsApp Business y CRM',
    description: 'Te asistimos para conectar Saucotec AI con tus herramientas existentes.',
  },
  {
    number: '02',
    title: 'Entrenamiento con documentación propia',
    description: 'Cargamos tus documentos y FAQs para que el AI aprenda sobre tu negocio.',
  },
  {
    number: '03',
    title: 'Pruebas y optimización',
    description: 'Realizamos pruebas conjuntas para asegurar que las respuestas sean precisas y efectivas.',
  },
  {
    number: '04',
    title: 'Lanzamiento y soporte continuo',
    description: 'Ponemos en marcha el AI y ofrecemos soporte para ajustes y mejoras.',
  },
];

export default function HowItWorksSteps() {
  return (
    // Added responsive padding and margins
    <section className="relative py-8 md:py-20 border-t border-gray-700 bg-[#07112B] px-4 sm:px-6 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="py-8 md:py-20">

          {/* Section header - Updated title and adjusted text size for mobile */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-white">Roadmap</h2>
          </div>

          {/* Grid layout for steps and image */}
          <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-16 items-center">

            {/* Steps Column - Added responsive text sizes */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-1 lg:col-span-1 mb-8 md:mb-0" data-aos="fade-right">
              <div className="space-y-6 md:space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    {/* Step Number - Adjusted size for mobile */}
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-700 text-white font-bold text-lg md:text-xl mr-3 md:mr-4 flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      {/* Adjusted text colors and sizes */}
                      <h4 className="text-lg md:text-xl font-bold leading-snug tracking-tight mb-1 text-white">{step.title}</h4>
                      <p className="text-sm md:text-base text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Column - Updated for better mobile display */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-1 lg:col-span-1 flex justify-center md:justify-end" data-aos="fade-left">
               {/* Container for image */}
               <div className="relative inline-block bg-gray-800 p-2 md:p-2 rounded-lg shadow-lg max-w-xs md:max-w-sm"> 
                 <Image
                   src="/images/how-it-works-chat.png"
                   alt="Saucotec AI Chat Example"
                   width={400}
                   height={700}
                   className="rounded w-full h-auto"
                 />
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}