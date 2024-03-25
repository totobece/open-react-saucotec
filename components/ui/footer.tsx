import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SaucotecLogo from "../../public/images/SaucotecLogo-white-svg.svg";
import { FaPhoneAlt } from "react-icons/fa";
import FondoFooter from '@/public/images/Group 62 (3).svg';
import WPPlogo from '@/public/images/whatsapp.svg';

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
    <footer className="relative bg-gradient-to-b from-[#07112B] via-black to-[#481643]"> 
      <div className="absolute inset-0 z-[-1]"> 
        
      </div>
      <div className="mt-16 py-12 md:py-16 relative"> 
        <div className="max-w-6xl mx-auto px-4 sm:px-6 ">

          
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

          
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

          
            <div className="md:col-span-12 lg:col-span-12 grid sm:grid-cols-3 gap-8">
              
            </div>

          </div>


       
          <div className="flex items-center md:justify-between flex-col md:flex-row">
        
            <div className="text-white font-[200] mr-2 md:mr-0 mb-4 md:mb-0 md:order-1">
              &copy; SaucoTec.com. All rights reserved.
            </div>

           
            <div className="flex md:order-2 ">
              <a
                onClick={HandleCall}
                className="flex justify-center items-center text-white bg-black hover:text-gray-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out"
                aria-label="Phone"
                style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
                <FaPhoneAlt size={22} />
              </a>

                <a className="ml-4">
                      <Link href="https://api.whatsapp.com/send?phone=5491131500591&text=Hey!%20I would%20like%20to%20know%20more%20about%20SaucoTec%20services." 
                      target='_blank' className="flex justify-center items-center text-white bg-black hover:text-gray-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out" aria-label="Whatsapp">
                      <Image
                        src={WPPlogo}
                        alt='Whatsapp Logo'
                        className="w-10 h-10 fill-current pl-[4px] pr-[10px]"
                        style={{ transform: 'translateX(3px)' }} 
                      />
                      </Link>
                    </a>

                    <a className="ml-4">
                      <Link href="https://www.instagram.com/saucotec/" 
                      target='_blank' className="flex justify-center items-center text-white bg-black hover:text-gray-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                        <svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20.145" cy="11.892" r="1" />
                          <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                          <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                        </svg>
                      </Link>
                    </a>



                  <a className="ml-4">
                  <Link href="https://www.facebook.com/profile.php?id=61551645961552" target='_blank' className="flex justify-center items-center text-white bg-black hover:text-gray-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                  </Link>
                  </a>

                  <a className="ml-4">
                    <Link href="https://www.linkedin.com/company/saucotec/" target='_blank' className="flex justify-center items-center text-white bg-black hover:text-gray-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                      <svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                      </svg>
                    </Link>
                  </a>
              
            
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
























