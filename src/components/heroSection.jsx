import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLanguage} from '../hooks/useLanguageContext';
import { useTheme } from "../hooks/useThemeContext";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Button } from "reactstrap";
const HeroSection = () => {
    const [state, setState] = useState(true);
    const { langData,toggleLang } = useLanguage();
    const data = langData.heroSection;
    const { theme, toggleTheme } = useTheme();

  const handleLanguageChange = () => {
    toggleLang();
  };


    return (
      <section className={`section-container ${theme}`}>

        <div className="name-container">
          <p className="name">{data.name}</p>
        </div>
        <div className="switNameBut">

        <div className="main-content">
          <div className="text-content">
            <h1 className="title">{data.title}</h1>
            <p className="description">{data.description}</p>

            <div className="social-buttons">
              <Button onClick={() => window.open(data.socials[0].link, '_blank')} className="social-button">
                <FaGithub className="icon" />
                {data.socials[0].alt_text}
              </Button>
              <Button onClick={() => window.open(data.socials[1].link, '_blank')} className="social-button">
                <FaLinkedinIn className="icon" />
                {data.socials[1].alt_text}
              </Button>
            </div>
          </div>
        </div>

        <div className="switPicMod">
          <div className="top-bar">
            <p onClick={handleLanguageChange} className="language-switcher">
              {data.lang1} <span className="language-switcher-span">{data.lang2}</span>
            </p>

            <div className="theme-toggle-container">
                <div className="switch">
                  <input
                    checked={theme === 'light'}
                    id="theme-switch"
                    type="checkbox"
                    onChange={toggleTheme}
                    className="switch-input"
                  />
                  <label htmlFor="theme-switch" className="switch-label">
                    {theme === 'dark' ? (
                      <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                      </svg>
                    ) : (
                      <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
                      </svg>
                    )}
                  </label>
                </div>
                <p className="theme-text">
                  {theme === 'dark' ? `${data.lightTheme}` : `${data.darkTheme}`}
                </p>
              </div>
          </div>

          <img className="profile-image" src={data.profileImage} alt="profilepic" />
        </div>
        </div>
        
      </section>
    );
};

export default HeroSection;
