'use client';
import React, { useState } from 'react';
import { Link } from 'navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SaucotecLogo from '../../public/images/SaucotecLogo-white-svg.svg';
import SaucotecLogoDark from '../../public/images/SaucotecLogo.svg';
import MobileMenu from './mobile-menu';
import { Button } from './moving-border';
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdLanguage } from 'react-icons/md'; // Menú de Idiomas

// Definimos un tipo para los idiomas permitidos
type Locale = "en" | "es";

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToClientes = () => {
  const ClientesSection = document.getElementById('clientes');

  if (ClientesSection) {
    ClientesSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para abrir/cerrar el dropdown
  const [selectedLanguage, setSelectedLanguage] = useState<Locale>('en'); // Estado para el idioma
  const t = useTranslations('Navbar');
  const router = useRouter(); 
  const pathname = usePathname();

  const handleLanguageChange = (locale: Locale) => {
    router.push(pathname, { locale });
    setSelectedLanguage(locale);
    setIsDropdownOpen(false); // Cerrar el dropdown al seleccionar un idioma
  };

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-8xl mx-auto sm:px-6 relative">
        <div className="flex items-center justify-between h-16 sm:h-36 md:h-34">
          <div className="w-40 xl:w-64 sm:w-48 flex items-center shrink-0 ml-16 md:ml-8 lg:ml-16">
            <Link href="/" className="block" aria-label="Cruip">
              <Image priority src={SaucotecLogo} alt="saucotec-logo" />
            </Link>
          </div>
   
          <div className="md:hidden ml-4 flex items-center">
            <MobileMenu />
          </div>

          <nav className="hidden md:flex items-center gap-2 justify-between px-2 bg-white rounded-[40px] border-solid shadow-sm border-[0.81px] max-w-2xl h-16 ">
            <ul style={{ transform: 'translateY(-10px)' }} className="flex gap-1 text-2xl">
              <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item={t("MenuItem")}>
                  <div className="flex flex-col space-y-4 text-xl">
                    <HoveredLink href="/digital-transformation">{t("HoveredLink1")}</HoveredLink>
                    <HoveredLink href="/digital-products">{t("HoveredLink2")}</HoveredLink>
                  </div>
                </MenuItem>
                <Link href="/about">  
                  <button className='flex text-[#07112B] hover:text-[#5373CE] text-xl'> 
                    {t("button1")}
                  </button>
                </Link> 
                
                <button onClick={scrollToClientes} className='flex text-[#07112B] hover:text-[#5373CE] text-xl'> 
                  {t("button2")}
                </button>
              </Menu>
            </ul>
            <div className="relative flex items-center">
            <button 
  className="text-4xl pr-8 rounded-full p-2 bg-white  flex items-center justify-center"
  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
>
  <MdLanguage className="text-black" />
</button>

              {isDropdownOpen && (
                <div className="absolute right-0 bg-white shadow-lg rounded-lg mt-2 z-20">
                  <ul className="flex flex-col">
                    <li>
                      <button
                        onClick={() => handleLanguageChange('en')}
                        className="block px-4 py-2 text-[#07112B] hover:bg-gray-200"
                      >
                        EN
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleLanguageChange('es')}
                        className="block px-4 py-2 text-[#07112B] hover:bg-gray-200"
                      >
                        ES
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <button 
              className="text-xl inline-flex h-12 animate-shimmer items-center justify-center rounded-[40px] bg-[linear-gradient(110deg,#1C32BB,45%,#A0ABEA,55%,#1C32BB)] bg-[length:200%_100%] px-2 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              onClick={scrollToContact}
            >
              {t("button3")}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
