import React from 'react';
import Image from 'next/image';

export default function CRMandAnalytics() {
  return (
    <section className="bg-gray-900 py-8 md:py-20 border-t border-gray-700 px-4 sm:px-6 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="py-8 md:py-20">

          {/* Section header - Adjusted text sizes for mobile */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16">
             <p className="text-lg md:text-xl text-gray-400 mb-2">Toma el control</p>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4 text-white">Contactos y Analíticas</h2>
            <p className="text-base md:text-xl text-gray-400">
              Los contactos generados a través de WhatsApp, Instagram o Facebook se guardan automáticamente en el CRM. Accede a analíticas filtrables para evaluar métricas clave de tu negocio.
            </p>
          </div>

          {/* Images - Improved responsive display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div className="flex justify-center" data-aos="fade-up">
              <Image
                src="/images/crm-contacts.png"
                alt="CRM Contacts List"
                width={600}
                height={400}
                className="rounded shadow-lg w-full h-auto"
              />
            </div>
            <div className="flex justify-center" data-aos="fade-up" data-aos-delay="100">
              <Image
                src="/images/analytics-dashboard.png"
                alt="Analytics Dashboard"
                width={600}
                height={400}
                className="rounded shadow-lg w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}