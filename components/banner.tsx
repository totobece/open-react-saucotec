'use client'

import { useState } from 'react'


export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <div>
            <div className="text-slate-500 inline-flex">
              
              
            </div>
            
          </div>
        </div>
      )}
    </>
  )
}