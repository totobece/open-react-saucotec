'use client'
import Link from 'next/link';
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import { useState, useEffect } from 'react';

type ConsentType = boolean | null;

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<ConsentType>(null);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    console.log("Ejecutando useEffect para actualizar cookieConsent...");
    const newValue = cookieConsent ? 'granted' : 'denied';
    console.log("Nuevo valor de cookieConsent:", newValue);
    window.gtag("consent", 'update', { 'analytics_storage': newValue });
    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  const handleCookieAction = (consent: ConsentType) => {
    console.log("Manejando acción de cookies. Nuevo valor:", consent);
    setCookieConsent((prevState) => {
      return prevState === null ? consent : prevState;
    });
  };

  console.log("Renderizando componente. Valor de cookieConsent:", cookieConsent);

  return (
    <div className="relative">
      {cookieConsent === null && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 transition-opacity duration-500 ease-in-out"></div>
          <div
            className={` my-10 w-5/6 mx-auto max-w-6xl md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        ${cookieConsent !== null ? "hidden" : "flex"} 
                        px-3 md:px-6 py-3 justify-between items-center flex-col sm:flex-row gap-3  
                        bg-blue-888 rounded-full shadow py- z-50 transition-opacity duration-500 ease-in-out`}
          >
            <div className='text-center'>
              <Link href="#">
                <p className='max-w-xl  text-white'>
                  We use{''}
                  <span className='text-blue-600 font-bold ml-2 mr-2'>cookies</span>
                  {''}in our page.
                </p>
              </Link>
            </div>
            <div className='flex gap-2'>
              <button
                className='px-5 py-2 text-white rounded-md border-blue-888'
                onClick={() => handleCookieAction(false)}
              >
                Decline
              </button>
              <button
                className='w-max bg-blue-600 px-5 py-2 text-white rounded-full'
                onClick={() => handleCookieAction(true)}
              >
                Allow cookies
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
