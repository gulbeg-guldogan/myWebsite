import { useLanguage } from "../hooks/useLanguageContext";

export default function ProjectSection() {

    const {langData} = useLanguage();
    const data = langData.projectsSection;

  return (
      <section className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">{data.title}</h1>
        {data.projects.map((projects, index) => (
          <div key={index} className="project-card">
            <img
              className="project-image"
              src={projects.image}
              alt={projects.name}
            />
            <div className="project-details">
              <h2 className="project-name">{projects.name}</h2>
              <p className="project-description">{projects.description}</p>

              <div className="tech-tags">
                {projects.usedTech.map((tech, index) => (
                  <div key={index} className="tech-tag">
                    <p>{tech}</p>
                  </div>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={projects.linkWebSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {data.viewSite}
                </a>

                <a
                  href={projects.linkGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {data.github}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}