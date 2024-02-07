import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SaucotecLogo from "../../public/images/SaucotecLogo-white-svg.svg"
import { FaPhoneAlt } from "react-icons/fa";

function HandleCall() {
  window.location.href = 'tel:+5491131500591'
}

export default function Footer() {
  return (
    <footer className='bg-blue-888'>
      <div className="mt-16 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 ">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-12 lg:col-span-12 flex justify-center items-center">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <div className="w-full md:w-auto lg:w-auto">
                    <Image
                      src={SaucotecLogo}
                      alt='saucotec-logo'
                      width={1366 }
                      height={1080}
                    />
                  </div>
                </Link>
              </div>  
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-12 lg:col-span-12 grid sm:grid-cols-3 gap-8">
              {/* Aquí puedes agregar más contenido si es necesario */}
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
