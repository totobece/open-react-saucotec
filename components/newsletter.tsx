// components/ContactForm.tsx
'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link'
import Image from 'next/image'
import  SaucotecLogo from "../../public/images/SaucotecLogo.svg"
import PhoneLogo from "../../public/images/phone-svg.svg"
import { FaPhoneAlt } from "react-icons/fa";
import WPPlogo from "../public/images/Free whatsapp white logo vector.svg.svg"
import { useState, useRef, useEffect } from 'react'

function HandleCall() {
  window.location.href = 'tel:+5491131500591'


}

function ContactForm() {
  const [state, handleSubmit] = useForm("myyqlkdn");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-4xl font-semibold text-blue-888">
          ¡Gracias por contactarnos!
        </p>
      </div>
    );
  }
  

  return (
    <section id="contact" className="relative ">
      <div className="relative flex flex-col justify-center  overflow-hidden mb-8 ">
        <div className="w-full p-6 m-auto bg-zinc-50 rounded-md  lg:max-w-xl">
          <h1 className="text-6xl font-bebas text-center text-blue-888">
            Contactanos
          </h1>
          <form className="mt-6 p-4 lg:p-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label>
                <span className="text-gray-700 font-semibold" style={{ fontFamily: 'helvetica, sans-serif' }}>Nombre</span>
                <input
                  type="text"
                  name="name"
                 
                  className="
                    w-full
                    block
                    px-16
                    py-2
                    mt-2
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  style={{ fontFamily: 'helvetica, sans-serif' }}
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-gray-700 font-semibold" style={{ fontFamily: 'helvetica, sans-serif' }}>Email</span>
                <input
                  name="email"
                  type="email"
                  
                  className="
                    block
                    w-full
                    mt-2
                    px-16
                    py-2
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  style={{ fontFamily: 'helvetica, sans-serif' }}
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-gray-700 font-semibold" style={{ fontFamily: 'helvetica, sans-serif' }}>Mensaje</span>
                <textarea
                  name="message"
         
                  className="
                    block
                    w-full
                    mt-2
                    px-16
                    py-8
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  style={{ fontFamily: 'helvetica, sans-serif' }}
                ></textarea>
              </label>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                disabled={state.submitting}
                className="
                  h-10
                  px-5
                  text-indigo-100
                  bg-blue-888
                  rounded-lg
                  transition-colors
                  duration-150
                  focus:shadow-outline
                  hover:bg-blue-600
                "
              >
                Enviar
              </button>
            </div>

            <ValidationError
              prefix="Error"
              field="submit"
              errors={state.errors}
            />
          </form>
        </div>

        {/* Social links */}
        <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0 justify-center">

        <a className="text-3xl font-bebas text-center text-blue-600">
            Llame ya!
          </a>

<li className="ml-4">
  <a
    onClick={HandleCall}
    className="flex justify-center items-center text-white bg-blue-600 hover:text-gray-100 hover:bg-blue-888 rounded-full transition duration-150 ease-in-out"
    aria-label="Phone"
    style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
    <FaPhoneAlt size={25} />
  </a>
</li>

<li style={{ marginLeft: '15px' }}>
                  <Link href="https://api.whatsapp.com/send?phone=5491131500591&text=Hola,%20quisiera%20saber%20más%20sobre%20los%20servicios%20de%20SaucoTec." 
                  target='_blank'
                  className="flex justify-center items-center text-white bg-blue-888 hover:text-gray-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out" 
                  style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
                    
                    <Image
                    src={WPPlogo}
                    alt='Whatsapp Logo'
                    className="w-6 h-6 fill-current" 

                    />

                    
                  </Link>
                </li>


<li className="ml-4">
                <Link href="https://www.instagram.com/saucotec/" target='_blank' className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>



<li className="ml-4">
<Link href="https://www.facebook.com/profile.php?id=61551645961552" target='_blank' className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
<svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
</svg>
</Link>
</li>

<li className="ml-4">
  <Link href="https://www.linkedin.com/company/saucotec/" target='_blank' className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
    <svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
    </svg>
  </Link>
</li>

</ul>

      </div>
    </section>
  );
}

export default ContactForm;
