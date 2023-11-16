import Image from 'next/image'
import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'
import Nort from '@/public/images/nort.png'
import Politap from '@/public/images/politap (1).jpg'
import Energia from '@/public/images/energia.jpg'

export default function Testimonials() {
  return (
    <section id='testimonios'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-light mb-4">lo que piensan quienes trabajan con nosotros</h2>
            <p className="text-2xl text-gray-800">no te quedes sólo con nuestra palabra</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">


            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-blue-998 rounded-2xl" data-aos="fade-up">
              <div>
              <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  
                </div>
              </div>
                <blockquote className="text-lg text-gray-50 justify tracking-[0.05em] grow italic" style={{ fontFamily: 'helvetica, sans-serif' }}>Centralizar y digitalizar la información transforma las operaciones de la empresa. Estamos seguros de que toda la información está ahí y en ninguna otra parte. Stock, ventas, entregas, deudas, en el celular. <><br /></>El sistema hecho a nuestra medida por SaucoTec hace esto posible. <br /><br /></blockquote>
                <div className="flex justify-center items-center">
                <Image className="rounded justify-center" src={Nort} width={300} height={300} alt="Testimonial 01" />
                </div>
              <div className="text-gray-50 font-medium mt-6 pt-5 border-t border-gray-700">
          
                <cite className="text-gray-50 not-italic">Cesar Cabrera</cite> - <a className="text-blue-600 hover:text-slate-50 transition duration-150 ease-in-out" href="https://www.nort-online.com/" target="_blank">Nort Revestimientos</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-blue-998 rounded-2xl" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  
                </div>
              </div>
              <blockquote className="text-lg text-gray-50 tracking-[0.05em] grow italic" style={{ fontFamily: 'helvetica, sans-serif' }}>En Politap teníamos un déficit en la accesibilidad y eficiencia del proceso de venta. Desde SaucoTec supieron cómo desarrollar una solución que se integre perfectamente a nuestro sistema logrando agilizar nuestras operaciones.<br /><br /></blockquote>
              <div className="flex justify-center items-center">
                <Image className="rounded justify-center" src={Politap} width={300} height={300} alt="Testimonial 01" />
                </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-50 not-italic">Pedro Rossi</cite> - <a className="text-blue-600 hover:text-gray-200 transition duration-150 ease-in-out" href="/">PoliTap</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-blue-998 rounded-2xl" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                  
                </div>
              </div>
              <blockquote className="text-lg text-gray-50 tracking-[0.05em] grow italic" style={{ fontFamily: 'helvetica, sans-serif' }}>Energía Global es una empresa con una estructura compleja y extensa. Trabajar con SaucoTec ha resultado en excelentes logros para nosotros. La personalización de soluciones y su cercanía los diferencia, sabemos que siempre están dispuestos a ayudarnos ante cualquier requerimiento.<br /><br /></blockquote>
              <div className="flex justify-center items-center">
                <Image className="rounded justify-center" src={Energia} width={300} height={300} alt="Testimonial 01" />
                </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-50 not-italic">Nicolas Albertoni</cite> - <a className="text-blue-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.energiaglobal.com.ar/" target="_blank">Energía Global</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
