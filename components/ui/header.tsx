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

const Header: React.FC<HeaderProps> = ({ pageType = 'default' }) => {
  const logo = pageType === 'dark' ? SaucotecLogoDark : SaucotecLogo;

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="flex items-center justify-between h-40">
          <div className="shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Cruip">
              <div className='w-64 h-20 fill-current '>
                <Image
                  priority
                  src={logo}
                  alt='saucotec-logo'
                />
              </div>
            </Link>
          </div>

          <div className="md:hidden">
            <MobileMenu />
          </div>

          <div className='hidden md:flex gap-5 justify-between items-center py-2.5 px-5 bg-white rounded-[40px] border-solid shadow-sm border-[0.81px] min-w-[562px] h-[67px] max-md:flex-wrap max-md:pl-5 max-md:max-w-full mt-[-20px]'
            data-aos="fade-up">
            <nav className="flex-grow">
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
                <Link href="https://api.whatsapp.com/send?phone=5491131500591&text=Hola,%20quisiera%20saber%20más%20sobre%20los%20servicios%20de%20SaucoTec." className="btn-sm text-white bg-blue-888 ml-3 flex items-center rounded-[30px] text-xl" target='_blank'>
                  <Image
                    src={WPPlogo}
                    alt="WhatsApp Logo"
                    className="w-5 h-7 mr-2"
                    style={{ transform: 'translateY(-1px)' }}
                  />
                  <span className="flex items-center">Contáctanos</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
