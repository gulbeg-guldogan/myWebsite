import { useLanguage } from "../hooks/useLanguageContext";

export default function SkillsSection() {
  
  const {langData} = useLanguage();
  const data = langData.skillsSection;

  return (
    <section>
        <div >
          <p >
            {data.title}
          </p>

          <div >
            {data.skills.map((skills) => (
              <div >
                <img
                  src={skills.icon}
                  alt={skills.name}
                />
                <p>
                  {skills.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}