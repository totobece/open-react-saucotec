import './css/style.css'

import { Poppins } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import { Metadata } from 'next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import {GoogleTagManager} from '@next/third-parties/google'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';



const bebas_neue = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],  
  display: 'swap'
})

export const metadata : Metadata = {
  title: 'Saucotec',
  description: 'Saucotec - Inicio',
}

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode
  params: {locale: string}
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={bebas_neue.className}>
   
      <GoogleAnalytics GA_MEASUREMENT_ID='G-FRPLFF3P4W'/>
      <body className={` bg-zinc-50	 text-blue-888 tracking-tight`}>
      <NextIntlClientProvider messages={messages}>


        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          <Banner />
        </div>

        </NextIntlClientProvider>

      </body>
      <GoogleTagManager gtmId='GTM-K7N66L4G'/>
    </html>
    
    
    )
  }
  
  /* (${architects_daughter.variable} ) */