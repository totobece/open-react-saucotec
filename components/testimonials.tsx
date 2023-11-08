import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section id='testimonios'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">no tomes nuestra palabra</h2>
            <p className="text-xl text-gray-800">lo que piensan quienes trabajaron con nosotros</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-blue-888 rounded-2xl" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                  
                </div>
              </div>
              <blockquote className="text-lg text-gray-200 tracking-[0.05em] grow italic" style={{ fontFamily: 'helvetica, sans-serif' }}>Energía Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Nicolas Albertoni</cite> - <a className="text-blue-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.energiaglobal.com.ar/" target="_blank">Energía Global</a>
              </div>
            </div>

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-blue-888 rounded-2xl" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  
                </div>
              </div>
              <blockquote className="text-lg text-gray-200 tracking-[0.05em] grow italic" style={{ fontFamily: 'helvetica, sans-serif' }}>Los resultados que obtuvimos al trabajar con SaucoTec son excelentes. <br></br>La diferencia está en que todo está hecho a la medida de nuestra empresa. Sabemos que ante cualquier necesidad, ellos están ahí para ayudarnos.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Cesar Cabrera</cite> - <a className="text-blue-600 hover:text-slate-50 transition duration-150 ease-in-out" href="https://www.nort-online.com/" target="_blank">Nort Revestimientos</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-blue-888 rounded-2xl" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  
                </div>
              </div>
              <blockquote className="text-lg text-gray-200 tracking-[0.05em] grow italic" style={{ fontFamily: 'helvetica, sans-serif' }}>En Politap teníamos un déficit en la accesibilidad y eficiencia del proceso de venta. Desde SaucoTec supieron cómo desarrollar una solución que se integre perfectamente a nuestro sistema logrando agilizar nuestras operaciones.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Pedro Rossi</cite> - <a className="text-blue-600 hover:text-gray-200 transition duration-150 ease-in-out" href="/">PoliTap</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
