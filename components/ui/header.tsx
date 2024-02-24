'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileMenu from './mobile-menu';
import Image from 'next/image';
import SaucotecLogo from "../../public/images/SaucotecLogo-white-svg.svg";
import WPPlogo from "../../public/images/Free whatsapp white logo vector.svg.svg";
import { motion } from "framer-motion";
import SaucotecLogoDark from "../../public/images/SaucotecLogo.svg";

interface HeaderProps {
  pageType?: 'default' | 'dark';
}
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

};



const Header: React.FC<HeaderProps> = ({ pageType = 'default' }) => {
  const logo = pageType === 'dark' ? SaucotecLogoDark : SaucotecLogo;

  return (
    <header className="absolute w-full z-30">
    <div className="max-w-8xl mx-auto sm:px-6 relative">
      <div className="flex items-center justify-between h-40"> 
        <div className='w-40 xl:w-64 sm:w-48 flex items-center shrink-0 ml-16'> 
          <Link href="/" className="block" aria-label="Cruip">
            <Image
              priority
              src={logo}
              alt='saucotec-logo'
            />
          </Link>
        </div>

        <div className="md:hidden ml-4 flex items-center"> 
          <MobileMenu />
        </div>
        
        <div className='mr-20 hidden md:flex gap-5 justify-between items-center py-2.5 px-5 bg-white rounded-[40px] border-solid shadow-sm border-[0.81px] max-md:flex-wrap max-md:pl-5 max-w-2xl'
          data-aos="fade-up">
          <nav className="md:flex gap-7 flex:hidden justify-center">
            <ul className="flex gap-7" style={{ marginTop: '6px', marginLeft: '30px' }}>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link href="/nosotros" className='text-2xl text-blue-888'>
                  <motion.div whileHover={{ opacity: 0.7 }}>
                    Nosotros
                  </motion.div>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link href="/servicios" className='text-2xl text-blue-888'>
                  <motion.div whileHover={{ opacity: 0.7 }}>
                    Servicios
                  </motion.div>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link href="/clientes" className='text-2xl text-blue-888'>
                  <motion.div whileHover={{ opacity: 0.7 }}>
                    Clientes
                  </motion.div>
                </Link>
              </motion.li>
            </ul>
          </nav>
          <ul>
            <li>
              <div data-aos="fade up">
                <button onClick={scrollToContact} className='text-xl btn text-white bg-blue-888 hover:bg-sky-400 rounded-[40px]'>
                  Contactanos
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
