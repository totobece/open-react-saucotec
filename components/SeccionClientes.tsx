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
        translateX: isMobile ? "-300vw" : "-200vw", // Ajustar el tamaño de la transición según el dispositivo
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
    <section id='clientes' className="scroll-section-outer bg-[#07112B] md:pb-20">  
      <div className={`max-w-full mx-auto px-2 relative ${isMobile ? 'text-center' : ''}`}></div>
      <div ref={triggerRef} className='max-w-full'>
        <div ref={sectionRef} className="scroll-section-inner ml-4">

          {/* Si no es mobile */}
          {!isMobile && (
            <>
              <div className="scroll-section">
                <motion.div className="cursor-pointer" whileHover={{ y: -10 }}>
                  <Image src={DuoRings} alt="duorings" className="w-[658px] left h-auto" />
                </motion.div>
                <motion.div className="cursor-pointer" whileHover={{ y: -10 }}>
                  <Image src={Nort} alt="nort grande" className=" w-[658px] left h-auto" />
                </motion.div>
              </div>

              <div className="scroll-section">
                <motion.div className="cursor-pointer" whileHover={{ y: -10 }}>
                  <Image src={Metalux} alt="duorings" className="w-[658px] left h-auto" />
                </motion.div>
                <motion.div className="cursor-pointer" whileHover={{ y: -10 }}>
                  <Image src={Ergonomia} alt="nortcliente" className=" w-[658px] left h-auto" />
                </motion.div>
              </div>

              <div className="scroll-section">
                <motion.div className="cursor-pointer" whileHover={{ y: -10 }}>
                  <Image src={EG} alt="duorings" className="w-[658px] left h-auto" />
                </motion.div>
                <motion.div className="cursor-pointer" whileHover={{ y: -10 }}>
                  <Image src={Politap} alt="nortcliente" className=" w-[658px] left h-auto" />
                </motion.div>
              </div>
            </>
          )}

          {/* Si es mobile */}
          {isMobile && (
            <>
              <div className="scroll-section">
                <motion.div className="cursor-pointer" whileHover={{ y: -10 }}>
                  <Image src={DuoRings} alt="duorings" className="w-[200%] left h-auto" />
                </motion.div>
              </div>

              <div className="scroll-section">
                <motion.div className="cursor-pointer" whileHover={{ y: -10 }}>
                  <Image src={Nort} alt="nort grande" className=" w-[200%] left h-auto" />
                </motion.div>
              </div>

              <div className="scroll-section">
                <motion.div className="cursor-pointer" whileHover={{ y: -10 }}>
                  <Image src={Metalux} alt="duorings" className="w-[200%] left h-auto" />
                </motion.div>
              </div>

              <div className="scroll-section">
                <motion.div className="cursor-pointer" whileHover={{ y: -10 }}>
                  <Image src={Ergonomia} alt="nortcliente" className=" w-[200%] left h-auto" />
                </motion.div>
              </div>

              <div className="scroll-section">
                <motion.div className="cursor-pointer" whileHover={{ y: -10 }}>
                  <Image src={EG} alt="duorings" className="w-[200%] left h-auto" />
                </motion.div>
              </div>

              <div className="scroll-section">
                <motion.div className="cursor-pointer" whileHover={{ y: -10 }}>
                  <Image src={Politap} alt="nortcliente" className=" w-[200%] left h-auto" />
                </motion.div>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
}
