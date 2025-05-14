import React from 'react';
import Image from 'next/image'; // Import next/image
import Footer from '@/components/ui/footer'; // Import Footer

// Import components
import FeatureGrid from '@/components/ai-chatbot/feature-grid';
import IntegrationsCarousel from '@/components/ai-chatbot/integrations-carousel';
import WhatIsAIChatbot from '@/components/ai-chatbot/what-is-ai-chatbot';
import WhatCanAIChatbotDo from '@/components/ai-chatbot/what-can-ai-chatbot-do';
import ComparisonSection from '@/components/ai-chatbot/comparison-section';
import HowItWorksSteps from '@/components/ai-chatbot/how-it-works-steps';
import CRMandAnalytics from '@/components/ai-chatbot/crm-and-analytics';
import AIChatbotBenefits from '@/components/ai-chatbot/ai-chatbot-benefits';
import PricingPlans from '@/components/ai-chatbot/pricing-plans';
import FAQAccordion from '@/components/ai-chatbot/faq-accordion';

export default function AIChatbotPage() {
  return (
    // Apply dark background and text color defaults
    <div className="flex flex-col min-h-screen overflow-hidden bg-[#07112B] text-gray-300">
      {/* Header is likely handled by the main layout */}

      <main className="flex-grow">
        {/* Hero Section */}
        {/* Adjusted padding, text colors */}
        <section className="relative pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-12 pb-12 md:pt-16 md:pb-20">

              {/* Section header - Adjusted text colors */}
              <div className="text-center pb-12 md:pb-16">
                 <p className="text-xl text-gray-400 mb-4">Chatbot IA para WhatsApp, Instagram y Facebook</p>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-white" data-aos="zoom-y-out">
                  Saucotec AI: Tu asistente de ventas automatizado
                </h1>
                <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-400 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                    Descubre Saucotec AI: el chatbot que automatiza ventas, aumenta ingresos y mejora la satisfacción del cliente. Te asistimos en cada paso de la implementación.
                  </p>
                  {/* Button styles adjusted for dark mode */}
                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                    <div className="mb-4 sm:mb-0 sm:mr-4">
                      {/* Primary button style - most prominent */}
                      <a className="text-lg inline-flex h-12 animate-shimmer items-center justify-center rounded-lg bg-[linear-gradient(110deg,#1C32BB,45%,#A0ABEA,55%,#1C32BB)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" 
                      href="/contact"> 
                        Contactar
                      </a>
                    </div>
                    <div className="mb-4 sm:mb-0 sm:mr-4">
                      {/* Secondary button style - medium prominence */}
                      <a className="text-lg inline-flex h-12  items-center justify-center rounded-lg bg-[linear-gradient(110deg,#2A3A5A,45%,#4A5A7A,55%,#2A3A5A)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" 
                      href="https://calendly.com/ignacioacasalbritos/30min" target="_blank" rel="noopener noreferrer"> 
                        Ver Demo
                      </a>
                    </div>
{/*                     <div>
                      Tertiary button style - least prominence
                      <a className="text-lg inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-gray-500 bg-[linear-gradient(110deg,#1A2030,45%,#2A3040,55%,#1A2030)] bg-[length:200%_100%] px-6 font-medium text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" 
                      href="#0"> 
                        Video
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Hero image - Updated src and using next/image */}
               <div>
                 <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
                   <div className="flex flex-col justify-center">
                     {/* Use next/image, assuming image is in public/images */}
                     <Image 
                       className="mx-auto rounded shadow-lg" 
                       src="/images/chatbot-hero.webp" // Updated path based on file structure
                       width={768} 
                       height={432} 
                       alt="Saucotec AI Chatbot Hero" 
                       priority // Load image sooner
                     />
                   </div>
                 </div>
               </div>

            </div>
          </div>
        </section>

        {/* Introduction Section - Adjusted text colors, border, button */}
        <section className="py-8 md:py-12 border-t border-gray-700"> 
           <div className="max-w-6xl mx-auto px-4 sm:px-6">
             <div className="py-2 md:py-4">

               {/* Section header - Adjusted text colors */}
               <div className="max-w-3xl mx-auto text-center pb-4">
             <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white">Chatbot con Inteligencia Artificial</h2>
             <p className="text-xl text-gray-400">
               ¿Abrumado por mensajes sin responder? Nuestro Chatbot con IA asesora a tus clientes en WhatsApp, Instagram y Facebook. Escucha audios, lee mensajes y responde, asegurando excelente atención y evitando ventas perdidas. Saucotec AI automatiza las ventas de tus productos y servicios.
             </p>
             <div className="mt-5">
               {/* Primary button style */}
               <a className="text-lg inline-flex h-12 animate-shimmer items-center justify-center rounded-lg bg-[linear-gradient(110deg,#1C32BB,45%,#A0ABEA,55%,#1C32BB)] bg-[length:200%_100%] px-2 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" 
               href="https://calendly.com/ignacioacasalbritos/30min" target="_blank" rel="noopener noreferrer"> 
                 Agendar Reunión
               </a>
             </div>
               </div>

             </div>
           </div>
         </section>

        {/* Feature Grid Section */}
        <FeatureGrid />

        {/* Integrations Carousel Section */}
        <IntegrationsCarousel />

        {/* What is Saucotec AI Section */}
        <WhatIsAIChatbot />

        {/* What Can Saucotec AI Do Section */}
        <WhatCanAIChatbotDo />

        {/* Comparison Section */}
        <ComparisonSection />

        {/* How It Works Section */}
        <HowItWorksSteps />

        {/* CRM and Analytics Section */}
        {/* <CRMandAnalytics /> */}

        {/* Benefits Section */}
        <AIChatbotBenefits />

        {/* Pricing Section */}
        <PricingPlans />

        {/* FAQ Section */}
        <FAQAccordion />

      </main>

      {/* Add Footer */}
      <Footer />
    </div>
  );
}
