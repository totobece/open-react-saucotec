
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
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";

function HandleCall() {
  window.location.href = 'tel:+5491131500591'


}

function ContactForm() {
  const [state, handleSubmit] = useForm("myyqlkdn");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-4xl font-semibold text-white">
          ¡Gracias por contactarnos!
        </p>
      </div>
    );
  }
  const words = [
    {
      text: "Contactanos",
      className: "text-white text-4xl lg:text-6xl",
    },
   
  ];

  return (
    <section id="contact" className="relative bg-[#07112B]">
      <div className="relative flex flex-col justify-center  overflow-hidden pb-12 ">
        <div className="w-full bg-[#07112B] p-6 m-auto rounded-md  lg:max-w-xl">
          <div>
        <Spotlight
        className="-top-40 left-20 md:left-[20px] md:-top-[-150px]"
        fill="white"
      />
      </div>
          <TypewriterEffect words={words}/>
          <form className="mt-6 p-4 lg:p-6" onSubmit={handleSubmit}>
            <div className="mb-2">
                    <label>
                      <span className="text-slate-300 ">Nombre <span className='text-sm text-gray-600'>(requerido)</span></span>
                      <input
                        type="text"
                        name="name"
                      
                        className="
                          w-full
                          block
                          px-16
                          py-2
                          text-white
                          mt-2
                          border-gray-300
                          bg-[#07112B]
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
                      <span className="text-slate-300 " >Email <span className='text-sm text-gray-600'>(requerido)</span></span>
                      <input
                        name="email"
                        type="email"
                        
                        className="
                          block
                          w-full
                          mt-2
                          px-16
                          py-2
                          bg-[#07112B]
                          border-gray-300
                          rounded-md
                          shadow-sm
                          text-white
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
                      <span className="text-slate-300 " >Numero <span className='text-sm text-gray-600'>(requerido)</span></span>
                      <input
                        name="Numero"
                        type="text"
                        
                        className="
                          block
                          w-full
                          mt-2
                          px-16
                          py-2
                          bg-[#07112B]
                          border-gray-300
                          rounded-md
                          shadow-sm
                          text-white
                          focus:border-indigo-300
                          focus:ring
                          focus:ring-indigo-200
                          focus:ring-opacity-50
                        "
                      
                        required
                      />
                    </label>
                  </div>
                    <div className="mb-2 ">
                      <label>
                        <span className="text-slate-300 " >Mensaje</span>
                        <textarea
                          name="message"
                
                          className="
                            block
                            w-full
                            mt-2
                            text-white
                            bg-[#07112B]
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
                className="mt-4 text-xl inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                type='submit'
                disabled={state.submitting}
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



</ul>

      </div>
    </section>
  );
}

export default ContactForm;
