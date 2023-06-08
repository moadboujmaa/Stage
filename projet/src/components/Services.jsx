import Cookies from 'js-cookie'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Services() {
  const { t } = useTranslation()
  const language = Cookies.get('language')

  return (
    <div className="flex justify-between py-20 bg-white" id='services' >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-20 text-4xl font-bold text-center text-blue-600">{t('service.title')}</h1>
          <div className={`grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 ${language=='ar' ? 'text-right' : ''}`}>
            <div className="transition duration-300 transform bg-white rounded-lg shadow-md">
              <div className="h-56 overflow-hidden rounded-t-lg">
                <img src="./images/service-1.jpg" alt="Travaux publics" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-blue-600">{t('service.cardTitle1')}</h2>
                <p className="mb-6 text-gray-800">
                  {t('service.cardText1')}
                </p>
                <div className={`${language=='ar' ? 'text-left' : 'text-right'}`}>
                  <Link to="/travaux" className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md" >{t('service.button')}</Link>
                </div>
              </div>
            </div>
            <div className="transition duration-300 transform bg-white rounded-lg shadow-md">
              <div className="h-56 overflow-hidden rounded-t-lg">
                <img src="./images/service-2.jpg" alt="Transport" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-blue-600">{t('service.cardTitle2')}</h2>
                <p className="mb-6 text-gray-800">
                  {t('service.cardText2')}
                </p>
                <div className={`${language=='ar' ? 'text-left' : 'text-right'}`}>
                  <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md">{t('service.button')}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
