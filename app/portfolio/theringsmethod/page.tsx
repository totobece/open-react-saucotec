'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import FondoDuorings from '@/public/images/fondoduorings.png';
import LogoDuo from '@/public/images/logoduo1.png';
import Imagen1 from '@/public/images/imagen1duo.png';
import Imagen2 from '@/public/images/imagen2duo.png';
import Imagen3 from '@/public/images/imagen3duo.png';
import Imagen4 from '@/public/images/imagen4duo.png';
import Footer from '@/components/ui/footer';
import CelularDuorings from '@/public/images/celularduo.png';
import ContactFormNoBg from '@/components/ContactForm-NoBg';

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#110202]">
      <div className="h-screen w-full relative">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={FondoDuorings}
            alt="FondoNort"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="shadow-xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute top-48 left-32 flex flex-col items-start space-y-6" data-aos="fade-up">
            <h2 className="text-white text-2xl mb-4">Stories</h2>
            <div>
              <Image
                src={LogoDuo}
                alt="LogoNort"
                quality={100}
                width={100}
                height={100}
              />
            </div>
            <div className="relative flex">
              <h1 className="text-white text-5xl">
                  The #1 platform for <br />
                <span className="font-bold text-white">

                rings
                workouts, from home
                </span>

              </h1>
            </div>
          </div>
          <motion.div 
            className="absolute bottom-0 right-0 mr-8"
            initial={{ y: '100%', opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Image
              src={CelularDuorings}
              alt="CelularNort"
              quality={100}
              width={1300}
              height={1600}
            />
          </motion.div>
        </div>
      </div>

      <div className='h-[170vh] w-full relative flex justify-center py-20' data-aos="fade-up">
        <h1 className='text-white text-5xl font-bold text-center ' >
        The Rings Method is a platform designed in a <br />
        friendly way so that you can do your favorite <br />
        <span className="bg-[#58011D] rounded-[72px] text-white px-4" style={{ lineHeight: '1.9' }}>exercises from home.</span>
        </h1>
        <div className='absolute py-56'>
          <Image
            src={Imagen1}
            alt='Imagen1'
            quality={100}
            width={1600}
            height={1500}     
          />
        </div>
    </div>

      <div className="h-[80vh] w-full relative py-36" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="relative flex justify-between">
            <h1 className="text-white text-5xl font-bold">The challenge</h1>
            <div className='flex ml-40'>
              <h1 className="text-white text-2xl opacity-100">
              <span className='opacity-70'>We faced two main challenges when developing <br />
              the Duorings platform:
              </span>
              <br />
              <br />
              <ol className="list-decimal list-inside text-white">
                  <li>
                  Create a visually attractive interface that truly <br />
                  fits your brand identity. They had already come <br />
                  with an idea of ​​the design so we had to adapt <br />
                  to the situation.
                   
                  </li>
                  <br />
                  <br />
                  <li>
                  Create a comprehensive platform that would <br />
                  allow users to manage their routines and training <br />
                   times as easily as possible, without the need for <br />
                    external help.

                    
                  </li>
                  
                </ol>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[130vh] w-full relative flex justify-center py-10' data-aos="fade-up">
        <Image
          src={Imagen2}
          alt="Imagen3"
          quality={100}
          width={1600}
          height={1600}
          className='rounded-3xl'
        />
      </div>

      <div className="h-[100vh] w-full relative py-36" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="relative flex justify-between">
            <h1 className="text-white text-5xl font-bold ">A flexible and attractive design
            </h1>
            <div className='flex ml-40'>
              <h1 className="text-white text-2xl opacity-100">
              <span className='opacity-70'>We opted for a modular approach in UX  <br />
              design focusing on the reuse of components <br />
              and modules:

              </span>
              <br />
              <br />
              <ol className="list-decimal list-inside text-white">
                  <ul className='list-disc list-inside '>
                    <li>Creation of design components to ensure <br />
                      consistency in the style, interaction and <br />
                      functionality of the website.

                    </li>
                  </ul>
                  <br />
                  <br />

                  <ul className='list-disc list-inside '>
                    <li>We established a clear and coherent <br />
                      hierarchy of information, highlighting <br />
                      important elements so that they are <br />
                       accessible.

                    </li>
                  </ul>
                  <br />
                  <br />

                  <ul className='list-disc list-inside '>
                    <li>We implemented a responsive design <br />
                      to ensure an optimal experience on <br />
                       all devices and platforms.

                    </li>
                  </ul>
                  
                </ol>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[130vh] w-full relative flex justify-center space-x-4' data-aos="fade-up">
        <Image
          src={Imagen3}
          alt="Imagen3"
          quality={100}
          width={1300}
          height={1300}
          className='rounded-3xl'
        />
      </div>

      <div className="h-[170vh] w-full relative py-24" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="relative flex justify-between">
            <h1 className="text-white text-5xl font-bold">Key Functionalities</h1>
            <div className='flex ml-40'>
              <h1 className="text-white text-4xl opacity-80">
                <ol className="list-decimal list-inside">
                  <ul className="list-disc list-inside ml-6">
                    <br />
                    <li>User authentication and payments: Integration with Go High Level Platform.</li>
                  </ul>
                  <br />
                  <ul className="list-disc list-inside ml-6">
                    <br />
                    <li>Users and Databases.</li>
                  </ul>
                  <br />
                  <ul className="list-disc list-inside ml-6">
                    <br />
                    <li>Video and Course Database: CRM, Multimedia Content Management.</li>
                  </ul>
                  <br />
                  <ul className="list-disc list-inside ml-6">
                    <br />
                    <li>Data Backup and Recovery.</li>
                  </ul>
                  <br />
                  <ul className="list-disc list-inside ml-6">
                    <br />
                    <li>Weekly Workouts: There are daily and weekly workouts for users.</li>
                  </ul>
                  <br />
                  <ul className="list-disc list-inside ml-6">
                    <br />
                    <li>Video playback interface.</li>
                  </ul>
                  <br />
                  <ul className="list-disc list-inside ml-6">
                    <br />
                    <li>New Videos Section: Users can explore all the videos on the platform, along with new videos every week.</li>
                  </ul>
                  <br />
                  <ul className="list-disc list-inside ml-6">
                    <br />
                    <li>Training Routes: Exploration of predefined routes that guide users through structured training sessions.</li>
                  </ul>
                </ol>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[50vh] w-full relative py-10' data-aos="fade-up">
        <div className="container mx-auto">
          <div className="relative flex flex-col space-y-4">
            <h1 className="text-white text-5xl font-bold">Nico y Flor testimonial:</h1>
            <br />
            <br />
            <div className="flex">
              <h1 className="text-white text-4xl opacity-80">
                "Centralizing and digitizing information transforms company operations. The <br />
                system tailored to us by SaucoTec makes this possible." 
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[130vh] w-full relative py-24" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="relative flex justify-between">
            <h1 className="text-white text-5xl font-bold">We still <br />
              devoloping!</h1>
            <div className='flex ml-40'>
              <h1 className="text-white text-4xl ml-24">
              Though still in development, the Duorings platform promises an unforgettable user experience. But that's just the beginning. <br />
              <br />
               We're actively working on new features to enhance user enjoyment and training experiences.
              <br />
              <br />
              Some upcoming features include:
              <br />
              <br />
              <span className='opacity-80 text-2xl'>
                <ol className="list-decimal list-inside ">
                  <ul className="list-disc list-inside ml-6">
                    <br />
                    <li>Plan and Payment Management.</li>
                  </ul>
                    <ul className="list-disc list-inside ml-6">
                      <br />
                      <li>User Tracking.</li>
                    </ul>
                    <ul className="list-disc list-inside ml-6">
                      <br />
                      <li>User experience gamification.</li>
                    </ul>
                    <ul className="list-disc list-inside ml-6">
                      <br />
                      <li>Push notification (mobile).</li>
                    </ul>
                    <ul className="list-disc list-inside ml-6">
                      <br />
                      <li>Feedback at the end of training.</li>
                    </ul>
                    <ul className="list-disc list-inside ml-6">
                      <br />
                      <li>Personalization of Workouts by Filters.</li>
                    </ul>
                    <ul className="list-disc list-inside ml-6">
                      <br />
                      <li>Challenges between friends.</li>
                    </ul>
                    <ul className="list-disc list-inside ml-6">
                      <br />
                      <li>Video Library.</li>
                    </ul>
                </ol>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='relative flex justify-center' data-aos="fade-up">
        <Image
          src={Imagen4}
          alt="Imagen5"
          quality={100}
          width={1744}
          height={1253}
          className='rounded-3xl'
        />
      </div>
      <ContactFormNoBg/>
      <Footer />
    </section>
  );
};

export default Page;
