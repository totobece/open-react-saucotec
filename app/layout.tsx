import './css/style.css'

import { Poppins } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import { Metadata } from 'next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import {GoogleTagManager} from '@next/third-parties/google'


const bebas_neue = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],  
  display: 'swap'
})

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
   
      <GoogleAnalytics GA_MEASUREMENT_ID='G-FRPLFF3P4W'/>
      <body className={` bg-zinc-50	 text-blue-888 tracking-tight`}>

        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          <Banner />
        </div>

        
      </body>
      <GoogleTagManager gtmId='GTM-K7N66L4G'/>
    </html>
    
    
    )
  }
  
  /* (${architects_daughter.variable} ) */