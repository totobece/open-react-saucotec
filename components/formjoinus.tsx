'use client'
import { FaPhoneAlt } from "react-icons/fa";
import React from 'react';
import WPPlogo from '@/public/images/whatsapp.svg';
import { useForm, ValidationError } from '@formspree/react';
import { TypewriterEffect } from './typewriter-effect';
import Link from 'next/link';
import Image from 'next/image';
import { text } from "stream/consumers";

function HandleCall() {
  window.location.href = 'tel:+5491131500591';
}

function JoinUsForm() {
  const [state, handleSubmit] = useForm("myyqlkdn");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center h-full fixed z-1">
        <p className="text-4xl font-semibold text-white">
          Thank you for reaching out! <br />An advisor will contact you soon.
        </p>
      </div>
    );
  }

  const words = [
    { text: "Come", className: "text-white text-4xl lg:text-6xl" },
    { text: "build", className: "text-white text-4xl lg:text-6xl" },
    { text: "with", className: "text-white text-4xl lg:text-6xl" },
    { text: "us", className: "text-white text-4xl lg:text-6xl" }
  ];

  return (
    <section id="join us" className="relative ">
      <div className="relative flex flex-col justify-center overflow-hidden pb-12 pt-12">
        <div className="w-full p-6 m-auto rounded-md lg:max-w-3xl">
          <TypewriterEffect words={words} />
          <form className="mt-6 text-left p-4 lg:p-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-2">
                <label>
                  <span className="text-white text-xl font-[500]">*Name</span>
                  <input
                    type="text"
                    name="name"
                    className="
                      block
                      w-full
                      my-4
                      px-4
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
                    required
                  />
                </label>
              </div>
              <div className="mb-2">
                <label>
                  <span className="text-white text-xl font-[500]">*Last Name</span>
                  <input
                    type="text"
                    name="lastname"
                    className="
                      block
                      w-full
                      my-4
                      px-4
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
                    required
                  />
                </label>
              </div>
              <div className="mb-2">
                <label>
                  <span className="text-white text-xl font-[500]">*Email</span>
                  <input
                    name="email"
                    type="email"
                    className="
                      block
                      w-full
                      my-4
                      px-4
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
                  <span className="text-white text-xl font-[500]">*Phone number</span>
                  <input
                    name="Numero"
                    type="text"
                    className="
                      block
                      w-full
                      text-xl
                      my-4
                      px-4
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
              <div className="mb-2">
                <label>
                  <span className="text-white text-xl font-[500]">LinkedIn Profile (optional)</span>
                  <input
                    type="url"
                    name="linkedin"
                    className="
                      block
                      w-full
                      my-4
                      px-4
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
                  <span className="text-white text-xl font-[500]">*Skills</span>
                  <select
                    name="skills"
                    className="
                      block
                      w-full
                      text-xl
                      my-4
                      px-4
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
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="frontend">Front End Developer</option>
                    <option value="fullstack">Full Stack Developer</option>
                    <option value="devops">Dev Ops</option>
                    <option value="qa">QA</option>
                  </select>
                </label>
              </div>
              <div className="mb-2 col-span-2">
                <label>
                  <span className="text-white text-xl font-[500]">*Your message</span>
                  <textarea
                    name="message"
                    className="
                      block
                      text-xl
                      w-full
                      my-4
                      px-4
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
                  ></textarea>
                </label>
              </div>
            </div>
            <div className="mt-6">
              <button
                className="relative hover:-translate-y-[-8px] transition px-6 text-xl inline-flex h-12 animate-shimmer items-center justify-center rounded-[40px] bg-[linear-gradient(110deg,#1C32BB,45%,#A0ABEA,55%,#1C32BB)] bg-[length:200%_100%] font-medium text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                type="submit"
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

export default JoinUsForm;