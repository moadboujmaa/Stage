import React from 'react'
import Header from './Header'
import { useTranslation } from "react-i18next";

export default function Landing() {
  const { t } = useTranslation()
  
  return (
    <div className="h-screen bg-[url('./images/landing-bg.jpg')] bg-cover bg-center">
      <Header />
      <div className="relative flex items-center justify-center w-screen landing">
        <div className='absolute top-0 left-0 z-0 w-screen bg-gray-900 opacity-60 landing'></div>
        <div className="z-10 max-w-2xl px-4 text-center">
          <h1 className="mb-8 text-5xl font-bold text-white">
            {t('landing.title')}
          </h1>
          <p className="mb-5 text-xl text-white">
            {t('landing.text')}
          </p>
          <a href="mailto:benaslim02@hotmail.com" className="px-4 py-2 mt-8 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
            {t('landing.button')}
          </a>
        </div>
      </div>
    </div>
  )
}
