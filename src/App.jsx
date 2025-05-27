import './App.css'
import SkillsSection from './components/skillsSection';
import ProjectSection from './components/projectsSection';
import HeroSection from './components/heroSection';
import ProfilSection from './components/profilSection';
import FooterSection from './components/footerSection';
import data from './store/data'
import { LanguageProvider } from './hooks/useLanguageContext';

function App() {
  const lang = "en"; // ya da "tr"
    const content = data[lang];

  return (
    <>
    <LanguageProvider>
       <HeroSection />
        <SkillsSection />
        <ProfilSection />
        <ProjectSection />
        <FooterSection />
    </LanguageProvider>
       
    </>
  )
}

export default App
