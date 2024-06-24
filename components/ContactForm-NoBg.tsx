
'use client'
import { FaPhoneAlt } from "react-icons/fa";
import React from 'react';
import WPPlogo from '@/public/images/whatsapp.svg';
import { useForm, ValidationError } from '@formspree/react';
import { TypewriterEffect } from './typewriter-effect';
import Link from 'next/link';
import Image from 'next/image';

function HandleCall() {
  window.location.href = 'tel:+5491131500591'


}


function ContactFormNoBg() {
  const [state, handleSubmit] = useForm("myyqlkdn");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-4xl font-semibold text-white">
        Thank you for reaching out! <br />An advisor will contact you soon.
        </p>
      </div>
    );
  }
  const words = [
    {
      text: "Contact",
      className: "text-white text-4xl lg:text-6xl",
    },
   
  ];

  return (
    <section id="contact" className="relative ">
      <div className="relative flex flex-col justify-center  overflow-hidden pb-12 pt-12 ">
        <div className="w-full  p-6 m-auto rounded-md  lg:max-w-xl">
          <div>
        
      </div>
          <TypewriterEffect words={words}/>
          <form className="mt-6 text-left p-4 lg:p-6" onSubmit={handleSubmit}>
            <div className="mb-2">
                    <label>
                      <span className="text-white text-xl font-[500]">*Full Name</span>
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
                        "
                        
                      />
                    </label>
                  </div>
                  <div className="mb-2">
                    <label>
                      <span className="text-white text-xl font-[500]" >*Email</span>
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
                        "
                      
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-2">
                    <label>
                      <span className="text-white text-xl font-[500]" >*Phone number</span>
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
                        "
                      
                        required
                      />
                    </label>
                  </div>
                    <div className="mb-2 ">
                      <label>
                        <span className="text-white text-xl font-[500] " >Your message</span>
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
                  Send
                </button>
                
              
            </div>

            <ValidationError
              prefix="Error"
              field="submit"
              errors={state.errors}
            />
          </form>
        </div>

        

      </div>
    </section>
  );
}

export default ContactFormNoBg;
