import { useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import Cookies from 'js-cookie';
import { Routes, Route } from 'react-router';
import Detail from './components/detail';
import i18n from './i18n';
import Travaux from './components/Travaux';

function App() {
  const language = Cookies.get('language')
  if (!language) {
    Cookies.set('language', 'fr')
  }
  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return (
    <div className="overflow-x-hidden App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
        <Route path="travaux" element={<Travaux />} />
      </Routes>
    </div>
  )
}

export default App
