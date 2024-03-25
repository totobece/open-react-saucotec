
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


function ContactForm() {
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
    <section id="contact" className="relative bg-[#07112B]">
      <div className="relative flex flex-col justify-center  overflow-hidden pb-12 pt-12 ">
        <div className="w-full bg-[#07112B] p-6 m-auto rounded-md  lg:max-w-xl">
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

        <div className="flex mx-auto md:order-2 ">
              <a
                onClick={HandleCall}
                className="flex justify-center items-center text-white bg-blue-600 hover:text-gray-100 hover:bg-black rounded-full transition duration-150 ease-in-out"
                aria-label="Phone"
                style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
                <FaPhoneAlt size={22} />
              </a>

                <a className="ml-4">
                      <Link href="https://api.whatsapp.com/send?phone=5491131500591&text=Hey!%20I would%20like%20to%20know%20more%20about%20SaucoTec%20services." 
                      target='_blank' className="flex justify-center items-center text-white bg-blue-600 hover:text-gray-100 hover:bg-black rounded-full transition duration-150 ease-in-out" aria-label="Whatsapp">
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
                      target='_blank' className="flex justify-center items-center text-white bg-blue-600 hover:text-gray-100 hover:bg-black rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                        <svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20.145" cy="11.892" r="1" />
                          <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                          <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                        </svg>
                      </Link>
                    </a>



                  <a className="ml-4">
                  <Link href="https://www.facebook.com/profile.php?id=61551645961552" target='_blank' className="flex justify-center items-center text-white bg-blue-600 hover:text-gray-100 hover:bg-black rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                  </Link>
                  </a>

                  <a className="ml-4">
                    <Link href="https://www.linkedin.com/company/saucotec/" target='_blank' className="flex justify-center items-center text-white bg-blue-600 hover:text-gray-100 hover:bg-black rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                      <svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                      </svg>
                    </Link>
                  </a>
              
            
            </div>

      </div>
    </section>
  );
}

export default ContactForm;
