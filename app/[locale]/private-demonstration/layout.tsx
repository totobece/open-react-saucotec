import { Poppins } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import {GoogleTagManager} from '@next/third-parties/google'

const bebas_neue = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],  
  display: 'swap'
})

export default function DemonstrationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{height: '100%'}}>
      <head>
        <GoogleAnalytics GA_MEASUREMENT_ID='G-FRPLFF3P4W'/>
      </head>
      <body style={{margin: 0, padding: 0, minHeight: '100%', overflow: 'hidden'}}>
        {children}
      </body>
      <GoogleTagManager gtmId='GTM-K7N66L4G'/>
    </html>
  )
}