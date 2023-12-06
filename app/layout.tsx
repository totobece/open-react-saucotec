import './css/style.css'

import { Bebas_Neue } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import { Metadata } from 'next'
import GoogleAnalytics from '@/components/GoogleAnalytics'


const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue',
  display: 'swap'
})

/* const bebas_neue = bebas_neue({
  subsets: ['latin'],
  variable: '--bebas_neue',
  weight: '400',
  display: 'swap'
}) */

export const metadata : Metadata = {
  title: 'SaucoTec',
  description: 'SaucoTec - Inicio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={bebas_neue.className}>
      <GoogleAnalytics GA_MEASUREMENT_ID='AW-11432082618'/>
      <body className={` bg-zinc-50	 text-blue-888 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          <Banner />
        </div>
      </body>
    </html>
    
    )
  }
  
  /* (${architects_daughter.variable} ) */