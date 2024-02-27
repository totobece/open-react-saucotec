'use client';
import React , { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SaucotecLogo from '../../public/images/SaucotecLogo-white-svg.svg';
import SaucotecLogoDark from '../../public/images/SaucotecLogo.svg';
import MobileMenu from './mobile-menu';
import { Button } from './moving-border';
import Navbar from './nav-bar';
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

interface HeaderProps {
  pageType?: 'default' | 'dark';
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
const scrollToNosotros = () => {
  const NosotrosSection = document.getElementById('nosotros');

  if (NosotrosSection) {
    NosotrosSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header: React.FC<HeaderProps> = ({ pageType = 'default', }) => {
  const [active, setActive] = useState<string | null>(null);
  const logo = pageType === 'dark' ? SaucotecLogoDark : SaucotecLogo;

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-8xl mx-auto sm:px-6 relative">
        <div className="flex items-center justify-between h-20 sm:h-36 md:h-34">
   
          <div className="w-40 xl:w-64 sm:w-48 flex items-center shrink-0 ml-16 md:ml-8 lg:ml-16">
            <Link href="/" className="block" aria-label="Cruip">
              <Image priority src={logo} alt="saucotec-logo" />
            </Link>
          </div>
   
          <div className="md:hidden ml-4 flex items-center">
            
            <MobileMenu />
          
          </div>

          <nav className="hidden md:flex items-center gap-14 justify-between px-6 bg-white rounded-[40px] border-solid shadow-sm border-[0.81px] max-w-2xl h-20 ">
            <ul className="flex gap-7 text-2xl">
                <Menu setActive={setActive}>
                      <MenuItem setActive={setActive} active={active} item="Servicios">
                  <div className="flex flex-col space-y-4 text-xl">
                    <HoveredLink href="/digital-transformation">Transformación digital</HoveredLink>
                    <HoveredLink href="/digital-products">Productos digitales</HoveredLink>
                  </div>
                </MenuItem>
                  
                <button onClick={scrollToNosotros} className='flex text-black text-xl'> 
                    Nosotros
                  </button>
                  <a href="/clientes" className='flex text-black text-xl mt-0'>
                    Clientes
                  </a>

                </Menu>
             
            </ul>
                  <button 
                    className=" text-xl inline-flex h-12 animate-shimmer items-center justify-center rounded-[40px] border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 "
                    onClick={scrollToContact}
                    >
                      Contactanos
                </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
