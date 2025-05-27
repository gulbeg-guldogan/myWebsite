import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import data from '../store/data';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [langData, setLangData] = useState(data.en)

  //const toggleLang = () => setLang((prev) => (prev === "tr" ? "en" : "tr"));
  const toggleLang = () => {
    if(lang === "tr"){
      setLang("en")
    }
    else{
      setLang("tr")
    }
  }

  useEffect(()=>{
    postData()
  }, [lang]) 

  const postData = () => {
    axios.post('https://reqres.in/api/workintech', data[lang], {
      headers: {
        "x-api-key": "reqres-free-v1"
      }
    })
    .then((res)=>{
      setLangData(res.data)
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  return (
    <LanguageContext.Provider value={{ langData ,lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);