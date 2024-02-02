'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import WPPlogo from "../../public/images/Free whatsapp white logo vector.svg.svg"
import Image from 'next/image'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import  SaucotecLogo from "../../public/images/SaucotecLogo.svg"
import PhoneLogo from "../../public/images/phone-svg.svg"
import { FaPhoneAlt } from "react-icons/fa";

function HandleCall() {
  window.location.href = 'tel:+5491131500591'


}

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      
                <ul className="flex grow justify-end flex-wrap items-center" style={{ marginTop: '-30px' }}>
              <li className="ml-4">
  <a
    onClick={HandleCall}
    className="flex justify-center items-center text-white bg-blue-888 hover:text-gray-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out"
    aria-label="Phone"
    style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
    <FaPhoneAlt size={20} />
  </a>
</li>
<li style={{ marginLeft: '7px' }}>
                  <Link href="https://api.whatsapp.com/send?phone=5491131500591&text=Hola,%20quisiera%20saber%20más%20sobre%20los%20servicios%20de%20SaucoTec." 
                  className="flex justify-center items-center text-white bg-blue-888 hover:text-gray-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out" 
                  style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
                    
                    <Image
                    src={WPPlogo}
                    alt='Whatsapp Logo'
                    className="w-6 h-6 fill-current" 

                    />

                    
                  </Link>
                </li>


            </ul>

    
  </div>
  )
}
