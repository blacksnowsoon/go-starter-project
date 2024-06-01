import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import TranslationAr from "./ar/ar.json";
import TranslationEn from "./en/en.json";
import { getCookie } from "src/utils/cookies";

const resources = {
  ar: {
    translation: TranslationAr
  },
  en: {
    translation: TranslationEn
  }
};
const userPreferLang = getCookie("i18next")
i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: userPreferLang,
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18next