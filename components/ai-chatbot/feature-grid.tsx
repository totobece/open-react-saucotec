import React from 'react';
import Image from 'next/image'; // Import next/image

// Placeholder icons - consider replacing with actual icons if available
const CRMIcon = () => <svg className="w-10 h-10 mb-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;
const ChatbotIcon = () => <svg className="w-10 h-10 mb-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>;
const VentasIcon = () => <svg className="w-10 h-10 mb-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 11h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2zm7 4a2 2 0 100-4 2 2 0 000 4z"></path></svg>;
const AnaliticasIcon = () => <svg className="w-10 h-10 mb-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>;
const SeguridadIcon = () => <svg className="w-10 h-10 mb-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>;
const SoporteIcon = () => <svg className="w-10 h-10 mb-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;

const features = [
  { icon: <CRMIcon />, title: 'CRM', description: 'Todo en un solo lugar' },
  { icon: <ChatbotIcon />, title: 'Chatbot', description: 'Entrenado a medida' },
  { icon: <VentasIcon />, title: 'Ventas', description: 'Vende tus productos' },
  { icon: <AnaliticasIcon />, title: 'Analíticas', description: 'Mide las conversiones' },
  { icon: <SeguridadIcon />, title: 'Seguridad', description: 'Todos tus datos seguros' },
  { icon: <SoporteIcon />, title: 'Soporte', description: 'Te ayudamos 24/7' },
];

export default function FeatureGrid() {
  return (
    // Adjusted background, text colors
    <section className="relative py-12 md:py-20 bg-[#07112B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Items */}
          {/* Adjusted grid layout, card background, text colors */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none">

            {features.map((feature, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg" // Darker card background
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {feature.icon}
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">{feature.title}</h4>
                <p className="text-gray-400 text-center">{feature.description}</p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
