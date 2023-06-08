import Cookies from 'js-cookie';
import React from 'react'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

export default function HeaderTwo() {
  const { t, i18n } = useTranslation();
  const language = Cookies.get('language')
  function handleLanguageChange(event) {
    i18n.changeLanguage(event.target.value);
    Cookies.set('language', event.target.value)
  }

  return (
    <header className='bg-white shadow-md'>
      <div className={`flex items-center justify-between mx-10 ${language=='ar' ? 'flex-row-reverse': ''}`}>
        <Link to='/'>
          <img src="./images/logo.jpg" alt="logo" className='w-[100px]' />
        </Link>
        <nav className={`flex font-semibold gap-7 ${language=='ar' ? 'flex-row-reverse': ''}`}>
          <select onChange={handleLanguageChange} value={Cookies.get("language")} className='p-1 text-white bg-blue-500 rounded-sm'>
            <option className='text-black bg-white selection:bg-blue-400' value="fr">
              Francais
            </option>
            <option className='text-black bg-white selection:bg-blue-400' value="ar">
              Arab
            </option>
          </select>
        </nav>
      </div>
    </header>
  )
}
