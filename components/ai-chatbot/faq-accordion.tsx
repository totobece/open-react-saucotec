'use client'; // Required for useState

import React, { useState } from 'react';

const faqs = [
  {
    question: '¿Es legal utilizar un chatbot como Saucotec AI para ventas y consultas?',
    answer: 'Sí, es completamente legal. Saucotec AI cumple con las normativas vigentes sobre uso de tecnologías digitales y comunicación automatizada, siempre que se respeten las políticas de privacidad y consentimiento de los usuarios.',
  },
  {
    question: '¿El chatbot puede escuchar audios e interpretar imágenes?',
    answer: 'Sí, totalmente, entendemos que hoy en día, las personas se comunican mucho mediante audios debido a la gran cantidad de tareas que realizan en su rutina, por eso es fundamental que el chatbot tenga la capacidad de poder interpretarlos y responderlos. A las imágenes también las interpreta sin problemas.',
  },
  {
    question: '¿Cómo protege Saucotec AI la información personal de mis clientes?',
    answer: 'Saucotec AI utiliza encriptación avanzada y sigue estrictas políticas de protección de datos para asegurar que toda la información personal se maneje de manera segura y confidencial.',
  },
  {
    question: '¿Puedo personalizar el chatbot para que se adapte a la identidad de mi marca?',
    answer: 'Absolutamente. Saucotec AI permite personalizar respuestas, tono y flujo de interacción para que responda igual a un humano que no comete errores y se adapta a la forma de comunicar de tu marca.',
  },
  {
    question: '¿Qué sucede si excedo el límite de mensajes incluido en mi plan?',
    answer: 'Si excedes el límite de mensajes de tu plan, puedes optar por actualizar a un plan superior o adquirir conversaciones adicionales a un costo mínimo.',
  },
  {
    question: '¿Saucotec AI puede integrarse con otros sistemas que ya estoy utilizando?',
    answer: 'Sí, Saucotec AI ofrece integraciones flexibles con una variedad de plataformas, incluyendo sistemas de CRM, bases de datos de productos, sistemas de gestión interno y más.',
  },
  {
    question: '¿Qué tipo de soporte técnico ofrece Saucotec AI?',
    answer: 'Ofrecemos soporte técnico 24/7 a través de chat en vivo, correo electrónico y WhatsApp para garantizar que cualquier problema que enfrentes sea resuelto rápidamente.',
  },
  {
    question: '¿Puedo cancelar mi suscripción en cualquier momento?',
    answer: 'Sí, puedes solicitar la cancelación de tu suscripción en cualquier momento contactando a nuestro equipo de soporte. Creemos en la flexibilidad y queremos que te sientas cómodo con nuestro servicio.',
  },
];

const AccordionItem = ({ faq, index, openIndex, setOpenIndex }: { faq: typeof faqs[0], index: number, openIndex: number | null, setOpenIndex: (index: number | null) => void }) => {
  const isOpen = index === openIndex;

  const toggleAccordion = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="border-b border-gray-700">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full py-4 md:py-5 font-medium text-left text-sm md:text-base text-gray-300 hover:text-white"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={`faq-content-${index}`}
        >
          <span>{faq.question}</span>
          <svg
            className={`w-5 h-5 md:w-6 md:h-6 transform transition-transform duration-200 text-gray-500 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </h2>
      <div
        id={`faq-content-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
        aria-labelledby={`faq-heading-${index}`}
      >
        <div className="py-4 md:py-5 pt-0">
          <p className="text-xs md:text-sm text-gray-400">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};


export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-8 md:py-20 border-t border-gray-700 bg-[#07112B] px-4 sm:px-6 md:px-0">
      <div className="max-w-3xl mx-auto">
        <div className="text-center pb-6 md:pb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-white">Preguntas Frecuentes</h2>
        </div>

        <div className="divide-y divide-gray-700">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <p className="text-base md:text-lg text-gray-400">
            ¿Alguna otra consulta?{' '}
            <a href="/contact" className="text-blue-500 hover:underline">
              Contactanos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}