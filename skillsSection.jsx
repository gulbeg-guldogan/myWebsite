export default function SkillsSection() {
  const { lang } = useContext(languageContext);

  const data = lang.skillSection;

  return (
    <section >
      <div>
        <p>
          {data.title}
        </p>

        <div>
          {data.skills.map((skills) => (
            <div >
              <img
                src={skills.icon}
                alt={skills.name}
              />
              <p >
                {skills.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}