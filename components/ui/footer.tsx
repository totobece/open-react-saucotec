import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SaucotecLogo from "../../public/images/SaucotecLogo-white-svg.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function HandleCall() {
  window.location.href = 'tel:+5491131500591';
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Footer() {
  return (
    <footer className="relative">
      <div className="absolute inset-0 z-[-1]">
      </div>
      <div className="mt-16 py-12 md:py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="mb-8 md:mb-12">
            <div className="md:col-span-12 lg:col-span-12 flex justify-center items-center">
              <div className="mb-2">
                <Link href="/" onClick={scrollToContact} className="inline-block" aria-label="Cruip">
                  <div className="w-full md:w-auto lg:w-auto">
                    <Image
                      src={SaucotecLogo}
                      alt='saucotec-logo'
                      width={1366}
                      height={1080}
                    />
                  </div>
                </Link>
              </div>
            </div>

        <div className='flex justify-center items-center '>
          <div className='max-w-xl flex justify-center space-x-16'>
            <a className='text-white text-3xl relative group ' href='/'>
              Home
              <span className='block h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-24 w-0'></span>
            </a>
            <a className='text-white text-3xl relative group' href='/about'>
              About us
              <span className='block h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full w-0'></span>
            </a>
            <a className='text-white text-3xl relative group' href='/portfolio'>
              Work
              <span className='block h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-20 w-0'></span>
            </a>
          </div>
        </div>

          </div>

          <div className="flex items-center md:justify-between flex-col md:flex-row ">
            <div className="text-white font-[200] mr-2 md:mr-0  md:mb-0 md:order-1">
              &copy; SaucoTec.com. All rights reserved.
            </div>

            <div className="flex flex-col items-center md:order-2 py-8 ">
              <div className="text-white font-semibold mb-4">Follow us</div>
              <div className="flex space-x-4 ">
                <a
                  href="https://api.whatsapp.com/send?phone=5491131500591&text=Hey!%20I%20would%20like%20to%20know%20more%20about%20SaucoTec%20services."
                  target="_blank"
                  className="text-white transition duration-150 ease-in-out hover:text-blue-600"
                  aria-label="Whatsapp">
                  <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                </a>
                <a
                  href="https://www.instagram.com/saucotec/"
                  target="_blank"
                  className="text-white transition duration-150 ease-in-out hover:text-blue-600"
                  aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61551645961552"
                  target="_blank"
                  className="text-white transition duration-150 ease-in-out hover:text-blue-600"
                  aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} size="xl" />
                </a>
                <a
                  href="https://www.linkedin.com/company/saucotec/"
                  target="_blank"
                  className="text-white transition duration-150 ease-in-out hover:text-blue-600"
                  aria-label="Linkedin">
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
