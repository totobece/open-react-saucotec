'use client'
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Newsletter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        // You can perform further actions, such as showing a success message or resetting the form.
      } else {
        console.error('Failed to send email');
        // You can handle the error case, such as showing an error message to the user.
      }
    } catch (error) {
      console.error(error);
      // Handle any unexpected errors.
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="relative">
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
                onChange={handleInputChange}
                className="
                

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                /* placeholder="John cooks" */
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Email</span>
              <input
                name="email"
                type="email"
                onChange={handleInputChange}

                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                /* placeholder="john.cooks@example.com" */
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Mensaje</span>
              <textarea
                name="message"
                onChange={handleInputChange}

                className="
            block
            w-full
            mt-2 px-16 py-8
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
          <div></div>
        </form>
      </div>
    </div> 
          
            

    </section> 
  );
}

