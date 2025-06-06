import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import data from '../store/data';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // localStorage'dan dili al, yoksa "en"
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('app-language') || 'en';
  });
  const [langData, setLangData] = useState(data[lang]);

  // Dil değiştikçe localStorage ve dil verisi güncellenir
  useEffect(() => {
    localStorage.setItem('app-language', lang);
    postData();
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'tr' ? 'en' : 'tr'));
  };

  const postData = () => {
    axios.post('https://reqres.in/api/workintech', data[lang], {
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    })
    .then((res) => {
      setLangData(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <LanguageContext.Provider value={{ langData, lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
