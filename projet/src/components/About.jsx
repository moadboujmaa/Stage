import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import i18n from '../i18n';
import Cookies from 'js-cookie';


export default function About() {
  const { t } = useTranslation();
  const language = Cookies.get('language')

  return (
    <div className='py-10 bg-gray-900' id='about'>
      <div className="px-7 max-w-7xl mx-auto ">
        <h1 className='text-white title'>{t('about.title')}</h1>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 ">
          <div className={`flex flex-col items-start justify-center  ${language=='ar' ? 'order-2 text-right px-3' : 'order-1'}`}>
            <p className='text-xl text-white '>{t('about.text')}</p>
            <Link to='detail' className='p-2 mt-4 text-xl font-semibold text-white border-2 border-white rounded-md hover:bg-white hover:text-gray-900'>{t('about.button')}</Link>
          </div>
          <div className={`${language=='ar' ? 'order-1 text-right px-6' : 'order-2'} `}>
            <img src="./images/chargeuse-about.png" alt="truck" />
          </div>
        </div>
      </div>
    </div>
  )
}
