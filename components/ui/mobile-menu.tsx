import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './moving-border';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);
  const dropdownMenu = useRef<HTMLUListElement>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
  
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current || !dropdownMenu.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false);
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [mobileNavOpen]);

  return (
    <div className="md:hidden">
    
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        style={{transform:'translateX(-20px)'}}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-md px-4 py-2 h-[700px] rounded-[20px] text-xl bg-gradient-to-b from-[#07112B] via-blue-900 to-black">
         
          <li>
            <Link href="/" className="block font-medium text-white hover:text-gray-200 pt-12 justify-center" onClick={() => setMobileNavOpen(false)}>
              Home
            </Link>
          </li>

        
          <li className="border-t border-white my-4"></li>

        
          <li>
            <button
              className="flex items-center justify-between font-medium w-full text-white hover:text-gray-200 py-2"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Servicios
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${dropdownOpen ? 'transform rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <ul ref={dropdownMenu} className={`bg-opacity-75 backdrop-filter backdrop-blur-md px-12 py-2 transition-opacity ${dropdownOpen ? 'opacity-100' : 'opacity-0'}`}>
                <li>
                  <Link href="/software" className="block font-medium text-white py-6 justify-center" onClick={() => setMobileNavOpen(false)}>
                    Digitalización de procesos
                  </Link>
                </li>
                <li>
                  <Link href="/aplicaciones" className="block font-medium text-white hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                    Desarrollar mi proyecto
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className='py-4'>
            <Link href="/nosotros" className="block font-medium text-white hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/clientes" className="block font-medium text-white hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              Clientes
            </Link>
          </li>
          
          
          <button
            onClick={scrollToContact}
            className="
              h-[50px]
              px-5
              text-white
              bg-gradient-to-tr from-blue-900 via-indigo-500 to-pink-600
              rounded-[40px]
              transition-colors
              duration-150
              focus:shadow-outline
              w-full
              mt-8
            "
          >
            Contactanos
          </button>
        </ul>
      </nav>
    </div>
  );
}
