'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import FondoNort from '@/public/images/fondonort2.svg';
import LogoNort from '@/public/images/logonortcasoexito.png';
import Imagen1 from '@/public/images/imagen1nort.png';
import Imagen3 from '@/public/images/imagen3nort.svg';
import Imagen4 from '@/public/images/imagen4nort.png';
import Imagen5 from '@/public/images/imagen5nort.svg';
import Footer from '@/components/ui/footer';
import CelularNort from '@/public/images/celunort (1).png';
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
    <section className="bg-[#1B1717]">
      <div className="h-screen w-full relative">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={FondoNort}
            alt="FondoNort"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="shadow-xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute top-48 left-32 flex flex-col items-start space-y-4" data-aos="fade-up">
            <h2 className="text-white text-2xl mb-4">Stories</h2>
            <div>
              <Image
                src={LogoNort}
                alt="LogoNort"
                quality={100}
                width={100}
                height={100}
              />
            </div>
            <div className="relative flex">
              <h1 className="text-white text-5xl">
                <span className="font-bold text-white">
                  Digital Transformation <br />
                  with Nort Revestimientos: <br />
                </span>
                a complete digitalization <br />
                story.
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
              src={CelularNort}
              alt="CelularNort"
              quality={100}
              width={1300}
              height={1600}
            />
          </motion.div>
        </div>
      </div>

      <div className='h-screen w-full relative' data-aos="fade-up">
        <div className='absolute right-0 my-20'>
          <Image
            src={Imagen1}
            alt='Imagen1'
            quality={100}
            width={1100}
            height={1100}     
          />
        </div>
    </div>

      <div className="h-[80vh] w-full relative py-24" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="relative flex justify-between">
            <h1 className="text-white text-5xl font-bold">The challenge</h1>
            <div className='flex ml-40'>
              <h1 className="text-white text-4xl opacity-80">
                Digitalize processes to enhance control and <br />
                operational effectiveness.
                <br />
                <br />
                They approached Saucotec with a clear need: to <br />
                digitalize their processes to increase control and <br />
                operational effectiveness. 
                <br />
                <br />
                The company sought a comprehensive solution to <br />
                optimize their processes and enhance their <br />
                competitiveness.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='h-screen w-full relative flex justify-center space-x-4' data-aos="fade-up">
        <Image
          src={Imagen3}
          alt="Imagen3"
          quality={100}
          width={1500}
          height={100}
          className='rounded-3xl'
        />
      </div>

      <div className="h-[150vh] w-full relative py-24" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="relative flex flex-col space-y-4">
            <h1 className="text-white text-5xl font-bold">Our Approach</h1>
            <br />
            <br />
            <div className="flex">
              <h1 className="text-white text-4xl opacity-80">
                We divided the process into four stages: <br />
                <br />
                <ol className="list-decimal list-inside">
                  <li>
                    Analysis of Processes and Needs
                    <ul className="list-disc list-inside ml-6">
                      <br />
                      <li>Conducted a thorough analysis of Nort's operations.</li>
                      <li>Identified roles and their specific challenges.</li>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Solution Proposal
                    <ul className="list-disc list-inside ml-6">
                      <br />
                      <li>Presented a proposal with essential modules and functionalities based on our analysis.</li>
                      <li>Included tools for data collection, integrated applications, data analysis, and security.</li>
                    </ul>
                  </li>
                  <br />
                  <li>
                    System Development
                    <ul className="list-disc list-inside ml-6">
                      <br />
                      <li>Began development after system approval, maintaining constant communication.</li>
                      <li>Showed progress steps for feedback and validation.</li>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Implementation and Training
                    <ul className="list-disc list-inside ml-6">
                      <br />
                      <li>Planned and executed the implementation day, presenting the system and training users, including remote users.</li>
                      <li>Configured and verified system usability with practical tests.</li>
                    </ul>
                  </li>
                </ol>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='h-screen w-full relative flex justify-center space-x-4' data-aos="fade-up">
        <Image
          src={Imagen4}
          alt="Imagen4"
          quality={100}
          width={1550}
          height={100}
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
                    <li>Automatic Inventory Control: Streamlined management of stock levels.</li>
                  </ul>
                  <br />
                  <ul className="list-disc list-inside ml-6">
                    <br />
                    <li>Current Account Management: Efficient handling of customer accounts and finances.</li>
                  </ul>
                  <br />
                  <ul className="list-disc list-inside ml-6">
                    <br />
                    <li>Personnel Management: Simplified staff administration.</li>
                  </ul>
                  <br />
                  <ul className="list-disc list-inside ml-6">
                    <br />
                    <li>Cash and Due Date Management: Comprehensive tracking of cash flow and payments.</li>
                  </ul>
                  <br />
                  <ul className="list-disc list-inside ml-6">
                    <br />
                    <li>Shipping and Delivery Management: Coordinated logistics for shipping.</li>
                  </ul>
                  <br />
                  <ul className="list-disc list-inside ml-6">
                    <br />
                    <li>Transport Shipments: Organized transport logistics.</li>
                  </ul>
                  <br />
                  <ul className="list-disc list-inside ml-6">
                    <br />
                    <li>Production Process Management: Enhanced control of manufacturing.</li>
                  </ul>
                  <br />
                  <ul className="list-disc list-inside ml-6">
                    <br />
                    <li>Massive Price Control and Increase: Flexible pricing adjustments on a large scale.</li>
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
            <h1 className="text-white text-5xl font-bold">Cesar Cabrera, Nort Revestimientos owner:</h1>
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

      <div className="h-[50vh] w-full relative py-6" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="relative flex justify-between">
            <h1 className="text-white text-5xl font-bold">The result</h1>
            <div className='flex ml-40'>
              <h1 className="text-white text-4xl opacity-80">
                After two months of development, the system was <br />
                successfully implemented and continues to improve. <br />
                Nort has optimized their operations, enhancing <br />
                control and effectiveness. Today, our system <br />
                supports Nort in every stage, including international <br />
                expansion.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[150vh] w-full relative flex justify-center' data-aos="fade-up">
        <Image
          src={Imagen5}
          alt="Imagen5"
          quality={100}
          width={1550}
          height={500}
          className='rounded-3xl'
        />
      </div>
      <ContactFormNoBg/>
      <Footer />
    </section>
  );
};

export default Page;
