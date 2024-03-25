import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './moving-border';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);
  const dropdownMenu = useRef<HTMLUListElement>(null);
  
  const scrollToNosotros = () => {
    const nosotrosSection = document.getElementById('nosotros');
  
    if (nosotrosSection) {
      nosotrosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToClientes = () => {
    const clientesSection = document.getElementById('clientes');
  
    if (clientesSection) {
      clientesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <ul className="backdrop-filter backdrop-blur-md px-4 py-2 h-[700px] rounded-[20px] text-xl bg-opacity-50 bg-[#07112B] ">
          <li>
            <Link href="/" className="block font-medium text-white hover:text-gray-200 pt-12 justify-center" onClick={() => { setMobileNavOpen(false); scrollToContact(); }}>
              Home
            </Link>
          </li>

          <li className="border-t border-white my-4"></li>

          <li>
            <button
              className="flex items-center justify-between font-medium w-full text-white hover:text-gray-200 py-2"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Services
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
              <ul ref={dropdownMenu} className={`bg-none backdrop-filter px-12 py-2 transition-opacity ${dropdownOpen ? 'opacity-100' : 'opacity-0'}`}>
                <li>
                  <Link href="/digital-transformation" className="block font-medium text-white py-6 justify-center" onClick={() => setMobileNavOpen(false)}>
                    Digital Transformation
                  </Link>
                </li>
                <li>
                  <Link href="/digital-products" className="block font-medium text-white hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                    Digital Products
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className='py-4'>
            <Link href="/" className="block font-medium text-white hover:text-gray-200 py-2 justify-center" onClick={() => { setMobileNavOpen(false); scrollToNosotros(); }}>
              About Us
            </Link>
          </li>

          <li>
            <button  className="block font-medium text-white hover:text-gray-200 py-2 justify-center" onClick={() => { setMobileNavOpen(false); scrollToClientes(); }}>
              Portfolio
            </button>
          </li>

          <button onClick={scrollToContact} className='w-full btn p-[2px] relative '>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-purple-500 rounded-full mt-8" />
            <div className="h-[50px] w-full leading-[1] text-xl btn  px-5 py-2  bg-[#000F39] rounded-full relative group transition font-[300] mt-8  text-white ">
              Contact Us
            </div>
          </button>
        </ul>
      </nav>
    </div>
  );
}
