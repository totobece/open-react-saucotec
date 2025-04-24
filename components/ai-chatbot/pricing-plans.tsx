import React from 'react';

// Placeholder check icon
const CheckIcon = () => (
  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const plans = [
  {
    name: 'Básico',
    description: 'Ideal para pequeñas empresas o startups.',
    price: 'Contacto', // Placeholder price
    features: [
      'Hasta 1,000 interacciones mensuales',
      'Integración básica con plataformas de mensajería',
      'Acceso a plantillas de conversación estandarizadas',
      'Soporte técnico básico',
      'Informes mensuales de rendimiento',
    ],
    cta: 'Contactar Ventas',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'Para empresas que necesitan más robustez.',
    price: 'Contacto', // Placeholder price
    features: [
      'Hasta 5,000 interacciones mensuales',
      'Integración con CRM',
      'Análisis avanzados y personalización de diálogos',
      'Capacitación de personal',
      'Soporte técnico prioritario',
    ],
    cta: 'Contactar Ventas',
    popular: true,
  },
  {
    name: 'Empresarial',
    description: 'Solución integral y maximizada.',
    price: 'Contacto', // Placeholder price
    features: [
      'Interacciones ilimitadas',
      'Gestión completa de campañas',
      'Integración avanzada (ERP, POS)',
      'Desarrollo de características personalizadas',
      'Soporte técnico dedicado 24/7',
    ],
    cta: 'Contactar Ventas',
    popular: false,
  },
];

export default function PricingPlans() {
  return (
    <section className="relative bg-gray-900 py-8 md:py-20 border-t border-gray-700 px-4 sm:px-6 md:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Section header - Adjusted text sizes for mobile */}
        <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4 text-white">Planes de Saucotec AI</h2>
          <p className="text-base md:text-xl text-gray-400">
            Optimiza tu comunicación y ventas con nuestros planes de AI Chatbot, adaptados a cada necesidad empresarial. Te ayudamos a elegir e implementar el ideal para ti.
          </p>
        </div>

        {/* Pricing tables - Improved responsive layout */}
        <div className="max-w-sm mx-auto grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 items-start lg:max-w-none">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col h-full p-4 md:p-6 rounded-lg border bg-gray-800 shadow-lg ${plan.popular ? 'border-blue-500' : 'border-gray-700'}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 mr-4 md:mr-6 -mt-3 md:-mt-4">
                  <div className="inline-flex items-center text-xs font-semibold py-1 px-2 md:px-3 uppercase text-white bg-blue-600 rounded-full">Popular</div>
                </div>
              )}
              <div className="mb-3 md:mb-4">
                <div className="text-base md:text-lg font-semibold mb-1 text-white">{plan.name}</div>
                <div className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">{plan.description}</div>
                <div className="inline-flex items-baseline mb-1 md:mb-2">
                  <span className="text-2xl md:text-3xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'Contacto' && <span className="text-xs md:text-sm text-gray-500 ml-1">/mes</span>}
                </div>
              </div>
              <ul className="text-xs md:text-sm text-gray-400 -mb-2 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 md:mt-6">
                <a className={`btn w-full text-xs md:text-sm ${plan.popular ? 'text-white bg-blue-600 hover:bg-blue-700' : 'text-white bg-gray-700 hover:bg-gray-600'}`} href="/contact">
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}

        </div>
         {/* Contact CTA - Adjusted text sizes for mobile */}
         <div className="text-center mt-8 md:mt-12">
             <p className="text-base md:text-lg text-gray-400">¿Listo para Transformar tu Interacción con los Clientes?</p>
             <a className="mt-4 text-lg inline-flex h-12 animate-shimmer items-center justify-center rounded-lg bg-[linear-gradient(110deg,#1C32BB,45%,#A0ABEA,55%,#1C32BB)] bg-[length:200%_100%] px-2 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" href="/contact">
               Contactanos
             </a>
         </div>
      </div>
    </section>
  );
}