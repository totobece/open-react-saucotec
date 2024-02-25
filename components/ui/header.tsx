'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SaucotecLogo from '../../public/images/SaucotecLogo-white-svg.svg';
import SaucotecLogoDark from '../../public/images/SaucotecLogo.svg';
import MobileMenu from './mobile-menu';

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
        <div className="flex items-center justify-between h-40 sm:h-24 md:h-32">
          {/* Logo and Mobile Menu */}
          <div className="w-40 xl:w-64 sm:w-48 flex items-center shrink-0 ml-16 md:ml-8 lg:ml-16">
            <Link href="/" className="block" aria-label="Cruip">
              <Image priority src={logo} alt="saucotec-logo" />
            </Link>
          </div>
          {/* Mobile menu trigger */}
          <div className="md:hidden ml-4 flex items-center">
            <MobileMenu />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-14 justify-between px-6 bg-white rounded-[40px] border-solid shadow-sm border-[0.81px] max-w-2xl h-20 ">
            <ul className="flex gap-7 text-2xl">
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <Link href="/nosotros" className="text-blue-888">
                  <motion.div whileHover={{ opacity: 0.7 }}>Nosotros</motion.div>
                </Link>
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <Link href="/servicios" className="text-blue-888">
                  <motion.div whileHover={{ opacity: 0.7 }}>Servicios</motion.div>
                </Link>
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <Link href="/clientes" className="text-blue-888">
                  <motion.div whileHover={{ opacity: 0.7 }}>Clientes</motion.div>
                </Link>
              </motion.li>
            </ul>
            <button onClick={scrollToContact} className="text-xl btn text-white bg-blue-888 hover:bg-sky-400 rounded-[40px] px-4 py-4 mt-4 mb-4">Contactanos</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

