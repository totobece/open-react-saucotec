
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
          ¡Gracias por contactarnos! <br />Un asesor se pondrá en contacto contigo a la brevedad.
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
          <form className="mt-6 text-left p-4 lg:p-6" onSubmit={handleSubmit}>
            <div className="mb-2">
                    <label>
                      <span className="text-white text-xl font-[500]">NOMBRE <span className=' text-gray-600'>(requerido)</span></span>
                      <input
                        type="text"
                        name="name"
                      
                        className="
                        block
                        w-full
                        my-4
                        px-16
                        py-3
                        bg-[#07112B]
                        border-white
                        rounded-2xl
                        text-xl
                        shadow-sm
                        text-white
                        focus:border-white
                        focus:ring
                        focus:ring-white
                        focus:bg-[#2E4BFF]
                        "
                        
                      />
                    </label>
                  </div>
                  <div className="mb-2">
                    <label>
                      <span className="text-white text-xl font-[500]" >Email <span className=' text-gray-600'>(requerido)</span></span>
                      <input
                        name="email"
                        type="email"
                        
                        className="
                        block
                        w-full
                        my-4
                        px-16
                        py-3
                        bg-[#07112B]
                        border-white
                        text-xl
                        rounded-2xl
                        shadow-sm
                        text-white
                        focus:border-white
                        focus:ring
                        focus:ring-white
                        focus:bg-[#2E4BFF]
                        "
                      
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-2">
                    <label>
                      <span className="text-white text-xl font-[500]" >Número <span className=' text-gray-600'>(requerido)</span></span>
                      <input
                        name="Numero"
                        type="text"
                        
                        className="
                          block
                          w-full
                          text-xl
                          my-4
                          px-16
                          py-3
                          bg-[#07112B]
                          border-white
                          rounded-2xl
                          shadow-sm
                          text-white
                          focus:border-white
                          focus:ring
                          focus:ring-white
                          focus:bg-[#2E4BFF]
                        "
                      
                        required
                      />
                    </label>
                  </div>
                    <div className="mb-2 ">
                      <label>
                        <span className="text-white text-xl font-[500] " >Mensaje</span>
                        <textarea
                          name="message"
                
                          className="
                          block
                          text-xl
                          w-full
                          my-4
                          px-16
                          py-3
                          bg-[#07112B]
                          border-white
                          rounded-2xl
                          shadow-sm
                          text-white
                          focus:border-white
                          focus:ring
                          focus:ring-white
                          focus:bg-[#1C32BB]
                          "
                        
                        ></textarea>
                      </label>
                    </div>

            <div className="mt-6">
            

 
                <button 
                className="relative hover:-translate-x-[-12px] transition px-6 text-xl inline-flex h-12  animate-shimmer items-center justify-center rounded-[40px]  bg-[linear-gradient(110deg,#1C32BB,45%,#A0ABEA,55%,#1C32BB)] bg-[length:200%_100%] font-medium text-white  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
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
