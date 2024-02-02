import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import  SaucotecLogo from "../../public/images/SaucotecLogo.svg"
import PhoneLogo from "../../public/images/phone-svg.svg"
import { FaPhoneAlt } from "react-icons/fa";

function HandleCall() {
  window.location.href = 'tel:+5491131500591'


}

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 ">

          

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5 justify-center">
              <div className="mb-2 flex justify-center items-center">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                
                  <div className='logo-container'>
                    <Image
                      priority
                      src={SaucotecLogo}
                      alt='saucotec-logo'

                   />
                  </div>
                </Link>
              </div>  
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
             




    

             
            
           </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            

            


            {/* Copyrights note */}
            <div className="text-gray-600 mr-2 ">
              <ul className=' flex justify-center'>
              &copy; Saucotec.com. All rights reserved.
              </ul>
              

            </div>

          </div>

        </div>
      </div>
    </footer>
  )
}
