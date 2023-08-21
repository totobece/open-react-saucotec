import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import  SaucotecLogo from "../../public/images/SaucotecLogo.svg"

/* viewBox="0 0 32 32" */
export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-40">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
            <div className='w-64 h-20 fill-current '>
                    <Image
                      priority
                      src={SaucotecLogo}
                      alt='saucotec-logo'
                    />
                  </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
            {/*     <Link
                  href="/signin"
                  className="btn-sm text-white bg-blue-888 hover:bg-blue-888 ml-3"
                >
                  Contactanos
                </Link> */}
              </li>
             {/*  <li>
                <Link href="/signup" className="btn-sm text-white bg-blue-600 hover:bg-blue-700 ml-3">
                 Mas informacion
                </Link>
              </li> */}
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
