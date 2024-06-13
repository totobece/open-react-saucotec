'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Fondo from '@/public/images/Rectangle 22 (1).svg';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import JoinUsForm from '@/components/formjoinus';
import Footer from '@/components/ui/footer';
import anita from "@/public/images/team/anitta.jpeg";
import nico from "@/public/images/team/nico.jpeg";
import founders from "@/public/images/team/founders.jpeg";

export default function About() {
  const words = [
    { text: 'innovators', className: 'text-center' },
    { text: 'industry leaders', className: 'text-center' },
    { text: 'entrepreneurs', className: 'text-center' },
    { text: 'business leaders', className: 'text-center' },
  ];  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = words[currentWordIndex].text;
      setDisplayedText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 400);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setLoopNum(loopNum + 1);
        setTypingSpeed(50);
      }
    };

    const typingTimeout = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, typingSpeed, currentWordIndex, loopNum, words]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('join us');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className=" flex h-auto flex-col min-h-screen w-full bg-[#07112B]">
      <Image
        src={Fondo}
        alt="Fondo"
        layout='fill'
        objectFit="cover"
        quality={100}
        className="fixed z-1"
        
      />
      <div className="relative  flex flex-col items-center py-[20vh] md:pt-[25vh] md:pb-[18vh] ">
        <div className="max-w-screen-lg">
          <h1 className="text-white text-3xl text-center md:text-5xl lg:text-8xl font-[200]" data-aos="fade-up">
            <span className=' font-bold'>Saucotec</span> is for
          </h1>
        </div>
        <div className=" relative  items-center mt-8 md:mt-20">
          <h2 className="text-white text-center text-3xl md:text-6xl lg:text-9xl font-bold">
            <span className="inline-block bg-blue-800 rounded-[72px] px-10 text-white"  data-aos="fade-up">{displayedText}</span>
            <span className="border-r-2  border-gray-200 animate-typing " data-aos="fade-up"></span>
          </h2>
          
        </div>
        <button onClick={scrollToContact}  className='mt-28 hover:bg-white rounded-full btn p-[0.5px] lg:mt-30 text-white duration-50 relative  transition'>
            <div className="absolute inset-0  rounded-full " />
              <div className="relative  transition px-6 text-xl inline-flex h-12   items-center justify-center rounded-[40px]  bg-[#1C32BB] bg-[length:200%_100%] font-medium text-white  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                We're expanding</div>
            </button>
            
      </div>
      
      <hr className="relative left-1/2 transform -translate-x-1/2 w-[100vh] border-t-2 border-white opacity-50" />
     
      <div className="relative w-full my-8 flex justify-center">
        <div className="flex flex-col items-center w-full max-w-screen-lg">
          
          <div className="w-4/5 md:w-full justify-center space-y-16"  data-aos="fade-up">
            <h2 className='text-white text-center mt-6 text-lg opacity-70'>About us</h2>
            <h2 className='text-white pt-4 pb-10 text-xl md:text-4xl text-center leading-8'>
              A team passionate about overcoming new barriers. 
              <br /><br />Technology, science, and design inspire us to constantly seek new ways to add value to the world around us. 
              <br /><br />Together, we create a place where innovation and excellence are our daily goals.
            </h2>
          </div>
          <div className="w-2/5 md:w-full flex flex-row justify-center  mt-16 space-x-4 md:space-x-6 lg:space-x-10 "  data-aos="fade-up">

              <div className='flex flex-col items-center'>
              <h2 className='text-white text-lg opacity-70 '>Started in </h2>
              <h1 className='text-white mt-4 text-4xl justify-center'>2022</h1>
              </div>

            <div></div>
            <div></div>
            <div></div>
            <div></div>

              <div className='items-center flex flex-col'>
              <h2 className='text-white text-lg opacity-70'>Located in </h2>
              <h1 className='text-white mt-4 text-2xl text-center'>Buenos Aires, <br />
              Argentina
              </h1>
              </div>

          </div>
        </div>
      </div>

      <hr className="relative left-1/2 transform -translate-x-1/2 w-[100vh] border-t-2 border-white opacity-50 mt-16" />

      <div className='py-16'>


      <div className='relative justify-center  w-full flex my-10 '>
        <h1 className='text-white text-4xl font-[400]'>Meet our team</h1>
      </div>

      ///////////////

      <div className=' flex space-y-12 mt-6 flex-col'>

      <div className=" w-full h-auto flex justify-center ">
        <div className="h-auto w-3/4 max-w-screen-lg flex  justify-center flex-col space-y-8">
          <div className=" flex w-full  md:space-x-4 md:flex-row flex-col">
            <div className=" rounded-xlw-1/2">
            <Image
            src={founders}
            className='rounded-xl'
            alt=""/>
            </div>
            <div className='w-full'>
            <div className="w-full md:w-4/4 md:px-10 space-y-2 md:space-y-4"  data-aos="fade-up">
            <h2 className='text-white md:mt-0 mt-10 font-[400] text-xl opacity-70'>Pedro Bergaglio</h2>
            <h2 className='text-white'>Founder and Director. With a transformative vision and a commitment to a better future. Specializing in data science at the University of Buenos Aires.</h2>
            <div className='flex justify-end pr-15'><a
                  href="https://www.linkedin.com/in/pedro-bergaglio-1674111b7/"
                  target="_blank"
                  className="text-white transition duration-150 ease-in-out hover:text-blue-600"
                  aria-label="Linkedin">
                  <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                </a></div>
            <h2 className='text-white pt-10 font-[400] text-xl opacity-70'>Tobias Becerra</h2>
            <h2 className='text-white'>Co-Founder and Chief Technology Officer. Responsible for the excellence of our solutions. Specializing in data science at the University of Buenos Aires.</h2>
            <div className='flex justify-end pr-15'><a
                  href="https://www.linkedin.com/in/tobias-becerra-84ab22241/"
                  target="_blank"
                  className="text-white transition duration-150 ease-in-out hover:text-blue-600"
                  aria-label="Linkedin">
                  <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                </a></div>
                
          </div>
          </div>
          </div>
        </div>
      </div>

      ///////

      <div className=" w-full h-auto flex justify-center ">
        <div className="h-auto w-3/4 max-w-screen-lg flex  justify-center flex-col space-y-8">
          <div className=" flex w-full items-center md:space-x-4 md:flex-row flex-col">
            
            <div className='w-full'>
            <div className="w-full md:w-4/4 md:px-10 space-y-2 md:space-y-4"  data-aos="fade-up">
            <h2 className='text-white md:mt-0 mt-10 font-[400] text-xl opacity-70'>Nicolas Busso</h2>
            <h2 className='text-white'>International Relations and Consulting. An entrepreneur committed to the success of our clients. Also, a professional athlete.</h2>
            <div className='flex justify-end pr-15'><a
                  href="https://www.instagram.com/bussonico/"
                  target="_blank"
                  className="text-white transition duration-150 ease-in-out hover:text-blue-600"
                  aria-label="Linkedin">
                  <FontAwesomeIcon icon={faInstagram} size="2xl" />
                </a></div>
           
                
          </div>
          </div>
          <div className=" rounded-xl w-3/5">
            <Image
            src={nico}
            className='rounded-xl'
            alt=""/>
            </div>
          </div>
        </div>
      </div>

      ////////////////
    

      <div className=" w-full h-auto flex justify-center ">
        <div className="h-auto w-3/4 max-w-screen-lg flex  justify-center flex-col space-y-8">
          <div className=" flex w-full items-center md:space-x-4 md:flex-row flex-col">
          <div className=" rounded-xl w-3/5">
            <Image
            src={anita}
            className='rounded-xl'
            alt=""/>
            </div>
            <div className='w-full'>
            <div className="w-full md:w-4/4 md:px-10 space-y-2 md:space-y-4"  data-aos="fade-up">
            <h2 className='text-white md:mt-0 mt-10 font-[400] text-xl opacity-70'>Ana Bergaglio</h2>
            <h2 className='text-white'>Director of Marketing and Communication, psychology student focused on connecting and communicating authentically.</h2>
            <div className='flex justify-end pr-15'><a
                  href="https://www.linkedin.com/in/ana-bergaglio-466982311/"
                  target="_blank"
                  className="text-white transition duration-150 ease-in-out hover:text-blue-600"
                  aria-label="Linkedin">
                  <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                </a></div>
           
                
          </div>
          </div>
          
          </div>
        </div>
      </div>

      </div>
      </div>

      /////////////////


      <hr className="relative left-1/2 transform -translate-x-1/2 w-[100vh] border-t-2 border-white opacity-50 mt-16" />
      <JoinUsForm/>

      <Footer/>
    </section>
  );
}
