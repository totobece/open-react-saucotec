'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import WPPlogo from "../../public/images/Free whatsapp white logo vector.svg.svg"
import Image from 'next/image'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
              <ul className="flex grow justify-end flex-wrap items-center">
                  <li>
                  <Link href="https://api.whatsapp.com/send?phone=1170135056&text=Hola,%20tengo%20una%20consulta." 
                  className="btn-sm text-white bg-blue-888 hover:bg-blue-888 ml-3 flex items-center" style={{transform: 'translateY(-11px)'}}>

                    <Image
                    src={WPPlogo}
                    alt='Whatsapp Logo'
                    className='w-5 h-5 mr-2'
                    style={{ transform: 'translateX(3px)' }} 
                    />

                    
                  </Link>
                </li>


            </ul>

    
  </div>
  )
}
