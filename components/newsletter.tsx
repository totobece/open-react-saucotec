// components/ContactForm.tsx
'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

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
    <section id="contact" className="relative">
      <div className="relative flex flex-col justify-center  overflow-hidden ">
        <div className="w-full p-6 m-auto bg-zinc-50 rounded-md  lg:max-w-xl">
          <h1 className="text-6xl font-semibold text-center text-blue-888 ">
            Contactanos
          </h1>
          <form className="mt-6 p-4 lg:p-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Nombre</span>
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
                <span className="text-gray-700">Email</span>
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
                <span className="text-gray-700">Mensaje</span>
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
      </div>
    </section>
  );
}

export default ContactForm;
