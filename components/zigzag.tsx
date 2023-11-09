import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/*<div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">sacame esto negrito porfa</div>*/}
            <h1 className="h2 mb-4 text-5xl md:text-6xl lg:text-6xl">ni más. ni menos. </h1>
            <p className="text-gray-800 text-4xl md:text-6xl lg:text-6xl tracking-[0.1em]">lo hacemos a tu medida</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={550} height={0} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-bebas text-2xl md:text-3xl lg:text-3xl text-blue-600 mb-2">lo adaptamos a vos</div>
                  <h3 className="h3 mb-3 text-3xl md:text-4xl lg:text-4xl">tus procesos, digitalizados</h3>
                  <div className="font-bebas text-xl md:text-2xl lg:text-2xl mb-2" style={{ fontFamily: 'helvetica, sans-serif' }}>Simplificamos tus operaciones, llevando tus procesos al mundo digital de manera eficiente y accesible.</div>
                  
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={550} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-2xl md:text-3xl lg:text-3xl text-blue-600 mb-2">a control remoto</div>
                  <h3 className="h3 text-3xl md:text-4xl lg:text-4xl mb-3">control y gestión desde donde estés</h3>
                  <div className="font-bebas text-xl md:text-2xl lg:text-2xl mb-2" style={{ fontFamily: 'helvetica, sans-serif' }}>Hacemos posible la supervisión desde cualquier lugar, liberándote para abordar temas determinantes en lugar de perder tiempo en la búsqueda de información.</div>
                  
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={550} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-2xl md:text-3xl lg:text-3xl text-blue-600 mb-2">revolucionamos la accesibilidad</div>
                  <h3 className="h3 mb-3 text-3xl md:text-4xl lg:text-4xl">herramientas que vos entendés</h3>
                  <div className="font-bebas text-xl md:text-2xl lg:text-2xl mb-2" style={{ fontFamily: 'helvetica, sans-serif' }}>Hacemos accesible lo complejo. Nuestras herramientas personalizadas son la clave para lograr sistemas extremadamente amigables, diferenciándonos de la competencia.</div>
                  
                </div>
              </div>
            </div>

            {/* 4th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={550} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-2xl md:text-3xl lg:text-3xl text-blue-600 mb-2">la tecnología avanza</div>
                  <h3 className="h3 mb-3 text-3xl md:text-4xl lg:text-4xl">más personalización, menor costo</h3>
                  <div className="font-bebas text-xl md:text-2xl lg:text-2xl mb-2" style={{ fontFamily: 'helvetica, sans-serif' }}>La tecnología de punta es nuestro aliado para agilizar la personalización y reducir los costos en el desarrollo de sistemas hechos a medida.</div>
                  {/*olvidate de los papeles, documentos digitalizados los datos no mienten movimientos registrados*/}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
