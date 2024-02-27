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
                  <HoveredLink href="/web-dev">Transformación digital</HoveredLink>
                  <HoveredLink href="/interface-design">Productos digitales</HoveredLink>
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
            <Button onClick={scrollToContact} borderRadius='1.75rem' className=' dark:bg-blue-888 dark:text-white border-neutral-200 dark:border-white text-xl'>
              Contactanos
               </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
