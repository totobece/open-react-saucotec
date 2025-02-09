'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Desktop from '@/public/images/DESKTOP.svg';
import Botones from '@/public/images/BOTONES.svg';
import Mobile from '@/public/images/MOBILE.svg';
import FotosMobile from '@/public/images/interfaces para mobile.png';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import Fondo from '@/public/images/Rectangle 22 (1).svg';
import {Link} from 'navigation';

import {useTranslations} from 'next-intl';


export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const t = useTranslations('HomePage');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('service-presentation');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#07112B] h-[110vh] w-full overflow-hidden">
      {/* Background container - moved to top */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image 
          src={Fondo} 
          alt="Fondo" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-[#07112B] to-transparent" />
      </div>

      {/* Main content - increased z-index */}
      <div className={`relative z-10 max-w-full mx-4 sm:px-6 ${isMobile ? 'text-center place-content-center' : 'text-left'}`}>
        <div className="max-w-full mx-auto px-4 lg:ml-16 pt-[100px] md:pt-32 lg:pt-64 flex z-10 relative">
          <div className="max-w-6xl container flex flex-col lg:pb-8">
            <div className="md:flex md:flex-col ">
              <h1 className={`text-4xl lg:text-6xl text-white`} data-aos="fade-up">
                {t("h1-1")}
                <br />
                {t('h1-2')}
              </h1>
              <Link href="/digital-products">
                <button className="w-60 lg:w-80 md:mt-4 btn p-[2px] relative hover:-translate-x-[-12px] transition duration-400">
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-purple-500 rounded-full mt-8" />
                  <div className="lg:w-80 w-60 leading-[1] text-lg btn px-8 py-2 bg-[#000F39] rounded-full relative group transition font-[300] h-12 mt-8 text-white">
                    {t('bt-1')}
                  </div>
                </button>
              </Link>
              <Link href="/digital-transformation">
                <button className="w-60 lg:w-80 btn p-[2px] text-white duration-50 relative hover:-translate-x-[-12px] transition">
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-purple-500 rounded-full mt-8" />
                  <div className="lg:w-80 w-60 leading-[1] text-lg btn px-8 py-2 bg-[#000F39] rounded-full relative group transition duration-200 font-[300] h-12 mt-8">
                    {t('bt-2')}
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {!isMobile && (
            <div className="max-w-full mx-20 px-4 sm:px-6 relative z-20">
              <CardContainer className="inter-var">
                <CardBody className="w-auto sm:w-[30rem] h-auto rounded-xl p-6">
                  <CardItem translateZ="160">
                    <Image
                      src={Desktop}
                      height="1000"
                      width="1000"
                      alt="thumbnail"
                      className="h-auto w-full rounded-xl"
                    />
                    <CardBody style={{ transform: 'translateY(-200px)' }}>
                      <CardItem translateZ="120">
                        <Image
                          src={Mobile}
                          height="500"
                          width="500"
                          alt="Mobile"
                          className="h-30 w-30 rounded-xl"
                        />
                      </CardItem>
                      <CardBody style={{ transform: 'translateY(-200px)' }}>
                        <CardItem translateZ="220">
                          <Image
                            src={Botones}
                            height={1000}
                            width={1000}
                            alt="Mobile"
                            className="h-30 w-30 rounded-xl"
                          />
                        </CardItem>
                      </CardBody>
                    </CardBody>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          )}
        </div>
      </div>

      {isMobile && (
        <div className="flex justify-center items-center z-20  mt-10 relative">
          <Image src={FotosMobile} alt="thumbnail" height={300} width={300} />
        </div>
      )}
    </section>
  );
}
