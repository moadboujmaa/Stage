// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import arTranslation from "./locales/ar.json";
import frTranslation from "./locales/fr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: arTranslation
      },
      fr: {
        translation: frTranslation
      }
    },
    fallbackLng: "fr",
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
