import React from 'react';

// Placeholder check icon
const CheckIcon = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const benefits = [
  { title: 'Automatización de Ventas', description: 'Utiliza las instrucciones que vos le ingreses para gestionar las conversaciones, como lo harías vos.' },
  { title: 'Reduce Cargas de Trabajo y Personal', description: 'Ya no necesitas dedicarle cientos de horas a responder consultas, nuestro chatbot se ocupa de todo.' },
  { title: 'Atención Personalizada 24/7', description: 'Personalizá la conversación según el cliente, y responde en todo momento, al instante.' },
  { title: 'Análisis y Estadísticas', description: 'Podes hacer un seguimiento periódico a las conversaciones y resultados de nuestro chatbot.' },
  { title: 'Gestión de Inventario', description: 'Mantén tu stock actualizado automáticamente.' },
  { title: 'Mejora de Reputación', description: 'Respuestas rápidas y eficientes mejoran la percepción de tu marca.' },
  { title: 'Comunicación Efectiva', description: 'Asegura que cada consulta sea atendida con precisión.' },
  { title: 'Escucha Audios', description: 'Interpreta mensajes de voz para no perder ninguna consulta.' },
  { title: 'Responde como Humano', description: 'Interacciones naturales y personalizadas.' },
];

export default function AIChatbotBenefits() {
  return (
    // Added responsive padding and margins
    <section className="relative py-8 md:py-20 border-t border-gray-700 bg-[#07112B] px-4 sm:px-6 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="py-8 md:py-20">

          {/* Section header - Adjusted text sizes for mobile */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16">
            <p className="text-lg md:text-xl text-blue-500 font-semibold uppercase mb-2">Beneficios de Saucotec AI</p>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-white">¿Qué beneficios tiene nuestro chatbot con inteligencia artificial?</h2>
          </div>

          {/* Benefits Grid - Adjusted text sizes for mobile */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start" data-aos="fade-up" data-aos-delay={index * 50}>
                <CheckIcon />
                <div>
                  <h4 className="text-base md:text-xl font-bold mb-1 text-white">{benefit.title}</h4>
                  <p className="text-sm md:text-base text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}