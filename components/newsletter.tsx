
'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link'
import Image from 'next/image'
import  SaucotecLogo from "../../public/images/SaucotecLogo.svg"
import PhoneLogo from "../../public/images/phone-svg.svg"
import { FaPhoneAlt } from "react-icons/fa";
import WPPlogo from "../public/images/Free whatsapp white logo vector.svg.svg"
import { TypewriterEffect } from './typewriter-effect';

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
  const words = [
    {
      text: "Contactanos.",
      className: "text-blue-888 dark:text-blue-888 text-4xl lg:text-6xl",
    },
   
  ];

  return (
    <section id="contact" className="relative ">
      <div className="relative flex flex-col justify-center  overflow-hidden mb-8 ">
        <div className="w-full p-6 m-auto bg-zinc-50 rounded-md  lg:max-w-xl">
          <TypewriterEffect words={words}/>
          <form className="mt-6 p-4 lg:p-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label>
                <span className="text-gray-700 font-semibold">Nombre</span>
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
                  
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-gray-700 font-semibold" >Email</span>
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
                
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-gray-700 font-semibold" >Mensaje</span>
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
                  text-white
                  bg-blue-888
                  rounded-[52px]
                  transition-colors
                  duration-150
                  focus:shadow-outline
                  hover:bg-[#334FFE]
                  mt-4
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



</ul>

      </div>
    </section>
  );
}

export default ContactForm;
