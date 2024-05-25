'use client'
import Fondo from '@/public/images/Rectangle 22 (1).svg';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import JoinUsForm from '@/components/formjoinus';
import Footer from '@/components/ui/footer';

export default function About() {
  const words = ['innovators', 'industry leaders', 'entreprenuers', 'bussiness leaders'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = words[currentWordIndex];
      setDisplayedText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100);
      }
    };

    const typingTimeout = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, typingSpeed, currentWordIndex, loopNum, words]);

  return (
    <section className="relative min-h-screen w-full bg-[#07112B]">
      <Image
        src={Fondo}
        alt="Fondo"
        layout='fill'
        objectFit="cover"
        quality={100}
        className="fixed z-1"
        
      />
      <div className="relative z-10 flex flex-col items-start pt-[25vh] pl-[20%]">
        <div className="max-w-screen-lg">
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold" data-aos="fade-up">
            Saucotec is for
          </h1>
        </div>
        <div className=" relative mt-4 pl-[40%]">
          <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold">
            <span className="inline-block text-gray-200"  data-aos="fade-up">{displayedText}</span>
            <span className="border-r-2 border-gray-200 animate-typing " data-aos="fade-up"></span>
          </h2>
        </div>
      </div>
      <hr className="relative left-1/2 transform -translate-x-1/2 w-[100vh] border-t-2 border-white opacity-50 mt-32" />
     
      <div className="relative w-full flex justify-center pt-14">
        <div className="flex justify-between w-3/4 max-w-screen-lg">
          <div className="flex flex-col items-center space-y-4 w-1/4"  data-aos="fade-up">
            <h2 className='text-white text-lg opacity-70 justify-center'>We started in </h2>
            <h1 className='text-white text-3xl justify-center'>2022</h1>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <h2 className='text-white text-lg opacity-70'>Located in </h2>
            <h1 className='text-white text-2xl text-center'>Buenos Aires, <br />
            Argentina
            </h1>
          </div>
          <div className="w-3/4 pl-14 space-y-4"  data-aos="fade-up">
            <h2 className='text-white text-lg opacity-70'>What saucotec does?</h2>
            <h2 className='text-white'>Curabitur iaculis lacus eu mi euismod tristique ac sit amet erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris finibus rutrum felis, in egestas nunc interdum vitae. Fusce iaculis, elit nec volutpat feugiat, nunc odio venenatis magna, id viverra metus risus nec lacus. Donec rhoncus, eros ut blandit auctor, quam nibh vehicula ipsum, sed accumsan purus enim eu nunc. Sed molestie porttitor magna hendrerit rutrum. Fusce nec mauris sit amet libero pretium efficitur nec eget magna. Maecenas tempus mauris in velit cursus, id efficitur augue congue. Quisque dignissim malesuada ipsum, bibendum vestibulum nunc auctor vulputate. Nunc vitae tempus lorem. Nulla facilisis, ipsum vitae euismod auctor, nibh nibh lobortis eros, vel accumsan leo mauris et enim. Morbi vel auctor felis.</h2>
          </div>
        </div>
      </div>

      <hr className="relative left-1/2 transform -translate-x-1/2 w-[100vh] border-t-2 border-white opacity-50 mt-32" />

      <div className='relative justify-center w-full flex pt-10'>
        <h1 className='text-white text-3xl'>Meet our team</h1>
      </div>

      <div className="relative w-full flex justify-center pt-14">
        <div className="w-3/4 max-w-screen-lg flex flex-col space-y-8">
          <div className="flex w-full h-64 space-x-4">
            <div className="w-1/4 bg-gray-300">foto1</div>
            <div className="w-3/4 bg-gray-300">foto2</div>
          </div>
          <div className="w-full h-64 bg-gray-300"> foto3</div>
        </div>
      </div>

      <div className="relative w-full flex justify-center pt-14">
        <div className="w-3/4 max-w-screen-lg flex flex-col space-y-8">
          
          <div className="w-full bg-gray-300 h-screen"> Nos presentamos nosotros, pero no se como todavia</div>
        </div>
      </div>

      <hr className="relative left-1/2 transform -translate-x-1/2 w-[100vh] border-t-2 border-white opacity-50 mt-32" />
      <JoinUsForm/>

      <Footer/>
    </section>
  );
}
