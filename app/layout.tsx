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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K7N66L4G')`}}
        
        />
      </head>
      <GoogleAnalytics GA_MEASUREMENT_ID='G-FRPLFF3P4W'/>
      <body className={` bg-zinc-50	 text-blue-888 tracking-tight`}>

        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K7N66L4G"
          height="0" width="0" ></iframe>

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