import { useLanguage } from "../hooks/useLanguageContext";
export default function SkillsSection() {
  
  const {langData} = useLanguage();
  const data = langData.skillsSection;

  return (
   <section className="skill-section">
    <div className="skill-container">
      <p className="skill-title">
        {data.title}
      </p>

      <div className="skill-grid">
        {data.skills.map((skills) => (
          <div className="skill-item" key={skills.name}>
            <img
              className="skill-icon"
              src={skills.icon}
              alt={skills.name}
            />
            <p className="skill-name">
              {skills.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  );
}