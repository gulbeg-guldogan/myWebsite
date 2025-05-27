import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLanguage} from '../hooks/useLanguageContext';
import { useTheme } from "../hooks/useThemeContext";
const HeroSection = () => {
    const [state, setState] = useState(true);
    const {langData, toggleLang, lang} = useLanguage();
    const {theme, toggleTheme} = useTheme();


    return (
        <>
        <div className="heroAll">
            <div className="swithes">
                {theme === "light" ? (<Form>
                        <FormGroup switch>
                            <Input
                            type="switch"
                            onClick={toggleTheme}
                            />
                            <Label >Dark Mode</Label>
                        </FormGroup>
                    </Form>) : (<Form>
                        <FormGroup switch>
                            <Input
                            type="switch"
                            onClick={toggleTheme}
                            />
                            <Label >light Mode</Label>
                        </FormGroup>
                    </Form>)}

                {lang === "en" ? (<p onClick={toggleLang}>
                    <span >Türkçe</span>'ye Geç.
                    </p>) : (<p onClick={toggleLang}>
                    Switch to <span>English</span>
                    </p>)}
            </div>

            <section className="heroSec">
                <div className="heroTop">
                    <div>
                        <h1>{langData.heroSection.greeting}</h1>
                        <h2>{langData.heroSection.title}</h2>
                        <p>{langData.heroSection.description}</p>
                        <div className="heroBut">
                            {langData.heroSection.socials.map((social, index) => (
                                <a 
                                key={index}
                                href={social.link.includes('@') ? `mailto:${social.link}` : social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    <Button key={index} social={social} > {social.alt_text} </Button>
                                </a>
                                
                            ))}
                        </div>
                    </div>
                    <div className="heroPic">
                        <img src={langData.heroSection.profileImage} alt="Profile" />
                    </div>
                </div>
            </section>

        </div>
        
        </>
    );
};

export default HeroSection;
