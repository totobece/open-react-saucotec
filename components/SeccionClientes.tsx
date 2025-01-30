'use client'
import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
import Nort from '@/public/images/NORT cliente.png';
import DuoRings from '@/public/images/DUO RINGS cliente.png';
import Politap from '@/public/images/POLITAP cliente.png';
import Ergonomia from '@/public/images/ERGONOMÍA cliente.png';
import Metalux from '@/public/images/METALUX cliente.png';
import EG from '@/public/images/EG cliente.png';
import { motion } from 'framer-motion';

export default function Zigzag() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: isMobile ? "-600vw" : "-200vw", // Ajustar el tamaño de la transición según el dispositivo
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1200 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, [isMobile]); // Asegúrate de que se actualice cuando cambie la variable isMobile

  return (
    <section id='clientes' className="max-w-full scroll-section-outer bg-[#07112B] pl-2 md:pl-0 md:pb-20 overflow-hidden">  
  <div ref={triggerRef} className='w-full'>
    <div ref={sectionRef} className="w-full scroll-section-inner flex">
      {!isMobile && (
        <>
          <div className="scroll-section w-screen flex flex-row justify-center px-0 gap-24">
            <motion.div className="cursor-pointer w-[40%]" whileHover={{ y: -10 }}>
              <Image 
                src={DuoRings} 
                alt="duorings" 
                className="w-full h-auto object-contain"
              />
            </motion.div>
            <motion.div className="cursor-pointer w-[40%]" whileHover={{ y: -10 }}>
              <Image 
                src={Nort} 
                alt="nort grande" 
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>

          <div className="scroll-section w-screen flex flex-row justify-center px-0 gap-24">
            <motion.div className="cursor-pointer w-[40%]" whileHover={{ y: -10 }}>
              <Image 
                src={Metalux} 
                alt="duorings" 
                className="w-full h-auto object-contain"
              />
            </motion.div>
            <motion.div className="cursor-pointer w-[40%]" whileHover={{ y: -10 }}>
              <Image 
                src={Ergonomia} 
                alt="nort grande" 
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>

          <div className="scroll-section w-screen flex flex-row justify-center px-0 gap-24">
            <motion.div className="cursor-pointer w-[40%]" whileHover={{ y: -10 }}>
              <Image 
                src={EG} 
                alt="duorings" 
                className="w-full h-auto object-contain"
              />
            </motion.div>
            <motion.div className="cursor-pointer w-[40%]" whileHover={{ y: -10 }}>
              <Image 
                src={Politap} 
                alt="nort grande" 
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
            </>
          )}

          {/* Si es mobile */}
          {isMobile && (
  <>
    <div className="scroll-section min-w-[100vw] h-screen flex items-center justify-center px-0">
      <motion.div className="cursor-pointer w-[150vw]" whileHover={{ y: -10 }}>
        <Image 
          src={DuoRings} 
          alt="duorings" 
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </div>

    <div className="scroll-section min-w-[100vw] h-screen flex items-center justify-center px-0">
      <motion.div className="cursor-pointer w-[150vw]" whileHover={{ y: -10 }}>
        <Image 
          src={Nort} 
          alt="nort" 
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </div>

    <div className="scroll-section min-w-[100vw] h-screen flex items-center justify-center px-0">
      <motion.div className="cursor-pointer w-[150vw]" whileHover={{ y: -10 }}>
        <Image 
          src={Metalux} 
          alt="metalux" 
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </div>

    <div className="scroll-section min-w-[100vw] h-screen flex items-center justify-center px-0">
      <motion.div className="cursor-pointer w-[150vw]" whileHover={{ y: -10 }}>
        <Image 
          src={Ergonomia} 
          alt="ergonomia" 
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </div>

    <div className="scroll-section min-w-[100vw] h-screen flex items-center justify-center px-0">
      <motion.div className="cursor-pointer w-[150vw]" whileHover={{ y: -10 }}>
        <Image 
          src={EG} 
          alt="eg" 
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </div>

    <div className="scroll-section min-w-[100vw] h-screen flex items-center justify-center px-0">
      <motion.div className="cursor-pointer w-[150vw]" whileHover={{ y: -10 }}>
        <Image 
          src={Politap} 
          alt="politap" 
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </div>
  </>
)}

        </div>
      </div>
    </section>
  );
}
