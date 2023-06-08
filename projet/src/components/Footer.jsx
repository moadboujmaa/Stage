import React from 'react'
import i18n from '../i18n'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const language = i18n.language
  return (
    <div className="text-white bg-gray-900" id='footer'>
      <div className="max-w-7xl mx-auto py-6 grid lg:grid-cols-3  sm:grid-cols-1 ">
        <div className={`mt-5 w-full text-right flex items-center justify-start ${language=='ar' ? 'lg:order-1 text-right pr-6 mx-3 sm:order-1'  : 'order-1'}`}>
          <img src="./images/logo.jpg" className="w-[200px]" alt="logo" />
        </div>
        <div className={`px-10 flex flex-col items-start justify-start ${language=='ar' ? 'lg:order-2 text-right pr-6 sm:order-2' : 'order-2'}`}>
          <p className="mb-2 text-2xl font-semibold text-white">{t("footer.addressTitle")}</p>
          <p className="text-white">{t("footer.address")}</p>
          <p className='text-white'>{t('footer.bank')}</p>
        </div>
        <div className={`px-10 flex flex-col items-start justify-start ${language=='ar' ? 'lg:order-2 text-right pr-6 sm:order-2' : 'order-2'}`}>
          <p className="mt-5 mb-2 text-2xl font-semibold text-white">{t("footer.contactTitle")}</p>
          <p className="text-white">
            {t('footer.contact1')}<br />
            {t('footer.contact2')}<br />
            {t('footer.email')}<br />
          </p>
        </div>
      </div>
      <div className="py-4 text-center text-gray-300 bg-gray-800">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {t("footer")} 
        </p>
      </div>
    </div>
  )
}
